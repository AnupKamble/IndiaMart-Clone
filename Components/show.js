let show= ()=>{
    

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
        build.setAttribute("style","display:none");
       
        var pura=document.querySelector("#pura");
        pura.setAttribute("style","background-color:rgb(241, 239, 239);")
    }


    let structureBox = (modalId, modalLabelId, modalTitle, inputType, inputID, placeholder, submitBtnID, nextModalID, btnName) => {
        let modal;
        modal = `<div id="${modalId}" tabindex="-1">
                  <h2 class="modal-title" id="${modalLabelId}">${modalTitle}</h2>
                  </div>
                    <div id="input">
                    ${inputType === 'phoneNumber' ? '<div class="col-2"><button id="cCode">+91</button></div>' : ''}
                      
                        <input type="mobile"  minlength="10" id="${inputID}" placeholder="${placeholder}" required>
                    
                  </div>
                  <div class="d-flex my-3">
                    <button data-bs-dismiss="modal" data-bs-target="#${nextModalID ? nextModalID : modalId}" data-bs-toggle="modal" id="${submitBtnID}">${btnName}</button>
                  </div>
          </div>`;
        return modal;
      }


      //footer////////////////////////////////////////////////////////////////////
       

      
    
export {show,structureBox}