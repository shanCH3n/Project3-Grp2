from splinter import Browser
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
    url = "https://www.fuelwatch.wa.gov.au/fuelwatch/fuelWatchRSS?"
    browser.visit(url)

    # Let sleep for 1 second
    time.sleep(1)

    # Parse RSS feed with feedparser
    f = feedparser.parse(url)

    # Check keys: f.keys()
    # Check number of entries (i.e. number of stations): len(f.entries)
    # Review first entry to check what properties to reference: f.entries[0]
    count = len(f.entries)

    ## Working code for extraction
    stationlist = []
    for station in f.entries:
        station_dict = {'Name': station['trading-name'], 'Price': station['price'], 'Address': station['address'], 
        'Latitude': station['latitude'], 'Longitude': station['longitude'], 'Updated': station['updated'], 'StationsNO': count}
        stationlist.append(station_dict)

    # Close the browser after scraping
    browser.quit()

    # Return results
    return stationlist
    