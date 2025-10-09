import Header from '../components/Header';
import Button from './Button';

function Hero() {
    return (
        <div className="h-screen">
            <Header />
            <section className="flex flex-col items-center justify-center gap-8 mt-10">
                <div>
                    <img
                        src="/Mono.webp"
                        alt="Princess Mononoke wearing mask GIF"
                    />
                </div>
                <div>
                    <Button text="Get To Know Maeve!" className="text-black" href="#about" />
                </div>
            </section>
        </div>
    )
}

export default Hero;