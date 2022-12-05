import {show,structureBox} from '../components/show.js'
import {footer} from '../components/footer.js'

import mainNavbar from '../components/mainNavbar.js'

document.getElementById("footer").innerHTML=footer();



// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


 var store = JSON.parse(localStorage.getItem("mobile"))||undefined;
 
 if(store!=undefined){
    var hid=document.querySelector("#user");
    hid.setAttribute("style","display:block");
    
    hid.setAttribute("style","display:flex");

    var le=document.querySelector("#user_show");
    le.innerHTML=store;

    le.setAttribute("style","display:block");
    console.log(store);
    document.querySelector("#new_span_signIn").innerHTML="Hi!" +" "+store;

    document.querySelector("body").setAttribute("style","background:none")
    
 }else{
    var hide=document.querySelector("#signIn_hide");
    hide.setAttribute("style","display:block");

    document.querySelector("#logout").setAttribute("style","display:none");
   
 }
  var logout=document.querySelector("#logout");
  logout.addEventListener("click",log);

  function log(){
   localStorage.clear();
   window.location.href="index.html"
  }

document.querySelector("#new_login_image").addEventListener("mouseover",show_ele);

document.querySelector("#signIn").addEventListener("mouseover",show_ele);
function show_ele(){
    var ele=document.querySelector("#signIn");
    ele.setAttribute("style","display:block");
}

document.querySelector("#signIn").addEventListener("mouseout",hide_e);
document.querySelector("#backin").addEventListener("mouseout",hide_e);
function hide_e(){
    var ele=document.querySelector("#signIn");
    ele.setAttribute("style","display:none");
}



//priya
let generateOTP = (otpVerify) => {
    if (otpVerify.length > 0) {
      otpVerify = '';
    }
    for (let i = 0; i < 4; i++) {
      let num = Math.round(Math.random() * 10);
      if (num === 10) {
        num--;
      }
      otpVerify += num;
    }
    return otpVerify;
  }
  // console.log(createModal);
  let loginModalSection = document.getElementById('loginModalSection');
  loginModalSection.innerHTML = structureBox('loginModal', 'loginModalLabel', 'Sign In', 'phoneNumber', 'mobileInput', 'Enter Your Mobile Number', 'loginToOTPBtn', 'otpModal','Verify OTP <i class="fa-solid fa-arrow-right"></i>');
  let loginToOTPBtn = document.getElementById('loginToOTPBtn');
  let contact;
  let otpVerify = ''
  loginToOTPBtn.addEventListener('click', () => {
    // console.log('Hi');
    contact = document.getElementById('mobileInput').value;
    // console.log(contact);
    otpVerify = generateOTP(otpVerify);
    console.log('otpVerify:', otpVerify);
    alert("otp:"+otpVerify);
    let otpModalSection = document.getElementById('otpModalSection');
    otpModalSection.style.display="block";

    let otpModalSectio = document.getElementById('loginModalSection');
    otpModalSectio.style.display="none";
  
  otpModalSection.innerHTML = structureBox('otpModal', 'otpModalLabel', `Enter the 4 digit One Time Password (OTP) sent to your Mobile Number`, 'otp', 'otpInput', 'X-X-X-X', 'otpModalButton', '','Verify OTP');
  let otpModalButton = document.getElementById('otpModalButton');
  otpModalButton.addEventListener('click', () => {
    let otp = document.getElementById('otpInput').value;
    // console.log(otp);
    if (otp === otpVerify) {
     alert("OTP verified successfully");

     localStorage.setItem("mobile",JSON.stringify(contact));
     window.location.href="index.html";
    
    }
    else {
      alert('Invalid OTP');
      document.querySelector("body").setAttribute("style","background:none")
    }
    otpModalSection.style.display="none";
  });
  });




 

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// build and construction
document.querySelector("#build_img").addEventListener("mouseover",display_build);
document.querySelector("#build_P").addEventListener("mouseover",display_build);
document.querySelector("#build_show").addEventListener("mouseover",display_build);
function display_build(){
    show();
   
    var bui=document.querySelector("#build_show");
    bui.setAttribute("style","display:block");

    var build_class=document.querySelector("#build_class");
    build_class.setAttribute("style","background-color:rgb(241, 239, 239);");

   
}


