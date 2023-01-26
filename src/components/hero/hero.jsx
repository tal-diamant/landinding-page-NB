import "./heroStyle.css";

export default function Hero() {
  return (
    <section>
      <div className="container hero-content">
        <div className="hero-badge">
          <div className="hero-badge-feature">New feature</div>{" "}
          <div className="to-dashboard-btn">
            Check out the team dashboard{" "}
            <img src="arrow-right.png" alt="arrow" />
          </div>
        </div>
        <h1>
          Agile solution for alternatives production and sourcing for the
          textile industry
        </h1>
        <p className="hero-text-supportive">
          Maximize your supply chain potential and reduce risk by exploring
          thousands of suppliers and manufacturers across the continent. Tackles
          industry challenges through sustainable and innovative solutions that
          drive cost savings.
        </p>
        <div className="hero-actions">
          <a className="hero-book-demo-btn" href="#">
            <img src="calendar.svg" alt="calendar icon" />
            Book a demo
          </a>
          <a className="hero-signup-btn" href="#">Sign up</a>
        </div>
        <div>
          <img src="Macbook Pro 16 mockup.png" alt="Macbook Pro 16"/>
        </div>
      </div>
    </section>
  );
}
