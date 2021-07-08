//API VARIABLES
const baseURL = 'https://api.giphy.com/v1/gifs/search';
const key = 'p3Bn9EIRthGPPnLtFzUusdSEJGLnaMq0';

//SEARCH FORM
const searchTerm = document.querySelector('.search');
const searchForm = document.querySelector('form');


//BUTTON TRIGGER
searchForm.addEventListener('submit', fetchResults);


// fetch(`${baseURL}?api_key=${key}&tag=Nintendo`)
//     .then(response => response.json())
//     .then(json => displayImage(json));



function fetchResults(e){
    e.preventDefault();
   
    fetch(`${baseURL}?api_key=${key}&q=${searchTerm.value}&limit=8`)
    .then(response => response.json())
    .then(json => displayImage(json));
   

    function displayImage(gif){
        let gifLibrary = document.querySelector('.gif-query');
        
        while (gifLibrary.firstChild) {
            gifLibrary.removeChild(gifLibrary.firstChild);    
        }        
        for(i = 0; i < 9; i++){
        console.log(gif.data[i].images.downsized_large.url);
        let searchedGif = document.createElement('img');
        searchedGif.className += "searched-gif";
        searchedGif.src = gif.data[i].images.downsized_large.url;
        gifLibrary.appendChild(searchedGif);
        }
        if(searchedGif == ""){
            alert('test');
        }
    }
}

function showResults() {
    var theResults = document.getElementById("results");
    theResults.style.display = "block";  // <-- Set it to block
}