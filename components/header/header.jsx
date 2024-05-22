
import UiModal from '../uikit/uiModal'
import { useState, useEffect } from 'react'

export function Header({ showModal, userActive, searchAnswer }) {
    
    const [searchTerm, setSearchTerm] = useState('');

    function handleSearch(event) {

        if (event.target.value == '') searchAnswer([])

        setSearchTerm(event.target.value);

    }
        
    useEffect(() =>{
            if (searchTerm) {
                fetch(`http://127.0.0.1:8000/film/name/${searchTerm}`)
            .then(response => {
                return response.json()
            })
            .then((data) => {
                searchAnswer(data)
            })
            .catch(error => console.error('Error fetching data:', error));
            }
        }, [searchTerm]);
    
    function handleSubmitSearch(event){
        event.preventDefault()

    }                    

    function handleSigninOpen(){
        showModal(true);
    }

    return (
        <>
        <div className="flex text-xl bg-gray-900 text-gray-300 ">
            <h1 className="text-white p-5">INSOMNIA</h1>
            <div className="text-lg w-4/5 p-5">
                <a href="/" className="p-4 hover:text-white transition-colors">Каталог</a>
                <a href="/subs" className="p-4 hover:text-white transition-colors">Подписки</a>
                
            </div>
            
            <div className="flex justify-end mx-14 p-5">
                <form onSubmit={handleSubmitSearch} className="px-5">
                    <input type="text" placeholder="Поиск..." className="bg-gray-900 outline-0" onChange={handleSearch} />
                </form>
                <a className="hover:text-white transition-colors" onClick={handleSigninOpen}>{(userActive == undefined) ? "Войти" : userActive.name}</a>
            </div>

        </div>
        </>
    )
}

