import Header from '../components/Header';
import Button from './Button';

function Hero() {
    return (
        <div className="h-screen">
            <Header />
            <section className="flex flex-col items-center justify-center gap-8 mt-5">
                <div>
                    <h1 className="text-center text-4xl font-bold mb-5">Hello, World! Maeve's here 👋</h1>
                    <img
                        src="/Mono.webp"
                        alt="Princess Mononoke wearing mask GIF"
                    />
                </div>
                <div>
                    <Button text="Get To Know Maeve!" className="text-black" />
                </div>
            </section>
        </div>
    )
}

export default Hero;