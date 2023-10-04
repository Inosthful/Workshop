import { NavLink } from "react-router-dom";


const FormBaseSignUp = () => {
    return (
    <div className="flex justify-center  mt-5 ">

        <div className="flex flex-row gap-10 text-md md:text-lg justify-center text-center p-6 bg-green-600 rounded-[3rem]"> 
            <NavLink to="/login/register/user" className={(navData) => (navData.isActive ? "underline bold text-yellow-400" : 'none')}> <div className="">Utilisateur  </div>  </NavLink>
            /   
            <NavLink to="/login/register/org"  className={(navData) => (navData.isActive ? "underline bold text-yellow-400" : 'none')}><div className="">Organisateur</div></NavLink>
        </div>


        </div>

    )
}


export default FormBaseSignUp;