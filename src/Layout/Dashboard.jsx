import { FaCalendar, FaHome, FaShoppingCart, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">

                <Outlet></Outlet>

                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 text-base-content">

                    <li><NavLink to='/dashboard/home'><FaHome></FaHome>User Home</NavLink></li>
                    <li><NavLink to='/dashboard/reservations'><FaCalendar></FaCalendar>Reservations</NavLink></li>
                    <li><NavLink to='/dashboard/payhistory'><FaWallet></FaWallet>Payment   History</NavLink></li>
                    <li><NavLink to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart>My Cart</NavLink></li>
                    <div className="divider"></div>
                    <li><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink to='/menu'></NavLink></li>
                    <li><NavLink></NavLink></li>
                    <li><NavLink></NavLink></li>
                   


                </ul>

            </div>
        </div>
    );
};

export default Dashboard;