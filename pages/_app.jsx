import "../styles/global.css";
import { Header } from "../components/header/header"
import UiModal from "../components/uikit/uiModal"
import { useState } from 'react'
import UiSearch from "../components/uikit/uiSearch";


export default function App({ Component, pageProps }) {

    const [showModal, setShowModal] = useState(false);
    const [userActive, setUserActive] = useState(undefined);
    const [searchAnswer, setSearchAnswer] = useState([]);

    function handleShowModalChange(value) {
        setShowModal(value)
    }

    function handleUserActive(value) {
        setUserActive(value)
    }

    function handleSearchAnswer(value){
        setSearchAnswer(value)
    }


    

    return (


        <>

        <Header showModal={handleShowModalChange} userActive={userActive} searchAnswer={handleSearchAnswer} />
        {(searchAnswer.length > 0) && <UiSearch searchAnswer={searchAnswer}/> }
        <Component {...pageProps} /> 
        {showModal && <UiModal showModal={handleShowModalChange} userActive={handleUserActive} userData={userActive}/>}
        </>
    )
}

