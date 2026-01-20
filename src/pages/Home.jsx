import "./Home.css";

export default function Home() {
    return (
        <section className="home">
            <div className="overlay">
                <h1 className="fade-in title">Shane’s Story</h1>

                <p className="tagline fade-in delay-1">
                    Written by Blake Clark, Shane's Story is a feature film about a suicidal gay teenager who is bullied, rejected, and finds love with an older man. The film addresses prominent issues arising from the desperation and loneliness that many young LGBTQ+ adults experience.
                </p>

                <a
                    href="https://fundraising-link-here.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fundraising-btn fade-in delay-2"
                >
                    Support the Film
                </a>

                <div className="trailer">
                    <iframe src="https://www.youtube.com/embed/4y8xSUwa9R0?si=XDmaWsaDWqzlzGDi" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </div>
        </section>
    );
}