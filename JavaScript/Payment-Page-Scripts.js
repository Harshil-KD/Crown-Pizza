document.addEventListener("DOMContentLoaded", function () {
    const inputName = document.getElementById('inputName');
    const inputEmail = document.getElementById('inputEmail');
    const inputNumber = document.getElementById('inputNumber');
    const expiryDate = document.getElementById('expiryDate');
    const cvcCode = document.getElementById('CVCcode');
    const orderButton = document.getElementById('orderButton');
    const myModal = new bootstrap.Modal(document.getElementById('orderModal'), {
        backdrop: 'static',
        keyboard: false
    });

    inputEmail.addEventListener('blur', function () {
        const email = inputEmail.value.trim();
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        if (!isValidEmail) {
            showError('Please enter a valid email address.');
        } else {
            clearError();
        }
    });

    inputNumber.addEventListener('blur', function () {
        const cardNum = inputNumber.value.trim();
        if (cardNum.length !== 12 || isNaN(cardNum)) {
            showError('Card number should be a 12-digit number.');
        } else {
            clearError();
        }
    });

    expiryDate.addEventListener('blur', function () {
        const enteredDate = new Date(expiryDate.value);
        const today = new Date();
        if (enteredDate <= today) {
            showError('Expiry date should be greater than today.');
        } else {
            clearError();
        }
    });

    cvcCode.addEventListener('blur', function () {
        const cvc = cvcCode.value.trim();
        if (cvc.length !== 3 || isNaN(cvc)) {
            showError('CVC code should be a 3-digit number.');
        } else {
            clearError();
        }
    });

    function showError(message) {
        const errorMessages = document.getElementById('errorMessages');
        errorMessages.innerHTML = `<p>${message}</p>`;
    }

    function clearError() {
        const errorMessages = document.getElementById('errorMessages');
        errorMessages.innerHTML = '';
    }

    orderButton.addEventListener('click', function (event) {
        event.preventDefault();
        const fields = [inputName, inputEmail, inputNumber, expiryDate, cvcCode];
        let allFieldsFilled = true;

        fields.forEach(field => {
            if (field.value.trim() === '') {
                showError(`Please fill in ${field.previousElementSibling.textContent.trim().slice(0, -1)}.`);
                allFieldsFilled = false;
            }
        });

        if (allFieldsFilled) {
            clearError();
            console.log('All fields are valid and filled. Proceeding with the order...');
            myModal.show(); // Show the modal if all fields are valid and filled
        } else {
            console.log('Please fill in all required fields.');
        }
    });
});
