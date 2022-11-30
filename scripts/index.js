import {show} from '../Components/show.js'




// document.querySelector("#build_P").addEventListener("click",display_build);
// function display_build(){
//     show();
   
//     var bui=document.querySelector("#build_show");
//     bui.setAttribute("style","display:contents");
// }

// document.querySelector("#pharma_P").addEventListener("click",display_buil);
// function display_buil(){
//     show();
    
//     var buil=document.querySelector("#pharma_show");
//     buil.setAttribute("style","display:contents");
   
// }



document.querySelector("#build_P").addEventListener("mouseenter",display_build);
document.querySelector("#build_img").addEventListener("mouseenter",display_build);

function display_build(){
   
    var elec=document.querySelector("#ele_show");
    elec.setAttribute("style","display:none");

    var pharma=document.querySelector("#pharma_show");
    pharma.setAttribute("style","display:none");

    var ind_M=document.querySelector("#ind_M_show");
    ind_M.setAttribute("style","display:none");

    var ind_s=document.querySelector("#ind_S_show");
    ind_s.setAttribute("style","display:none");

    var food=document.querySelector("#food_show");
    food.setAttribute("style","display:none");

    var build=document.querySelector("#build_show");
    build.setAttribute("style","display:block");
    
    var pura=document.querySelector("#pura");
    pura.setAttribute("style","background-color:rgb(241, 239, 239);")

    var build_class=document.querySelector("#build_class");
    build_class.setAttribute("style","background-color:rgb(241, 239, 239);");
   
}



document.querySelector("#build_img").addEventListener("mouseout",hide_build);
document.querySelector("#build_P").addEventListener("mouseout",hide_build);

function hide_build(){
    var food=document.querySelector("#build_show");
    food.setAttribute("style","display:none");

    var pura=document.querySelector("#pura");
    pura.setAttribute("style","background-color:none")

    var build_class=document.querySelector("#build_class");
    build_class.setAttribute("style","background-color:white");
}



document.querySelector("#ele_img").addEventListener("mouseenter",display_ele);
document.querySelector("#ele_P").addEventListener("mouseenter",display_ele);

function display_ele(){
    var build=document.querySelector("#build_show");
    build.setAttribute("style","display:none");

    var pharma=document.querySelector("#pharma_show");
    pharma.setAttribute("style","display:none");

    var ind_M=document.querySelector("#ind_M_show");
    ind_M.setAttribute("style","display:none");

    var ind_s=document.querySelector("#ind_S_show");
    ind_s.setAttribute("style","display:none");

    var food=document.querySelector("#food_show");
    food.setAttribute("style","display:none");

    var elec=document.querySelector("#ele_show");
    elec.setAttribute("style","display:block");
   
    var pura=document.querySelector("#pura");
    pura.setAttribute("style","background-color:rgb(241, 239, 239);")

    var ele_class=document.querySelector("#ele_class");
    ele_class.setAttribute("style","background-color:rgb(241, 239, 239);");
   
    
}



document.querySelector("#ele_P").addEventListener("mouseout",hide_ele);
document.querySelector("#ele_img").addEventListener("mouseout",hide_ele);
function hide_ele(){
    var food=document.querySelector("#ele_show");
    food.setAttribute("style","display:none");

    var pura=document.querySelector("#pura");
    pura.setAttribute("style","background-color:none")

    var ele_class=document.querySelector("#ele_class");
    ele_class.setAttribute("style","background-color:white");
}


document.querySelector("#pharma_img").addEventListener("mouseenter",display_pharma);
document.querySelector("#pharma_P").addEventListener("mouseenter",display_pharma);
function display_pharma(){
      
    var build=document.querySelector("#build_show");
    build.setAttribute("style","display:none");

    var elec=document.querySelector("#ele_show");
    elec.setAttribute("style","display:none");

    var ind_M=document.querySelector("#ind_M_show");
    ind_M.setAttribute("style","display:none");

    var ind_s=document.querySelector("#ind_S_show");
    ind_s.setAttribute("style","display:none");

    var food=document.querySelector("#food_show");
    food.setAttribute("style","display:nonw");

    var pharma=document.querySelector("#pharma_show");
    pharma.setAttribute("style","display:block");

    var pura=document.querySelector("#pura");
    pura.setAttribute("style","background-color:rgb(241, 239, 239);")

    var pharma_class=document.querySelector("#pharma_class");
    pharma_class.setAttribute("style","background-color:rgb(241, 239, 239);");
  }



  document.querySelector("#pharma_P").addEventListener("mouseout",hide_pharma);
  document.querySelector("#pharma_img").addEventListener("mouseout",hide_pharma);
