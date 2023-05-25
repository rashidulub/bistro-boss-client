import SectionTitle from "../../components/SectionTitle/SectionTitle";
import featured1 from '../../assets/home/featured.jpg'
import './FeturedItem.css'

const FeturedItem = () => {
    return (
        <div className="featured-item bg-fixed pt-10 my-20">
            <SectionTitle
            subHedding="Check it out"
            hedding="Featured Item "
            ></SectionTitle>
            <div className="md:flex justify-center bg-slate-500 bg-opacity-60 items-center pb-20 px-32">
                <div>
                <img src={featured1} alt="" />
                </div>
                <div className="md:ml-12 text-white">
                    
                    <p>Aug 20, 2023</p>
                    <p className="uppercase font-bold">where i get can some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque recusandae cupiditate dolorem voluptatum nobis, consectetur labore ut. Quibusdam ut molestiae animi minus totam placeat, nostrum alias dolores quidem, repellendus delectus sapiente quis fugit? Repudiandae dolore cum unde est sed. Inventore eius atque mollitia, quaerat deleniti nihil illum velit perspiciatis cumque!</p>
                    <button className="btn btn-outline border-0 border-b-4">read more..</button>
                </div>
            </div>
            
        </div>
    );
};

export default FeturedItem;