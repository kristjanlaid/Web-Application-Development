import Validations from "@/services/Validations";

export default class Validation {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    checkValid() {
        let errors = [];

        if (!Validations.ValidateEmail(this.email)) {
            errors['email'] = 'Email is not valid!'
        }

        if (!Validations.Passwordlength(this.password, 8)) {
            errors['password'] = 'Password is too short!'
        }

        if (!Validations.numbers(this.password)) {
            errors['password'] = 'Password has to have numbers!'
        }

        if (!Validations.LowerCase(this.password)) {
            errors['password'] = 'Password needs at least 2 lowercase letters!'
        }

        if (!Validations.UpperCase(this.password)) {
            errors['password'] = 'Password needs an uppercase letter!'
        }

        if (!Validations.underscore(this.password)) {
            errors['password'] = 'Password needs an underscore!'
        }

        if (!Validations.firstLetter(this.password)) {
            errors['password'] = 'Password has to start with uppercase letter!'
        }
        return errors;
    }
}