const photos = [
  {
    url: "https://plus.unsplash.com/premium_photo-1673292293042-cafd9c8a3ab3?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "nature",
  },
  {
    url: "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "nature",
  },
  {
    url: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "nature",
  },
  {
    url: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "nature",
  },
  {
    url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "city",
  },
  {
    url: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "city",
  },
  {
    url: "https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "city",
  },
  {
    url: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "city",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1669725687221-6fe12c2da6b1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "animals",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1666278379770-440439b08656?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "animals",
  },
  {
    url: "https://images.unsplash.com/photo-1441057206919-63d19fac2369?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "animals",
  },
  {
    url: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "animals",
  },
];

let gallery = document.querySelector("#gallery");
let loadMoreBtn = document.querySelector("#loadMore");
let allBtn = document.querySelector("#all");
let natureBtn = document.querySelector("#nature");
let cityBtn = document.querySelector("#city");
let animalsBtn = document.querySelector("#animals");

let photosPerPage = 6;
let pageNumber = 0;
let currentFilter = "all";

loadMoreBtn.addEventListener("click", loadMore);
allBtn.addEventListener("click", () => filterPhotos("all"));
natureBtn.addEventListener("click", () => filterPhotos("nature"));
cityBtn.addEventListener("click", () => filterPhotos("city"));
animalsBtn.addEventListener("click", () => filterPhotos("animals"));

// *******From here, i used chatgpt for help with the how to use filter and inner html.

filterPhotos("all");

// Function to filter photos based on category
function filterPhotos(type) {
  gallery.innerHTML = ""; // Clear the current gallery content
  currentFilter = type; // Set the current filter to the selected type
  pageNumber = 0; // Reset page number for a new filter
  loadMore(); // Load initial photos for the selected filter
}

// Function to load more photos
function loadMore() {
  photos
    .filter((photo) => currentFilter === "all" || photo.type === currentFilter)
    .slice(pageNumber * photosPerPage, (pageNumber + 1) * photosPerPage)
    .forEach((photo) => {
      const imgElement = new Image();
      imgElement.src = photo.url;
      gallery.appendChild(imgElement);
    });
  pageNumber++; // Move to the next set of photos for the next load
}
