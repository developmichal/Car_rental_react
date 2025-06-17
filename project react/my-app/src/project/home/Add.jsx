import { useRef, useState } from "react";
import Nav from "./Nav"
import { useDispatch, useSelector } from "react-redux";
import { addDriveCar, addModelCar, addTypeCar, setCountDrive, setCountModel } from "../login/data/Action";
import { AddCar } from "./AddCar";
import store from "../login/data/Store";

export const Add = (props) => {
    const { description } = props
    console.log(description);
    const mod = useSelector(store => store.countModel)
    const driver = useSelector(store => store.countDrive)
    const temp1 = useSelector(store => store.typeCarArr)
    // console.log(mod);
    // console.log(driver);
    const mod1 = +(mod) + 1
    const driver1 = +(driver) + 1
    // console.log(mod1);
    // console.log(driver1);
    const dispatch = useDispatch()
    const [flag, setFlag] = useState(true)
    // console.log(temp1);

    const companyRef = useRef();
    const modelRef = useRef();
    const description1Ref = useRef();
    const priceRef = useRef();

    const send1 = (event) => {
        debugger
        setFlag(false)
        event.preventDefault();

        const t = temp1.filter(item => item.description === description)[0]

        const modelCar = {
            modelCode: `${mod1}`,
            company: companyRef.current.value,
            model: modelRef.current.value,
            carCode: t.typeCode,
        }
        console.log(modelCar);
        dispatch(addModelCar(modelCar))

        const driveType = {
            driveTypeCar: `${driver1}`,
            description: description1Ref.current.value,
            price: priceRef.current.value,
        }
        
        dispatch(addDriveCar(driveType))
        console.log(driveType);
        dispatch(setCountModel(`${mod1}`))
        dispatch(setCountDrive(`${driver1}`))
    }
   

    return <>
        {flag && <form onSubmit={send1}>

            <div className="input-box">
                <input type="text" placeholder="חברה" ref={companyRef} required />
                <i className='bx bxs-user'></i>
            </div>
            <div className="input-box">
                <input type="text" placeholder="מודל" ref={modelRef} required />
                <i className='bx bxs-user'></i>
            </div>
            <select className="input-box" id="in" ref={description1Ref}>
                <option disabled selected>בחר סוג מנוע</option>
                <option id="o">דלק</option>
                <option id="o">סולר</option>
                <option id="o">גז</option>
                <option id="o">חשמל</option>
                <option id="o">היברידי</option>
            </select>
            <div className="input-box">
                <input type="number" placeholder="מחיר לקמ" ref={priceRef} required />
                <i className='bx bxs-user'></i>
            </div>
            <button type="submit" className="btn">הוסף</button>
        </form>}

        {!flag && <AddCar code={`${mod}`}
            description={description1Ref.current.value}>
        </AddCar>}
    </>
}
export default Add;