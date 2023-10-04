import Navigation from '../components/Navigation';
import MissionTile from '../components/Tile';

const Missions = () => {
    return (
        <div>
            <Navigation />
            <div className="flex flex-row">
                <div class="flex gap-4 flex-wrap justify-center items-center">
                    {
                        [...Array(100)].map((_, index) => {
                            return (
                                <MissionTile key={index} />
                            )
                        })
                    }
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div id='map' className="w-[100%] h-[100%] fixed" />
                </div>
            </div>
        </div>
    );
};

export default Missions;