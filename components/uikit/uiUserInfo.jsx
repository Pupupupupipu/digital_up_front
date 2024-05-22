import { UIButton } from "./uiButton";

export default function UiUserInfo({ userActive }){
    


    return(
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur flex justify-end ">
            <div className="relative w-1/3 flex justify-end ">
                <div className="bg-white rounded-l-lg h-full w-11/12">
                    <form  className=" min-h-screen flex flex-col justify-center mx-4">
                        <div className="flex justify-around mb-5">
                            <Link text={'Регистрация'}   />
                            <Link text={'Вход'}   />
                        </div>
                        <Input placeholder={"login@gmail.com"} type={"text"}  />
                        <Input placeholder={"password..."} type={"password"}  />
                        <UIButton children={"Войти"} size="lg" variant="primary" type={"submit"} />
                    </form>
                </div>
                <button  className="bg-white opacity-15 rounded-full absolute left-0 p-3 m-1 mt-2 hover:opacity-25 transition-opacity">
                    x
                </button>
            </div>
            
        </div>
    )
}


function Input({ placeholder, type }) {
    return <input type={type} placeholder={placeholder} className="outline-0 p-2 px-10 text-xl mb-5" />
}

function Link({ text, handleLinkClick }) {
    return <a className={`text-2xl text-gray-500 hover:text-black transition-colors cursor-pointer`} onClick={handleLinkClick}>{text}</a>
}