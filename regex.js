const regex = {
    name: /^[a-zA-Z\s]+$/,
    email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    //password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()-_=+{};:,<.>]).{8,}$/,
    cNumber : /\d/,
    cUpperCase : /[A-Z]/,
    cLowerCase : /[a-z]/,
    cSymbol : /[!@#$%^&*()-_=+{};:,<.>]/,
    dob: /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/,
    phone: /^\d{10}$/
};

export default regex;