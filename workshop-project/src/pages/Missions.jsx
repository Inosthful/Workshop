import { useRef, useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import MissionTile from '../components/Tile';
import { renderToString } from 'react-dom/server';
import { ArrowLeft, X } from 'lucide-react';
import { Mission } from '../services/mission'

(async () => {
    const mission = new Mission();
    try {
      const data = await mission.getAllMissions();
      console.log(data);
    } catch (error) {
      console.error('Une erreur s\'est produite :', error);
    }
})();

const searchMissions = (search) => {
    return missions.filter((mission) => mission.name.toLowerCase().includes(search.toLowerCase()));
}

function flyTo(map, location) {
    map.flyTo({
        center: location,
        zoom: 14,
        essential: true
    });
}

const Missions = () => {
    const missionService = new Mission();

    const [missions, setMissions] = useState([]); // State pour stocker les missions
    const [selectedMission, setSelectedMission] = useState(null);

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(3.87793);
    const [lat, setLat] = useState(43.62505);
    const [zoom, setZoom] = useState(14);
    const [search, setSearch] = useState('');
    const [filteredMissions, setFilteredMissions] = useState(missions);

    const searchMissions = (search) => {
        return missions.filter((mission) => mission.name.toLowerCase().includes(search.toLowerCase()));
    };

    const flyTo = (map, location) => {
        map.flyTo({
            center: location,
            zoom: 14,
            essential: true
        });
    };

    useEffect(() => {
        if (map.current) return;
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom,
            attributionControl: false
        });

        missionService.getAllMissions()
            .then((missions) => {
                setMissions(missions); // Mettez à jour le state avec les missions récupérées
                for (const mission of missions) {
                    const el = document.createElement('div');
                    el.className = 'marker';

                    new mapboxgl.Marker(el)
                        .setLngLat(mission.location)
                        .addTo(map.current);

                    el.addEventListener('click', () => {
                        setSelectedMission(mission);
                        flyTo(map.current, mission.location);
                    });
                }
            })
            .catch((error) => {
                console.error('Erreur lors de la récupération des missions :', error);
            });
    }, []);

    return (
        <div>
            <div className="flex gap-4 flex-col z-10 px-5 pb-5 bg-[color:var(--background)] fixed overflow-auto h-[100%] w-[430px] left-0 top-0 bottom-0">
                <div className="sticky bg-[color:var(--background)] py-5 top-0 z-10 flex flex-row items-center gap-4">
                    <ArrowLeft size={24} color="var(--on-background)" className="cursor-pointer" onClick={() => window.history.back()} />
                    <input className="py-2 px-5 rounded-[100px] border-2 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent w-[100%]" type="text" placeholder="Rechercher une mission" value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
                {
                    searchMissions(search).map((mission, index) => (
                        <MissionTile key={index} mission={mission} onClick={() => {setSelectedMission(mission); flyTo(map.current, mission.location)}} />
                    ))
                }
            </div>
            <div className={`fixed top-0 bottom-0 left-[430px] z-10 ${selectedMission ? 'block' : 'hidden'} bg-white p-5 w-[400px] h-[100%] overflow-auto shadow-xl`}>
                <div className="flex flex-row justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold">{selectedMission?.name}</h1>
                    <X size={24} className="cursor-pointer" onClick={() => setSelectedMission(null)} />
                </div>
                <p className="mb-4">{selectedMission?.description}</p>
                <div className="flex flex-wrap mb-4">
                    <div className="w-full md:w-1/2 lg:w-1/3 p-2">
                        <h2 className="text-lg font-bold mb-2">Location</h2>
                        <p>{selectedMission?.location}</p>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 p-2">
                        <h2 className="text-lg font-bold mb-2">Date</h2>
                        <p>{selectedMission?.date}</p>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 p-2">
                        <h2 className="text-lg font-bold mb-2">Duration</h2>
                        <p>{selectedMission?.duration}</p>
                    </div>
                </div>
                <div className="mb-4">
                    <h2 className="text-lg font-bold mb-2">Requirements</h2>
                    <ul className="list-disc pl-4">
                        {selectedMission?.requirements.map((requirement, index) => (
                            <li key={index}>{requirement}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className="text-lg font-bold mb-2">Contact</h2>
                    <p>{selectedMission?.contactName}</p>
                    <p>{selectedMission?.contactEmail}</p>
                    <p>{selectedMission?.contactPhone}</p>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center fixed h-[100vh] w-[calc(100%-430px)] right-0 top-0 bottom-0 z-0">
                <div ref={mapContainer} className="map-container w-[100%] h-[100%] "></div>
            </div>
        </div>
    );
};

export default Missions;