document.querySelector("#pura").addEventListener("mouseout",hide_build);
document.querySelector("#back").addEventListener("mouseover",hide_build);
document.querySelector("#ele_img").addEventListener("mouseover",hide_build);
function hide_build(){
    var bui=document.querySelector("#build_show");
    bui.setAttribute("style","display:none");

    var pura=document.querySelector("#pura");
    pura.setAttribute("style","background-color:none")

    var build_class=document.querySelector("#build_class");
    build_class.setAttribute("style","background-color:none;");
}



// electronics and electrical
document.querySelector("#ele_img").addEventListener("mouseover",display_ele);
document.querySelector("#ele_P").addEventListener("mouseover",display_ele);
 document.querySelector("#ele_show").addEventListener("mouseover",display_ele);

function display_ele(){

    show();
    
    var ele=document.querySelector("#ele_show");
    ele.setAttribute("style","display:block");

    var ele_class=document.querySelector("#ele_class");
    ele_class.setAttribute("style","background-color:rgb(241, 239, 239);");
}


document.querySelector("#pura").addEventListener("mouseout",hide_ele);
document.querySelector("#back").addEventListener("mouseover",hide_ele);
document.querySelector("#pharma_img").addEventListener("mouseover",hide_ele);
document.querySelector("#build_class").addEventListener("mouseover",hide_el);
function hide_el(){
    var ele_class=document.querySelector("#ele_class");
    ele_class.setAttribute("style","background-color:none;");
}

function hide_ele(){
    var elec=document.querySelector("#ele_show");
    elec.setAttribute("style","display:none");
    
    var pura=document.querySelector("#pura");
    pura.setAttribute("style","background-color:none");

    var ele_class=document.querySelector("#ele_class");
    ele_class.setAttribute("style","background-color:none;");
}


// pharma and medical

document.querySelector("#pharma_img").addEventListener("mouseover",display_pharma);
document.querySelector("#pharma_P").addEventListener("mouseover",display_pharma);
document.querySelector("#pharma_show").addEventListener("mouseover",display_pharma);

function display_pharma(){
    show();

    var pharma=document.querySelector("#pharma_show");
    pharma.setAttribute("style","display:block");

    var pharma_class=document.querySelector("#pharma_class");
    pharma_class.setAttribute("style","background-color:rgb(241, 239, 239);");

  }


document.querySelector("#pura").addEventListener("mouseout",hide_pharma);
document.querySelector("#back").addEventListener("mouseover",hide_pharma);
document.querySelector("#ele_class").addEventListener("mouseover",hide_pharm);
document.querySelector("#ind_M_img").addEventListener("mouseover",hide_pharm);
function hide_pharm(){
    var pharma_class=document.querySelector("#pharma_class");
    pharma_class.setAttribute("style","background-color:none;");
}

function hide_pharma(){
    var pharma=document.querySelector("#pharma_show");
      pharma.setAttribute("style","display:none");
    
    var pura=document.querySelector("#pura");
    pura.setAttribute("style","background-color:none");

    var pharma_class=document.querySelector("#pharma_class");
    pharma_class.setAttribute("style","background-color:none;");
}


// industries machineries

document.querySelector("#ind_M_img").addEventListener("mouseover",display_ind_M);
document.querySelector("#ind_M_P").addEventListener("mouseover",display_ind_M);
document.querySelector("#ind_M_show").addEventListener("mouseover",display_ind_M);
function display_ind_M(){
    
    show();

    var ind_M=document.querySelector("#ind_M_show");
    ind_M.setAttribute("style","display:block");

    var indus_M_class=document.querySelector("#indus_M_class");
    indus_M_class.setAttribute("style","background-color:rgb(241, 239, 239);");
}


document.querySelector("#pura").addEventListener("mouseout",hide_ind_m);
document.querySelector("#back").addEventListener("mouseover",hide_ind_m);
document.querySelector("#ind_S_img").addEventListener("mouseover",hide_ind_m);
document.querySelector("#pharma_class").addEventListener("mouseover",hid_ind_m);

