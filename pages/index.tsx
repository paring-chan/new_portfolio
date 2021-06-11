import MainPage from "@components/MainPage";
import SecondPage from "@components/SecondPage";
import Navigation from "@components/Navigation";
import { NextSeo } from "next-seo";

export default function Home() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <NextSeo
                title='STORM'
            />
            <Navigation />
            <MainPage />
            <SecondPage />
        </div>
    )
}