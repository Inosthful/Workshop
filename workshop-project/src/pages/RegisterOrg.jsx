import { NavLink } from 'react-router-dom';
import FormBaseSignIn from '../components/FormBaseSignIn';
import FormBase from '../components/FormBaseSignIn';
import Navigation from '../components/Navigation';
import Login from './Login';
import FormBaseSignUp from '../components/FormBaseSignUp';
import Input from '../components/Input';


const RegisterOrg = () => {
    return (
        <div className="bg-[color:var(--background)] h-[100vh]">
            <Navigation/>
            <FormBaseSignUp/>

            <div className="flex justify-center flex-col items-center mt-10">
                <div className="flex justify-center flex-col items-center  rounded-xl ">
       
                    <form action="" method="post"></form>
                    <div className="w-[430px] md:w-[480px] h-[450px] px-[5px] py-5 bg-white rounded-[10px] shadow justify-start items-start gap-2.5 inline-flex mb-5">
                        <div className="flex-col justify-start items-start gap-5 inline-flex">
                            <div className="flex-col text-center gap-[61px] flex">
                                <div className="flex-col gap-[25px] flex">
                                    <div className="text-left text-black items-start text-base font-medium font-['Ubuntu'] pl-3 ">Inscription</div>
                                    <div className="inline-flex flex-col">
                                        <div className='flex flex-row gap-3 my-1 md:my-2'>
                                            <div className="ml-3 h-[50px] text-[11px] bg-zinc-200 rounded-[121.27px] justify-start items-center gap-2.5 flex">
                                                <div className="text-black text-base font-normal font-['Ubuntu'] "><Input  placeholder="      Nom" type="text"/></div>
                                            </div>
                                            <div className=" h-[50px] text-[11px]  bg-zinc-200 rounded-[121.27px] justify-start items-center gap-2.5 flex">
                                                <div className="text-black text-base font-normal font-['Ubuntu'] "><Input placeholder="      Prenom" type="text" /></div>
                                            </div>
                                        </div>
                                        <div className='flex flex-row gap-3 my-1 md:my-2'>
                                            <div className="ml-3  h-[50px] text-[11px]  bg-zinc-200 rounded-[121.27px] justify-start items-center gap-2.5 flex">
                                                <div className=" text-black text-base font-normal font-['Ubuntu']"><Input placeholder="      Email" type="email" /></div>
                                            </div>
                                            <div className="h-[50px] text-[11px] bg-zinc-200 rounded-[121.27px] justify-start items-center gap-2.5 flex">
                                                <div className="text-black text-base font-normal font-['Ubuntu']"><Input placeholder="      Siret" type="text" /></div>
                                            </div>
                                        </div>
                                        <div className='flex flex-row justify-center gap-3 my-1 md:my-2'>
                                            <div className=" h-[50px] text-[11px] bg-zinc-200 rounded-[121.27px] justify-start items-center gap-2.5 flex">
                                                <div className="text-black text-base font-normal font-['Ubuntu']"><Input placeholder="      Password" type="password" /></div>
                                            </div>
                                
                                        </div>
                                    </div>
                                    <div className='flex flex-col text-right justify-end items-end'>

                                        <button className="px-10 py-[12px] mt-10  bg-amber-300 rounded-[100px] justify-start items-center gap-2.5 flex text-black " type="submit">S'inscrire</button>
                                        <NavLink to="/login/signin/org" className={(navData) => (navData.isActive ? "underline bold text-yellow-400" : 'none')}><div className=" pt-5 items-start text-gray-500 underline">Vous avez deja un compte ? Connectez vous ici !</div></NavLink>

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

export default RegisterOrg;