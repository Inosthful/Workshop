import { NavLink } from 'react-router-dom';
import FormBaseSignIn from '../components/FormBaseSignIn';
import FormBase from '../components/FormBaseSignIn';
import Navigation from '../components/Navigation';
import Login from './Login';
import FormBaseSignUp from '../components/FormBaseSignUp';


const RegisterOrg = () => {
    return (
        <div className="bg-[color:var(--background)]">
            <Navigation/>
            <FormBaseSignUp/>

            <div className="flex justify-center flex-col items-center mt-10">
                <div className="flex justify-center flex-col items-center  rounded-xl ">
                    <div className="flex text-center  justify-center p-1 mt-1 text-2xl underline text-white"> S'inscrire</div>
                    <form action="" method="post"></form>
                    <div className="flex flex-col gap-4 mt-10 text-center p-10 px-6">
                        <div className="flex flex-row gap-4 pb-2">
                            <div className=''>
                                {/* <label htmlFor="">Nom : </label> */}
                                <input className="rounded-2xl" placeholder="Nom" type="text" /></div>
                            <div className="">
                                {/* <label htmlFor="">Prénom : </label> */}
                                <input className="rounded-2xl" placeholder="Prenom" type="text" /></div>
                        </div>
                        <div className='flex flex-row gap-4 pb-2'>
                            <div className="">

                                <input className="rounded-2xl" placeholder="Mail" type="email" /></div>

                            <div>
                                <div className="">

                                    <input className="rounded-2xl" placeholder="Age" type="number" /></div>
                                <br />

                            </div>
                        </div>
                        <div className='flex flex-row justify-center'>
                            <div className="">

                                <input className="rounded-2xl" placeholder="Password" type="password" /></div>

                            <div>


                            </div>
                        </div>

                    </div>

                    <button className="px-10 py-[12px] mt-10  bg-amber-300 rounded-[100px] justify-start items-center gap-2.5 flex text-black " type="submit">S'inscrire</button>
                    <NavLink to="/login/register/user"  className={(navData) => (navData.isActive ? "underline bold text-yellow-400" : 'none')}><div className=" pt-5 items-start mb-[13rem] md:mb-[15rem] text-gray-500 underline">Vous avez deja un compte ? Connectez vous ici !</div></NavLink> 

                </div>

            </div>
        </div>
    );
};

export default RegisterOrg;