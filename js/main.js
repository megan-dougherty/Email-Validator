function validateEmail() {
	var emailInput = document.getElementById('emailInput').value
	var regex = /^[a-z0-9._%-]+@[a-z0-9.-]+\.[a-z]{2,5}$/
	console.log(regex.test(emailInput))
}

document.getElementById("button").addEventListener("click", validateEmail,false)