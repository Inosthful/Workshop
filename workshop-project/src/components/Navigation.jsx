import { User } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="w-[100%] px-[50px] py-[23px] bg-[color:var(--background)] flex-col justify-start items-start gap-2.5 inline-flex z-50">
            <div className="self-stretch h-[50px] justify-between items-center inline-flex ">
                <div className="w-[60px] h-[54px] relative">
                    <NavLink to="/" className={(navData) => (navData.isActive ? "active-style" : 'none')}>
                        <img className="w-[60px] h-[54px]" src="/src/assets/white 1.png" />
                    </NavLink>


                </div>
                <div className="justify-start items-center gap-[35px] flex text-white">
                    <div className="justify-start items-center gap-[30px] flex">
                        <div className="navigation ">
                            <ul className="flex flex-row items-center  gap-3 lg:gap-6 lg:gap-12  text-[14px] md:text-[17px]">
                                <li>
                                    <NavLink to="/locaux" className={(navData) => (navData.isActive ? "active-style" : 'none')}>
                                        <div className="" /> Nos locaux

                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/missions" className={(navData) => (navData.isActive ? "active-style" : 'none')}>
                                        <div className="px-5 py-[12px] text-[14px] md:text-[17px] bg-amber-300 rounded-[100px] justify-start items-center gap-2.5 flex text-black">
                                            Proposer son aide </div>
                                    </NavLink>
                                </li>
                        
   

                                    <li>
                                    <NavLink to="/login/signin/user" className={(navData) => (navData.isActive ? "active-style" : 'none')}>

                                        <div className="">
                                            <User />
                                        </div>
                                    </NavLink>
                                    </li>
                                
                              

                           
                            </ul>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    );
};

export default Navigation;