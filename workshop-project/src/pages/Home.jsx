import Navigation from '../components/Navigation';
import Presentation from '../components/Presentation';
import ProposeHelp from '../components/ProposeHelp';

const Home = () => {
    return (
        <div>
            <Navigation />
            <div className="bg-neutral-800 pb-12">
                <div className="pb-6 pt-24 line leading-none w-[80vw] text-center m-auto text-zinc-300 text-[6vw] font-bold font-['Ubuntu']">Participer a la vie locale de votre quartier</div>
                <div className="pb-32 text-center m-auto text-zinc-300 text-xl font-normal font-['Amaranth']">Donner un coup de main  a vos commerçant/association</div>
                <img className="m-auto w-[80vw] h-[625px] rounded-[10px] shadow border-4 border-neutral-200 object-cover" src="https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" />
                <div className="left-[100px] -top-[40px] justify-end items-start inline-flex relative">
                    <img className="w-[72px] h-[72px] rounded-full border-4 border-neutral-200" src="https://source.unsplash.com/random/400x400/?face,volonteer,1" />
                    <img className="w-[72px] h-[72px] rounded-full border-4 border-neutral-200 -ml-8" src="https://source.unsplash.com/random/400x400/?face,volonteer,2" />
                    <img className="w-[72px] h-[72px] rounded-full border-4 border-neutral-200 -ml-8" src="https://source.unsplash.com/random/400x400/?face,volonteer,3" />
                    <img className="w-[72px] h-[72px] rounded-full border-4 border-neutral-200 -ml-8" src="https://source.unsplash.com/random/400x400/?face,volonteer,4" />
                    <img className="w-[72px] h-[72px] rounded-full border-4 border-neutral-200 -ml-8" src="https://source.unsplash.com/random/400x400/?face,volonteer,5" />
                </div>
            </div>
            <Presentation/>
            <ProposeHelp/>
            
        </div>
 
    );
};

export default Home;
