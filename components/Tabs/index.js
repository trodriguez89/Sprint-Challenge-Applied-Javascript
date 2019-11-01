// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
const tabsContainer = document.querySelector(".topics")

axios.get("https://lambda-times-backend.herokuapp.com/topics")
.then(response => {
    // console.log(response)
    response.data.topics.forEach(function(obj){
        tabsContainer.appendChild(tab(obj));
    })
})
.catch(error => {
    console.log("Oops something went wrong!", error);
})

function tab(item) {
    const tabs = document.createElement("div");
    const topics = document.createElement("p");

    tabs.appendChild(topics);

    tabs.classList.add("tab")

    topics.textContent = item;

    return tabs;

}


