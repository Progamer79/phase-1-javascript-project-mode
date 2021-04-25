//fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
//.then(function(response) {
  //return response.json();
//})
//.then(function(json) {
  //console.log(json)
//});

function changeCard() {
  fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=2')
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log(json)
    console.log(`Your card is the ${json.cards[0].value} of ${json.cards[0].suit} `);

    let h3 = document.createElement('h3')
    h3.textContent = `Your card is the ${json.cards[0].value} of ${json.cards[0].suit}`;
    let body = document.getElementById('body');
    body.appendChild(h3);

      let img = document.createElement('img');
      img.setAttribute('src', `${json.cards[0].image}`);
      body.appendChild(img);
  });

      //Add an event listener that randomly changes cards when clicked. 
      
    
}
//fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=2')
//.then(function(response) {
  //return response.json();
//})
//.then(function(json) {
//  console.log(json)
////});


  let button = document.getElementById("try")
  button.addEventListener("click", changeCard);
   