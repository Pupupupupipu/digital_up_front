export default function UiSearch({ searchAnswer }){

    return(
        <div className="absolute z-20 right-0 w-1/5 text-xl bg-gray-900 py-5 rounded-b-lg text-gray-300">
            {searchAnswer.map((film, index) => {
                        return <a href={`/film/${film.id}`} key={index} className="block p-2 hover:cursor-pointer">{film.name}</a>
                    })}
        </div>
    )
}