import { ArrowRight, Calendar } from "lucide-react";

const MissionTile = ({ mission, onClick }) => {
    return (
        <div className="max-w-sm bg-[color:var(--primary)] min-w-[300px]">
            <div className="p-5">
                {/* <a href={`/mission/${mission.id}`}> */}
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-[color:var(--on-primary)]">{mission.name}</h5>
                </a>
                <p className="mb-3 font-normal text-[color:var(--on-primary)]">{mission.description}</p>
                <h6 className="text-sm font-medium text-[color:var(--on-primary)]">{mission.contactName}</h6>
                <p className="text-sm font-normal text-[color:var(--on-primary)]">{mission.contactEmail}</p>
                <div className="flex items-center justify-between mt-5">
                    <div className="flex items-center bg-[color:var(--primary-shade)] rounded-[100px] p-3">
                        <Calendar size={16} className="mr-2" />
                        <p className="text-sm font-normal text-[color:var(--on-primary)]">{mission.date}</p>
                    </div>
                    <div className="flex items-center bg-[color:var(--primary-shade)] rounded-[100px] p-3">
                        <p className="text-sm font-normal text-[color:var(--on-primary)]">{mission.distance} km</p>
                    </div>
                </div>
            </div>
            <a href="#" className="flex items-center justify-between p-5 text-sm font-medium text-center text-[color:var(--on-primary)] bg-[color:var(--primary-shade)] transition-all hover:bg-[color:var(--background)] hover:text-[color:var(--on-background)]" onClick={onClick}>
                Voir la mission
                <span className="ml-2" aria-hidden="true">
                    <ArrowRight size={16} />
                </span>
            </a>
        </div>
    );
}

export default MissionTile;