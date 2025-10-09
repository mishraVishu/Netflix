export const checkValidity = (email:string, password:string,name:string) => {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password);
    const isValidName =  name === "" || /^[a-zA-Z]+(?: [a-zA-Z]+)+$/.test(name)

    if(!isEmailValid) return "Email is not correct";
    if(!isPasswordValid) return "Password should contain 8 letter and atleast one small letter and one capital letter and symbols";
    if(!isValidName) return "Enter full name ,name should contain letters only"

    return null;
};