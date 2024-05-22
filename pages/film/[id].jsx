import axios from "axios";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function FilmPage(){
    const router = useRouter();
    const { id } = router.query;


    const [film, setFilm] = useState({});
    const [genre, setGenre] = useState({});
    
        useEffect(() => {
  
            axios.get(`http://127.0.0.1:8000/film/id/${id}`)
                .then(response => {
                    setFilm(response.data);
                })
                .catch(error => {
                    console.error('Error fetching film data:', error);
                });
        }, [id]);

        useEffect(() => {
            axios.get(`http://127.0.0.1:8000/genre/${film.id_genre}`)
                .then(response => {
                    setGenre(response.data);
                })
                .catch(error => {
                    console.error('Error fetching film data:', error);
                });

        }, [film.id_genre])
    

    const [showVideo, setShowVideo] = useState(true);

    const handleVideoEnd = () => {
        setShowVideo(false);
        console.log(showVideo)
    };

    return(
        <div className="min-h-screen static bg-black">
        <div className="w-full z-10 absolute h-full bg-gradient-to-r from-black from-20% to-transparent">
            <div className="w-1/3 mt-14">
            <h1 className="text-center text-white text-6xl p-5">
                {film.name}
            </h1>
            <h1 className="text-center text-gray-400 text-2xl ">
                {genre.name}
            </h1>
            <div className="text-white px-5 py-2 text-xl">{film.description}</div>
            </div>
        </div>
        {/* <img className='w-4/5 h-4/5 absolute right-0 z-0' src={film.image} alt="1+1 image"/> */}
        
        
           {(film.trailer != undefined) ? <iframe className="w-4/5 h-4/5 absolute right-0 z-0" allow="autoplay" controls
            src={`${film.trailer}?autoplay=1&mute=1&controls=0`} onEnded={handleVideoEnd} /> : <div className="text-white absolute z-40">sldns</div> }
        
        
    </div>
  );
    
}