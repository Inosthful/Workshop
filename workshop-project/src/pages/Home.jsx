import Navigation from '../components/Navigation';
import Presentation from '../components/Presentation';
import ProposeHelp from '../components/ProposeHelp';


const Home = () => {
    return (
        <div>
            <Navigation />
            <div className="w-[100%] h-[987px] relative bg-neutral-800">
                <img className="w-[80vw] h-[625px] left-[135px] top-[318px] absolute rounded-[10px] shadow border-4 border-neutral-200" src="https://via.placeholder.com/1170x625" />
                <div className="w-[1170px] h-[156px] left-[135px] top-[57px] absolute text-center text-zinc-300 text-[65px] font-bold font-['Ubuntu']">Participer a la vie locale de votre quartier</div>
                <div className="left-[482.50px] top-[240px] absolute text-center text-zinc-300 text-xl font-normal font-['Amaranth']">Donner un coup de main  a vos commerçant/association</div>
                <div className="left-[1067px] top-[907px] absolute justify-start items-start inline-flex">
                    <img className="w-[72px] h-[72px] rounded-full border-4 border-neutral-200" src="https://via.placeholder.com/72x72" />
                    <img className="w-[72px] h-[72px] rounded-full border-4 border-neutral-200" src="https://via.placeholder.com/72x72" />
                    <img className="w-[72px] h-[72px] rounded-full border-4 border-neutral-200" src="https://via.placeholder.com/72x72" />
                    <img className="w-[72px] h-[72px] rounded-full border-4 border-neutral-200" src="https://via.placeholder.com/72x72" />
                    <img className="w-[72px] h-[72px] rounded-full border-4 border-neutral-200" src="https://via.placeholder.com/72x72" />
                </div>
                <div className="left-[80px] top-[262px] absolute text-black text-[129.39px] font-bold font-['Ubuntu']">👋</div>
            </div>
            <Presentation/>
            <ProposeHelp/>
            
        </div>
 
    );
};

export default Home;
