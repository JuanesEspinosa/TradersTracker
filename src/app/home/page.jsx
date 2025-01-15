import HeaderMobile from "../components/Headers/HeaderMobile";
import Header from "../components/Headers/Header";
import Section1 from "./sections/Section-1.jsx";

const Home = () => {
    return (
        <div className="w-full min-h-screen flex flex-col  items-center ">
            <HeaderMobile />
            <Header />
            <Section1 />
        </div>
    )
}

export default Home;
