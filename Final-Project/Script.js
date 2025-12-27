
var form = document.querySelector("form")
var search_bar = document.getElementsByName("search")[0]
var search_btn = document.getElementsByName("submit_search")[0]


form.addEventListener("submit", function (e) {
    e.preventDefault();
    if(search_bar.value != ""){
        let search_bar_value = search_bar.value.trim().toLowerCase()
        fetch("Database.json")
            .then(response => response.json())
            .then(
                data => {PopUp(data, search_bar_value);}
            )
            .catch(error => console.error(error))
    }
    else{}
});

function PopUp(data, search_bar_value) {
    const popup = document.createElement("div")
    popup.className = "popupbox"
    

    for (let i=0; i <= (data[search_bar_value].length)-1; i++) {
        const country = data[search_bar_value][i].country
        const place = data[search_bar_value][i].place
        const picture = data[search_bar_value][i].picture
        const details = data[search_bar_value][i].details
        console.log(country, place)

        const title = document.createElement("h2")
        const img = document.createElement("img")
        const description = document.createElement("p")

        title.textContent = place + ", " + country
        img.src = picture
        description.textContent = details

        popup.append(title, img, description)
        
    }
    document.body.appendChild(popup)
    
}
