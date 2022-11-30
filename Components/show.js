let show= (data)=>{
    

       return `var elec=document.querySelector("#ele_show");
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
        build.setAttribute("style","display:none");`
       
    }
export {show}