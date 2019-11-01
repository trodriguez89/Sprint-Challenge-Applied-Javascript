// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
{/* <div class="card">
  <div class="headline">{Headline of article}</div>
  <div class="author">
    <div class="img-container">
      <img src={url of authors image} />
    </div>
    <span>By {authors name}</span>
  </div>
</div> */}
//
// Create a card for each of the articles and add the card to the DOM.
const cardsContainer = document.querySelector(".cards-container");

axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then(response => {
    console.log(response);
        for(let key in response.data.articles){
            response.data.articles[key].forEach(function(item){
                cardsContainer.appendChild(cards(item))
            })
        }
    })
.catch(error => {
    console.log("Oops something went wrong!", error);
})


function cards(obj){
    //create elements
    const cardDiv = document.createElement("div");
    const headlineDiv = document.createElement("div");
    const headlineH1 = document.createElement("h1");
    const authorDiv = document.createElement("div");
    const imgDiv = document.createElement("div");
    const newImg = document.createElement("img");
    const span = document.createElement("span");

    //structure elements
    cardDiv.appendChild(headlineDiv);
    headlineDiv.appendChild(authorDiv);
    headlineDiv.appendChild(headlineH1);
    authorDiv.appendChild(imgDiv);
    imgDiv.appendChild(newImg);
    authorDiv.appendChild(span);

    //create classes
    cardDiv.classList.add("card");
    headlineDiv.classList.add("headline");
    authorDiv.classList.add("author");
    imgDiv.classList.add("img-container");

    //set content
    headlineH1.textContent = obj.headline;
    newImg.src = obj.authorPhoto;
    span.textContent = `By ${obj.authorName}`;

    return cardDiv;

}







