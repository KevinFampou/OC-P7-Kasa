import './Lodging.scss'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import data from '../database/data'
import Header from "../components/Header";
import SlideShow from "../components/Slideshow"
import Footer from "../components/Footer";
import Collapse from '../components/Collapse';
import greyStar from '../assets/grey_star.png';
import redStar from '../assets/red_star.png';


export default function Lodging() {
	
	const [imageSlideShow, setImageSlideShow] = useState([]);

	const idLodging = useParams('id').id;
	const targetLodging = data.filter(apartment => apartment.id === idLodging);
	
	useEffect(() => {
		const targetLodging = data.filter(apartment => apartment.id === idLodging);
		setImageSlideShow(targetLodging[0].pictures);
	}, [idLodging]);

	const name = targetLodging[0].host.name.split(' '); 
	const rating = targetLodging[0].rating;
	const description  = targetLodging[0].description;
	const equipments = targetLodging[0].equipments;

	return (
		<>
			<Header/>
			<SlideShow imageSlideShow={imageSlideShow}/>
			<main className="lodging">
				<div className="lodging_content">
					<div className="lodging_content_infos">
						<h1>{targetLodging[0].title}</h1>
						<p>{targetLodging[0].location}</p>
						<div>
							{targetLodging[0].tags.map((tag, index) => {
								return (
									<button key={index}>{tag}</button>
								)
							})}
						</div>
					</div>
					<div className="lodging_content_host">
						<div>
							<div className='lodging_content_host_name'>
								<span>{name[0]}</span>
								<span>{name[1]}</span>
							</div>
							<img src={targetLodging[0].host.picture} alt="host of this lodging" />
						</div>
							
						<div className="lodging_content_host_stars">
							{[...Array(5)].map((star, index) => {
								const ratingValue = index + 1;
								return (
									<img key={index} src={ratingValue <= rating ? redStar : greyStar} alt="star" />
								)
							})}
						</div>
					</div>
				</div>
				<div className="lodging_collapse">
					<div className="lodging_collapse_item">
						<Collapse title={'Description'} content={description} />	
					</div>
					<div className="lodging_collapse_item">
						<Collapse title={'Équipements'} content={equipments}/>
					</div>	
				</div>
			</main>
			<Footer/>
		</>
	)
}
