import "./ctaStyles.css";

export default function Cta() {
  return (
    <section className="cta">
      <div className="n-container cta-content">
        <div className="cta-heading-support">
          <h2 className="cta-heading">Get on board today !</h2>
          <p className="cta-support-text">
            Join the ranks of top brands and make your business more sustainable
            with NewBrands - already trusted by over 300 companies.
          </p>
        </div>

        <div>
          <div className="cta-actions">
            <a href="#">Register</a>
          </div>
        </div>
      </div>
    </section>
  );
}
