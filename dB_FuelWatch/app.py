from flask import Flask, render_template, redirect
from flask_pymongo import PyMongo
from scrape_fuelwatch import scrape_info

# Create an instance of Flask
app = Flask(__name__)

# Use PyMongo to establish Mongo connection
mongo = PyMongo(app, uri="mongodb://localhost:27017/fuel_test")


# Route to render index.html template using data from Mongo
@app.route("/")
def home():

    
    ## Initial working code: Find one record of data from the mongo database
    ## station_dataTEST = mongo.db.collection.find_one()
    station_dict = mongo.db.collection.find()

    # Return template and data
    return render_template("index.html", fuel=station_dict)


# Route that will trigger the scrape function
@app.route("/scrape")
def scrape():

    # Run the scrape function
    station_dict = scrape_info()
    print(station_dict)
    # Update the Mongo database using update and upsert=True
    # upsert: IF =True - update matched documents or insert new documents in collection if none matching the query exists.

    ## Initial working code: Only updates one document
    ## mongo.db.collection.update_one({}, {"$set": station_dataTEST}, upsert=True)

    ### Update fuel_app db's 'collection' of station data
    ### Update all fields for all documents
    
    mongo.db.collection.insert_many(station_dict)

    # trial = mongo.db.collection.find()
    

    # for item in trial:
    #     print(item)


    # Redirect back to home page
    return redirect("/")


if __name__ == "__main__":
    app.run(debug=True)
