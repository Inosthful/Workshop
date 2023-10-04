import { useRef, useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import MissionTile from '../components/Tile';
import { renderToString } from 'react-dom/server';

const mission = {
    id: 1,
    name: 'Club de escalade Montpellier',
    description: 'Nous avons besoin de bénévoles pour nous aider à organiser animer notre club d\'escalade.',
    location: [3.87793, 43.62505],
    date: '20/12/2021',
    duration: '2h',
    requirements: ['Avoir plus de 18 ans', 'Avoir une expérience en escalade'],
    contactName: 'Jean Dupont',
    contactEmail: 'jeandupond@gmail.com',
    contactPhone: '06 12 34 56 78',
    distance: 2.5,
}

const mission2 = {
    id: 2,
    name: 'Resto du coeur',
    description: 'Venez nous aider à distribuer des repas aux plus démunis.',
    location: [3.86793, 43.63505],
    date: '20/12/2021',
    duration: '2h',
    requirements: ['Avoir plus de 18 ans'],
    contactName: 'Jean Dupont',
    contactEmail: 'lesrestauducoeur@gmail.com',
    contactPhone: '06 12 34 56 78',
    distance: 2.5,
}

const mission3 = {
    id: 3,
    name: 'Croix rouge',
    description: 'Nous cherchons des bénévoles pour nous aider à organiser des évènements.',
    location: [3.88793, 43.61505],
    date: '20/12/2021',
    duration: '2h',
    requirements: ['Avoir plus de 18 ans', 'Avoir une expérience en escalade'],
    contactName: 'Jean Dupont',
    contactEmail: 'lacroixrouge@gmail.fr',
    contactPhone: '06 12 34 56 78',
    distance: 2.5,
}

const missions = [mission, mission2, mission3];

const searchMissions = (search) => {
    return missions.filter((mission) => mission.name.toLowerCase().includes(search.toLowerCase()));
}

const Missions = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(3.87793);
    const [lat, setLat] = useState(43.62505);
    const [zoom, setZoom] = useState(14);

    const [search, setSearch] = useState('');
  
    useEffect(() => {
        if (map.current) return;
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom,
            attributionControl: false
        });
            
        map.current.addControl(new mapboxgl.NavigationControl());
        map.current.addControl(
            new mapboxgl.GeolocateControl({
              positionOptions: {
                enableHighAccuracy: true
              },
              trackUserLocation: true,
              showUserHeading: true
            })
          );
        
        for (const mission of missions) {
            const el = document.createElement('div');
            el.className = 'marker';

            new mapboxgl.Marker(el)
                .setLngLat(mission.location)
                .setPopup(new mapboxgl.Popup({ offset: 25 })
                .setHTML(renderToString(<MissionTile mission={mission} />))
                .setMaxWidth('none'))
                .addTo(map.current);
        }
    });

    return (
        <div>
            <div className="flex gap-4 flex-col z-10 px-5 pb-5 bg-[color:var(--background)] fixed overflow-auto h-[100%] w-[430px] left-0 top-0 bottom-0">
                <div className="sticky bg-[color:var(--background)] py-5 top-0 z-10">
                    <input className="py-2 px-5 rounded-[100px] border-2 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent w-[100%]" type="text" placeholder="Rechercher une mission" value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
                {
                    searchMissions(search).map((mission, index) => (
                        <MissionTile key={index} mission={mission} />
                    ))
                }
            </div>
            <div className="flex flex-col justify-center items-center fixed h-[100vh] w-[calc(100%-430px)] right-0 top-0 bottom-0 z-0">
                <div ref={mapContainer} className="map-container w-[100%] h-[100vh] "></div>
            </div>
        </div>
    );
};

export default Missions;