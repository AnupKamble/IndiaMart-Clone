let structureBox = (modalId, modalLabelId, modalTitle, inputType, inputID, placeholder, submitBtnID, nextModalID, btnName) => {
  let modal;
  modal = `<div id="${modalId}" tabindex="-1">
            <h2 class="modal-title" id="${modalLabelId}">${modalTitle}</h2>
            </div>
              <div id="input">
              ${inputType === 'phoneNumber' ? '<div class="col-2"><button id="cCode">+91</button></div>' : ''}
                
                  <input type="mobile" id="${inputID}" required  maxlength="10" placeholder="${placeholder}">
              
            </div>
            <div class="d-flex my-3">
              <button data-bs-dismiss="modal" data-bs-target="#${nextModalID ? nextModalID : modalId}" data-bs-toggle="modal" id="${submitBtnID}">${btnName}</button>
            </div>
    </div>`;
  return modal;
}

export default structureBox;



