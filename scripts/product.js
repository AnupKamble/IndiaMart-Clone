import mainNavbar from  "../components/mainNavbar.js"
import {footer} from  "../components/footer.js"
import {fetchData} from "../utils/utils.js"
document.getElementById('navbar').innerHTML = mainNavbar();

document.getElementById('footer').innerHTML = footer();

document.getElementById('i-searchbtn').addEventListener('click',() => {
    fetch();
})
var store=JSON.parse(localStorage.getItem("mobile"))||undefined;
console.log(store);

if(store!=undefined){
  document.querySelector("#span_signIn").innerHTML="Hi!" +" "+store;
}

let fetch = async () => {
     
    let query = document.getElementById('i-searchbar').value;

    // let url = `http://localhost:3000/Users/?q=${query}`
    let url = `http://localhost:3000/Users/?q=${query}`

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
            Seller.addEventListener('click', ()=> {
                window.location.href = "sellers.html"
            })

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

    let url = `http://localhost:3000/Users/?city=Pune`

    let data = await fetchData(url);
    console.log(data);
    displayData(data);
}



document.getElementById('pune').addEventListener('click',()=> {

    fetchCityPune();
})


let fetchCityPune = async ()=> {
     
    let search = document.getElementById('i-searchbar').value;
    let url = `http://localhost:3000/Users/?city=Pune`

    let data = await fetchData(url);
    console.log(data);
    displayData(data);
}


document.getElementById('indore').addEventListener('click',()=> {

    fetchCityindore();
})


let fetchCityindore = async ()=> {

    let url = `http://localhost:3000/Users/?q=indore`

    let data = await fetchData(url);
    console.log(data);
    displayData(data);
}



document.getElementById('delhi').addEventListener('click',()=> {

    fetchCitydelhi();
})


let fetchCitydelhi = async ()=> {

    let url = `http://localhost:3000/Users/?q=delhi`

    let data = await fetchData(url);
    console.log(data);
    displayData(data);
}



document.getElementById('agra').addEventListener('click',()=> {

    fetchCityagra();
})


let fetchCityagra = async ()=> {

    let url = `http://localhost:3000/Users/?q=agra`

    let data = await fetchData(url);
    console.log(data);
    displayData(data);
}



document.getElementById('rajkot').addEventListener('click',()=> {

    fetchCityRajkot();
})


let fetchCityRajkot = async ()=> {

    let url = `http://localhost:3000/Users/?q=rajkot`

    let data = await fetchData(url);
    console.log(data);
    displayData(data);
}



document.getElementById('bathinda').addEventListener('click',()=> {

    fetchCityBathinda();
})


let fetchCityBathinda = async ()=> {

    let url = `http://localhost:3000/Users/?q=bathinda`

    let data = await fetchData(url);
    console.log(data);
    displayData(data);
}


document.getElementById('madurai').addEventListener('click',()=> {

    fetchCityMadurai();
})


let fetchCityMadurai = async ()=> {

    let url = `http://localhost:3000/Users/?q=madurai`

    let data = await fetchData(url);
    console.log(data);
    displayData(data);
}


document.getElementById('banglore').addEventListener('click',()=> {

    fetchCityBanglore();
})


let fetchCityBanglore = async ()=> {

    let url = `http://localhost:3000/Users/?q=banglore`

    let data = await fetchData(url);
    console.log(data);
    displayData(data);
}




document.getElementById('chennai').addEventListener('click',()=> {

    fetchCityChennai();
})


let fetchCityChennai = async ()=> {

    let url = `http://localhost:3000/Users/?q=chennai`

    let data = await fetchData(url);
    console.log(data);
    displayData(data);
}



document.getElementById('hyderabad').addEventListener('click',()=> {

    fetchCityHyderabad();
})


let fetchCityHyderabad = async ()=> {

    let url = `http://localhost:3000/Users/?q=hyderabad`

    let data = await fetchData(url);
    console.log(data);
    displayData(data);
}



// windows.onload('click',()=> {

//     fetchDataRandom();
// })


// let fetchDataRandom = async ()=> {

//     let url = `http://localhost:3000/Users`

//     let data = await fetchData(url);
//     console.log(data);
//     displayData(data);
// }




document.getElementById('manu').addEventListener('click',()=> {

    ManuType();
})


let ManuType = async ()=> {

    let url = `http://localhost:3000/Users/?q=manufacturer`

    let data = await fetchData(url);
    console.log(data);
    displayData(data);
}


document.getElementById('whole').addEventListener('click',()=> {

    ManuType2();
})


let ManuType2 = async ()=> {

    let url = `http://localhost:3000/Users/?q=WholeSeller`

    let data = await fetchData(url);
    console.log(data);
    displayData(data);
}


document.getElementById('export').addEventListener('click',()=> {

    ManuType3();
})


let ManuType3 = async ()=> {

    let url = `http://localhost:3000/Users/?q=Exporter`

    let data = await fetchData(url);
    console.log(data);
    displayData(data);
}


document.getElementById('retail').addEventListener('click',()=> {

    ManuType4();
})


let ManuType4 = async ()=> {

    let url = `http://localhost:3000/Users/?q=retailer`

    let data = await fetchData(url);
    console.log(data);
    displayData(data);
}


document.getElementById('one').addEventListener('click',()=> {

    ManuType5();
})


let ManuType5 = async ()=> {

    let url = `http://localhost:3000/Users/?q=1 kg`

    let data = await fetchData(url);
    console.log(data);
    displayData(data);
}


document.getElementById('two').addEventListener('click',()=> {

    ManuType6();
})


let ManuType6 = async ()=> {

    let url = `http://localhost:3000/Users/?q=5 kg`

    let data = await fetchData(url);
    console.log(data);
    displayData(data);
}

document.getElementById('retail').addEventListener('click',()=> {

    ManuType7();
})


let ManuType7 = async ()=> {

    let url = `http://localhost:3000/Users/?q=25kg`

    let data = await fetchData(url);
    console.log(data);
    displayData(data);
}




document.getElementById('organic').addEventListener('click',()=> {

    ManuType8();
})


let ManuType8 = async ()=> {

    let url = `http://localhost:3000/Users/?q=organic`

    let data = await fetchData(url);
    console.log(data);
    displayData(data);
}


document.getElementById('puff').addEventListener('click',()=> {

    ManuType9();
})


let ManuType9 = async ()=> {

    let url = `http://localhost:3000/Users/?q=black`

    let data = await fetchData(url);
    console.log(data);
    displayData(data);
}


document.getElementById('brown').addEventListener('click',()=> {

    ManuType10();
})


let ManuType10 = async ()=> {

    let url = `http://localhost:3000/Users/?q=brown`

    let data = await fetchData(url);
    console.log(data);
    displayData(data);
}



document.getElementById('golden').addEventListener('click',()=> {

    ManuType11();
})


let ManuType11 = async ()=> {

    let url = `http://localhost:3000/Users/?q=golden`

    let data = await fetchData(url);
    console.log(data);
    displayData(data);
}


document.getElementById('ponni').addEventListener('click',()=> {

    ManuType12();
})


let ManuType12 = async ()=> {

    let url = `http://localhost:3000/Users/?q=ponni`

    let data = await fetchData(url);
    console.log(data);
    displayData(data);
}







