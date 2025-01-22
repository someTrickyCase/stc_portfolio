import HeroSection from "@/components/heroSection/HeroSection";
import MainScene from "@/components/THREE/MainScene";

export default function Home() {
    return (
        <main>
            <section className='fullscreen center-all'>
                <MainScene />
                <HeroSection />
            </section>
        </main>
    );
}
