// constants for query selector
const numberInput = document.getElementById('customNumber');
const customColorBtn = document.querySelector('.custColor');
const randomColorBtn = document.querySelector('.randColor');
const imageSelector = document.getElementById('imageSelect');
const displayedImage = document.getElementById('images');
const studentIdParagraph = document.getElementById('myStudentId');
const studentId = "200556134"; // Student Id
// function to change bg color from user input and add student id
function changeCustomColor() {
    const userInputNumber = parseInt(numberInput.value);
    studentIdParagraph.textContent = `Student ID: ${studentId}`;
    if (userInputNumber < 0 || userInputNumber > 100) {
        document.body.style.backgroundColor = 'red';
    } else if (userInputNumber >= 0 && userInputNumber < 20) {
        document.body.style.backgroundColor = 'green';
    } else if (userInputNumber >= 20 && userInputNumber < 40) {
        document.body.style.backgroundColor = 'blue';
    } else if (userInputNumber >= 40 && userInputNumber < 60) {
        document.body.style.backgroundColor = 'orange';
    } else if (userInputNumber >= 60 && userInputNumber < 80) {
        document.body.style.backgroundColor = 'purple';
    } else if (userInputNumber >= 80 && userInputNumber <= 100) {
        document.body.style.backgroundColor = 'yellow';
    }
}

// function to change bg color from random no.
function changeRandomColor() {
    const randomUserInputNumber = Math.floor(Math.random() * 100) + 1; // Generate random number between 1 and 100
    numberInput.value = randomUserInputNumber;
    changeCustomColor();
}

// function to generate options for select list
function addList() {
    // Tip: you might have to check length condition so that the list does not keep growing when clicked
    // Tip: use createElement and appendChild inside every for loop to add elements to select list from array 
    const imageArray = ["img1.jpg", "img2.jpg", "img3.jpg","img4.jpg", "img5.jpg"]; 

    // Loop through the array and create an option element for each image
    for (let i = 0; i < imageArray.length; i++) {
        const option = document.createElement('option');
        option.text = imageArray[i]; // Set the text of the option
        option.value = `${imageArray[i]}`; // Set the value of the option with image path
        imageSelector.appendChild(option); // Append the option to the select list
    }
}
// function to change image
function changeImage() {
    const selectedImageValue = imageSelector.value; // Get the selected value from the select list
    displayedImage.src = selectedImageValue; // Set the src attribute of the image
}

// event listeners for on click event of buttons and select
customColorBtn.addEventListener('click', changeCustomColor);
randomColorBtn.addEventListener('click', changeRandomColor);
imageSelector.addEventListener('change', changeImage);

// event listeners for on change event of select
addList();
