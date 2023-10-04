import { NavLink } from "react-router-dom";
import Login from "./Login";

import Navigation from "../components/Navigation";
import FormBaseSignIn from "../components/FormBaseSignIn";



const SignInOrg = () => {
    return (
        <div className="bg-[color:var(--background)]">
                  <Navigation/>
            <FormBaseSignIn/>
            <div className="flex justify-center flex-col items-center mt-10">
            <div className="flex justify-center flex-col items-center  rounded-xl ">
                <div className="flex text-center  justify-center p-1 mt-1 text-2xl underline text-white"> Se connecter</div>
                <form action="" method="post"></form>
                <div className="flex flex-row gap-4 mt-10 text-center p-10 px-6">
                <div className=""> 

                <input className="rounded-[2rem]" placeholder="Mail" type="email" /></div>
            
            <div>
            <div className=""> 
        
                <input className="rounded-[2rem]" placeholder="Mot de passe" type="password" /></div>
                <br />
                <a href="/" className="text-blue-400 underline ">mot de passe oublié</a>
            </div>

            </div>

            <button className="px-10 py-[12px] mt-10   bg-amber-300 rounded-[100px] justify-start items-center gap-2.5 flex text-black " type="submit">Se connecter</button>
            <NavLink to="/login/register/org"  className={(navData) => (navData.isActive ? "underline bold text-yellow-400" : 'none')}><div className=" pt-5 items-start mb-[13rem] md:mb-[15rem] text-gray-500 underline">Vous n'avez pas de compte ? Inscrivez vous ici ! </div></NavLink> 
            </div>

            </div>
            </div>
        
    );
};

export default SignInOrg;