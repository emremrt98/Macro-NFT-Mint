import './nav.css';
import { FiSearch } from 'react-icons/fi';
import Logo from '../../assets/logo.svg'
import { Link } from "react-router-dom";


export default function Nav({ btnState, setBtnState }) {

    return (
        <div className='nav-contain'>
            <div>
                <Link to="/home"><img className='logo ' src={Logo} alt="" srcSet='' /></Link>
            </div>
            <nav className="navbar">
                <ul>
                    <li><a href="#">Explore</a></li>
                    <li><a href="#">Activity</a></li>
                    <li><a href="#">How it works</a></li>
                </ul>
            </nav>
            <form className='nav-form'>
                <input className='search-input' type="text" placeholder='Search' /><FiSearch className='search-icon' />

            </form>
            <Link to="/minter">{
                btnState ? <button onClick={() => setBtnState(false)} type='button'>Connect Wallet</button>
                    : null

            }</Link>
        </div>
    )

}