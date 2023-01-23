from splinter import Browser
#from bs4 import BeautifulSoup as bs
import feedparser
import pandas as pd
import numpy as np
import time
from webdriver_manager.chrome import ChromeDriverManager 


def scrape_info():
    # Set up Splinter
    executable_path = {'executable_path': ChromeDriverManager().install()} 
    browser = Browser('chrome', **executable_path, headless=False) # headless=True - the scrapping gets done in the background

    # Visit fuelwatch RSS feed
    ## CONSIDER using other urls
    url = "https://www.fuelwatch.wa.gov.au/fuelwatch/fuelWatchRSS?"
    browser.visit(url)

    # Let sleep for 1 second
    time.sleep(1)

    # Parse RSS feed with feedparser
    f = feedparser.parse(url)

    # Check keys: f.keys()
    # Check number of entries (i.e. number of stations): len(f.entries)
    # Review first entry to check what to reference: f.entries[0]
    stations = len(f.entries)


    # Use a for loop to run through all entries
    ## ADD 'trading-name' = entry.trading-name

    for entry in f.entries:
        location = entry.location
        price = entry.price
        address = entry.address
        updated = entry.updated
        latitude = entry.latitude
        longitude = entry.longitude


    # Store data in a dictionary
    station_dataTEST = {
        "Suburb": location,
        "Price": price,
        "Address": address,
        "Latitude": latitude,
        "Longitude": longitude,
        "Updated": updated,
        "StationsNO": stations 
    }


    # Close the browser after scraping
    browser.quit()

    # Return results
    return station_dataTEST
    
### current issue with scrapper - only scrapes one entry.... perhaps use a for loop to go through item index