// lab09.js

function getimg(){

    let url =
    "https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=ca370d51a054836007519a00ff4ce59e&per_page=6&format=json&jsoncallback=show";

    let oldScript = document.getElementById("jsonp");

    if(oldScript){
        oldScript.remove();
    }

    let script = document.createElement("script");
    script.src = url;
    script.id = "jsonp";

    document.body.appendChild(script);
}

function show(data){

    let photos = data.photos.photo;
    let html = "";

    for(let i=0;i<photos.length;i++){

        let p = photos[i];

        let img =
        `https://live.staticflickr.com/${p.server}/${p.id}_${p.secret}_z.jpg`;

        html += `<img src="${img}">`;
    }

    document.getElementById("gallery").innerHTML = html;
}