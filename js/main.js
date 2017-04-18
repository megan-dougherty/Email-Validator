

function validateEmail() {
	var emailInput = document.getElementById('emailInput').value
	var regex = /^[a-z0-9._%-]+@[a-z0-9.-]+\.[a-z]{2,5}$/
	console.log(regex.test(emailInput))

	if(emailInput == '')
		results.textContent = "You forgot to enter a valid email address"
}	
	if(emailInput == 'regex')
		results.textContent = "Success"

document.getElementById("button").addEventListener("click", validateEmail,false)