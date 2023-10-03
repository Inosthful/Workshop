import Footer from '../components/Footer';
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
            <Footer/>
        </div>
 
    );
};

export default Home;
