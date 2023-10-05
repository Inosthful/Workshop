import { useRef, useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import MissionTile from '../components/Tile';
import { renderToString } from 'react-dom/server';
import { ArrowLeft, Link, X } from 'lucide-react';
import { Mission } from '../services/mission'
import MissionDetail from '../components/MissionDetail';

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
    const [open, setOpen] = useState(false);

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(3.87793);
    const [lat, setLat] = useState(43.62505);
    const [zoom, setZoom] = useState(14);
    const [search, setSearch] = useState('');
    const [filteredMissions, setFilteredMissions] = useState(missions);

    const searchMissions = (search) => {
        return missions.filter((mission) => mission.m_nom.toLowerCase().includes(search.toLowerCase()));
    };

    const flyTo = (map, location) => {
        map.flyTo({
            center: location,
            zoom: 15,
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

        map.current.addControl(new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: false
        }));

        map.current.addControl(new mapboxgl.NavigationControl());

        missionService.getAllMissions()
            .then((missions) => {
                setMissions(missions);
                for (const mission of missions) {
                    console.log(mission);
                    const m_location = mission.m_location.split(',').reverse();
                    const el = document.createElement('div');
                    el.className = 'marker';
                    
                    // Set marker offset to the bottom
                    new mapboxgl.Marker(el, { offset: [0, -23] })
                        .setLngLat(m_location)
                        .addTo(map.current);

                    el.addEventListener('click', () => {
                        setSelectedMission(mission);
                        setOpen(true);
                        flyTo(map.current, m_location);
                    });
                }
            })
            .catch((error) => {
                console.error('Erreur lors de la récupération des missions :', error);
            });
    }, []);

    return (
        <div>
            <div className="flex gap-4 flex-col z-50 px-5 pb-5 bg-[color:var(--background)] fixed overflow-auto h-[100%] w-[430px] left-0 top-0 bottom-0">
                <div className="sticky bg-[color:var(--background)] py-5 top-0 z-10 flex flex-row items-center gap-4">
                        <ArrowLeft size={24} color="var(--on-background)" className="cursor-pointer" onClick={() => window.history.back()} />
                    <input className="py-2 px-5 rounded-[100px] border-2 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent w-[100%]" type="text" placeholder="Rechercher une mission" value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
                {
                    searchMissions(search).map((mission, index) => (
                        <MissionTile key={index} mission={mission} onClick={() => {setSelectedMission(mission); setOpen(true); flyTo(map.current, mission.m_location.split(',').reverse())}} />
                    ))
                }
            </div>
            <MissionDetail mission={selectedMission} open={open} onClose={() => setOpen(false)} />
            <div className="flex flex-col justify-center items-center fixed h-[100vh] w-[calc(100%-430px)] right-0 top-0 bottom-0 z-0">
                <div ref={mapContainer} className="map-container w-[100%] h-[100%] "></div>
            </div>
        </div>
    );
};

export default Missions;