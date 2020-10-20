'use strict';

function watchForm() {
    $('.js-dog-form').submit(event => {
        event.preventDefault();
        //this make the image section visible        
        getDogImage()
    });
};

function getDogImage() { 
  const dogNum = $('.user-number').val();
  console.log(dogNum);
  const url = `https://dog.ceo/api/breeds/image/random/${dogNum}`;
  console.log(url);
    fetch(url)
      .then(response => response.json())
      .then(responseJson => 
        displayResults(responseJson))
      .catch(error => alert('Something went wrong. Try again later.'));
}

/*function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`
  );
  //display the results section
  $('.results').removeClass('hidden');
}*/

function displayResults(responseJson) {
    console.log(responseJson);
    for (let i = 0; i < responseJson.message.length; i++) {
        console.log(responseJson.message[i]);
        $('#result').append(`<li><img src="${responseJson.message[i]}" alt="picture of dog"/></li>`);
        /* $('.results-img').replaceWith(
            `<img src="${responseJson.message[i]}" class="results-img">`*/
    };
    $('#hidden-section').removeClass('hidden');
   
};


$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});