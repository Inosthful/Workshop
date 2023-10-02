import Navigation from '../components/Navigation';


const Home = () => {
    return (
        <div>
            <Navigation />
            <div className="bg-neutral-800">
                <div className="w-[60vw] text-center m-auto text-zinc-300 text-[65px] font-bold font-['Ubuntu']">Participer a la vie locale de votre quartier</div>
                <div className="text-center text-zinc-300 text-xl font-normal font-['Amaranth']">Donner un coup de main  a vos commerçant/association</div>
                <img className="w-[80vw] h-[625px] left-[135px] top-[318px] rounded-[10px] shadow border-4 border-neutral-200" src="https://via.placeholder.com/1170x625" />
                <div className="left-[1067px] top-[907px] justify-start items-start inline-flex">
                    <img className="w-[72px] h-[72px] rounded-full border-4 border-neutral-200" src="https://via.placeholder.com/72x72" />
                    <img className="w-[72px] h-[72px] rounded-full border-4 border-neutral-200" src="https://via.placeholder.com/72x72" />
                    <img className="w-[72px] h-[72px] rounded-full border-4 border-neutral-200" src="https://via.placeholder.com/72x72" />
                    <img className="w-[72px] h-[72px] rounded-full border-4 border-neutral-200" src="https://via.placeholder.com/72x72" />
                    <img className="w-[72px] h-[72px] rounded-full border-4 border-neutral-200" src="https://via.placeholder.com/72x72" />
                </div>
                <div className="left-[80px] top-[262px] text-black text-[129.39px] font-bold font-['Ubuntu']">👋</div>
            </div>
        </div>
    );
};

export default Home;
