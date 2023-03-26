import './ApartmentGrid.scss'
import apartments from '../database/apartments'
import ApartmentCard from './ApartmentCard'

export default function ApartmentGrid() {

    return (
        <main className='home_apartment'>
            {apartments.map(apartment => {
                return (
                    <ApartmentCard
                        key={apartment.id}
                        id={apartment.id}
                        title={apartment.title}
                        cover={apartment.cover}
                    />
                )
            })}
        </main>
    )
}