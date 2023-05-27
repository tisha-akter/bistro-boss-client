import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import UseMenu from '../../../hooks/UseMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';


const Menu = () => {

    const [menu] = UseMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const pizzas = menu.filter(item => item.category === 'pizza');
    const salads = menu.filter(item => item.category === 'salad');
    const soups = menu.filter(item => item.category === 'soup');
    const offered = menu.filter(item => item.category === 'offered');
   
   

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover
                img={menuImg}
                title='Our menu'
            ></Cover>
            {/* main cover  */}
            <SectionTitle
                subHeading="Don't Miss"
                heading="Today's Offer"
            ></SectionTitle>
            {/* offered menu items  */}
            <MenuCategory
                items={offered}
            ></MenuCategory>
            {/* dessert items  */}
            <MenuCategory
                items={desserts}
                title="dessert"
                img={dessertImg}
            ></MenuCategory>
                {/* pizza  */}
            <MenuCategory
                items={pizzas}
                title={"pizza"}
                img={pizzaImg}
            ></MenuCategory>

            {/* salad items  */}
            <MenuCategory
                items={salads}
                title="salad"
                img={saladImg}
            ></MenuCategory>
            {/* soup items  */}
            <MenuCategory
                items={soups}
                title="soup"
                img={soupImg}
            ></MenuCategory>
            
           
        </div>
    );
};

export default Menu;