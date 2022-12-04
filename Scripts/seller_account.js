
import mainNavbar from "../components/mainNavbar.js.js";
document.getElementById("navbar").innerHTML=mainNavbar();


var box= document.getElementById("blackBox");
let display= ()=>{
    box.innerHTML=null;
    let contact= JSON.parse(localStorage.getItem("mobile"));
    let number= document.createElement("p");
    number.innerText= "Mobile Number: " + contact;
    box.append(number);
}
let displayDetails= ()=>{
    box.innerHTML=null;
    let contact= JSON.parse(localStorage.getItem("mobile"));
    let number= document.createElement("p");
    number.innerText= "Mobile Number: " + contact;
    let name= document.createElement("p");
    name.innerText= "Name: " +document.getElementById("name").value;
    
    let company= document.createElement("p");
    company.innerText= "Company Name: " +document.getElementById("company").value;
    
    let email= document.createElement("p");
    email.innerText= "Email: " +document.getElementById("email").value;

    box.append(name,number,company,email);
}

let displayProducts=()=>{
    box.innerHTML=null;
    let contact= JSON.parse(localStorage.getItem("mobile"));
    let number= document.createElement("p");
    number.innerText= "Mobile Number: " + contact;
    let name= document.createElement("p");
    name.innerText= "Name: " +document.getElementById("name").value;
    
    let company= document.createElement("p");
    company.innerText= "Company Name: " +document.getElementById("company").value;
    
    let email= document.createElement("p");
    email.innerText= "Email: " +document.getElementById("email").value;
    let products= document.createElement("p");
    products.innerText= "Products/services: " +document.getElementById("prod").value;
    box.append(name,number,company,email,products);
}

let displayAddress=()=>{
    box.innerHTML=null;
    let contact= JSON.parse(localStorage.getItem("mobile"));
    let number= document.createElement("p");
    number.innerText= "Mobile Number: " + contact;
    let name= document.createElement("p");
    name.innerText= "Name: " +document.getElementById("name").value;
    
    let company= document.createElement("p");
    company.innerText= "Company Name: " +document.getElementById("company").value;
    
    let email= document.createElement("p");
    email.innerText= "Email: " +document.getElementById("email").value;
    let products= document.createElement("p");
    products.innerText= "Products/services: " +document.getElementById("prod").value;
    let pincode= document.createElement("p");
    pincode.innerText= "PINCode: " +document.getElementById("pincode").value;
    
    let city= document.createElement("p");
    city.innerText= "City: " +document.getElementById("city").value;
    
    let state= document.createElement("p");
    state.innerText= "State: " +document.getElementById("state").value;
    
    let address= document.createElement("p");
    address.innerText= "Address: " + document.getElementById("locality").value+", " + document.getElementById("address").value ;

    let message= document.createElement("h4");
    message.innerHTML= "Yay! Your products got listed on the Indiamart."
    message.style.color="green";
    box.append(name,number,company,email,products,pincode,city,state,address,message);
}




display();

    let postData= async()=>{
        let body= {
            name: document.getElementById("prod").value,
            image: document.getElementById("image").value,
            seller_name: document.getElementById("company").value,
            sell_address: document.getElementById("address").value,
            pincode: document.getElementById("pincode").value,
            state: document.getElementById("state").value,
            phone_num: JSON.parse(localStorage.getItem("mobile")),
            city:document.getElementById("city").value


        }
        let response = await fetch(`https://api-project-masai.onrender.com`,{
            method: "POST",
            body: JSON.stringify(body),
            headers: {"Content-Type": "application/json"}
        })
        
    }
    document.getElementById("submit1").addEventListener("click",()=>{
        document.getElementById("products").style.display="flex";
         displayDetails();
    
       });
    
       document.getElementById("submit2").addEventListener("click",()=>{
        document.getElementById("addressBox").style.display="flex";
        displayProducts();
       });
    document.getElementById("submit3").addEventListener("click",()=>{
        postData();
        displayAddress();
    });