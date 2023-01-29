# Project3-Grp2
# Our project focus: Cambatting Inflation
<p align="center">
  <img width="800" height="400" src="images/img1.png">
</p>

Please visit the link to see our
[Dashboard](https://shanCH3n.github.io/Project3-Grp2/dashboard.html)

### Aim
The aim of this project is to tell a story by creating an interactive dashboard that examines consumer price index (CPI) inflation rate among various categories. We will develop visualisations to aid users in making an informed choice of the best priced location of their chosen consumerable.

### Motivation
Australia experienced record levels of inflation in 2022 in comparison to previous years as a result of the effects from the COVID-19 pandemic.
The Reserve bank of Australia's inflation target is to keep annual consumer price inflation between 2 and 3 per cent, on average,
over time. Although the federal government and Reserve Bank forecasted that inflation would peak at 7.75% in the December quarter of 2022. 

### The Process 
#### Obtaining and exploring the data:
The data was obtained from various websites (links provided below) and a leaflet map generated by retrieving coordinates from a Mongodb database through connecting a flask app with Mongo. Here are some samples of the MongoDB collection and a snippet of the leaflet map.

<p float="left">
  <img width="460" height="300" src="images/sampleStatMap.png">
  <img width="460" height="300"src="images/sampleMongoDB.png">
</p>

#### Organising our data and creating html
An HTML was developed as a shell for our dashboard and it was structured to display graphs and maps that pertained to each category as follows:
- Australian Buereau of Statistics - CPI trends
- FuelWatch WA - where to source best petrol prices
- Supermarket comparisons - Coles vs ALDI
- Food and Transport

Multiple different maps and ploty graphs were created, which were then extracted in HTML format and loaded into the HTML dashboard shell as they were being created. Throughout the project, we managed to get an idea of how we wanted the dashboard to look and restuctured the layout to suit our objectives.

### The end result
# Insert pcture of final dashboard
Real Overview of Budget and Alternatives (ROBA) Dashboard
<p align = "center">
<img width="800" alt="Consumer Price Wars" src="https://user-images.githubusercontent.com/112173540/215260800-f07e9dd6-2cda-4226-b21a-08ca934c9ca5.png">
</p>
<p align = "center">
Figure 1 - Figure showing the webpage when opening the browser.
</p>

### Resources
- Data Sources: [FuelWatch WA](https://fuelprice.io/api/), [Australian Bureau of Statistics](https://explore.data.abs.gov.au/), [Coles](https://www.coles.com.au/)
- HTML code: <a href="https://github.com/shanCH3n/Project3-Grp2/blob/main/dashboard.html" target="_blank">dashboard.html</a>
- Software: Visual Studio Code
- Python
    - Flask
    - Beautiful Soup
- HTML, CSS, JavaScript
    - Plotly
    - Leaflet
- NoSQL: mongoDB
    - mongosh
    - mongoCompass
- GitHub
    - Github Pages
- Google
    - Google Docs
    - Google Slides
