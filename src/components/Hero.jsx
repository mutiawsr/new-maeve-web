import Header from '../components/Header';
import Button from './Button';

function Hero() {
    return (
        <div className="h-screen flex flex-col">
            <Header />
            <section className="flex flex-col items-center justify-center flex-1 gap-8">
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
    );
}

export default Hero;