// Sort the data by Greek search results descending
let sortedByprice = data.sort((a, b) => b.price - a.price);

// Slice the first 10 objects for plotting
slicedData = sortedByprice.slice(0, 20);

// Reverse the array to accommodate Plotly's defaults
reversedData = slicedData.reverse();

// Trace1 for the Greek Data
let trace1 = {
  x: reversedData.map(object => object.price),
  y: reversedData.map(object => object.title),
  text: reversedData.map(object => object.price),
  name: "Aldi",
  type: "bar",
  orientation: "h",
  marker: {
    color: 'red',
    opacity: 0.75
  }
};


// Data array
// `data` has already been defined, so we must choose a new name here:
let traceData = [trace1];

// Apply a title to the layout
let layout = {
  title: {
    text: 'Aldi Coffee Prices',
    font: {
      family: 'Arial, sans-serif',
      size: 24,
      color: 'rgb(0, 0, 153)'
    }
  },
  xaxis: {
    tickfont: {
      family: 'Arial, sans-serif',
      size: 18,
      color: 'rgb(0, 0, 153)'
    }
  },
  yaxis: {
    tickfont: {
      family: 'Arial, sans-serif',
      size: 18,
      color: 'rgb(0, 0, 153)'
    }
  },
  margin: {
    l: 600,
    r: 400,
    t: 50,
    b: 80
  }
};
// Render the plot to the div tag with id "plot"
// Note that we use `traceData` here, not `data`
Plotly.newPlot("plot", traceData, layout);
