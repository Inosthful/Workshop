import { Landing } from '../components/Landing';
import Navigation from '../components/Navigation';
import Presentation from '../components/Presentation';
import ProposeHelp from '../components/ProposeHelp';
import Trait from '../components/Trait';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Landing />
            <Presentation/>
            <ProposeHelp/>
            <Trait/>
        </div>
 
    );
};

export default Home;
