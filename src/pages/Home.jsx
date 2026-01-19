import "./Home.css";

export default function Home() {
    return (
        <section className="home">
            <div className="overlay">
                <h1>Shane’s Story</h1>

                <p className="tagline">
                    A powerful independent film capturing resilience, struggle, and hope.
                </p>

                <a
                    href="https://fundraising-link-here.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fundraising-btn"
                >
                    Support the Film
                </a>

                <div className="trailer">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/4y8xSUwa9R0?si=XDmaWsaDWqzlzGDi" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </div>
        </section>
    );
}