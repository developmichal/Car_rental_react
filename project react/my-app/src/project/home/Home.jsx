import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import './style.css';
import { Hcar } from "./Hcar";
import { useDispatch, useSelector } from 'react-redux';
import { setAvailable, setaddRetrn } from '../login/data/Action';
import InputMask from 'react-input-mask';
import swal from 'sweetalert';
import delek from './pic/3.png'

function Price(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const timeDifference = end - start;
    const daysDifference = timeDifference / (1000 * 60 * 60 * 24);
    return Math.abs(Math.round(daysDifference));
}

export const Home = () => {
    const r = useSelector(state => state.return);
    console.log(r);

    const [isDisabledInput, setIsDisabledInput] = useState(true);
    const [flag, setFlag] = useState(false);
    const [flag1, setFlag1] = useState(false);
    const [v3, setV3] = useState("");
    const [questionCode, setQuestionCode] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formValues, setFormValues] = useState({
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        nameOnCard: ''
    });
    const [formErrors, setFormErrors] = useState({});

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const refId = useRef();
    const refPlace = useRef();
    const refd = useRef();

    const questions = useSelector(state => state.theQuestions);
    const cars = useSelector(state => state.Cars);
    const users = useSelector(state => state.users);
    const currentUserCode = useSelector(state => state.currentUser.code);

    const question = questions.find(x => x.QuestionCode === parseInt(questionCode)) || {};
    const user = users.find(x => x.code === currentUserCode) || {};
    const timeQ = question.taimQuestion || '';
    const start = question.dateQuestion || '';
    const refund = new Date()
    const end = `${refund.getFullYear()}-${(refund.getMonth()) + 1}-${refund.getDate()}`
    const timeR = `${refund.getHours()}:${refund.getMinutes()}`
    const first = 24 - (parseInt(timeQ.substring(0, 2)) || 0);
    const last = parseInt(timeR.substring(0, 2)) || 0;
    const hour = Price(start, end);
    const total = parseInt(first) + parseInt(last) + parseInt(hour) * 24
    useEffect(() => {
        setFormValues({
            cardNumber: user.numCard || '',
            expiryDate: user.validity || '',
            cvv: user.cvv || '',
            nameOnCard: user.name || '',
        });
    }, [user]);

    const handleChange = () => {
        const v1 = refPlace.current.value;
        setIsDisabledInput(!v1);
    };

    const handleChange1 = () => {
        const v2 = refId.current.value;
        const v4 = refd.current.value;
        setV3(refd.current.value);
        if (v2 && v4)
            setIsDisabledInput(false);
        setQuestionCode(v2);
    };

    const send = () => {
        setFlag(true);
        setFlag1(false);
    };

    const send1 = () => {
        setFlag(false);
        setFlag1(true);
    };

    const Search = () => {
        navigate(`/carSearch/${refPlace.current.value}`);
    };

    const Search1 = () => {
        const questionExists = questions.some(x => x.QuestionCode === parseInt(questionCode));
        if (questionExists) {
            setIsModalOpen(true);
        } else {
            swal({
                title: 'מספר הזמנה לא נמצא',
                text: 'אנא בדוק את הקוד ונסה שוב.',
                icon: 'error',
                button: 'ok',
            });
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setFlag(false);
        setFlag1(false);
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormValues(prevValues => ({
            ...prevValues,
            [id]: value
        }));
    };

    const formatExpiryDate = (value) => {
        const digits = value.replace(/\D/g, '');
        const month = digits.substring(0, 2);
        const year = digits.substring(2, 4);
        return month + (year ? '/' + year : '');
    };

    const validateForm = () => {
        const errors = {};

        if (!/^\d{16}$/.test(formValues.cardNumber.replace(/\s+/g, ''))) {
            errors.cardNumber = 'מספר כרטיס אשראי חייב להיות בן 16 ספרות';
        }

        if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formValues.expiryDate)) {
            errors.expiryDate = 'תוקף לא תקין';
        }

        if (!/^\d{3}$/.test(formValues.cvv)) {
            errors.cvv = 'CVV חייב להיות בן 3 ספרות';
        }

        if (!/^[א-תa-zA-Z\s]+$/.test(formValues.nameOnCard)) {
            errors.nameOnCard = 'שם חייב להיות באותיות בלבד';
        }

        for (const [key, value] of Object.entries(formValues)) {
            if (value.trim() === '' && !errors[key]) {
                errors[key] = 'שדה זה חייב להיות מלא';
            }
        }

        return errors;
    };

    const confirmPayment = () => {
        const errors = validateForm();
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }
        swal({
            title: `!התשלום בוצע בהצלחה`,
            text: '👍 תודה',
            icon: 'success',
            button: 'ok',
        });
        const q1 = {
            ReturnCode: "",
            QuestionCode: question.QuestionCode,
            returnDate: end,
            returnTime: timeR,
            BalanceInLiters: v3,
            payment: total,
            isPayment: "true"
        };

        dispatch(setaddRetrn(q1));
        closeModal();
        const question1 = questions.find(x => x.QuestionCode === parseInt(questionCode));
        if (question1) {
            const car = cars.find(x => x.codeCar === question1.carCode);
            if (car) {
                dispatch(setAvailable(car.codeCar));
            }
        }
    };

    const b = flag ? 'rgb(255, 102, 0)' : 'white';
    const b1 = flag1 ? 'rgb(255, 102, 0)' : 'white';
    const w1 = flag ? '25vw' : '37vw';
    const m1 = flag ? '29.5vw' : '17.5vw';

    return (
        <div className="div">
            <div className="img">
                <div className="inputdiv">
                    <div className="div1">
                        <button className="but" id="but1" style={{ backgroundColor: b }} onClick={send}>השאלה</button>
                        <button className="but" id="but2" style={{ backgroundColor: b1 }} onClick={send1}>החזרה</button>
                    </div>
                    {flag &&
                        <div className="input" style={{ width: w1, marginLeft: m1 }}>
                            <select id="type" ref={refPlace} className="input-box1" onChange={handleChange}>
                                <option value="" disabled selected>מקום איסוף</option>
                                <option value="תל אביב">תל אביב | הצפירה 25</option>
                                <option value="חולון">חולון | המרכבה 36</option>
                                <option value="נתניה">נתניה | אוסישקין 1</option>
                                <option value="ירושלים">ירושלים | משה ברעם 26</option>
                                <option value="חיפה">חיפה | דרך 131</option>
                            </select>
                            <button className="input-box1" disabled={isDisabledInput} onClick={Search}>חפש</button>
                        </div>
                    }
                    {flag1 &&
                        <div className="input" style={{ width: w1, marginLeft: m1 }}>
                            <input
                                type="text"
                                ref={refId}
                                placeholder="קוד השאלה"
                                className="input-box1"
                                onChange={handleChange1}
                            />
                            <input
                                type="text"
                                ref={refd}
                                placeholder="יתרת דלק"
                                className="input-box1"
                                onChange={handleChange1}
                            />
                            <button className="input-box1" disabled={isDisabledInput} onClick={Search1}>תשלום</button>
                        </div>
                    }
                </div>
                <img src={delek} id="delek" ></img>
            </div>
            {isModalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content1" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={closeModal}>×</button>
                        <div className="modal-info-container">
                            <h2>:סה"כ לתשלום</h2>
                            <form className="payment-form">
                                <h1 style={{ color: 'rgb(255, 102, 0)' }}>{total}₪</h1>
                                <label htmlFor="cardNumber">מספר כרטיס אשראי</label>
                                <input
                                    id="cardNumber"
                                    value={formValues.cardNumber}
                                    onChange={handleInputChange}
                                />
                                {formErrors.cardNumber && <div className="error">{formErrors.cardNumber}</div>}
                                <label htmlFor="expiryDate">תוקף</label>
                                <InputMask
                                    id="expiryDate"
                                    value={formValues.expiryDate}
                                    onChange={handleInputChange}
                                    placeholder="MM/YY"
                                    mask="99/99"
                                    formatChars={{ '9': '[0-9]' }}
                                />
                                {formErrors.expiryDate && <div className="error">{formErrors.expiryDate}</div>}
                                <label htmlFor="cvv">CVV</label>
                                <input
                                    id="cvv"
                                    value={formValues.cvv}
                                    onChange={handleInputChange}
                                />
                                {formErrors.cvv && <div className="error">{formErrors.cvv}</div>}
                                <label htmlFor="nameOnCard">שם על הכרטיס</label>
                                <input
                                    id="nameOnCard"
                                    value={formValues.nameOnCard}
                                    onChange={handleInputChange}
                                />
                                {formErrors.nameOnCard && <div className="error">{formErrors.nameOnCard}</div>}
                                <button type="button" className="booking-button" onClick={confirmPayment}>אשר</button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
            <Hcar />
        </div>
    );
};

