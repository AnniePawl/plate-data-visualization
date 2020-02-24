// Load Data -----------------------
d3.csv("./plate-data/rejected-plates.csv").then(function(data) {
  data.forEach(function(d) {});
  console.log(data);
  handleData(data);
});

// Handle Data ---------------------
function handleData(csv) {
  const fields = csv.map(plates => plates.fields);
  console.log(csv);

  // Get random plate
  var button = document.getElementById("plate-button");

  let plateNumber = csv[0].plate;
  document.getElementById("plate-number").innerHTML = plateNumber;
  console.log(plateNumber);

  button.addEventListener("click", function() {
    plateNumber = csv[Math.floor(Math.random() * csv.length)];
    document.getElementById("plate-number").innerHTML = plateNumber.plate;
  });

  // Plate Div -------------------------
  d3.select("#plate-div")
    // .style("background-color", "pink")
    // .style("border-radius", "1em")
    // .style("border", "4px solid")
    // .style("height", "100px")
    // .style("width", "500px")
    .style("display", "flex")
    .style("align-items", "center")
    .on("click", function() {
      console.log("tiny plate");
      d3.select("#plate-number").html(plateNumber);
    });
}
