// Define the array of images and their corresponding IDs
const images = [
  { id: 1, src: "image1.jpg" },
  { id: 2, src: "image2.jpg" },
  { id: 3, src: "image3.jpg" },
  // ...
];

// Define a variable to keep track of the last clicked button and image
let lastClickedButtonId = null;
let lastClickedImageId = null;

// Add the images to the page
for (const image of images) {
  const imgElement = document.createElement("img");
  imgElement.src = image.src;
  imgElement.id = `image-${image.id}`;
  document.body.appendChild(imgElement);

  // Add a button for each image
  const buttonElement = document.createElement("button");
  buttonElement.id = `button-${image.id}`;
  buttonElement.innerText = `Button ${image.id}`;
  document.body.appendChild(buttonElement);
}

// Add event listeners to the images and buttons
const imagesA = document.querySelectorAll("img");
const buttons = document.querySelectorAll("button");

imagesA.forEach(img => {
  img.addEventListener("click", event => {
    // Keep track of the last clicked image
    lastClickedImageId = event.target.id.split("-")[1];

    // If a button has been clicked previously, check if the IDs match
    if (lastClickedButtonId !== null) {
      if (lastClickedImageId === lastClickedButtonId) {
        // Remove the image and corresponding button from the page
        const imgElement = document.getElementById(event.target.id);
        imgElement.parentNode.removeChild(imgElement);
        const buttonElement = document.getElementById(`button-${lastClickedButtonId}`);
        buttonElement.parentNode.removeChild(buttonElement);
      }
    }
  });
});

buttons.forEach(button => {
  button.addEventListener("click", event => {
    // Keep track of the last clicked button
    lastClickedButtonId = event.target.id.split("-")[1];

    // If an image has been clicked previously, check if the IDs match
    if (lastClickedImageId !== null) {
      if (lastClickedImageId === lastClickedButtonId) {
        // Remove the image and corresponding button from the page
        const imgElement = document.getElementById(`image-${lastClickedImageId}`);
        imgElement.parentNode.removeChild(imgElement);
        const buttonElement = document.getElementById(event.target.id);
        buttonElement.parentNode.removeChild(buttonElement);
      }
    }
  });
});
