import { NavLink } from "react-router-dom";

const ProposeHelp = (props) => {

    
    return (
        <div className="pt-10 py-6  flex justify-center bg-[color:var(--background)]">
            <div className="z-20">
                <NavLink to="/missions" className={(navData) => (navData.isActive ? "active-style" : 'none')} >
                    <div className={props.stylePerso == "style1" ? "px-5 py-[15px] md:py-[20px] md:px-[15px] md:text-xl bg-amber-300 rounded-[100px] justify-start items-center gap-2.5 flex text-black" : "px-5 py-[12px] text-[14px] md:text-[17px] bg-amber-300 rounded-[100px] justify-start items-center gap-2.5 flex text-black"} data-aos="fade-up">
                        {props.text} 
                    </div>
                </NavLink>
            </div>
        </div>
    )
}


export default ProposeHelp;