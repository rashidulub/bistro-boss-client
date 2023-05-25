import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/menuItem/MenuItem";


const PopularMenu = () => {
    
        const [menu, setMenu]= useState([])
        useEffect(()=>{

            fetch('menu.json')
            .then(res=>res.json())
            .then(data=>{
                const populerItem = data.filter(item=>item.category === 'popular' )
                setMenu(populerItem)})

        },[])

    return (
        <section>
            <SectionTitle
            subHedding='Check it out'
            hedding='FROM OUR MENU'
            ></SectionTitle>

            {
                menu.map(item=> <MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
            }


        </section>
    );
};

export default PopularMenu;