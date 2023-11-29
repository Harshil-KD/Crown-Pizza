// document.addEventListener("DOMContentLoaded", function () {
//     const inputName = document.getElementById('inputName');
//     const inputEmail = document.getElementById('inputEmail');
//     const inputNumber = document.getElementById('inputNumber');
//     const expiryDate = document.getElementById('expiryDate');
//     const cvcCode = document.getElementById('CVCcode');
//     const orderButton = document.getElementById('orderButton');

//     inputEmail.addEventListener('blur', function () {
//         const email = inputEmail.value.trim();
//         const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//         if (!isValidEmail) {
//             showError('Please enter a valid email address.');
//         } else {
//             clearError();
//         }
//     });

//     inputNumber.addEventListener('blur', function () {
//         const cardNum = inputNumber.value.trim();
//         if (cardNum.length !== 12 || isNaN(cardNum)) {
//             showError('Card number should be a 12-digit number.');
//         } else {
//             clearError();
//         }
//     });

//     expiryDate.addEventListener('blur', function () {
//         const enteredDate = new Date(expiryDate.value);
//         const today = new Date();
//         if (enteredDate <= today) {
//             showError('Expiry date should be greater than today.');
//         } else {
//             clearError();
//         }
//     });

//     cvcCode.addEventListener('blur', function () {
//         const cvc = cvcCode.value.trim();
//         if (cvc.length !== 3 || isNaN(cvc)) {
//             showError('CVC code should be a 3-digit number.');
//         } else {
//             clearError();
//         }
//     });

//     function showError(message) {
//         const errorMessages = document.getElementById('errorMessages');
//         errorMessages.innerHTML = `<p>${message}</p>`;
//     }

//     function clearError() {
//         const errorMessages = document.getElementById('errorMessages');
//         errorMessages.innerHTML = '';
//     }

// });

// orderButton.addEventListener('click', function (event) {
//     event.preventDefault();
//     const fields = [inputName, inputEmail, inputNumber, expiryDate, cvcCode];
//     let allFieldsFilled = true;

//     fields.forEach(field => {
//         if (field.value.trim() === '') {
//             showError(`Please fill in ${field.previousElementSibling.textContent.trim().slice(0, -1)}.`);
//             allFieldsFilled = false;
//         }
//     });

//     if (allFieldsFilled) {
//         clearError();
//         console.log('All fields are valid and filled. Proceeding with the order...');
//         // Here you can add further logic to submit the form or proceed with the order.
//     } else {
//         console.log('Please fill in all required fields.');
//     }
// });

// function showError(message) {
//     const errorMessages = document.getElementById('errorMessages');
//     errorMessages.innerHTML = `<p>${message}</p>`;
// }

// function clearError() {
//     const errorMessages = document.getElementById('errorMessages');
//     errorMessages.innerHTML = '';
// }

// document.addEventListener('DOMContentLoaded', function () {
//     const myModal = new bootstrap.Modal(document.querySelector('.modal')); // Select your modal

//     // Trigger modal display
//     function showModal() {
//         myModal.show();
//     }

//     // Close modal
//     function closeModal() {
//         myModal.hide();
//     }

//     // Example: Open modal when the page loads
//     // You can trigger this function based on a specific event or condition
//     showModal();

//     // Example: Close modal when clicking the "Close" button within the modal
//     const closeModalButtons = document.querySelectorAll('[data-bs-dismiss="modal"]');
//     closeModalButtons.forEach(function (button) {
//         button.addEventListener('click', closeModal);
//     });

//     // Example: Open modal when a specific button is clicked
//     const openModalButton = document.getElementById('orderButton'); // Change this to your desired trigger element
//     openModalButton.addEventListener('click', showModal);
// });

document.addEventListener('DOMContentLoaded', function () {
    const myModal = new bootstrap.Modal(document.getElementById('myModal'));

    function showModal() {
        myModal.show();
    }

    function hideModal() {
        myModal.hide();
    }

    function validateForm() {
        const inputName = document.getElementById('inputName').value;
        const inputEmail = document.getElementById('inputEmail').value;
        const inputNumber = document.getElementById('inputNumber').value;
        const expiryDate = document.getElementById('expiryDate').value;
        const cvcCode = document.getElementById('CVCcode').value;

        inputEmail.addEventListener('blur', function () {
            const email = inputEmail.value.trim();
            const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
            if (!isValidEmail) {
                showError('Please enter a valid email address.');
                return false;
            } else {
                clearError();
            }
        });

        inputNumber.addEventListener('blur', function () {
            const cardNum = inputNumber.value.trim();
            if (cardNum.length !== 12 || isNaN(cardNum)) {
                showError('Card number should be a 12-digit number.');
                return false;
            } else {
                clearError();
            }
        });

        expiryDate.addEventListener('blur', function () {
            const enteredDate = new Date(expiryDate.value);
            const today = new Date();
            if (enteredDate <= today) {
                showError('Expiry date should be greater than today.');
                return false;
            } else {
                clearError();
            }
        });

        cvcCode.addEventListener('blur', function () {
            const cvc = cvcCode.value.trim();
            if (cvc.length !== 3 || isNaN(cvc)) {
                showError('CVC code should be a 3-digit number.');
                return false;
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

        return true;
    }

    const orderButton = document.getElementById('orderButton');
    orderButton.addEventListener('click', function (event) {
        event.preventDefault();

        if (validateForm()) {
            showModal();
        }
    });

    // Close modal when the "Close" buttons within the modal are clicked
    const closeModalButtons = document.querySelectorAll('[data-bs-dismiss="modal"]');
    closeModalButtons.forEach(function (button) {
        button.addEventListener('click', hideModal);
    });
});
