import validator from 'validator';


export const validateEmail = (email) => {
    return validator.isEmail(email);
}

export const validatePassword = (password) => {
    return validator.isStrongPassword(password);
}