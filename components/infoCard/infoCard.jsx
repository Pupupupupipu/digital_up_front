export function InfoCard({ name, image, id }){


    return(
        <a href={`/film/${id}`}>
            <div id={id} className="py-3 m-3 drop-shadow-xl relative transition-transform hover:scale-105">
                <img id={id} className=" rounded-lg" src={image} alt={name} />
            </div>
        </a>
        
    )
}