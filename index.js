
import { saveToLocal, outerConfirm, outerEmail, outerName, outerPassword, outerDOB, outerPhone, outerTerms } from './validation.js';

document.addEventListener('DOMContentLoaded', () => {   
    const root = document.getElementById("root");
    const form = document.createElement('form');
    form.id = "registrationForm";


    // Function to create input elements
    const createInputElement = (type, id, name, placeholder) => {
        const input = document.createElement('input');
        input.type = type;
        input.id = id;
        input.name = name;
        input.placeholder = placeholder;
        return input;
    };

    // Function to create label elements
    const createLabelElement = (forAttr, text) => {
        const label = document.createElement('label');
        label.htmlFor = forAttr;
        label.textContent = text;
        return label;
    };

    // Name input
    form.appendChild(createLabelElement('name', 'Name:'));
    form.appendChild(document.createElement('br'));
    const nameInput = createInputElement('text', 'name', 'name', 'Name');
    nameInput.style.width = '95%'; // Example of adding style
    nameInput.style.padding = '10px'; // Example of adding style
    nameInput.addEventListener("focusout", outerName);
    form.appendChild(nameInput);
    form.appendChild(document.createElement('br'));

    // Error span for Name
    const nameErrorSpan = document.createElement('span');
    nameErrorSpan.className = 'Error';
    nameErrorSpan.id = 'nameError';
    form.appendChild(nameErrorSpan);
    form.appendChild(document.createElement('br'));

    // Email input
    form.appendChild(createLabelElement('email', 'Email:'));
    form.appendChild(document.createElement('br'));
    const emailInput = createInputElement('email', 'email', 'email', 'Email');
    emailInput.style.width = '95%'; // Example of adding style
    emailInput.style.padding = '10px'; // Example of adding style
    emailInput.addEventListener("focusout", outerEmail);
    form.appendChild(emailInput);
    form.appendChild(document.createElement('br'));

    // Error span for Email
    const emailErrorSpan = document.createElement('span');
    emailErrorSpan.className = 'Error';
    emailErrorSpan.id = 'emailError';
    form.appendChild(emailErrorSpan);
    form.appendChild(document.createElement('br'));

    // Password input
    form.appendChild(createLabelElement('password', 'Password:'));
    form.appendChild(document.createElement('br'));
    const passwordInput = createInputElement('password', 'password', 'password', 'Password');
    passwordInput.style.width = '95%'; // Example of adding style
    passwordInput.style.padding = '10px'; // Example of adding style
    passwordInput.addEventListener("focusout", outerPassword);
    form.appendChild(passwordInput);
    form.appendChild(document.createElement('br'));

    // Error span for Password
    const passwordErrorSpan = document.createElement('span');
    passwordErrorSpan.className = 'Error';
    passwordErrorSpan.id = 'passwordError';
    form.appendChild(passwordErrorSpan);
    form.appendChild(document.createElement('br'));

    // Confirm Password input
    form.appendChild(createLabelElement('confirmpassword', 'Confirm Password:'));
    form.appendChild(document.createElement('br'));
    const confirmPasswordInput = createInputElement('password', 'confirmpassword', 'confirmpassword', 'Confirm Password');
    confirmPasswordInput.style.width = '95%'; // Example of adding style
    confirmPasswordInput.style.padding = '10px'; // Example of adding style
    confirmPasswordInput.addEventListener("input", outerConfirm);
    form.appendChild(confirmPasswordInput);
    form.appendChild(document.createElement('br'));

    // Error span for Confirm Password
    const confirmPasswordErrorSpan = document.createElement('span');
    confirmPasswordErrorSpan.className = 'Error';
    confirmPasswordErrorSpan.id = 'confirmpasswordError';
    form.appendChild(confirmPasswordErrorSpan);
    form.appendChild(document.createElement('br'));

    // Date of Birth input
    form.appendChild(createLabelElement('dob', 'Date of Birth:'));
    form.appendChild(document.createElement('br'));
    const dobInput = createInputElement('date', 'dob', 'dob', 'Date of Birth');
    dobInput.style.width = '95%'; // Example of adding style
    dobInput.style.padding = '10px'; // Example of adding style
    dobInput.addEventListener("focusout", outerDOB)
    form.appendChild(dobInput);
    form.appendChild(document.createElement('br'));

    // Error span for Date of Birth
    const dobErrorSpan = document.createElement('span');
    dobErrorSpan.className = 'Error';
    dobErrorSpan.id = 'dobError';
    form.appendChild(dobErrorSpan);
    form.appendChild(document.createElement('br'));

    // Gender inputs
    const genderLabel = createLabelElement('', 'Gender:');
    form.appendChild(genderLabel);
    form.appendChild(document.createElement('br'));

    const genders = ['Male', 'Female', 'Prefer Not To Say'];
    genders.forEach((gender, index) => {
        const input = document.createElement('input');
        input.type = 'radio';
        input.id = gender.toLowerCase();
        input.name = 'gender';
        input.value = gender.toLowerCase();
    
        // Check if the current gender is "Male" and set it as checked
        if (gender === 'Male') {
            input.checked = true;
        }
    
        const label = createLabelElement(gender.toLowerCase(), gender);
        form.appendChild(input);
        form.appendChild(label);
        form.appendChild(document.createElement('br'));
    });
    

    // Error span for Gender
    const genderErrorSpan = document.createElement('span');
    genderErrorSpan.className = 'Error';
    genderErrorSpan.id = 'genderError';
    form.appendChild(genderErrorSpan);
    form.appendChild(document.createElement('br'));

    // Phone Number input
    form.appendChild(createLabelElement('phone', 'Phone Number:'));
    form.appendChild(document.createElement('br'));
    const phoneInput = createInputElement('tel', 'phone', 'phone', 'Phone Number');
    phoneInput.style.width = '95%'; // Example of adding style
    phoneInput.style.padding = '10px'; // Example of adding style
    phoneInput.addEventListener("focusout", outerPhone);
    form.appendChild(phoneInput);
    form.appendChild(document.createElement('br'));

    // Error span for Phone Number
    const phoneErrorSpan = document.createElement('span');
    phoneErrorSpan.className = 'Error';
    phoneErrorSpan.id = 'phoneError';
    form.appendChild(phoneErrorSpan);
    form.appendChild(document.createElement('br'));

    // Terms and Conditions checkbox
    const termsCheckbox = document.createElement('input');
    termsCheckbox.type = 'checkbox';
    termsCheckbox.id = 'terms';
    termsCheckbox.name = 'terms';
    form.appendChild(termsCheckbox);
    termsCheckbox.addEventListener("input", outerTerms);
    const termsLabel = createLabelElement('terms', 'I agree to the ');
    const termsLink = document.createElement('a');
    termsLink.href = '#';
    termsLink.target = '_blank';
    termsLink.textContent = 'Terms and Conditions';
    termsLink.style.color = 'blue';
    termsLabel.appendChild(termsLink);
    form.appendChild(termsLabel);
    form.appendChild(document.createElement('br'));

    // Error span for Terms and Conditions
    const termsErrorSpan = document.createElement('span');
    termsErrorSpan.className = 'Error';
    termsErrorSpan.id = 'termsError';
    form.appendChild(termsErrorSpan);
    form.appendChild(document.createElement('br'));

    // Submit button




    const submitButton = document.createElement('input');
    submitButton.type = 'button';
    submitButton.className = 'button';
    submitButton.id = 'sbutton';
    submitButton.value = 'Submit';
    submitButton.onclick = saveToLocal;
    submitButton.style.cursor = 'not-allowed'
    form.appendChild(submitButton);

    root.appendChild(form);

    // Add CSS styles using DOM
    form.style.maxWidth = '500px';
    form.style.margin = '0 auto';
    form.style.padding = '20px';
    form.style.border = '1px solid #ccc';
    form.style.borderRadius = '5px';
    // form.style.backgroundColor = '#f9f9f9';
    form.style.backgroundColor = 'rgba(249, 249, 249, 0.7)'; // Apply transparency to the background color
    form.style.backdropFilter = 'blur(10px)'; // Apply blur effect to the background
    
    

    const inputs = form.getElementsByTagName('input');
    Array.from(inputs).forEach((input, index) => {
        if (input.type !== 'radio' && input.type !== 'checkbox') {
            input.style.width = '95%';
            input.style.padding = '10px';
            input.style.marginBottom = '10px';
            input.style.border = '1px solid #ccc';
            input.style.borderRadius = '5px';
            input.style.transition = 'border-color 0.3s ease';
        }
    });
    
    const labels = form.getElementsByTagName('label');
    Array.from(labels).forEach((label, index) => {
        label.style.fontWeight = 'bold';
    });
    
    const checkboxes = form.querySelectorAll('input[type="checkbox"]');
    Array.from(checkboxes).forEach((checkbox, index) => {
        checkbox.style.marginRight = '5px';
    });
    
    const buttons = form.getElementsByClassName('button');
    Array.from(buttons).forEach((button, index) => {
        button.style.backgroundColor = '#4CAF50';
        button.style.color = 'white';
        button.style.padding = '10px 20px';
        button.style.marginTop = '10px';
        button.style.border = 'none';
        button.style.borderRadius = '5px';
        button.style.cursor = 'not-allowed';
        button.disabled = true;
        button.style.width = '100%';
    });
    
    const errors = form.getElementsByClassName('Error');
    Array.from(errors).forEach((error, index) => {
        error.style.color = '#B22222';
        error.style.fontSize = '14px';
    });
    

   // Add CSS styles using DOM
   form.style.maxWidth = '500px';
   form.style.padding = '20px';
   form.style.borderRadius = '5px';
   form.style.background = 'opaque';
   form.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)'; // Box shadow on all sides
   root.style.backgroundColor = "red"; // Background color with transparency
    root.style.width="100%";
    form.style.opacity = '1'
    
    root.style.color='black';
    root.style.background = `
    url("https://images.pexels.com/photos/574070/pexels-photo-574070.jpeg?cs=srgb&dl=pexels-goumbik-574070.jpg&fm=jpg"),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(30, 30, 30, 0.1))
`;
    
    

    root.style.backgroundRepeat = 'no-repeat'; 
    root.style.backgroundSize = 'cover'; 
    root.style.backgroundPosition = 'center'; 
    root.style.height="100vh"

   
    root.style.display = 'flex';
    root.style.justifyContent = 'center';
    root.style.alignItems = 'center';
    form.style.width="100%"
});
