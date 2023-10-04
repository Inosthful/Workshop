import { NavLink } from "react-router-dom";


const FormBaseSignIn = () => {
    return (
    <div className="flex justify-center  mt-5 ">

        <div className="flex flex-row gap-10 text-md md:text-xl justify-center text-center p-6 bg-green-600 rounded-[3rem]"> 
            <NavLink to="/login/signin/user" className={(navData) => (navData.isActive ? "underline bold text-yellow-400" : 'none')}> <div className="">Utilisateur  </div>  </NavLink>
            /   
            <NavLink to="/login/signin/org"  className={(navData) => (navData.isActive ? "underline bold text-yellow-400" : 'none')}><div className="">Organisateur</div></NavLink>
        </div>


        </div>

    )
}


export default FormBaseSignIn;