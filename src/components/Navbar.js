import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function Navbar() {

    const [click,setClick] = useState(false);
    const [button,setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = ()=> {
        if(window.innerWidth <= 960) {
            setButton(false);
        }else {
            setButton(true);
        }
    };

    window.addEventListener('resize',showButton);


    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        TRAVEL JAPAN <i class="fas fa-globe-asia"></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className= {click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/aboutJapan' className='nav-links' onClick={closeMobileMenu}>
                                About Japan
                            </Link>
                        </li><li className='nav-item'>
                            <Link to='/destignations' className='nav-links' onClick={closeMobileMenu}>
                                Destignations
                            </Link>
                            <li className='nav-item'>
                            <Link to='/maps' className='nav-links' onClick={closeMobileMenu}>
                                Maps
                            </Link>
                            <li className='nav-item'>
                            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                                Products
                            </Link>
                        </li>
                            <li className='nav-item'>
                            <Link to='/signUp' className='nav-links' onClick={closeMobileMenu}>
                                Sign Up!
                            </Link>
                        </li>
                        </li>
                        </li>
                    </ul>
                    {button && <button buttonStyle="btn--outline">Sign Up!</button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar
