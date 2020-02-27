// Load NY Plate Data -----------------------
d3.csv("./plate-data/rejected-ny-plates.csv").then(function(data) {
  // data.forEach(function(d) {});
  console.log(data);
  handleNYData(data);
});

// Load CA Plate Data ------------------
d3.csv("./plate-data/rejected-ca-plates.csv").then(function(data) {
  // data.forEach(function(d) {});
  console.log(data);
  handleCAData(data);
});

// Handle Data ---------------------
function handleNYData(csv) {
  const fields = csv.map(plates => plates.fields);
  console.log(csv);

  // Get random plate
  var button = document.getElementById("ny-plate-button");

  let plateNumber = csv[0].plate;
  document.getElementById("ny-plate-number").innerHTML = plateNumber;
  console.log(plateNumber);

  button.addEventListener("click", function() {
    plateNumber = csv[Math.floor(Math.random() * csv.length)];
    document.getElementById("ny-plate-number").innerHTML = plateNumber.plate;
  });
}

// Handle Data ---------------------

function handleCAData(csv) {
  // const fields = csv.map(plates => plates.fields);
  // console.log(csv);

  // Get random plate
  var button = document.getElementById("ca-plate-button");

  let plateNumber = csv[0].plate;
  document.getElementById("ca-plate-number").innerHTML = plateNumber;
  console.log(plateNumber);

  button.addEventListener("click", function(e) {
    getNextPlate(csv);
  });
} // --------------------------------------

function getNextPlate(csv) {
  // plate
  // review_reason_code
  // customer_meaning
  // reviewer_comments
  // status

  plateNumber = csv[Math.floor(Math.random() * csv.length)];
  document.getElementById("ca-plate-number").innerHTML = plateNumber.plate;

  // Applicant Explanation
  document.getElementById("applicant-explanation").innerHTML =
    plateNumber.customer_meaning;

  // DMV Comments
  document.getElementById("dmv-comments").innerHTML =
    plateNumber.reviewer_comments;

  // Verdict
  document.getElementById("verdict").innerHTML = plateNumber.status;
}

// Plate Div -------------------------
// d3.select("#plate-div").on("click", function() {
//   console.log("tiny plate");
//   d3.select("#plate-number").html(plateNumber);
// });
