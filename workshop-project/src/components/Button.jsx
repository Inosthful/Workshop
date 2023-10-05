import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";

const Button = ({ text, onClick, isOutline = false, href, arrow = false, ...props }) => {

    return !isOutline ? (
        <div className="flex justify-center" {...props}>
            <div className="z-20">
                <NavLink to={href} className={(navData) => (navData.isActive ? "active-style" : 'none')} >
                    <div className="px-5 py-3 bg-amber-300 rounded-[100px] justify-start items-center gap-2.5 flex text-black">
                        {text}
                        {
                            arrow ? (
                                <ArrowRight size={22} color="var(--on-primary)" />
                            ) : null
                        }
                    </div>
                </NavLink>
            </div>
        </div>
    ) : (
        <div className="pt-10 py-6 flex justify-center" {...props}>
            <div className="z-20">
                <NavLink to={href} className={(navData) => (navData.isActive ? "active-style" : 'none')} >
                    <div className="px-5 py-3 border-2 border-amber-300 rounded-[100px] justify-start items-center gap-2.5 flex text-amber-300">
                        {text}
                        {
                            arrow ? (
                                <ArrowRight size={22} color="var(--primary)" />
                            ) : null
                        }
                    </div>
                </NavLink>
            </div>
        </div>
    )
}


export default Button;