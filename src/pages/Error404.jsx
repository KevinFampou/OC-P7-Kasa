import './Error404.scss'
import Header from "../components/Header";
import { Link } from 'react-router-dom';

export default function NotFound() {
	return (
		<div className='error404'>
			<Header />
			<div className="error404_infos">
				<h1 className='error404_infos_title'>404</h1>
				<p className='error404_infos_content'>La page que vous recherchez n'existe pas.</p>
			</div>
				<Link className='error404_infos_return' to='/'>Retourner sur la page d'accueil</Link>
		</div>
	)
}