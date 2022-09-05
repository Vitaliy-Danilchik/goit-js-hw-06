const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener("blur", (event) => {
	if (event.currentTarget.value.length === Number(validationInput.dataset.length)) {
		validationInput.classList.remove("invalid");
		return validationInput.classList.add("valid");
	}
	else {
		return validationInput.classList.add("invalid");
	}
})