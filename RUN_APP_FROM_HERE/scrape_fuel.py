from splinter import Browser
import feedparser
import time
from webdriver_manager.chrome import ChromeDriverManager


def scrape_fuel_overall():
    # Set up Splinter
    executable_path = {'executable_path': ChromeDriverManager().install()} 
    browser = Browser('chrome', **executable_path, headless=False) 

    # Visit fuelwatch RSS feed
    url = "https://www.fuelwatch.wa.gov.au/fuelwatch/fuelWatchRSS?"
    browser.visit(url)

    # Let sleep for 1 second
    time.sleep(1)

    # Parse RSS feed with feedparser
    f = feedparser.parse(url)

    count = len(f.entries)

    ## Working code for extraction
    stationlist = []
    for s in f.entries:
        station_dict = {'Name': s['trading-name'], 'Price': s['price'], 'Address': s['address'], 
        'Latitude': s['latitude'], 'Longitude': s['longitude'], 'Surburb': s['location'], 'Updated': s['updated'], 'StationsNO': count}
        stationlist.append(station_dict)

    # Close the browser after scraping
    browser.quit()

    # Return results
    return stationlist
    