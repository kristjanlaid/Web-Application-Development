export default class Validations {
    static ValidateEmail(email) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

    }

    static Passwordlength(password, minLength, maxLength) {
        return !(password.length < minLength || password.length > maxLength);

    }

    static UpperCase(password) {
        const uppercaseletters =  /[A-Z]/g;
        return password.match(uppercaseletters);
    }

    static LowerCase(password) {
        const lowercaseletters =  /[a-z]{2,}/g;
        return password.match(lowercaseletters);
    }

    static numbers(password) {
        const numbers =  /[0-9]/g;
        return password.match(numbers);
    }

    static underscore(password) {
        const underscores =  /[_]/g;
        return password.match(underscores);
    }

    static firstLetter(password) {
        const first =  /^[A-Z]/;
        return password.match(first);
    }

}