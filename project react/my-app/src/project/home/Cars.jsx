import { useSelector } from "react-redux";
import BasicExample from "./BasicExample";
import './style.css';
import { Nav } from "./Nav";

export const Cars = () => {
    const cars = useSelector(store => store.Cars);
console.log(cars);
    return <>
        <Nav></Nav>
        <div className="cars-container">
            <div className="w1"></div>
            {cars.map((item) => <BasicExample className="card" img={item.Image} codeModel={item.modelCar} year={item.yearbook} place={item.Numplaces} city={item.city} availble={item.isvacant} codeCar={item.codeCar}></BasicExample>)}
        </div>
    </>;
};