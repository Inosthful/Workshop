import { ArrowRight } from "lucide-react";

const DiscountCard = ({ key, points, discount, organisation, address, tags }) => {
    return (
        <div >
            <div key={key} className="flex flex-col items-center justify-center bg-[color:var(--primary)] p-10">
                <div className="flex flex-row items-center justify-center">
                    <h1 className="text-4xl font-bold text-[color:var(--on-primary)]">{points} points</h1>
                    <h1 className="text-4xl font-bold text-[color:var(--on-primary)]"> = </h1>
                    <h1 className="text-4xl font-bold text-[color:var(--on-primary)]">{discount} €</h1>
                </div>
                <h2 className="text-2xl font-bold mb-5 text-[color:var(--on-primary)] pt-5">{organisation}</h2>
                <h3 className="text-xl mb-5 text-[color:var(--on-primary)]">{address}</h3>
                <div className="flex flex-row items-center justify-center gap-5">
                    {tags.map((tag, index) => (
                        <div key={index} className="px-5 py-[12px] text-[14px] md:text-[17px] bg-[color:var(--primary-shade)] rounded-[100px] justify-start items-center gap-2.5 flex text-black">
                            {tag}
                        </div>
                    ))}
                </div>
            </div>
            <button className="flex items-center justify-between p-5 w-[100%] text-sm font-medium text-center text-[color:var(--on-primary)] bg-[color:var(--primary-shade)] transition-all hover:bg-[color:var(--background)] hover:text-[color:var(--on-background)]">
                Convertir mes points
                <span className="ml-2" aria-hidden="true">
                    <ArrowRight size={16} />
                </span>
            </button>
        </div>
    );
}

export default DiscountCard;