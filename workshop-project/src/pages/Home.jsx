import Footer from '../components/Footer';
import { Landing } from '../components/Landing';
import Navigation from '../components/Navigation';
import Presentation from '../components/Presentation';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Landing />
            <Presentation/>
            <Footer/>
        </div>
    );
};

export default Home;
