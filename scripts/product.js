import mainNavbar from  "../components/mainNavbar.js"
import getRewiews from  "../components/reviews.js"
import {fetchData} from "../utils/utils.js"
document.getElementById('navbar').innerHTML = mainNavbar();
// document.getElementById('review').innerHTML = getRewiews();

document.getElementById('i-searchbtn').addEventListener('click',() => {
    fetch();
})


let fetch = async () => {
     
    let query = document.getElementById('i-searchbar').value;

    // let url = `http://localhost:3000/Users/?q=${query}`
    let url = `https://api-project-masai.onrender.com/Users/?q=${query}`

    let data = await fetchData(url);
    console.log((data));
    displayData(data);
}

let displayData = (data) => {

      let container = document.getElementById('products');
      container.innerHTML = "";
    data.map( (elem)=> {
        
        // container.innerHTML = "";
        let div = document.createElement('div');
            div.setAttribute("class","product-div")
        
        let Image = document.createElement('img');
            Image.src = elem.image;
            Image.setAttribute("id","prod-image")

        let Name = document.createElement('p');
            Name.textContent = elem.name;
            Name.style.color = "blue"
            Name.style.cursor = "pointer"
            Name.addEventListener('click',()=> {
                 saveStorage("ID", elem.id)
                window.location.href ="product-details.html"
            })
            // Name.href = name;
        let Price = document.createElement('h2');
            Price.textContent = elem.price;

        let Seller = document.createElement('p');
            Seller.textContent = elem.seller_name;

        let City = document.createElement('p');
            City.textContent = elem.city;
            City.style.color = "rgb(141,119,119)"

        let mob = document.createElement('h3');
             mob.textContent = ` Call / ${elem.phone_num}`;

        let btn = document.createElement('button');
            btn.textContent = "Contact Supplier"
            btn.setAttribute( "id","prod-btn")
            btn.addEventListener('click',async()=> {
                saveStorage("ID", elem.id)
                window.location.href = "product-details.html"
            })
        div.append(Image,Name,Price,Seller,City,mob,btn);
        container.append(div);
    })
}
// fetch();


document.getElementById('i-searchbar').oninput = () => {
    debounce(fetch,1000); 
}

let timer;
let debounce = (func,delay) => {
    timer ? clearTimeout(timer) : null;

    timer = setTimeout(() => {
        func();
    },delay)
}


let saveStorage = (key,value) => {
 localStorage.setItem(key,JSON.stringify(value));
}





document.getElementById('nearme-btn').addEventListener('click',()=> {

    fetchCity();
})


let fetchCity = async ()=> {

    let url = `https://api-project-masai.onrender.com/Users/?city=Pune`

    let data = await fetchData(url);
    console.log(data);
    displayData(data);
}



document.getElementById('pune').addEventListener('click',()=> {

    fetchCityPune();
})


let fetchCityPune = async ()=> {
     
    let search = document.getElementById('i-searchbar').value;
    let url = `https://api-project-masai.onrender.com/Users/?city=Pune`

    let data = await fetchData(url);
    console.log(data);
    displayData(data);
}


document.getElementById('indore').addEventListener('click',()=> {

    fetchCityindore();
})


let fetchCityindore = async ()=> {

    let url = `https://api-project-masai.onrender.com/Users/?q=indore`

    let data = await fetchData(url);
    console.log(data);
    displayData(data);
}



document.getElementById('delhi').addEventListener('click',()=> {

    fetchCitydelhi();
})


let fetchCitydelhi = async ()=> {

    let url = `https://api-project-masai.onrender.com/Users/?q=delhi`

    let data = await fetchData(url);
    console.log(data);
    displayData(data);
}



document.getElementById('agra').addEventListener('click',()=> {

    fetchCityagra();
})


let fetchCityagra = async ()=> {

    let url = `https://api-project-masai.onrender.com/Users/?q=agra`

    let data = await fetchData(url);
    console.log(data);
    displayData(data);
}



document.getElementById('rajkot').addEventListener('click',()=> {

    fetchCityRajkot();
})


let fetchCityRajkot = async ()=> {

    let url = `https://api-project-masai.onrender.com/Users/?q=rajkot`

    let data = await fetchData(url);
    console.log(data);
    displayData(data);
}



document.getElementById('bathinda').addEventListener('click',()=> {

    fetchCityBathinda();
})


let fetchCityBathinda = async ()=> {

    let url = `https://api-project-masai.onrender.com/Users/?q=bathinda`

    let data = await fetchData(url);
    console.log(data);
    displayData(data);
}


document.getElementById('madurai').addEventListener('click',()=> {

    fetchCityMadurai();
})


let fetchCityMadurai = async ()=> {

    let url = `https://api-project-masai.onrender.com/Users/?q=madurai`

    let data = await fetchData(url);
    console.log(data);
    displayData(data);
}


document.getElementById('banglore').addEventListener('click',()=> {

    fetchCityBanglore();
})


let fetchCityBanglore = async ()=> {

    let url = `https://api-project-masai.onrender.com/Users/?q=banglore`

    let data = await fetchData(url);
    console.log(data);
    displayData(data);
}




document.getElementById('chennai').addEventListener('click',()=> {

    fetchCityChennai();
})


let fetchCityChennai = async ()=> {

    let url = `https://api-project-masai.onrender.com/Users/?q=chennai`

    let data = await fetchData(url);
    console.log(data);
    displayData(data);
}



document.getElementById('hyderabad').addEventListener('click',()=> {

    fetchCityHyderabad();
})


let fetchCityHyderabad = async ()=> {

    let url = `https://api-project-masai.onrender.com/Users/?q=hyderabad`

    let data = await fetchData(url);
    console.log(data);
    displayData(data);
}



document.getElementById('body').onload('click',()=> {

    fetchDataRandom();
})


let fetchDataRandom = async ()=> {

    let url = `https://api-project-masai.onrender.com/Users`

    let data = await fetchData(url);
    console.log(data);
    displayData(data);
}











