import MainPage from "@components/MainPage";
import SecondPage from "@components/SecondPage";
import Navigation from "@components/Navigation";

export default function Home() {
    return (
        <div>
            <Navigation />
            <MainPage />
            <SecondPage />
        </div>
    )
}