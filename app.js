//API VARIABLES
const baseURL = 'https://api.giphy.com/v1/gifs/search';
const key = 'p3Bn9EIRthGPPnLtFzUusdSEJGLnaMq0';

//SEARCH FORM
const searchTerm = document.querySelector('.search');
const searchForm = document.querySelector('form');


//BUTTON TRIGGER
searchForm.addEventListener('submit', fetchResults);

//NAVIGATION
let nav = document.getElementById("navigation");
let body = document.getElementById("body");


// fetch(`${baseURL}?api_key=${key}&tag=Nintendo`)
//     .then(response => response.json())
//     .then(json => displayImage(json));

nav.style.display = "none";

function fetchResults(e){
    e.preventDefault();
   
    fetch(`${baseURL}?api_key=${key}&q=${searchTerm.value}`)
    .then(response => response.json())
    .then(json => displayImage(json));
   

    function displayImage(gif){
        let gifLibrary = document.querySelector('.gif-query');
        console.log(gif);
        while (gifLibrary.firstChild) {
            gifLibrary.removeChild(gifLibrary.firstChild);    
        }        
        for(i = (pageNumber * 8); i < (pageNumber * 8 + 8); i++){
        let searchedGif = document.createElement('img');
        searchedGif.className += "searched-gif";
        searchedGif.src = gif.data[i].images.downsized_large.url;
        gifLibrary.appendChild(searchedGif);
        }
    }
}

function showResults() {
    let theResults = document.getElementById("results");
    theResults.style.display = "block";  // <-- Set it to block
    nav.style.display = "flex";
    nav.classList.add("mobile");
    body.classList.add("show-top");
}


//Pagination

let nextButton = document.querySelector('.next');
nextButton.addEventListener('click', fetchNextPage);

let prevButton = document.querySelector('.prev');
prevButton.addEventListener('click', fetchPreviousPage);

let pageNumber = 0;

function fetchNextPage(e){
    pageNumber++;
    fetchResults(e);
    console.log('Page Number:', pageNumber);
}

function fetchPreviousPage(e){
    if(pageNumber > 0){
        pageNumber--;
    } else {
        return;
    }
    fetchResults(e);
    console.log('Page:', pageNumber);
}