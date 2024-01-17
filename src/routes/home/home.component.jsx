import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/directory.components";



const Home = () => {

    const categories = [
        {
            "id": 1,
            "title": "hats",
            "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
        },
        {
            "id": 2,
            "title": "jackets",
            "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
        },
        {
            "id": 3,
            "title": "sneakers",
            "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
        },
        {
            "id": 4,
            "title": "Ladies",
            // "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
            imageUrl: "https://wallpapercave.com/dwp1x/wp4038332.jpg"
        },
        {
            "id": 5,
            "title": "Gentleman",
            // "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
            // imageUrl: "https://wallpapercave.com/dwp1x/wp2812022.jpg"
            imageUrl: "https://wallpapercave.com/dwp1x/wp4038415.jpg"
        }
    ]

    return (
        <div>
            <Outlet />
            
            <Directory categories={categories} />
        </div>

    );
}

export default Home;
