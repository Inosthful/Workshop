import { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Orgs } from "../services/orgs";

const OrgaList = () => {
    const [search, setSearch] = useState("");
    
    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const [organisations, setOrganisations] = useState([]);

    useEffect(() => {
        const orgsService = new Orgs();
        orgsService.getAllOrganisations().then((data) => {
            setOrganisations(data);
        });
    }, []);

    const filteredOrga = organisations.filter((orga) => orga.o_nom.toLowerCase().includes(search.toLowerCase()));

    return (
        <div>
            <Navigation />
            <div className="py-5 text-center bg-[color:var(--background)] pt-20">
                <h1 className="text-6xl font-bold mb-10 text-[color:var(--on-background)]">Organisations</h1>
                <p className="text-xl text-[color:var(--on-background)]">Retrouvez ici toutes les organisations partenaires de notre programme de fidélité.</p>
                <div className="flex justify-center items-center mt-10">
                    <input type="text" placeholder="Rechercher une organisation" className="border-2 border-[color:var(--primary)] rounded-full px-5 py-2 focus:outline-none focus:ring-2 focus:ring-[color:var(--primary)] focus:border-transparent text-black" onChange={handleChange} />
                </div>
                    <div className="flex flex-row items-center justify-center flex-wrap gap-5 mt-20">
                        {filteredOrga.map(orga => (
                            <a href={`/organisation/${orga.o_id}`}>
                                <div className="w-[400px] h-[300px] bg-[color:var(--primary)] flex flex-col justify-center items-center">
                                    <h2 className="text-2xl font-bold text-[color:var(--on-primary)] p-5">{orga.o_nom}</h2>
                                    <h3 className="text-xl mb-5 text-[color:var(--on-primary)]">{orga.o_adresse}</h3>
                                    <div className="flex flex-row items-center justify-center gap-5">
                                            <div className="px-5 py-[12px] text-[14px] md:text-[17px] bg-[color:var(--primary-shade)] rounded-[100px] justify-start items-center gap-2.5 flex text-black">
                                                {orga.o_activite}
                                            </div>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                
            </div>
            <Footer />
        </div>
    )
}

export default OrgaList;