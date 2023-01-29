from flask import Flask, render_template, redirect, jsonify
from flask_pymongo import PyMongo
from scrape_fuel import scrape_fuel_overall
from pymongo import MongoClient
from flask_cors import CORS, cross_origin

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
# Name of relevant collection in 'fuel_db' is fuel29. Hence: 'db.fuel29' below
collection = db.fuel29

@app.route('/')
@cross_origin()
def index():

    station_data = mongo.db.fuel29.find()

    return render_template("index.html", fuel=station_data)


@app.route('/scrape')
@cross_origin()
def scrape():
    station_data = scrape_fuel_overall()
    print(station_data) # Check if data has been scraped

    # Insert scraped data into MongoDB collection
    mongo.db.fuel29.insert_many(station_data)

    return redirect("/")


@app.route('/details')
@cross_origin()
def details():
    details = []
    for doc in collection.find({}):
        details.append({"name": doc["Name"], "lat": doc["Latitude"], "lng": doc["Longitude"], "price": doc["Price"], "address": doc["Address"]})
    return jsonify(details)


@app.route('/mapfuel')
@cross_origin()
def map ():
    return render_template("mapfuel.html")


if __name__ == "__main__":
    app.run(debug=True)