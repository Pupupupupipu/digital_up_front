import { useState } from "react";
import { UIButton } from "./uiButton";
import axios from 'axios';
import { CrossIcon } from "../icons/cross-icon";




export default function UiModal({ showModal, userActive, userData }) {
    const [activeLink, setActiveLink] = useState('Регистрация');
    const [login, setLogin] = useState([]);
    const [password, setPassword] = useState([]);

    function handleLinkClick(link) {

        if (link.target.text === activeLink) return 0;
        setActiveLink(link.target.text);

    }

    function onChangeLogin(event) {
        setLogin(event.target.value)
    }

    function onChangePassword(event) {
        setPassword(event.target.value)
    }

    function handleFormSubmit(event) {
        event.preventDefault()

        if (activeLink == 'Регистрация'){
            axios.post('http://127.0.0.1:8000/users', { login, password })
            .then(response => {
                console.log('User created successfuly')
                
                const { id, name, login } = response.data
                userActive({
                    "id": id,
                    "name": name, 
                    "login": login
                })
                setLogin("")
                setPassword("")
                
            })
            .catch(error => {
                console.error('Error data:', error);

                if (error.response.status === 500){
                    alert(error.response.data.detail)
                }
            });
        }  
        
        if (activeLink == 'Вход'){
            axios.post('http://127.0.0.1:8000/users/sign_in', { login, password })
            .then(response => {
                console.log(response.data)
                const { id, name, login } = response.data
                userActive({
                    "id": id,
                    "name": name, 
                    "login": login
                })
                setLogin("")
                setPassword("")
            })
            .catch(error => {
                console.error('Error data:', error);

                if (error.response.status === 500){
                    console.log("ERROR DATA", error.response.data)
                    alert(error.response.data.detail)
                }
            });
        }
       
        showModal(false);
        
    }

    function handleCloseModal(){
        showModal(false);
    }

    return (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur flex justify-end ">
            <div className="relative w-1/3 flex justify-end ">
                {(userData != undefined) ? <UserInfo userData={userData}/> : 
                <SignInForm 
                    handleFormSubmit={handleFormSubmit} 
                    activeLink={activeLink} 
                    handleLinkClick={handleLinkClick} 
                    onChangeLogin={onChangeLogin} 
                    onChangePassword={onChangePassword} 
                />}
                <button onClick={handleCloseModal} className="bg-white opacity-15 rounded-full absolute left-0 p-3 m-1 mt-2 hover:opacity-25 transition-opacity">
                    <CrossIcon />
                </button>
            </div>
            
        </div>
    )
}

function UserInfo({ userData }){
    const [name, setName] = useState(userData.name);


    function handleChangeName(event){
        setName(event.target.value)
    }

    function handleSubmitNewName(event){
        event.preventDefault()
        
        const id = userData.id

        if (name == userData.name) return 0
        axios.patch('http://127.0.0.1:8000/users/name', {id, name})
            .then(response => {
                console.log('User patched successfuly', response)
                setName(response.name)
            })
            .catch(error => {
                console.error('Error data:', error);

                if (error.status === 500){
                    alert(error.response.data.detail)
                }
            });
    }


    return(
        <div className="bg-white text-xl text-gray-900 rounded-l-lg h-full w-11/12 flex flex-col items-start justify-center">
            <div className="mx-auto">
                <div>
                    <span>Имя:</span>
                    <form onSubmit={handleSubmitNewName} className="inline">
                    <input type="text" value={name} onChange={handleChangeName} className="outline-0 px-6 py-2 mb-2"/>
                    </form>
                    <UIButton children={"Изменить"} size="md" variant="outline" type={"submit"} ></UIButton>
                </div>
                <div>
                    <span className="">Логин:</span>
                    <span className="px-6">{userData.login}</span>
                </div>
            </div> 
        </div>
    )
}

function SignInForm({ handleFormSubmit, activeLink, handleLinkClick, onChangeLogin, onChangePassword }){
    return(
        <div className="bg-white rounded-l-lg h-full w-11/12">
            <form onSubmit={handleFormSubmit} className=" min-h-screen flex flex-col justify-center mx-4">
                <div className="flex justify-around mb-5">
                    <Link text={'Регистрация'} activeLink={activeLink} handleLinkClick={handleLinkClick} />
                    <Link text={'Вход'} activeLink={activeLink} handleLinkClick={handleLinkClick} />
                </div>
                <Input placeholder={"login@gmail.com"} type={"text"} onChange={onChangeLogin} />
                <Input placeholder={"password..."} type={"password"} onChange={onChangePassword} />
                <UIButton children={"Войти"} size="lg" variant="primary" type={"submit"} />
            </form>
        </div>
    )
}

function Input({ placeholder, type, onChange }) {
    return <input type={type} placeholder={placeholder} onChange={onChange} className="outline-0 p-2 px-10 text-xl mb-5" />
}

function Link({ text, activeLink, handleLinkClick }) {
    return <a className={`text-2xl ${activeLink === text ? 'text-black' : 'text-gray-400'} hover:text-black transition-colors cursor-pointer`} onClick={handleLinkClick}>{text}</a>
}

