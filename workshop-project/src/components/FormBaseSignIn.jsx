import { NavLink } from "react-router-dom";


const FormBaseSignIn = () => {
    return (
        <div className="flex justify-center mt-5">
            <div className="w-[444px] h-[61px] p-[5px] bg-white rounded-[121.27px] justify-start items-center gap-2.5 inline-flex">
                <NavLink to="/login/signin/user" className={(navData) => (navData.isActive ? "bold text-[var(--on-primary)]" : 'bold')}><div className="">Utilisateur  </div>  </NavLink>
                <NavLink to="/login/signin/org"  className={(navData) => (navData.isActive ? "bold text-[var(--on-primary)]" : 'bold')}><div className="">Organisateur</div></NavLink>
            </div>
        </div>
    // <div className="flex justify-center mt-5">
    //     <div className="w-[444px] h-[61px] p-[5px] bg-white rounded-[121.27px] justify-start items-center gap-2.5 inline-flex">
    //         <div className={`grow shrink basis-0 h-[52px] py-[17px] ${(navData) => (navData.isActive ? "bg-[color:var(--primary)]" : 'bg-[color:var(--background)]')} rounded-[100px] justify-center items-center gap-2.5 flex`}>
    //             <NavLink to="/login/signin/user" className={(navData) => (navData.isActive ? "bold text-[var(--on-primary)]" : 'bold')}><div className="">Utilisateur  </div>  </NavLink>
    //         </div>
    //         <div className="grow shrink basis-0 h-[52px] py-[17px] rounded-[100px] justify-center items-center gap-2.5 flex">
    //             <NavLink to="/login/signin/org"  className={(navData) => (navData.isActive ? "bold text-[var(--on-primary)]" : 'bold')}><div className="">Organisateur</div></NavLink>
    //         </div>
    //     </div>
    // </div>
    )
}


export default FormBaseSignIn;