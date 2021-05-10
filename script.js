const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else if(usernameValue <= 1 ){
		setErrorFor(username, 'User name should be between 2 and 10 words')
	} else if(usernameValue >= 11 ){
		setErrorFor(username, 'User name should be between 2 and 10 words')
	}
	 else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else if(passwordValue <= 5 ){
		setErrorFor(password, 'Password should be between 6 and 12 words')
	}else if(passwordValue >= 13 ){
		setErrorFor(password, 'Password should be btween 6 and 12 words')
	}else if(passwordValue (/[0-9]/) < 0){
		setErrorFor(password, 'Password should have a number')
	}else if(passwordValue (/[A-Z]/) < 0){
		setErrorFor(password, 'Password should have a Capital Letter')
	}
	else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Confirm Password cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


function validate(){
	var pass = document.getElementById('password');
	var special_char = document.getElementById('special_char');
	var number = document.getElementById('number');
	var length = document.getElementById('length');
}

function checkButton() {  
	var getSelectedValue = document.querySelector( 
		'input[name="1"]:checked'); 
	  
	if(getSelectedValue != null) { 
		document.getElementById("disp").innerHTML 
			= getSelectedValue.value 
			+ " is selected"; 
	} 
	else { 
		document.getElementById("error").innerHTML 
			= "*Select user or admin"; 
	} 
}  