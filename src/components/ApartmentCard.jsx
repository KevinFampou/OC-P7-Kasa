import './ApartmentCard.scss'
import { Link } from 'react-router-dom'

export default function ApartmentCard({id, title, cover}) {

	return (
		<Link to={`/apartment/${id}`} className="apartment_card">
			<img src={cover} alt={title} />
			<h3>{title}</h3>	
		</Link>
	)
}