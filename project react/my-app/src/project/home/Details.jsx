import React from 'react';
import './style.css';
import swal from 'sweetalert';
import { useDispatch, useSelector } from 'react-redux';
import { setAvailable, setCount1, setaddQUser } from '../login/data/Action';
import { FaCalendarAlt, FaUserFriends, FaGasPump, FaDollarSign } from 'react-icons/fa';
import { GiGearStick, GiAutoRepair } from 'react-icons/gi';

export const Details = (props) => {
    const { img, codeCar, detailsModel, onClose } = props;
    const Cars = useSelector(store => store.Cars);
    const car = Cars.find(c => c.codeCar === codeCar);
    const countQ = useSelector(store => store.countQ);
    const dispatch = useDispatch();
    const currentUser = useSelector(store => store.currentUser);

    const d1 = new Date();
    const hour = d1.toTimeString().split(' ')[0];
    const date = d1.toISOString().split('T')[0];

    const question = useSelector(store => store.theQuestions);

    const send = () => {
        const countQ1 = countQ + 1;
        dispatch(setCount1(countQ1));

        const q1 = {
            QuestionCode: countQ1,
            userCode: currentUser.code,
            carCode: codeCar,
            dateQuestion: date,
            timeQuestion: hour
        };

        dispatch(setaddQUser(q1));

        swal({
            title: `הזמנה מספר: ${countQ1}`,
            text: 'תודה שהשתמשתם בשירותינו👍',
            icon: 'success',
            button: 'ok',
        }).then(() => {
            onClose();
            dispatch(setAvailable(codeCar));
        });
    };

    const driveTypeIcon = car.AutomaticOrManual === 'אוטומטי' ? <GiAutoRepair className="icon-light" /> : <GiGearStick className="icon-light" />;

    return (
        <div className="details">
            <button onClick={onClose} className="close">✖</button>
            <div className="details-content">
                <div className="image-container">
                    <img src={img} alt="Car" className='g1' />
                </div>
                <div className="info-container">
                    <h1>{detailsModel.company} {detailsModel.model}</h1>
                    <h3><FaCalendarAlt className="icon-light" /> שנת יצור: {car.yearbook}</h3>
                    <h3><FaUserFriends className="icon-light" /> מספר המקומות: {car.Numplaces}</h3>
                    <h3>{driveTypeIcon} סוג הנעה: {car.AutomaticOrManual}</h3>
                    <h3><FaGasPump className="icon-light" /> צריכת דלק לקילומטר: {car.BalanceInLiters}</h3>
                    <h3><FaDollarSign className="icon-light" /> מחיר לשעה: {car.pricePerHour}</h3>
                    <button className="booking-button" onClick={send}>הזמנה</button>
                </div>
            </div>
        </div>
    );
};
