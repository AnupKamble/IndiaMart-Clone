
import mainNavbar from "../components/mainNavbar.js";
document.getElementById("navbar").innerHTML=mainNavbar();

// Creating registration components
import structureBox from "../components/Registration.js";

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

let loginModalSection = document.getElementById('loginModalSection');
loginModalSection.innerHTML = structureBox('loginModal', 'loginModalLabel', 'Free Registration/Sign In', 'phoneNumber', 'mobileInput', 'Enter Your Mobile Number', 'loginToOTPBtn', 'otpModal','Start Selling <i class="fa-solid fa-arrow-right"></i>');
let loginToOTPBtn = document.getElementById('loginToOTPBtn');
let contact;
let otpVerify = ''
loginToOTPBtn.addEventListener('click', () => {

  otpVerify = generateOTP(otpVerify);
  console.log('otpVerify:', otpVerify);
  alert("otp:"+otpVerify);
  let otpModalSection = document.getElementById('otpModalSection');
  otpModalSection.style.display="block";
  //  document.querySelector("body").style.backgroundColor="rgba(0,0,0,0.4)";

otpModalSection.innerHTML = structureBox('otpModal', 'otpModalLabel', `Enter the 4 digit One Time Password (OTP) sent to your Mobile Number`, 'otp', 'otpInput', 'X-X-X-X', 'otpModalButton', '','Verify OTP');
let otpModalButton = document.getElementById('otpModalButton');
otpModalButton.addEventListener('click', () => {
  let otp = document.getElementById('otpInput').value;
  // console.log(otp);
  if (otp === otpVerify) {
   alert("OTP verified successfully");
   contact = document.getElementById('mobileInput').value;
   console.log(contact);
   localStorage.setItem("mobile",JSON.stringify(contact));
   window.location.href="seller_account.html";

  }
  else {
    alert('Invalid OTP');
  }
  otpModalSection.style.display="none";
});
});

