import { Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import Blog from "./Pages/Blog";
import DropOffPoints from "./Pages/DropOffPoints";
import RecyclingCompanies from "./Pages/RecyclingCompanies";
import WasteCompanies from "./Pages/WasteCompanies";
import Hero from './Hero';
import FeaturedPost from './Pages/FeaturedPost';
import About from './Pages/About';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import CTA from './Pages/CTA';
import Home from './Pages/Home';
import ResponsiveAppBar from './ResponsiveAppBar';
import LoginButton from '../SignIn';

function RoutesTree() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/featured-post" element={<FeaturedPost />} />
                <Route path="/call-to-action" element={<CTA />} />
                <Route path="/drop-off-points" element={<DropOffPoints />} />
                <Route path="/recycling-companies" element={<RecyclingCompanies />} />
                <Route path="/waste-companies" element={<WasteCompanies />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/responsive-app-bar" element={<ResponsiveAppBar />} />
                <Route path="/about" element={<About />} />
                <Route path="/sign-up" element={<SignUp/>} />
                <Route path="/sign-in" element={<SignIn />} />
            </Routes>
        </div>
    );
}

export default RoutesTree;