function hide_pharma(){
    var food=document.querySelector("#pharma_show");
    food.setAttribute("style","display:none");

    var pura=document.querySelector("#pura");
    pura.setAttribute("style","background-color:none")


    var pharma_class=document.querySelector("#pharma_class");
    pharma_class.setAttribute("style","background-color:white");
}


document.querySelector("#ind_M_img").addEventListener("mouseenter",display_ind_M);
  document.querySelector("#ind_M_P").addEventListener("mouseenter",display_ind_M);
function display_ind_M(){
    
    var build=document.querySelector("#build_show");
    build.setAttribute("style","display:none");

    var elec=document.querySelector("#ele_show");
    elec.setAttribute("style","display:none");

    var pharma=document.querySelector("#pharma_show");
    pharma.setAttribute("style","display:none");

    var ind_s=document.querySelector("#ind_S_show");
    ind_s.setAttribute("style","display:none");

    var food=document.querySelector("#food_show");
    food.setAttribute("style","display:none");
    
    var ind_M=document.querySelector("#ind_M_show");
    ind_M.setAttribute("style","display:block");

    var pura=document.querySelector("#pura");
    pura.setAttribute("style","background-color:rgb(241, 239, 239);")

    var indus_M_class=document.querySelector("#indus_M_class");
    indus_M_class.setAttribute("style","background-color:rgb(241, 239, 239);");
   

}



document.querySelector("#ind_M_P").addEventListener("mouseout",hide_ind_M);
document.querySelector("#ind_M_img").addEventListener("mouseout",hide_ind_M);
function hide_ind_M(){
    var food=document.querySelector("#ind_M_show");
    food.setAttribute("style","display:none");

    var pura=document.querySelector("#pura");
    pura.setAttribute("style","background-color:none")


    var indus_M_class=document.querySelector("#indus_M_class");
    indus_M_class.setAttribute("style","background-color:white");
}


document.querySelector("#ind_S_P").addEventListener("mouseenter",display_ind_s);
document.querySelector("#ind_S_img").addEventListener("mouseenter",display_ind_s);
function display_ind_s(){
   
    var build=document.querySelector("#build_show");
    build.setAttribute("style","display:none");

    var elec=document.querySelector("#ele_show");
    elec.setAttribute("style","display:none");

    var pharma=document.querySelector("#pharma_show");
    pharma.setAttribute("style","display:none");

    var ind_M=document.querySelector("#ind_M_show");
    ind_M.setAttribute("style","display:none");

   
    var food=document.querySelector("#food_show");
    food.setAttribute("style","display:none");

    var ind_s=document.querySelector("#ind_S_show");
    ind_s.setAttribute("style","display:block");

    var pura=document.querySelector("#pura");
    pura.setAttribute("style","background-color:rgb(241, 239, 239);")

    var indus_S_class=document.querySelector("#indus_S_class");
    indus_S_class.setAttribute("style","background-color:rgb(241, 239, 239);");
   
  
}


document.querySelector("#ind_S_P").addEventListener("mouseout",hide_ind_S);
document.querySelector("#ind_S_img").addEventListener("mouseout",hide_ind_S);
function hide_ind_S(){
    var food=document.querySelector("#ind_S_show");
    food.setAttribute("style","display:none");

    var pura=document.querySelector("#pura");
    pura.setAttribute("style","background-color:none")

    var indus_S_class=document.querySelector("#indus_S_class");
    indus_S_class.setAttribute("style","background-color:white");
}


document.querySelector("#food_img").addEventListener("mouseenter",display_food);
document.querySelector("#food_P").addEventListener("mouseenter",display_food);
function display_food(){
    
    
    var build=document.querySelector("#build_show");
    build.setAttribute("style","display:none");

    var elec=document.querySelector("#ele_show");
    elec.setAttribute("style","display:none");

    var pharma=document.querySelector("#pharma_show");
    pharma.setAttribute("style","display:none");

    var ind_M=document.querySelector("#ind_M_show");
    ind_M.setAttribute("style","display:none");

    var ind_s=document.querySelector("#ind_S_show");
    ind_s.setAttribute("style","display:none");

    var food=document.querySelector("#food_show");
    food.setAttribute("style","display:contents");

    var pura=document.querySelector("#pura");
    pura.setAttribute("style","background-color:rgb(241, 239, 239);")

    var food_class=document.querySelector("#food_class");
    food_class.setAttribute("style","background-color:rgb(241, 239, 239);");
   
   
}



document.querySelector("#food_P").addEventListener("mouseout",hide_food);
document.querySelector("#food_img").addEventListener("mouseout",hide_food);


function hide_food(){
    var food=document.querySelector("#food_show");
    food.setAttribute("style","display:none");

    var pura=document.querySelector("#pura");
    pura.setAttribute("style","background-color:none")

    var food_class=document.querySelector("#food_class");
    food_class.setAttribute("style","background-color:white");
}



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


