function displayError(msg) {
	// display error message
	console.log(msg)
}

function isCardNumberValid(number) {
	// normally we would contact a credit card service...but we don't know how to do that yet. So to keep things simple we will only accept one number
	return number === '1234123412341234'
}


function submitHandler(event) {
	event.preventDefault();
  let errorMsg = '';
  const expYear = Number(document.querySelector('#year').value);   
const expMonth = Number(document.querySelector('#month').value);
const currentDate = new Date();
	displayError('');

  let cardNumber = document.querySelector('#cardNumber');
  const cardNum = cardNumber.value.trim();
  if (!isCardNumberValid(cardNum)) {
    errorMsg += 'Card number is not valid\n';
}

    if (2000 + expYear < currentDate.getFullYear() || (2000 + expYear === currentDate.getFullYear() && expMonth <= (currentDate.getMonth()))
    ) {
        errorMsg += 'Card is expired\n';
    }

    if (errorMsg !== '') {
		// there was an error. stop the form and display the errors.
		displayError(errorMsg)
		return;
    }
    // Success: show a confirmation message
    const formContainer = document.getElementById('credit-card-form');
    formContainer.innerHTML = '<h2>Your cart has been purchased! Thank you for your purchase.</h2>';
}
document.querySelector('#credit-card-form').addEventListener('submit', submitHandler)