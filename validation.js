import regex from './regex.js';
import errors from './errorMessages.js';
// #B22222 is used for red colour
let nameBool = false;
let emailBool = false;
let passBool = false;
let cpassBool = false;
let termsBool = false;
let phoneBool = false;
let dateBool = false;

// <<<<Validating Name>>>>

export function outerName(){
    vName("#ccc");
    const nameInput = document.getElementById('name');
    nameInput.addEventListener("input", validateNameOnChange);

    function vName(color){
        const nameInput = document.getElementById('name');
        const name = nameInput.value.trim();
        const nameError = document.getElementById('nameError');
        const isValid = (name==!'' || (regex.name).test(name));
      
        if (name === '') {
          nameError.innerText = errors.nameEmpty;
          nameBool = false;
        } 
        else if (!(regex.name).test(name)){
          nameError.innerText = errors.name;
          nameBool = false;
        } 
        else {
          nameError.innerText = '';
          nameBool = true;
          
        }
        submitDisable();
        nameInput.style.borderColor = isValid ? color : "#B22222";
        nameInput.style.outline = isValid ? "blue" : "none";
    }
    function validateNameOnChange(){
        vName("blue");
    }
}
// <<<<Validating Email>>>>
export function outerEmail(){
    vEmail("#ccc");
    const emailInput = document.getElementById('email');
    emailInput.addEventListener("input", validateEmailOnChange);
    
    function vEmail(color){
      const emailInput = document.getElementById('email');
      const email = emailInput.value.trim();
      const emailError = document.getElementById('emailError');
      const isValid = (regex.email).test(email);
      emailInput.style.borderColor = isValid ? color : "#B22222";
      emailInput.style.outline = isValid ? "blue" : "none"
      emailError.innerText = isValid ? ' ' : errors.email;
      emailBool = isValid ? true : false;
      submitDisable();
    }
    //once the above validate function is called and just in case email is not valid
    //below function will validate email on each input user does to email input box
    function validateEmailOnChange() {
      vEmail("blue");
    }
}
// <<<<Validating Password>>>>
export function outerPassword(){
    vPass("#ccc");
    const passwordInput = document.getElementById('password');
    passwordInput.addEventListener("input", validatePasswordOnChange);

    function vPass(color){
        const passwordInput = document.getElementById('password');
        const password = passwordInput.value.trim();
        const passwordError = document.getElementById('passwordError');
      
        
        const containsNumber = (regex.cNumber).test(password);
        const containsUpperCase = (regex.cUpperCase).test(password);
        const containsLowerCase = (regex.cLowerCase).test(password);
        const containsSymbol = (regex.cSymbol).test(password);
        const isLengthValid = password.length >= 8;
      
        if (!containsNumber || !containsUpperCase || !containsLowerCase || !containsSymbol || !isLengthValid) {
          passwordInput.style.borderColor = "#B22222";
          passwordInput.style.outline = "none";
          passBool = false;
          if (!isLengthValid) {
            passwordError.innerText = errors.passLen;
          }
          else if (!containsNumber) {
            passwordError.innerText = errors.passNum;
          } else if (!containsUpperCase) {
            passwordError.innerText = errors.passUpp;
          } else if (!containsLowerCase) {
            passwordError.innerText = errors.passLow;
          } else if (!containsSymbol) {
            passwordError.innerText = errors.passSym;
          } 
        } else {
          passwordError.innerText = '';
          passwordInput.style.borderColor = "#ccc";
          passwordInput.style.outline = "blue";
          passBool = true;
          submitDisable();
        }      
    }
    function validatePasswordOnChange(){
        vPass("blue");
    }
}
// <<<<Validating Confirm Password>>>>
export function outerConfirm(){
    vConfirm("#ccc");
    const confirmPasswordInput = document.getElementById('confirmpassword');
    confirmPasswordInput.addEventListener("input", validateConfirmOnChange);

    function vConfirm(color){
        const confirmPasswordInput = document.getElementById('confirmpassword')
        const password = document.getElementById('password').value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();
        const confirmPasswordError = document.getElementById('confirmpasswordError');
        const isValid = password === confirmPassword;
      
      
        confirmPasswordInput.style.borderColor = isValid ? color : "#B22222";
        confirmPasswordInput.style.outline = isValid ? "blue" : "none"
        confirmPasswordError.innerText = isValid ? ' ' : errors.confirmPass;
        cpassBool = isValid ? true : false;
        submitDisable();       
    }
    function validateConfirmOnChange(){
        vConfirm("blue");
    }
}
// <<<<Validating DOB>>>>
export function outerDOB(){
    vDOB("#ccc");
    const dobInput = document.getElementById('dob');
    dobInput.addEventListener("input", validateDOBOnChange);

    function vDOB(color){
        const dobInput = document.getElementById('dob');
        const dobError = document.getElementById('dobError');
        
        const dobValue = dobInput.value;
        
        // Get today's date
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to 0 for comparison
        
        const dobDate = new Date(dobValue);
        
        if (isNaN(dobDate.getTime()) || dobDate > today|| dobDate.getFullYear() >= 1900) {
            dobError.innerHTML = 'Please enter a valid Date of Birth';
            dobInput.style.borderColor = "#B22222";
            dobInput.style.outline = "none"
            dateBool = false;
        } else {
          dobError.innerHTML = '';
          dobInput.style.borderColor = "blue";
          dateBool = true;
          console.log(dateBool);
          submitDisable();
        }
    }
    function validateDOBOnChange(){
        vDOB("blue");
    }
}
// <<<<Validating Phone>>>>
export function outerPhone(){
    vPhone("#ccc");
    const phoneInput = document.getElementById('phone');
    phoneInput.addEventListener("input", validatePhoneOnChange);
    function formatPhoneNumber() {
        const input = document.getElementById('phone');
        const inputValue = input.value.replace(/\D/g, ''); // Remove all non-numeric characters
        const formattedValue = inputValue.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'); // Add hyphens
        
        input.value = formattedValue; // Update input value with formatted phone number
    }
    function vPhone(color){
            const phoneInput = document.getElementById('phone');
            const phoneError = document.getElementById('phoneError');
            
            //const phoneNumber = phoneInput.value.trim();
            const phoneNumber = phoneInput.value.replace(/\D/g, '');
            const isValid = (regex.phone).test(phoneNumber);
            
            phoneInput.style.borderColor = isValid ? color : "#B22222";
            phoneInput.style.outline = isValid ? "" : "none";
            phoneError.innerText = isValid ? ' ' : errors.phone; 
            if(isValid){
                phoneBool = true;
            }
            else{
                phoneBool = false;
            }
            formatPhoneNumber();
            submitDisable();
    }
    function validatePhoneOnChange(){
        vPhone("blue");
    }
}
// <<<<Validating T&C>>>>
export function outerTerms(){
  const termsCheckbox = document.getElementById('terms');
  const termsError = document.getElementById('termsError');
  if (!termsCheckbox.checked) {
      termsError.innerText = errors.terms;
      termsBool = false;
  } else {
      termsError.innerText = '';
      termsBool = true;
      
  }
  submitDisable();
}

