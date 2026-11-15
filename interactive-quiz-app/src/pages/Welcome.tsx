
import Features from "../components/Features";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";

export default function Welcome() {
    return (
        <main className="flex min-h-screen w-full items-center justify-center bg-gray-50 py-1">
            <div className="flex w-full max-w-3xl flex-col overflow-hidden rounded-2xl border-2 border-gray-200 bg-white">
                <Header />

                <section className="flex flex-col bg-white">
                    <HeroSection />
                    <Features />
                </section>
            </div>
        </main>
    );
}
