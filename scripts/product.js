import mainNavbar from  "../components/mainNavbar.js"
import getRewiews from  "../components/reviews.js"
import {fetchData} from "../utils/utils.js"
document.getElementById('navbar').innerHTML = mainNavbar();
document.getElementById('review').innerHTML = getRewiews();

document.getElementById('i-searchbtn').addEventListener('click',() => {
    fetch();
})


let fetch = async () => {
     
    let query = document.getElementById('i-searchbar').value;

    let url = `http://localhost:3000/Users/?q=${query}`

    let data = await fetchData(url);
    console.log((data));
    displayData(data);
}

let displayData = (data) => {

      let container = document.getElementById('products');
      container.innerHTML = "";
    data.map( (elem)=> {
        
         
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
            btn.addEventListener('click',()=> {
                window.location.href = "sendRequirement.html"
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













