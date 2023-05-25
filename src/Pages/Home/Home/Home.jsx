import FeturedItem from "../../FeturedItem/FeturedItem";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "./Testimonials/Testimonials";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <FeturedItem></FeturedItem>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;