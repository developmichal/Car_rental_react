import { useDispatch, useSelector } from "react-redux";
import './styleLogin.css';
import swal from "sweetalert";
import { addUser, setCount, setCurrentUser } from "./data/Action";
import { useNavigate } from "react-router";
import { parsePhoneNumberFromString, isValidPhoneNumber } from 'libphonenumber-js';

// פונקציה לבדוק תקינות שם משתמש
const isValidName = (name) => {
    return /^[a-zA-Zא-ת\s]+$/.test(name);
};

// פונקציה לבדוק תקינות תעודת זהות
const isValidID = (id) => {
    return /^\d{9}$/.test(id);
};

// פונקציה לבדוק תקינות מספר טלפון
const isValidPhone = (phone) => {
    try {
        const phoneNumber = parsePhoneNumberFromString(phone, 'IL'); // הגדר את קוד המדינה לישראל
        return phoneNumber && phoneNumber.isValid();
    } catch (e) {
        return false;
    }
};

// פונקציה לבדוק תקינות סיסמה
const isValidPassword = (password) => {
    return /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(password);
};

// פונקציה לבדוק תקינות מספר כרטיס אשראי
const isValidCreditCardNumber = (num) => {
    const cleaned = num.replace(/\D/g, '');

    if (cleaned.length < 13 || cleaned.length > 19) {
        return false;
    }

    let sum = 0;
    let shouldDouble = false;

    for (let i = cleaned.length - 1; i >= 0; i--) {
        let digit = parseInt(cleaned[i], 10);

        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }

        sum += digit;
        shouldDouble = !shouldDouble;
    }

    return (sum % 10 === 0);
};

// פונקציה לבדוק תקינות CVV
const isValidCVV = (cvv) => {
    return /^\d{3}$/.test(cvv);
};

export const Sign = () => {
    const navigate = useNavigate();
    const count = useSelector(store => store.count);
    console.log(count);
    const users = useSelector(store => store.users);
    const dispatch = useDispatch();
    console.log(users);

    const send = (event) => {
        event.preventDefault();
        const name = event.target[0].value;
        const id = event.target[1].value;
        const phone = event.target[2].value;
        const password = event.target[3].value;
        const numCard = event.target[4].value;
        const validity = event.target[5].value;
        const cvv = event.target[6].value;

        // בדוק תקינות השם
        if (!isValidName(name)) {
            swal('Invalid Name', 'The name must contain only letters (English or Hebrew) and spaces.', 'error');
            return;
        }

        // בדוק תקינות תעודת הזהות
        if (!isValidID(id)) {
            swal('Invalid ID', 'The ID must be exactly 9 digits long.', 'error');
            return;
        }

        // בדוק תקינות מספר הטלפון
        if (!isValidPhone(phone)) {
            swal('Invalid Phone Number', 'The phone number is invalid or not in the correct format.', 'error');
            return;
        }

        // בדוק תקינות הסיסמה
        if (!isValidPassword(password)) {
            swal('Invalid Password', 'The password must be at least 8 characters long and include at least one special character.', 'error');
            return;
        }

        // בדוק תקינות מספר כרטיס האשראי
        if (!isValidCreditCardNumber(numCard)) {
            swal('Invalid Credit Card Number', 'The credit card number is invalid.', 'error');
            return;
        }

        // בדוק תקינות ה-CVV
        if (!isValidCVV(cvv)) {
            swal('Invalid CVV', 'The CVV must be exactly 3 digits long.', 'error');
            return;
        }

        const user = {
            code: count + 1,
            name,
            id,
            phone,
            password,
            numCard,
            validity,
            cvv,
            type: 'user'
        };
        dispatch(addUser(users));
        dispatch(setCount(count + 1));
        dispatch(setCurrentUser(user));
        swal(`Hello ${user.name}`, 'Sign up successfully!', 'success');
        navigate('../home');
    };

    return (
        <div className="background">
            <div className="wrapper">
                <h1>Sign up</h1>
                <form onSubmit={send}>
                    <div className="input-box">
                        <input type="text" placeholder="Username" required />
                        <i className='bx bxs-user'></i>
                    </div>

                    <div className="input-box">
                        <input type="number" placeholder="Id" required />
                        <i className='bx bxs-lock-alt'></i>
                    </div>

                    <div className="input-box">
                        <input type="text" placeholder="Phone" required />
                        <i className='bx bxs-lock-alt'></i>
                    </div>

                    <div className="input-box">
                        <input type="password" placeholder="Password" required />
                        <i className='bx bxs-lock-alt'></i>
                    </div>

                    <div className="input-box">
                        <input type="text" placeholder="Credit Card Number" required />
                        <i className='bx bxs-lock-alt'></i>
                    </div>

                    <div className="input-box">
                        <input type="month" placeholder="Expiration Date" required />
                        <i className='bx bxs-lock-alt'></i>
                    </div>

                    <div className="input-box">
                        <input type="text" placeholder="CVV" required />
                        <i className='bx bxs-lock-alt'></i>
                    </div>

                    <button type="submit" className="btn">Sign up</button>
                </form>
            </div>
        </div>
    );
};

export default Sign;
