export const initialErrors = {
    nameError: { status: false, error: "" },
    emailError: { status: false, error: "" },
    passwordError: { status: false, error: "" }
}

export const validateUserData = (userData, validateForSignUp = false) => {
    let success = true;
    let newErrors = {};
    const { password, email, name } = userData

    if (!email) {

        newErrors = {
            ...newErrors,
            emailError: { status: true, error: 'Email id can not be Empty' }
        };
        success = false;

    } else if (!isValidEmail(email)) {
        newErrors = {
            ...newErrors,
            emailError: { status: true, error: 'Invalid email format.' }
        };
        success = false;
    }



    if (!password) {

        newErrors = {
            ...newErrors,
            passwordError: {
                status: true,
                error: 'Password is required.'
            }
        };
        success = false;
    } else if (password.length < 8) {

        newErrors = {
            ...newErrors,
            passwordError: {
                status: true,
                error: 'Password should be at least 8 characters long.'
            }
        };
        success = false;
    }

    if (validateForSignUp && !name) {


        newErrors = {
            ...newErrors,
            nameError: {
                status: true,
                error: 'Name is required.'
            }
        };
        success = false;
    }

    return { success, newErrors };
};


function isValidEmail(email) {

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}