export function submitDisable(){
    const button = document.querySelector(".button");
    console.log(nameBool, phoneBool, emailBool, dateBool, passBool, cpassBool, termsBool)
    const condition = nameBool && emailBool && phoneBool && passBool && cpassBool && termsBool && dateBool;
    if(condition){
      button.disabled = false;
      button.style.cursor = "pointer";
    }
    else{
      button.disabled = true;
      button.style.cursor = "not-allowed";
    }
}

export function saveToLocal(){
    const nameVar = document.getElementById('name').value.trim();
    const emailVar = document.getElementById('email').value.trim();
    const passwordVar = document.getElementById('password').value.trim();
    const phoneVar = document.getElementById('phone').value.trim();
    const dobVar = document.getElementById('dob').value.trim();
    
    let genderVar;
    const genderInputs = document.querySelectorAll('input[name="gender"]');
    genderInputs.forEach(function(input) {
        if (input.checked) {
            genderVar = input.value;
        }
    });
  
    const formData = {
      name: nameVar,
      email: emailVar,
      password: passwordVar,
      phone: phoneVar,
      dob: dobVar,
      gender: genderVar
  };
  
  // Convert formData object to JSON string
  const formDataJSON = JSON.stringify(formData);
  
  // Save formDataJSON to local storage
  localStorage.setItem('formData', formDataJSON);
  console.log(formData);
  }

