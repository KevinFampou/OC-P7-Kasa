import './home.scss'
import Header from '../components/Header'
import Banner from '../components/Banner'
import ApartmentGrid from '../components/ApartmentGrid'
import Footer from '../components/Footer'

export default function Home() {
	return (
		<div className='home'>
			<Header />
			<Banner />
            <ApartmentGrid />
			<Footer />
		</div>
	)
}