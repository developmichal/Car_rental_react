import { useRef, useState } from "react"
import { Add } from './Add'
import Nav from "./Nav"
import { useDispatch, useSelector } from "react-redux"
import { addTypeCar, setCountType } from "../login/data/Action"

export const AddType = () => {
    const descriptionRef = useRef()
    const dispatch = useDispatch()
    const count = useSelector(store => store.countType)
    const count1 = +(count) + 1
    const [flag, setFlag] = useState(true)
    const send = () => {
        debugger
        setFlag(false)
        const typeCar = {
            typeCode: count1,
            description: descriptionRef.current.value,
        };
        dispatch(addTypeCar(typeCar))
        dispatch(setCountType(count1))

    }
    return <>
        <Nav></Nav>
        <div className="img1" style={{ height: '70vw' }}>
            <div className="wrapper" id="v">
                <h1>הוספת רכב</h1>
                {flag && <form onSubmit={send}>
                    <div className="input-box">
                        <input type="text" placeholder="(הכנס תיאור רכב )לדוג: משפחתי) " ref={descriptionRef} required />
                        <i className='bx bxs-user'></i>
                    </div>
                    <button type="submit" className="btn">הוסף</button>
                </form>}
                {!flag && <Add description={descriptionRef.current.value}></Add>}
            </div>
        </div>

    </>
}