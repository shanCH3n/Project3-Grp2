# Create a map with leaflet.js through a Flask app by retrieving coordinates from a MongoDB collection:

from flask import Flask, render_template
from pymongo import MongoClient

app = Flask(__name__)

@app.route('/')
def index():
    return 'Sandbox Build'

@app.route('/map')
def map():
    # Connect to MongoDB
    client = MongoClient()
    # Name of database is 'fuel_test'.
    db = client.fuel_test
    # Name of collection in 'fuel_test' db is 'collection.
    collection = db.collection

    # Retrieve coordinates from collection named 'collection'. Match keys in collection.
    coordinates = []
    for station in collection.find({}):
        coordinates.append({"name": station["Name"], "lat": station["Latitude"], "lng": station["Longitude"], "price": station["Price"]})
 
    print(coordinates) # Check if extraction of coordinates successful

    return render_template('map.html', coordinates=coordinates)

if __name__ == "__main__":
    app.run(debug=True)
