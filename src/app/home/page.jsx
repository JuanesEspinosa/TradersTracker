import HeaderMobile from "../components/Headers/HeaderMobile";
import SidebarMobile from "../components/Sidebar/SidebarMobile";

const Home = () => {
    return (
        <div className="w-full min-h-screen flex flex-col  items-center bg-gray-100">
            <HeaderMobile />
            <div className="w-full h-64 bg-blue-800"></div>
        </div>
    )
}

export default Home;
