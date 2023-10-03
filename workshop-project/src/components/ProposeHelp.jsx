import { NavLink } from "react-router-dom";

const ProposeHelp = () => {
    return (
<div className="pt-10 py-6  flex justify-center bg-neutral-800">
<NavLink to="/locaux" className={(navData) => (navData.isActive ? "active-style" : 'none')}>

<div className="px-5 py-[15px] md:py-[20px] md:px-[15px] bg-amber-300 rounded-[100px] justify-start items-center gap-2.5 flex text-black">
    Proposer son aide </div>
</NavLink>
</div>
    )
}


export default ProposeHelp;