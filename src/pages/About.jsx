import "./About.css";

export default function About() {
    return (
        <section className="about-page">
            <div className="about-overlay">
                <h1 className="fade-in delay-1">About Shane’s Story</h1>

                <p className="about-text fade-in delay-2">
                    <span className="highlight">Shane, 16,</span> discovers that he is gay and comes out to his parents. They don't handle it well. Isolated and lonely, Shane has only one friend: Aaron, the school's quarterback and hero.
                </p>

                <hr className="story-divider fade-in delay-3" />

                <p className="about-text fade-in delay-4">
                    One day, Shane finds himself in church, asking God for forgiveness as he contemplates suicide. There, he meets <span className="highlight">Paul, an older man</span>. They form a deep friendship, and through Paul's support, Shane begins to accept and love himself.
                </p>

                <hr className="story-divider fade-in delay-5" />

                <p className="about-text fade-in delay-6">
                    Shane discovers Paul is also gay, and eventually falls in love with him. Meanwhile, he is tormented by school bullies, Zack and Troy. After being thrown out of his home, Shane finds a lawyer who helps him become emancipated.
                </p>

                <hr className="story-divider fade-in delay-7" />

                <p className="about-text fade-in delay-8 ending">
                    This is the story of a boy who begins suicidal, and by the end, becomes the master of his own world.
                </p>
            </div>
        </section>
    );
}