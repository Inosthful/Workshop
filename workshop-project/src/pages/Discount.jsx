import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import { ArrowRight } from "lucide-react";
import DiscountCard from "../components/DiscountCard";
import Footer from "../components/Footer";

const dicounts = [
    {
        points: 400,
        discount: 20,
        organisation: "Coiffeur coif'tif",
        address: "12 rue de la paix",
        tags: ["beauté", "coiffure"]
    },
    {
        points: 1000,
        discount: 50,
        organisation: "Boucherie le boeuf",
        address: "6 rue de la paix",
        tags: ["alimentation"]
    },
    {
        points: 100,
        discount: 5,
        organisation: "Boulangerie Boutton-d'or",
        address: "1 rue de la paix",
        tags: ["alimentation"]
    },
    {
        points: 800,
        discount: 40,
        organisation: "Traiteur le bonheur",
        address: "2 rue de la paix",
        tags: ["alimentation"]
    },
    {
        points: 600,
        discount: 30,
        organisation: "Fleuriste la rose",
        address: "2 rue de la paix",
        tags: ["florale"]
    },
    {
        points: 200,
        discount: 10,
        organisation: "Pizzeria delizioso",
        address: "5 rue de la paix",
        tags: ["alimentation"]
    },
    {
        points: 150,
        discount: 7,
        organisation: "Librairie des livres",
        address: "3 rue de la paix",
        tags: ["livres"]
    },
    {
        points: 100,
        discount: 5,
        organisation: "Boulangerie Boutton-d'or",
        address: "1 rue de la paix",
        tags: ["alimentation"]
    }
]

const Discount = () => {
    const [points, setPoints] = useState(4000);
    const [euros, setEuros] = useState(points / 200);

    return (
        <>
            <Navigation />
            <div className="flex flex-col items-center justify-center pt-20 bg-[color:var(--background)]">
                <h1 className="text-6xl font-bold mb-10 text-[color:var(--on-background)]">Convertir mes points</h1>
                <p className="text-xl text-[color:var(--on-background)]">Retrouvez ici tout les reductions que vous pouvez obtenir en fonction de vos points.</p>
                <div className="flex flex-row items-center justify-center gap-5 mt-20">
                    <div className="px-5 py-[12px] text-[14px] md:text-[17px] bg-[color:var(--primary)] rounded-[100px] justify-start items-center gap-2.5 flex text-black">
                        <h2 className="text-2xl text-[color:var(--on-primary)]">{points} points</h2>
                    </div>
                    <ArrowRight size={48} className="mx-10" color="var(--on-background)" />
                    <div className="px-5 py-[12px] text-[14px] md:text-[17px] bg-[color:var(--primary)] rounded-[100px] justify-start items-center gap-2.5 flex text-black">
                        <h2 className="text-2xl text-[color:var(--on-primary)]">{euros} €</h2>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center pt-20 bg-[color:var(--background)]">
                <h2 className="text-3xl font-bold mb-10 text-[color:var(--on-background)]">Nos partenaires</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-10">
                    {dicounts.map((discount, index) => (
                        <DiscountCard key={index} {...discount} />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Discount;