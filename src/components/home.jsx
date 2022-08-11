import Navbar from './navbar/nav';
import Body from './body/body';
import { useState } from 'react';
export default function Home() {
    const [btnState, setBtnState] = useState(true);
    return (
        <div>
            <Navbar btnState = {btnState} setBtnState = {setBtnState} />
            <Body />
        </div>
    )
}