import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'
// import { Search } from './Search';

const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false);

    return (
        <header>
            <nav className="navbar">
                <div className='navbar-icons'>
                    <Link to='/' className="navbar-icons_brand">
                        <img alt="unlimint-logo" src="https://www.unlimint.com/wp-content/themes/unlimint/assets/images/logo.svg"></img>
                    </Link>
                    <button onClick={() => { setMobileMenu(!mobileMenu) }} className={`navbar-icons_burger ${mobileMenu && 'expanded'}`}></button>
                </div>
                {mobileMenu && <ul className="nav-list_mobile">
                    {/* <li className="nav-item">
                        <Search projectIds={''} />
                    </li> */}
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/doc-guides">Integration Guides</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/api-reference">API Reference</NavLink>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://documenter.getpostman.com/view/10451813/SzKSTzVu" target="_blank" rel="noreferrer">Postman Collection</a>
                    </li>
                    <li className="nav-item">
                        <a className="navbar-external-link" href="https://unlimint.com/ma/" target="_blank" rel="noreferrer">Sign In</a>
                    </li>
                </ul>}
                <ul className="nav-list_desktop">
                    {/* <li className="nav-item">
                        <Search projectIds={''} />
                    </li> */}
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/doc-guides">Integration Guides</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/api-reference">API Reference</NavLink>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://documenter.getpostman.com/view/10451813/SzKSTzVu" target="_blank" rel="noreferrer">Postman Collection</a>
                    </li>
                    <li className="nav-item">
                        <a className="navbar-external-link" href="https://unlimint.com/ma/" target="_blank" rel="noreferrer">Sign In</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar