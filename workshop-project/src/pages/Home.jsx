import { Landing } from '../components/Landing';
import Navigation from '../components/Navigation';
import Presentation from '../components/Presentation';
import ProposeHelp from '../components/ProposeHelp';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Landing />
            <Presentation/>
            <ProposeHelp/>
        </div>
 
    );
};

export default Home;
