import React, { useRef, useState } from 'react';
import './style.css';
import { useDispatch } from 'react-redux';
import { setCar } from '../login/data/Action'
import swal from 'sweetalert';

export const Update = (props) => {

    const { codeCar, onClose } = props;
    const [chenge, setChenge] = useState('false')
    const price = useRef()
    const km = useRef()
    const street = useRef()
    const city = useRef()
    const dispatch = useDispatch()
    const send = () => {
        const price1 = price.current.value
        const km1 = km.current.value
        const street1 = street.current.value
        const city1 = city.current.value
        if (+price1 != 0)
            dispatch(setCar(codeCar, "pricePerHour", price1))
        if (+km1 != 0)
            dispatch(setCar(codeCar, "BalanceInLiters", km1))
        if (street1 != "בחר שינוי רחוב")
            dispatch(setCar(codeCar, "Street", street1))
        if (city1 != "בחר שינוי עיר")
            dispatch(setCar(codeCar, "city", city1))
        swal({
            title: `השינויים עודכנו בהצלחה!`,
            text: 'תודה שהשתמשתם בשירותינו👍',
            icon: 'success',
            button: 'ok',
        }).then(() => {
            onClose();
        });

    }
    const set = (e) => {
        setChenge('true')
    }
    return <>
        <div className="up">
            <h1>שינוי בפרטי רכב</h1>
            <div className='divInput'>
                <button onClick={onClose} className="close">✖</button>
                <div className="input-box2">
                    <input type="text" placeholder="שינוי מחיר לשעה" onBlur={(e) => set(e.target.value)} ref={price} />
                    <i className='bx bxs-user'></i>
                </div>
                <div className="input-box2">
                    <input type="text" placeholder="שינוי צריכה לקילומטר" onblur={(e) => set(e.target.value)} ref={km} />
                    <i className='bx bxs-user'></i>
                </div>
                <select className="input-box2" id='n2' onblur={(e) => set(e.target.value)} ref={street}>
                    <option disabled selected >בחר שינוי רחוב</option>
                    <option id="o">הצפירה 25</option>
                    <option id="o">המרכבה</option>
                    <option id="o">אוסישקין 1</option>
                    <option id="o">משה ברעם 26</option>
                    <option id="o">דרך 131</option>
                </select>
                <select className="input-box2" id='n2' onblur={(e) => set(e.target.value)} ref={city}>
                    <option disabled selected>בחר שינוי עיר</option>
                    <option id="o">נתניה</option>
                    <option id="o">חולון</option>
                    <option id="o">תל אביב</option>
                    <option id="o">ירושלים</option>
                    <option id="o">חיפה</option>
                </select>
                <button type="submit" className="btn1" disabled={chenge == 'false'} onClick={send}>Update</button>
            </div>
        </div>

    </>
}