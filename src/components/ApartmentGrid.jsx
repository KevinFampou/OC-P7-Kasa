import './ApartmentGrid.scss'
import data from '../database/data'
import Card from './Card'

export default function ApartmentGrid() {

    return (
        <main className='home_apartment'>
            {data.map(apartment => {                                    
                return (
                    <Card
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