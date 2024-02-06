export function validateFormData({email, password, name}) {
    const isValidEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const isValidPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z]).{6,}$/.test(password);

    if(!isValidEmail) return "Please enter valid a email.";
    if(!isValidPassword) return "Please enter valid a password.";

    return null;
}