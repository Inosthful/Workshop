import { NavLink } from "react-router-dom";
import Login from "./Login";

import Navigation from "../components/Navigation";
import FormBaseSignIn from "../components/FormBaseSignIn";
import Input from "../components/Input";






const SignInUser = () => {
    return (
        <div className="bg-[color:var(--background)] over">
                    <Navigation/>
            <FormBaseSignIn/>
            <div className="flex justify-center flex-col items-center mt-10">
            <div className="flex justify-center flex-col items-center  rounded-xl ">
                <form action="" method="post"></form>
                <div className="w-[430px] md:w-[480px] h-[415px] px-[5px] py-5 bg-white rounded-[10px] shadow justify-start items-start gap-2.5 inline-flex  mb-40">
                        <div className="flex-col justify-start items-start gap-5 inline-flex">
                            <div className="flex-col text-center gap-[61px] flex">
                                <div className="flex-col gap-[25px] flex">
                                    <div className="text-left text-black items-start text-base font-medium font-['Ubuntu'] pl-3 ">Connexion</div>
                                    <div className="inline-flex flex-col mt-4">
                                        <div className='flex flex-row gap-3 '>
                                            <div className="ml-2 h-[50px] text-[11px] bg-zinc-200 rounded-[121.27px] justify-start items-center gap-2.5 flex">
                                                <div className="text-black text-base font-normal font-['Ubuntu'] "><Input placeholder="      Email" type="email"/></div>
                                            </div>
                                 
                                  
                                    
                                        <div className='flex flex-col justify-center gap-3 '>
                                            <div className=" h-[50px] text-[11px] bg-zinc-200 rounded-[121.27px] justify-start items-center gap-2.5 flex">
                                                <div className="text-black text-base font-normal font-['Ubuntu']"><Input placeholder="      Password" type="password" /></div>
                                                <br />
                                              
                                            </div>
                                            <a href="/" className="text-blue-400 underline  ">mot de passe oublié</a>
                                        </div>
                                    </div>
                                    <div className='flex flex-col text-right justify-end items-end pr-5 pt-20'>

                                        <button className="px-10 py-[12px] mt-10  bg-amber-300 rounded-[100px] justify-start items-center gap-2.5 flex text-black " type="submit">S'inscrire</button>
                                        <NavLink to="/login/register/user" className={(navData) => (navData.isActive ? "underline bold text-yellow-400" : 'none')}><div className=" pt-5 items-start mb-[13rem] md:mb-[15rem] text-gray-500 underline">Vous avez deja un compte ? Connectez vous ici !</div></NavLink>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    </div> 

            </div>

            </div>
            </div>
        
        
    );
};

export default SignInUser;