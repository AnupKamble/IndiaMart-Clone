import mainNavbar from "../components/mainNavbar.js"
import {fetchData} from "../utils/utils.js"
document.getElementById('navbar').innerHTML = mainNavbar();

let selectedID = JSON.parse(localStorage.getItem("ID")) || [];

// console.log(selectedID);


let fetch = async () => {
    
    let url = `https://mock-server-jwji.onrender.com/Users/${selectedID}`
    let data = await fetchData(url);
    // console.log(data);
    displayImage(data);
    displayPrice(data);
    displaySeller(data);
    displayModal(data);
}
fetch();

let displayImage = (data) => {

    let container = document.getElementById('sele-prod');

   

        let div = document.createElement('div');
            div.setAttribute("id","sel-div")

        let Image = document.createElement('img');
            Image.src = data.image;
            Image.setAttribute("id","sel-image")


            div.append(Image);
            container.append(div);
   
}


let displayPrice = (data) => {

    let container = document.getElementById('sele-price');

    let div = document.createElement('div');
        div.setAttribute("id","sel-div")

    let Name = document.createElement('h3');
        Name.textContent = data.name;
        Name.style.fontFamily = "Arial"

    let  Price = document.createElement('h3');
         Price.textContent = data.price;

    let Size = document.createElement('p')
        Size.textContent ="Packaging-Size : 5 kg or 25 kg"


       
    let color = document.createElement('p')
        color.textContent = "color  : Golden"


    let Self_life = document.createElement('p');
        Self_life.textContent = `shell-Life : ${data.self_life}`


    let Type = document.createElement('p')
        Type.textContent = "Packaging Type : P P Bags"



    let pride = document.createElement('p')
        pride.textContent = "We, Vision Agro Foods are the leading manufacturer and exporter of this product."
   
        
     
    let btn = document.createElement('button');
        btn.textContent = "Get Latest Price"
        btn.setAttribute("id","get-btn");
        btn.setAttribute("class","btn btn-primary");
        btn.setAttribute("data-bs-toggle","modal");
        btn.setAttribute("data-bs-target","#exampleModal");

    div.append(Name,Price,Size,color,Self_life,Type,pride,btn);
    container.append(div);

}


let displaySeller = (data) => {

    let container = document.getElementById('sele-seller');

    let div = document.createElement('div');
        div.setAttribute("id","sel-div")

    let Seller = document.createElement('h5');
         Seller.textContent =  data.seller_name;
         Seller.style.fontFamily = "arial";
         Seller.style.textDecoration = "underline";
         Seller.style.cursor ="Pointer"
 
    let  City = document.createElement('p');
         City.textContent = data.city + "," + data.state;

    let  GST = document.createElement('p');
         GST.textContent = "GST - 24AAOFV2019C1ZG";     

    let Call = document.createElement('p');
        Call.textContent = `Call / ${data.phone_num}`
        Call.style.color = "black"
        Call.style.fontSize = "18px";
        Call.style.fontWeight = "700";

    let  type1 = document.createElement('p');
         type1.textContent = "Leading Supplier";     

    let  type2 = document.createElement('p');
         type2.textContent = "Manufacturer";     

    let  type3 = document.createElement('p');
         type3.textContent = "TrustSeal Verified";     

    
    let btn = document.createElement('button');
        btn.textContent = 'Contact Supplier'
        btn.setAttribute("id","suppy-btn")
        btn.setAttribute("class","btn btn-primary");
        btn.setAttribute("data-bs-toggle","modal");
        btn.setAttribute("data-bs-target","#exampleModal");
 
    div.append(Seller,City,GST,Call,type1,type2,type3,btn);
    container.append(div);


}



let displayModal = (data) => {

    let container = document.querySelector("#modal-left");

    let div = document.createElement('div');
        div.setAttribute("id","modal-div")

    let m_image = document.createElement('img');
        m_image.src = data.image;

    let m_name = document.createElement('h5');
        m_name.textContent = data.name;
    
    let m_price = document.createElement('h5');
        m_price.textContent = data.price;

    let m_seller = document.createElement('p');
        m_seller.textContent = data.seller_name;

    let m_city = document.createElement('p');
        m_city.textContent = data.city +","+data.state;
       

    let m_package = document.createElement('p');
        m_package.textContent = "Packaging Size : 5 kg to 25 kg"

    let m_color = document.createElement('p');
        m_color.textContent = data.variety;


    let m_type = document.createElement('p');
        m_type.textContent = "Packaging Type : PP Bags"

    // let m_life = document.createElement('p');
    //     m_life = 'shell-life' ; + data.self_life;

    
    div.append(m_image,m_name,m_price,m_seller,m_city,m_package,m_color,m_type);
    container.append(div);

}





document.getElementById('i-searchbtn').addEventListener('click',() => {
    fetchApi();
})


let fetchApi= async () => {
     
    let query = document.getElementById('i-searchbar').value;

    // let url = `http://localhost:3000/Users/?q=${query}`
    let url = `https://mock-server-jwji.onrender.com/Users/?q=${query}`

    let data = await fetchData(url);
    console.log((data));
}


document.getElementById('i-searchbar').oninput = () => {
    debounce(fetchApi,1000); 
}

let timer;
let debounce = (func,delay) => {
    timer ? clearTimeout(timer) : null;

    timer = setTimeout(() => {
        func();
    },delay)
}