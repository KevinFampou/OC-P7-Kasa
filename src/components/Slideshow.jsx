import './Slideshow.scss'
import ArrowRight from '../assets/chevron_carousel_right.png'
import ArrowLeft from '../assets/chevron_carousel_left.png'
import { useState } from 'react'

export default function SlideShow({imageSlideShow}) {

    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex(currentIndex + 1)
        if(currentIndex === imageSlideShow.length - 1)
            setCurrentIndex(0)
    }

    const prevSlide = () => {
        setCurrentIndex(currentIndex - 1)
        if(currentIndex === 0)
            setCurrentIndex(imageSlideShow.length - 1)
    }

    return (
        <section style={{backgroundImage : `url(${imageSlideShow[currentIndex]})`}} className='slideShow'>
            {imageSlideShow.length > 1 && 
                <>
                    <img 
                        className='slideShow_arrow slideShow_arrow_right' 
                        src={ArrowRight} 
                        alt="show next slideShow" 
                        onClick={nextSlide}
                    />
                    <img 
                        className='slideShow_arrow slideShow_arrow_left' 
                        src={ArrowLeft} 
                        alt="show previous slideShow" 
                        onClick={prevSlide}
                    />
                    <p className='slideCount'>{currentIndex + 1} / {imageSlideShow.length}</p>
                </>
            } 
        </section>
    )
}