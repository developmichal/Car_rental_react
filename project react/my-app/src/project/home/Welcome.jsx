import { useRef, useState } from "react"
import { Nav } from "./Nav"
import './style.css'
import { Hcar } from "./Hcar"
import { Home } from "./Home"

export const Welcome = () => {

    return <>
        <Nav></Nav>
        <Home></Home>
    </>

}
export default Welcome;