# Project3-Grp2
# Our project focus: Combatting Inflation
<p align="center">
  <img width="800" height="400" src="images/img1.png">
</p>



Please visit the link to see our
[Dashboard](https://shanCH3n.github.io/Project3-Grp2/dashboard.html)

### Aim
The aim of this project is to tell a story by creating an interactive dashboard that examines consumer price index (CPI) inflation rate among various categories. We developed a series of visualisations to aid users in making an informed choice of the best priced location of their chosen consumerable.

### Motivation
Australia experienced record levels of inflation in 2022 in comparison to previous years as a result of the effects from the COVID-19 pandemic.
The Reserve bank of Australia's inflation target is to keep annual consumer price inflation between 2 and 3 per cent, on average,
over time. Although the federal government and Reserve Bank forecasted that inflation would peak at 7.75% in the December quarter of 2022. 



### The Process 
#### Extracting, transforming and loading:
The data was scraped from various Western Australian websites (links provided below) and Google Maps API (for supermarket locations). Leaflet maps were then generated by retrieving coordinates from a Mongodb database through a connection with flask and the pyMongo package. Where required, the information from the MongoDB documents were converted into json and geojson formats. The jQuery javascript library was also used to pass these into Javascript. Here are some samples of a MongoDB collection and snippets of our maps.

<p float="left" align="center">
  <img width="320" height="250" src="images/fuelDayFINAL.png">
  <img width="320" height="250" src="images/fuelHighPrice.png">
  <img width="320" height="250" src="images/sampleMongoDB.png">
</p>
#### SUPERMarket maps and charts detail:
In order to create a map that displays average prices from different categories of Aldi and Coles, we utilized JavaScript and the leaflet library. The map has two divisions, with the average prices displayed on the left side and markers representing the points on the right. When a person clicks on an average price from the left side,  where a individuak click on popup, a marker popup is displayed with the average price. This allows us to explain our idea further through a bar graph, showing how we can purchase products at average prices instead of expensive ones. The code for this barcharts is available on our GitHub repository with name of the folder aldi bar cart and coles bar chart, providing a clear and concise demonstration of how to overcome inflation by making informed purchasing decisions.ome snipprts of map and bar chart mentioned below.
<p float="left" align="center">
<img width="320"height="250" alt="mappng" src="https://user-images.githubusercontent.com/113024685/215424360-10301e75-c2c0-40d5-b7fa-89afac754c9c.png">
![coles barchart]<img width="320" height="250"alt="Coles chart"(https://user-images.githubusercontent.com/113024685/216489242-54e1b4e4-ca14-43e2-ac02-49177344aba4.png)>
<img width="320" height="250"alt="aldi chart" src="https://user-images.githubusercontent.com/113024685/216489364-7305c249-9471-4588-8850-13da9896c4e6.png">
#### Organising our data and creating html
A HTML was developed as a shell for our dashboard and it was structured to display our graphs and maps. These were grouped into the following categories:
- Australian Buereau of Statistics - CPI trends
- FuelWatch WA - where to source best petrol prices
- Supermarket comparisons - Coles vs ALDI
</p>
Multiple leaflet maps and bar charts (with plotly) were created. These visualisations were then extracted in HTML format and loaded into the HTML dashboard shell as they were being created. Throughout the project, we often reviewed how we wanted the dashboard to look and restuctured the layout to suit our objectives.

### The end result

#### Flask App Landing Page
<p align = "center">
<img width="800" alt="Landing Page Preview" src="images/appLandingPG.png">
</p>
<p align = "center">

#### Our final dashboard
<p float="left" align="center">
  <img width="250" height="200" src="images/Dashboard1.png">
  <img width="250" height="200" src="images/Dashboard2.png">
  <img width="250" height="200"src="images/Dashboard3.png">
</p>
<p align = "center">
Real Overview of Budget and Alternatives (ROBA) Dashboard.
</p>

### Resources
- Data Sources: [FuelWatch WA RSS Feed](https://www.fuelwatch.wa.gov.au/fuelwatch/fuelWatchRSS?), [Australian Bureau of Statistics](https://explore.data.abs.gov.au/), [Coles](https://www.coles.com.au/), [Aldi](https://www.aldi.com.au/)
- HTML code: <a href="https://github.com/shanCH3n/Project3-Grp2/blob/main/dashboard.html" target="_blank">dashboard.html</a>
- Software: Visual Studio Code
- Python
    - Flask
    - Beautiful Soup
    - Feedparser (to read RSS Feeds)
    - PyMongo
- HTML, CSS
- JavaScript Libraries
    - Plotly
    - Leaflet
    - jQuery (not covered in course)
- NoSQL: mongoDB
    - mongosh
    - mongoCompass
- GitHub
    - Github Pages
- Google
    - Google Docs
    - Google Slides
