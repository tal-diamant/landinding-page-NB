import "./ctaStyles.css";

export default function Cta({page}) {
  const homeText = "Join the ranks of top brands and make your business more sustainable with NewBrands - already trusted by over 300 companies.";
  const desktopText = "Join over 4,000+ startups already growing with Untitled.";
  const homeAction = "Register";
  const desktopAction = "Get started";
  return (
    <section className="cta">
      <div className="n-container cta-content">
        <div className="cta-heading-support">
          <h2 className="cta-heading">Get on board today !</h2>
          <p className="cta-support-text">
            {page === "desktop"? desktopText: homeText}
          </p>
        </div>

        <div>
          <div className="cta-actions">
            <a href="#" className="btn">{page === "desktop"? desktopAction: homeAction}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
