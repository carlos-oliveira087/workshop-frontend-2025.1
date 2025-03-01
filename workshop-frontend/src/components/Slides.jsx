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
        <div>
            <div className="m-16 mt-11 mb-6 rounded-xl p-9 bg-secondary border-2 border-primary w-[700px] h-auto">
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
            <div className="absolute flex flex-col items-end right-28 top-28 space-y-7">
                <h1 className="text-2xl font-bold">Top 5 Pokémons dos treinadores</h1>
                <div className='flex flex-col w-full'>
                    <img src="/assets/1.png" alt="Pikachu" className="w-40"/>
                    <img src="/assets/2.png" alt="Charizard" className="w-40 ml-auto"/>
                    <img src="/assets/3.png" alt="Mewtwo" className="w-40"/>
                    <img src="/assets/4.png" alt="Bulbasaur" className="w-40 ml-auto"/>
                    <img src="/assets/5.png" alt="Eevee" className="w-40"/> 
                </div>
                
            </div>
        </div>
    )
}

export default Slides;