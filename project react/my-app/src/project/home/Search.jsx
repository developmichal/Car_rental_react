import { useSelector } from "react-redux";
import BasicExample from "./BasicExample";
import './style.css';
import { Nav } from "./Nav";
import { useParams } from "react-router";

export const Search = () => {
    const params = useParams()
    console.log(params);
    const b = `${params.city}`
    console.log(b);
    debugger
    const cars = useSelector(store => store.Cars);

    const allCars = cars.filter(x => x.city == b)

    return <>
        <Nav></Nav>
        <div className="cars-container">
            <div className="w1"></div>
            {allCars.map((item) => <BasicExample className="card" img={item.Image} codeModel={item.modelCar} year={item.yearbook} place={item.Numplaces} city={item.city} availble={item.isvacant} codeCar={item.codeCar}></BasicExample>)}
        </div>
    </>;
};