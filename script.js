function SearchPhotos() {
    let clientId = "CzUoBDs9NrMm3CMUtHuF1H5VevJhr9OnvUhYIcGjGgw";
    let query = document.getElementById("search").value;
    let url = "https://api.unsplash.com/search/photos/?client_id=" + clientId + "&query=" + query;
     
    fetch(url)
    .then(function(data){
        return data.json();
    })
        .then(function (data){
            console.log(data);

            data.results.forEach(photos => {
           
                let result = `
                <img src= "${photos.urls.regular}">
                <a href="${photos.links.download}"/>
                `;
                $("#result").append(result);
            })
        });
}