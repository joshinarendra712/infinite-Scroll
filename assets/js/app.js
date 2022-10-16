let cl = console.log;

const count = 10;
// const apiKey = 'xloMzbEgalV5ABNMRl1jtD340RkBCHrYcS2PzlzEfiw';
const apiKey = 'jiU6ES3wGi-HE45Q5OZi1aGQw_5PlpUEpHIP0aAD4Ow';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// const  imagecontainer = document.getElementById("imagecontainer")

window.addEventListener('scroll',()=>{
    // cl('scrolltop',document.documentElement.scrollTop)
    // cl('clientheight',document.documentElement.clientHeight)
    // cl('scrollhei',document.documentElement.scrollHeight)
    let scrolltop = document.documentElement.scrollTop;
    let clientheight = document.documentElement.clientHeight;
    let scrollheight = document.documentElement.scrollHeight;

    if(scrolltop + clientheight >= scrollheight - 300){
        makeapi()
    }
})

async function makeapi(){
    let res = await fetch(apiUrl)
    let data = await res.json()
    // cl(data)
    templating(data)
}
makeapi()

function templating(arr){

    arr.forEach(ele => {
        let div = document.createElement('div')
        let anchor = document.createElement('a')
        let img = document.createElement('img')
        div.classList.add('gallery')
        anchor.setAttribute('href',`${ele.urls.full}`)
        img.setAttribute("src",`${ele.urls.full}`)
        // imagecontainer.appendchild
        imagecontainer.appendChild(div)
        div.appendChild(anchor)
        anchor.appendChild(img)
    });
}

// fetch(apiUrl)
//     .then(res => res.json())
//     .then(data => cl(data))
//     .catch(cl("error"))