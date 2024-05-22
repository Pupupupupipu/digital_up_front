import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { InfoCard } from '../infoCard';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



export function Catalog() {

    const [films, setFilms] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/film')
            .then(response => {
                setFilms(response.data);
            })
            .catch(error => {
                console.error('Error fetching film data:', error);
            });
    }, []);




    return (
        <div className="bg-black text-gray-100 text-2xl p-10">
            <Section Name={"Популярное"}>
                <Slider dots={false} infinite={true} slidesToShow={4} slidesToScroll={1} speed={500} >
                    {films.map((film, index) => {
                        if (film.kind == 'film'){
                            return <InfoCard key={index} name={film.name} image={film.image} id={film.id}/>
                        }
                    })}
                </Slider>
            </Section>
            <Section Name={"Выбираем сериал"}>
                <Slider dots={true} infinite={true} slidesToShow={4} slidesToScroll={1} speed={500}>
                    {films.map((film, index) => {
                            if (film.kind == 'serial'){
                                return <InfoCard key={index} name={film.name} image={film.image} id={film.id}/>
                            }
                        })}
                </Slider>
            </Section>
            <Section Name={"мультфильмы"}>
            <Slider dots={true} infinite={true} slidesToShow={4} slidesToScroll={1} speed={500}>
                    {films.map((film, index) => {
                            if (film.kind == 'cartoon'){
                                return <InfoCard key={index} name={film.name} image={film.image} id={film.id}/>
                            }
                        })}
                </Slider>
            </Section>
        </div>
    )
}

function Section({ Name, children }) {
    return (
        <div id='section-container' className='h-full min-h-72'>
            <h1 >{Name}</h1>
            <div>
                {children}
            </div>
        </div>

    )
}

