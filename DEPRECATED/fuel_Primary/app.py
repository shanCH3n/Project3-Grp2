from flask import Flask, render_template, redirect, jsonify, request
from flask_pymongo import PyMongo
from scrape_fuelwatch import scrape_info
from pymongo import MongoClient

# Create an instance of Flask
app = Flask(__name__)

# Use PyMongo to establish Mongo connection
mongo = PyMongo(app, uri="mongodb://localhost:27017/fuel_db")

# Connect to collection within MongoDB
client = MongoClient()
db = client.fuel_db
# Name of relevant collection in 'fuel_db' is collection. Hence: 'db.collection' below
collection = db.collection

@app.route('/')
def home():

    station_data = mongo.db.collection.find()

    return render_template("index.html", fuel=station_data)


@app.route('/scrape')
def scrape():
    station_data = scrape_info()
    print(station_data) # Check if data has been scraped

    # Insert scraped data into MongoDB collection
    mongo.db.collection.insert_many(station_data)

    return redirect("/")


@app.route('/primary')
def map():

    coordinates = []
    for s in collection.find({}):
        coordinates.append({"name": s["Name"], "lat": s["Latitude"], "lng": s["Longitude"], "price": s["Price"], "address": s["Address"]})
    
    print(coordinates)

    return render_template('fuelmap.html', coordinates=coordinates)


if __name__ == "__main__":
    app.run(debug=True)