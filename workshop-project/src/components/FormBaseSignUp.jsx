import { NavLink } from "react-router-dom";

const FormBaseSignUp = () => {
    return (
    <div className="flex justify-center mt-5">
        <div className="w-[444px] h-[61px] p-[5px] bg-white rounded-[121.27px] justify-start items-center gap-2.5 inline-flex">
            <NavLink to="/login/register/user" className={`grow shrink basis-0 h-[52px] py-[17px] ${(navData) => (navData.isActive ? "bg-[color:var(--primary)]" : 'bg-[color:var(--background)]')} rounded-[100px] justify-center items-center gap-2.5 flex`}>
                <div className="text-black text-base font-normal font-['Ubuntu']">Utilisateur</div>
            </NavLink>
            <NavLink to="/login/register/org" className="grow shrink basis-0 h-[52px] py-[17px] rounded-[100px] justify-center items-center gap-2.5 flex">
                <div className="text-black text-base font-normal font-['Ubuntu']">Organisateur</div>
            </NavLink>
        </div>
    </div>
    )
}

export default FormBaseSignUp;