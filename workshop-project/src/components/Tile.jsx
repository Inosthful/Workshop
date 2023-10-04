import { ArrowRight } from "lucide-react";

const MissionTile = ({ mission }) => {
    return (
        <div class="max-w-sm bg-[color:var(--background)]">
            <div class="p-5">
                <a href='/mission/${mission.id}'>
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Club de escalade Montpellier</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Nous avons besoin de bénévoles pour nous aider à organiser animer notre club d'escalade.</p>
                <h6 class="text-sm font-medium text-gray-700 dark:text-gray-200">Jean Dupont</h6>
                <p class="text-sm font-normal text-gray-700 dark:text-gray-400">Président du club</p>
            </div>
            <a href="#" class="flex items-center justify-between p-5 text-sm font-medium text-center text-[color:var(--on-primary)] bg-[color:var(--primary)] transition-all hover:bg-[color:var(--primary-shade)]">
                Voir la mission
                <span class="ml-2" aria-hidden="true">
                    <ArrowRight size={16} />
                </span>
            </a>
        </div>
    );
}

export default MissionTile;