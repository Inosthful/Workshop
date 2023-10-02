import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="w-[100%] px-[50px] py-[23px] bg-neutral-800 flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="self-stretch h-[120px] justify-between items-center inline-flex ">
                <div className="w-[60px] h-[54px] relative">
                    <img className="w-[60px] h-[54px]" src="https://via.placeholder.com/60x54" />
                </div>
                <div className="justify-start items-center gap-[35px] flex text-white">
                    <div className="justify-start items-center gap-[30px] flex">
                        <div className="navigation ">
                            <ul className="flex flex-row items-center gap-6 lg:gap-12 sm:text-xl lg:text-2xl 2xl:text-4xl">
                                <li>
                                    <NavLink to="/" className={(navData) => (navData.isActive ? "active-style" : 'none')}>
                                        <div className="" /> Nos locaux

                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/locaux" className={(navData) => (navData.isActive ? "active-style" : 'none')}>

                                        <div className="px-5 py-[15px] bg-amber-300 rounded-[100px] justify-start items-center gap-2.5 flex text-black">
                                            Proposer son aide </div>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/missions" className={(navData) => (navData.isActive ? "active-style" : 'none')}>

                                        <div className="px-5 py-[15px] bg-zinc-100 rounded-[100px] justify-start items-center gap-2.5 flex">
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