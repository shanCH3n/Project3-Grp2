from flask import Flask, render_template, redirect, jsonify
from flask_pymongo import PyMongo
from scrape_fuel import scrape_fuel_overall
from pymongo import MongoClient
from flask_cors import CORS, cross_origin
from datetime import datetime as dt

# Create an instance of Flask
app = Flask(__name__)

CORS(app, resources={
    r"/*": {
        "origins": "*"
    }
})
app.config['CORS_HEADERS'] = 'Content-Type'
app.config['CORS_ORIGINS'] = "*"

# Use PyMongo to establish Mongo connection
app.config["MONGO_URI"] = "mongodb://localhost:27017/fuelWatch_db"
mongo = PyMongo(app)

# Connect to collection within MongoDB
client = MongoClient()
db = client.fuelWatch_db

## Initial Build Instructions
# Name of relevant collection in 'fuel_db' is fuel31Jan. Hence: 'db.fuel31Jan' below
# collection = db.fuel31Jan
# Expanded further by writing code to auto-label collection with the date of scrape

@app.route('/')
@cross_origin()
def index():

    return render_template("index.html")


# This route scrapes the data from the Fuel Watch WA RSS feed and stores it into a MongoDB collection 'fuelMain'.
@app.route('/scrapefuel')
@cross_origin()
def scrape():
    station_data = scrape_fuel_overall()
    print(station_data) # Check if data has been scraped

    # Get the current date to label the collection. DELETE the two lines below if reverting to initial build.
    today = dt.strftime(dt.now(),"fuel%d%b%Y")
    collection = db[today]

    # Insert scraped data into MongoDB collection
    ## Initial build: mongo.db.fuel31Jan.insert_many(station_data)
    collection.insert_many(station_data)

    return redirect("/")


# This route does not get displayed on landing page html but DO NOT delete as it is linked to the route for the fuel map.
@app.route('/details')
@cross_origin()
def details():
    details = []
    today = dt.strftime(dt.now(),"fuel%d%b%Y")
    collection = db[today]
    for doc in collection.find({}):
        details.append({"name": doc["Name"], "lat": doc["Latitude"], "lng": doc["Longitude"], "price": doc["Price"], "address": doc["Address"]})
    return jsonify(details)


# This route generates the fuel map.
@app.route('/mapfuel')
@cross_origin()
def map ():
    return render_template("mapfuel.html")

# This route generates our overall dashboard.
@app.route('/dashboard')
@cross_origin()
def dashboard():
    return render_template("dashboard.html")


if __name__ == "__main__":
    app.run(debug=True)