class FormValidation {
	constructor(loginFormElement) {
		this.formElement = loginFormElement;

		this.emailInputElement = this.formElement.querySelector('[data-login-form-email-input]');
		this.emailMessageElement = this.formElement.querySelector('[data-login-form-email-message]');

		this.passwordInputElement = this.formElement.
		querySelector('[data-login-form-password-input]');
		this.passwordMessageElement = this.formElement.querySelector('[data-login-form-password-message]');

		this.handleSubmit();
	}

	handleSubmit() {
		this.formElement.addEventListener('submit', event => {
			event.preventDefault();
			this.checkEmailInput();
			this.checkPasswordInput();
		})
	}

	checkEmailInput() {
		if(!this.emailInputElement.value.length) this.showEmailMessage();
	}

	showEmailMessage() {
		this.emailMessageElement.textContent = 'Email is required.';
			this.emailMessageElement.classList.remove('hidden');
			this.emailInputElement.classList.add('danger');
			const messageTimeout = setTimeout(() => {
				this.emailMessageElement.classList.add('hidden');
				this.emailInputElement.classList.remove('danger');
				clearTimeout(messageTimeout);
			}, 1500)
	}

	checkPasswordInput() {
		if(!this.passwordInputElement.value.length) this.showPasswordMessage();
	}

	showPasswordMessage() {
		this.passwordMessageElement.textContent = 'Password is required.';
			this.passwordMessageElement.classList.remove('hidden');
			this.passwordInputElement.classList.add('danger');
			const messageTimeout = setTimeout(() => {
				this.passwordMessageElement.classList.add('hidden');
				this.passwordInputElement.classList.remove('danger');
				clearTimeout(messageTimeout);
			}, 1500)
	}

}

const formValidation = new FormValidation(
	document.querySelector('[data-login-form]')
)
