from splinter import Browser
from bs4 import BeautifulSoup as bs
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

    # Scrape page into Soup
    # Create a Beautiful Soup object, pass in our XML, and call the XML parser.
    ## KIV try for XML
    xml = browser.xml
    soup = bs(xml, 'xml')

    # Locate where the data for each station is stored
    # stored within div id=folders 3 to 416
## Metadata: <item>
# <title>153.9: Shell High Wycombe</title>
# <description>Address: 1100 Abernethy Rd, HIGH WYCOMBE, Phone: (08) 6500 3227, Site features: ATM Air Bottled AdBlue Bottled Gas EFTPOS Fuel Cards Ice Pumped AdBlue Toilets Trailer Hire Truck Friendly Water, Open 24 hours</description>
# <brand>Shell</brand>
# <date>2023-01-21</date>
# <price>153.9</price>
# <trading-name>Shell High Wycombe</trading-name>
# <location>HIGH WYCOMBE</location>
# <address>1100 Abernethy Rd</address>
# <phone>(08) 6500 3227</phone>
# <latitude>-31.938206</latitude>
# <longitude>115.992146</longitude>
# <site-features> ATM Air Bottled AdBlue Bottled Gas EFTPOS Fuel Cards Ice Pumped AdBlue Toilets Trailer Hire Truck Friendly Water, Open 24 hours</site-features>
# </item>

    # Use a for loop to run through all folders?
    ## define a function
    # Test scrape with first station on website
    station1 = soup.find('div', id ='folder3')

    # https://beautiful-soup-4.readthedocs.io/en/latest/#find-all
    # contents = station1.find_all("div", class_="opened")

    ## define a function to look within div "opened"


    # Get the price 
    ## First layer - ('div', class_='opened')
    ## Second layer - ('div', class_='line')[4] - Price contained within 'span' of 5th div "line"
    ### Chaining within soup.find

    ## example: soup.find("a", class_="title").get_text()
    price = station1.find_all('span').text


    # Get the name of stations - display only text // TBC
    ## First layer - ('div', class='opened')
    ## Second layer - ('div', class='line')[5]

    ### Chaining within soup.find????
    name = station1.find_all('span').text


    # Store data in a dictionary

    ## station_data = {
        # "trading-name": sloth_img,
        # "price": price,
        # "address": max_temp,
        # "latitude": ,
        # "longitude": 
    #}

    station_dataTEST = {
        "name": name,
        "price": price
    }

    # Close the browser after scraping
    browser.quit()

    # Return results
    return station_dataTEST
