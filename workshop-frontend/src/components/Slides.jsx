import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Slides() {
    const imgs = [
        { src: '/assets/img_1.png', alt: 'Vídeo 1', link: 'https://www.youtube.com/watch?app=desktop&v=3sjHUXtZg9E' },
        { src: '/assets/img_2.png', alt: 'Vídeo 2', link: 'https://www.youtube.com/watch?v=89C5spS1JFk' },
        { src: '/assets/img_3.png', alt: 'Vídeo 3', link: 'https://www.youtube.com/watch?v=yAT1MLn6xL8' },
        { src: '/assets/img_4.png', alt: 'Vídeo 4', link: 'https://www.youtube.com/watch?v=MQ5-94ek6Lw' },
    ]

    const settings = {
        Infinite: true, 
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 4000
    }

    return (
        <div className="m-4 sm:m-8 md:m-16 rounded-xl p-6 sm:p-8 md:p-9 bg-secondary border-2 border-primary w-full sm:w-[90%] md:w-[700px] h-auto">
            <div>
                <Slider {...settings}>
                    {imgs.map((image, index) => (
                        <div key={index}>
                            <a href={image.link} target="_blank" rel="noopener noreferrer">
                            <img src={image.src} alt={image.alt}/> 
                            </a>
                        </div>
                    ))}
                </Slider>
            </div>  
        </div>
        
    )
}

export default Slides;