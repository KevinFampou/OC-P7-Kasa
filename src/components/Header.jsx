import './Header.scss'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

export default function Header() {

    const currentRoute = window.location.pathname;

    return (
		<header className='header'>
			<h1>
				<img src={Logo} alt="kasa, location d'appartements" />
			</h1>
            <nav className='nav'>
            <ul className='nav_list'>
                <li className={currentRoute === '/' ? 'nav_list_item_active' : 'nav_list_item'}>
                    <Link  to='/'>
                        Accueil
                    </Link>
                </li>
                <li className={currentRoute === '/about' ? 'nav_list_item_active' : 'nav_list_item'}>
                    <Link  to='/about'>
                        A propos
                    </Link>
                </li>
            </ul>
        </nav>
		</header>
    )
}