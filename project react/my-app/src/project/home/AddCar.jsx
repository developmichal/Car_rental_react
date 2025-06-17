import { useDispatch, useSelector } from "react-redux";
import { addCar } from "../login/data/Action";
import store from "../login/data/Store";
import { useNavigate } from "react-router";
import swal from "sweetalert";

export const AddCar = (props) => {
    const { code, description } = props;
    console.log(code);
    const navigate = useNavigate()
    const drv = useSelector(store => store.driveTypeArr)
    console.log(drv);
    const dispatch = useDispatch()
    console.log(description);

    const send = (event) => {
        debugger
        event.preventDefault();
        const licenseNum = event.target[0].value;
        const Numplaces = event.target[1].value;
        const Image = event.target[2].value;
        const yearbook = event.target[3].value;
        const AutomaticOrManual = event.target[4].value;
        const pricePerHour = event.target[5].value;
        const km = event.target[6].value;
        const BalanceInLiters = event.target[7].value;
        const Street = event.target[8].value;
        const city = event.target[9].value;
        const d = drv.filter(item => item.description === description)[0]
        const car = {
            codeCar: code,
            licenseNum,
            modelCar: code,
            Numplaces,
            Image: `${process.env.PUBLIC_URL}/pictures ${Image}`,
            yearbook,
            AutomaticOrManual,
            pricePerHour,
            driveType: d.driveTypeCar,
            pricePerHour,
            km,
            BalanceInLiters,
            Street,
            city,
            isvacant: "true"

        }
        console.log(car);
        dispatch(addCar(car));
        swal({
            title: `הרכב הוסף בהצלחה`,
            text: 'המשך יום טוב!',
            icon: 'success',
            button: 'ok',
        }).then(() => {
            navigate('/');
        });

    }

    return <>
        <form onSubmit={send} >
            <div className="box">
                <div className="input-box">
                    <input type="number" placeholder="לוחית רישוי" required />
                    <i className='bx bxs-user'></i>
                </div>

                <div className="input-box" >
                    <input type="number" placeholder="מספר מקומות" required />
                    <i className='bx bxs-lock-alt'></i>
                </div>

                <div className="input-box">
                    <input type="text" placeholder="הכנס ניתוב תמונה car/26.png" required />
                    <i className='bx bxs-lock-alt'></i>
                </div>

                <div className="input-box">
                    <input type="number" placeholder="שנת ייצור" required />
                    <i className='bx bxs-lock-alt'></i>
                </div>

                <div className="input-box" >
                    <input type="text" placeholder="האם אוטומטי?" required />
                    <i className='bx bxs-lock-alt'></i>
                </div>

                <div className="input-box" >
                    <input type="number" placeholder="מחיר לשעה" required />
                    <i className='bx bxs-lock-alt'></i>
                </div>

                <div className="input-box" >
                    <input type="number" placeholder="צריכת דלק לקמש" required />
                    <i className='bx bxs-lock-alt'></i>
                </div>
                <div className="input-box" >
                    <input type="number" placeholder="יתירה בליטרים" required />
                    <i className='bx bxs-lock-alt'></i>
                </div>
                <select className="input-box" id="in">
                    <option disabled selected>בחר רחוב</option>
                    <option id="o">הצפירה 25</option>
                    <option id="o">המרכבה</option>
                    <option id="o">אוסישקין 1</option>
                    <option id="o">משה ברעם 26</option>
                    <option id="o">דרך 131</option>
                </select>
                <select className="input-box" id="in">
                    <option disabled selected>בחר עיר</option>
                    <option id="o">נתניה</option>
                    <option id="o">חולון</option>
                    <option id="o">תל אביב</option>
                    <option id="o">ירושלים</option>
                    <option id="o">חיפה</option>
                </select>
                <button type="submit" className="btn">הוסף</button>
            </div>
        </form>
    </>
}