import { useEffect, useState } from "react"
import Navigation from "../components/Navigation";
import { Orgs } from "../services/orgs";
import { useParams } from "react-router-dom";


const Orga = () => {

    let { id } = useParams();

    const [orga, setOrganisations] = useState([]);

    useEffect(() => {
        const orgsService = new Orgs();
        orgsService.getOrganisation(id).then((data) => {
            setOrganisations(data);
        });
    }, []);

    // {
    //     "o_id": 2,
    //     "o_nom": "Unicef Languedoc Roussillon",
    //     "o_siret": "944648615",
    //     "o_adresse": "9 Rue du Collège",
    //     "o_code_postal": "34000",
    //     "o_ville": "Montpellier",
    //     "o_forme_juridique": "Association",
    //     "o_mail": "unicef34@unicef.fr",
    //     "o_telephone": "04.67.27.73.78",
    //     "o_site_web": "http://www.unicef.fr",
    //     "o_interlocuteur": "Unicef",
    //     "o_activite": "INTERNATIONAL"
    // }

    return (
        <div>
            <Navigation />
            <div className="py-5 text-center bg-[color:var(--background)] pt-20">
                <h1 className="text-6xl font-bold mb-10 text-[color:var(--on-background)]">{orga.o_nom}</h1>
                <p className="text-xl text-[color:var(--on-background)]">{orga.o_adresse}</p>
                <div className="flex justify-center items-center mt-10">
                    <div className="flex flex-row items-center justify-center gap-5">
                        <div className="px-5 py-[12px] text-[14px] md:text-[17px] bg-[color:var(--primary-shade)] rounded-[100px] justify-start items-center gap-2.5 flex text-black">
                            {orga.o_activite}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center mt-20">
                    <div className="flex flex-row justify-center items-center flex-wrap gap-5">
                        <Card name="Mail" value={orga.o_mail} />
                        <Card name="Téléphone" value={orga.o_telephone} />
                        <Card name="Site web" value={orga.o_site_web} />
                        <Card name="Interlocuteur" value={orga.o_interlocuteur} />
                        <Card name="Forme juridique" value={orga.o_forme_juridique} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export const Card = ({name, value}) => {
    return (
        <div className="flex flex-col justify-center items-center bg-[color:var(--primary)] p-10">
            <h2 className="text-2xl font-bold text-[color:var(--on-primary)] p-5">{name}</h2>
            <p className="text-xl mb-5 text-[color:var(--on-primary)]">{value}</p>
        </div>
    )
}

export default Orga;