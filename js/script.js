const app = {
  showMode: "list", // Default mode set to "list"
};

// Function to switch display mode to list view
app.showAsList = function () {
  this.showMode = "list"; // Set showMode to "list"
  this.init(); // Re-initialize the app with the new mode
};

// Function to switch display mode to grid view
app.showAsGrid = function () {
  this.showMode = "grid"; // Set showMode to "grid"
  this.init(); // Re-initialize the app with the new mode
};

// Function to initialize the app
app.init = async function () {
  const disneyContainer = document.querySelector(".disney-container"); // Get the container element from the HTML

  // Check if the current mode is grid, if true, add grid-container class
  if (this.showMode == "grid") {
    disneyContainer.classList.add("grid-container");
  } else {
    // If not in grid mode, remove grid-container class
    disneyContainer.classList.remove("grid-container");
  }

  disneyContainer.innerHTML = ""; // Clear the container

  // Fetch the JSON data from a file
  var jsonFile = await fetch("./../data/disney.json");

  // Parse the JSON data
  var disneyData = await jsonFile.json();

  // Iterate over each element in the data
  disneyData.forEach((element) => {
    // Choose rendering method based on the current display mode
    if (this.showMode == "list") {
      var html = this.renderList(element); // Render as a list
    } else {
      var html = this.renderGrid(element); // Render as a grid
    }

    disneyContainer.innerHTML += html; // Append the HTML to the container
  });
};

// Function to render HTML for grid view
app.renderGrid = function (element) {
  return `
    <div class="card">
      <div class="card-img">
        <img src="${element.image}" alt="images" />
      </div>
      <div class="card-text">
        <h1 class="name">${element.name}</h1>
        <h3 class="name">${element.jobTitle}</h3>
        <div class="name">${element.description}</div>
      </div>
    </div>
  `;
};

// Function to render HTML for list view
app.renderList = function (element) {
  return `
    <div class="long-card">
      <div class="longcard-img">
        <img src="${element.image}" alt="images" />
      </div>
      <div class="longcard-text">
        <h1 class="long-name">${element.name}</h1>
      </div>
      <div class="longcard-text">
        <h1 class="long-name">${element.jobTitle}</h1>
      </div>
      <div class="longcard-text">
        <h1 class="long-name">${element.description}</h1>
      </div>
    </div>
  `;
};

app.init(); // Initialize the app
