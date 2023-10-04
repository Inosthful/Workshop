import { NavLink } from "react-router-dom";


const FormBaseSignIn = () => {
    return (
        <div className="flex justify-center mt-5">
            <div className="w-[444px] h-[61px] p-1 bg-white rounded-[121.27px] justify-start items-center gap-2.5 inline-flex">
                <NavLink to="/login/signin/user" className={(navData) => (navData.isActive ? "bg-[color:var(--primary)] h-[100%] w-[100%] rounded-[100px] justify-center items-center gap-2.5 flex" : 'h-[100%] w-[100%] py-[17px] rounded-[100px] justify-center items-center gap-2.5 flex')}>
                    <div className="text-black text-base font-normal font-['Ubuntu']">Utilisateur</div>
                </NavLink>
                <NavLink to="/login/signin/org" className={(navData) => (navData.isActive ? "bg-[color:var(--primary)] h-[100%] w-[100%] rounded-[100px] justify-center items-center gap-2.5 flex" : 'h-[100%] w-[100%] py-[17px] rounded-[100px] justify-center items-center gap-2.5 flex')}>
                    <div className="text-black text-base font-normal font-['Ubuntu']">Organisateur</div>
                </NavLink>
            </div>
        </div>
    )
}


export default FormBaseSignIn;