import './nav.css';
import { FiSearch } from 'react-icons/fi';
import Logo from '../../assets/logo.svg'
export default function Nav() {
    return (
        <div className='nav-contain'>
            <div>
                <img className='logo ' src={Logo} alt="" srcSet='' />

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
            <button type='button'>Connect Wallet</button>
        </div>
    )

}