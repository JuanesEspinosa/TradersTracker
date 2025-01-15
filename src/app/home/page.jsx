import HeaderMobile from "../components/Headers/HeaderMobile";
import Header from "../components/Headers/Header";
import Section1 from "./sections/Section-1.jsx";
import Section2 from "./sections/Section-2.jsx";

const Home = () => {
    return (
        <div className="w-full min-h-screen flex flex-col  items-center bg-gray-200 dark:bg-gray-800">
            <HeaderMobile />
            <Header />
            <div className="w-full flex flex-col gap-4 pb-16">
                <Section1 />
                <Section2 />
            </div>
        </div>
    )
}

export default Home;