function hid_ind_m(){
   
    var indus_M_class=document.querySelector("#indus_M_class");
    indus_M_class.setAttribute("style","background-color:none;");
}

function hide_ind_m(){
    var ind_m=document.querySelector("#ind_M_show");
      ind_m.setAttribute("style","display:none");
    
    var pura=document.querySelector("#pura");
    pura.setAttribute("style","background-color:none");

    var indus_M_class=document.querySelector("#indus_M_class");
    indus_M_class.setAttribute("style","background-color:none;");
}

// industries & supplies


document.querySelector("#ind_S_P").addEventListener("mouseover",display_ind_s);
document.querySelector("#ind_S_img").addEventListener("mouseover",display_ind_s);
document.querySelector("#ind_S_show").addEventListener("mouseover",display_ind_s);
function display_ind_s(){

    show();

    var ind_s=document.querySelector("#ind_S_show");
    ind_s.setAttribute("style","display:block");

    var indus_S_class=document.querySelector("#indus_S_class");
    indus_S_class.setAttribute("style","background-color:rgb(241, 239, 239);");
}

document.querySelector("#pura").addEventListener("mouseout",hide_ind_s);
document.querySelector("#back").addEventListener("mouseover",hide_ind_s);
document.querySelector("#food_img").addEventListener("mouseover",hide_ind_s);
document.querySelector("#indus_M_class").addEventListener("mouseover",hid_ind_s);

function hid_ind_s(){
   

    var indus_S_class=document.querySelector("#indus_S_class");
    indus_S_class.setAttribute("style","background-color:none;");
}

function hide_ind_s(){
    var ind_s=document.querySelector("#ind_S_show");
      ind_s.setAttribute("style","display:none");
    
    var pura=document.querySelector("#pura");
    pura.setAttribute("style","background-color:none");

    var indus_S_class=document.querySelector("#indus_S_class");
    indus_S_class.setAttribute("style","background-color:none;");
}

 // food


document.querySelector("#food_img").addEventListener("mouseover",display_food);
document.querySelector("#food_P").addEventListener("mouseover",display_food);
document.querySelector("#food_show").addEventListener("mouseover",display_food);
function display_food(){

    show();

    var food=document.querySelector("#food_show");
    food.setAttribute("style","display:block");
     
    var food_class=document.querySelector("#food_class");
    food_class.setAttribute("style","background-color:rgb(241, 239, 239);");
}


document.querySelector("#pura").addEventListener("mouseout",hide_food);
document.querySelector("#back").addEventListener("mouseover",hide_food);

document.querySelector("#indus_S_class").addEventListener("mouseover",hid_food);
function hid_food(){
  
    var food_class=document.querySelector("#food_class");
    food_class.setAttribute("style","background-color:none;");
}

function hide_food(){
    var food=document.querySelector("#food_show");
      food.setAttribute("style","display:none");
    
    var pura=document.querySelector("#pura");
    pura.setAttribute("style","background-color:none");

    var food_class=document.querySelector("#food_class");
    food_class.setAttribute("style","background-color:none;");
}

// sliding image

var image=document.getElementById("img");
var Arr=["https://hm.imimg.com/imhome_gifs/indiamart-aur-kya-bnr.jpg","https://hm.imimg.com/imhome_gifs/home-banner-4.jpg"];
var ind=0;
var interval=3000;

setInterval(() => {
    document.querySelector("#slideshow").innerHTML=""
    image.src=Arr[ind];
   
    ind++;
    if(ind>=Arr.length)
    {
        ind=0;
    }    
    var images=document.createElement("img");
    images.setAttribute("class","slideimg");
    images.setAttribute("src",image.src);
    document.querySelector("#slideshow").append(images);
}, interval);


//  sign in 

document.querySelector("#signIn_btn").addEventListener("click",call);
function call(){
    var number= document.querySelector("#loginModalSection");
    number.setAttribute("style","display:block")

    var signIn=document.querySelector("#signIn");
    signIn.setAttribute("style","display:none");

    var stati = document.querySelector("body");
    stati.setAttribute("style","background:rgba(0, 0, 0, 0.352)");
   
}

