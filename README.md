# Project3-Grp2
# Our project focus: Combatting Inflation
<p align="center">
  <img width="800" height="400" src="images/img1.png">
</p>

Please visit the link to see our
[Dashboard](https://shanCH3n.github.io/Project3-Grp2/dashboard.html)

### Aim
The aim of this project is to tell a story by creating an interactive dashboard that examines consumer price index (CPI) inflation rate among various categories. We developed a series fo visualisations to aid users in making an informed choice of the best priced location of their chosen consumerable.

### Motivation
Australia experienced record levels of inflation in 2022 in comparison to previous years as a result of the effects from the COVID-19 pandemic.
The Reserve bank of Australia's inflation target is to keep annual consumer price inflation between 2 and 3 per cent, on average,
over time. Although the federal government and Reserve Bank forecasted that inflation would peak at 7.75% in the December quarter of 2022. 
<img width="983" alt="mappng" src="https://user-images.githubusercontent.com/113024685/215424360-10301e75-c2c0-40d5-b7fa-89afac754c9c.png">
<img width="983" alt="mappng" src="https://user-images.githubusercontent.com/113024685/215424459-cc807771-a8b9-439b-9208-d0c894d18e3f.png">

### The Process 
#### Extracting, transforming and loading:
The data was scraped from various Western Australian websites (links provided below). Leaflet maps were then generated by retrieving coordinates from a Mongodb database through connecting a flask app with Mongo and utilising jQuery to pass it into Javascript. Here are some samples of the MongoDB collection and a snippet of our leaflet map for petrol stations.

<p float="left">
  <img width="300" height="200" src="images/sampleStatMap.png">
  <img width="300" height="200" src="images/sampleStatMap2.png">
  <img width="300" height="200"src="images/sampleMongoDB.png">
</p>
<img width="983" alt="mappng" src="https://user-images.githubusercontent.com/113024685/215424320-7fea50ba-dacd-4e64-9642-153cc5dea285.png">

#### Organising our data and creating html
A HTML was developed as a shell for our dashboard and it was structured to display our graphs and maps. These were grouped into the following categories:
- Australian Buereau of Statistics - CPI trends
- FuelWatch WA - where to source best petrol prices
- Supermarket comparisons - Coles vs ALDI

Multiple leaflet maps and bar charts (with plotly) were created. These visualisations were then extracted in HTML format and loaded into the HTML dashboard shell as they were being created. Throughout the project, we often reviewed how we wanted the dashboard to look and restuctured the layout to suit our objectives.

### The end result

#### Flask App Landing Page
<p align = "center">
<img width="800" alt="Landing Page Preview" src="images/appLandingPG.png">
</p>
<p align = "center">

#### Our final dashboard
<p float="left">
  <img width="300" height="200" src="images/Dashboard1.png">
  <img width="300" height="200" src="images/Dashboard2.png">
  <img width="300" height="200"src="images/Dashboard3.png">
</p>
<p align = "center">
Real Overview of Budget and Alternatives (ROBA) Dashboard.
</p>

### Resources
- Data Sources: [FuelWatch WA](https://fuelprice.io/api/), [Australian Bureau of Statistics](https://explore.data.abs.gov.au/), [Coles](https://www.coles.com.au/)
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
