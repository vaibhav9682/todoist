import { Link, Outlet } from 'react-router-dom';
import style from './navbar.module.css'
import logo from '../../../media/logo.png'

const Navbar = () => {

    return (
        <>        <div className={style.navbarBox}>

            <div className={style.leftSection}>
                <Link to='/'>
                    <img src={logo} alt='logo' />
                </Link>
                <Link><h2>todoist</h2></Link>

            </div>

            <div className={style.rightSection}>
                <Link>Features</Link>
                <Link>Templates</Link>
                <Link>For Teams</Link>
                <Link>Resources</Link>
                <Link>Pricing</Link>
                <span>|</span>
                <Link>Log-in</Link>
                <Link className={style.redBtn}>Start for free</Link>


            </div>

        </div>
        <Outlet />
        </>

    )
}

export default Navbar;