import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "./data/Action";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import './styleLogin.css';

// פונקציה לבדוק תקינות תעודת זהות
const isValidID = (id) => {
    return /^\d{9}$/.test(id);
};

// פונקציה לבדוק תקינות מספר טלפון
const isValidPhone = (phone) => {
    const phoneNumber = parsePhoneNumberFromString(phone, 'IL');
    return phoneNumber && phoneNumber.isValid();
};

// פונקציה לבדוק תקינות סיסמה
const isValidPassword = (password) => {
    return /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(password);
};

export const Login = () => {
    const navigate = useNavigate();
    const users = useSelector(store => store.users);
    const dispatch = useDispatch();

    const send = (event) => {
        event.preventDefault();
        const id = event.target[0].value.trim();
        const phone = event.target[1].value.trim();
        const password = event.target[2].value.trim();

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

        const existingUser = users.find(x => x.id === id);

        if (existingUser) {
            if (existingUser.phone === phone && existingUser.password === password) {
                swal(`Hello ${existingUser.name}`, 'Sign in successfully!', 'success');
                dispatch(setCurrentUser(existingUser));
                navigate('../home');
            } else {
                swal('Invalid Credentials', 'The phone number or password is incorrect.', 'error');
            }
        } else {
            navigate('/Sign');
        }
    };

    return (
        <div className="background">
            <div className="wrapper">
                <form onSubmit={send}>
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Id" required />
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
                    <button type="submit" className="btn">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
