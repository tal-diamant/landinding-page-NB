import "./features-1-styles.css";

export default function Features1() {
  return (
    <section className="features-1">
      <div className="container">
        <div className="features-1-intro">
          <h4 className="features-1-subheading">Features</h4>
          <h2 className="features-1-main-heading">
            Empower your brand to make data-driven ESG decisions{" "}
          </h2>
          <p className="features-1-intro-paragraph">
            Cutting-edge analytics and information that will evaluate the
            environmental, social and governance performance of your suppliers
            for ensuring that your supply chain aligns with your brand's values
            and goals.
          </p>
        </div>
      </div>

      {/* half half sections */}
      {/* 1 */}
      <div className="n-container">
        <div className="features-1-row">
          {/* info */}
          <div className="features-1-info">
            <div className="features-1-icon-and-text">
              <div className="features-1-side-heading">
                <img src="chat icon.png" alt="chat icon" />{" "}
                <h4 className="features-1-subheading">
                  Instant Company Profile Access:
                </h4>
              </div>
              <h3>Get the Information you need</h3>
              <p className="features-1-info-text">
                Access a wealth of data including minimum of quantity for order,
                business details, and certificates. Stay informed and make
                better business decisions
              </p>
            </div>

            <div className="features-1-list">
              <div className="features-1-list-item features-1-info-text">
                <img src="check-icon.png" alt="check-icon" /> Legam
              </div>
              <div className="features-1-list-item features-1-info-text">
                <img src="check-icon.png" alt="check-icon" /> Always give
                customers a human to chat to
              </div>
              <div className="features-1-list-item features-1-info-text">
                <img src="check-icon.png" alt="check-icon" /> Automate customer
                support and close leads faster
              </div>
            </div>
          </div>

          {/* image */}
          <div className="features-1-image">
            <img src="features 1 mockup 1.png" alt="dashboard image" />
          </div>
        </div>
      </div>

      {/* 2 */}
      <div className="n-container">
        <div className="features-1-row">
          {/* image */}
          <div className="features-1-image rtl">
            <img src="features 1 mockup 2.png" alt="dashboard image" />
          </div>

          {/* info */}
          <div className="features-1-info">
            <div className="features-1-icon-and-text">
              <div className="features-1-side-heading">
                <img src="blazing-lightning-icon.png" alt="chat icon" />{" "}
                <h4 className="features-1-subheading">Efficient Launches:</h4>
              </div>
              <h3>Streamline your launch process</h3>
              <p className="features-1-info-text">
                Standardize your launch files for efficient and successful
                launches. Ensure a smooth process and improved outcomes through
                clear and consistent communication with manufacturers
              </p>
            </div>

            <div className="features-1-list">
              <div className="features-1-list-item features-1-info-text">
                <img src="check-icon.png" alt="check-icon" /> Keep your
                customers in the loop with live chat
              </div>
              <div className="features-1-list-item features-1-info-text">
                <img src="check-icon.png" alt="check-icon" /> Embed help
                articles right on your website
              </div>
              <div className="features-1-list-item features-1-info-text">
                <img src="check-icon.png" alt="check-icon" /> Customers never
                have to leave the page to find an answer
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3 */}
      <div className="n-container">
        <div className="features-1-row">
          {/* info */}
          <div className="features-1-info">
            <div className="features-1-icon-and-text">
              <div className="features-1-side-heading">
                <img src="outlink-icon.png" alt="chat icon" />{" "}
                <h4 className="features-1-subheading">
                  Local and Sustainable Fabrics:
                </h4>
              </div>
              <h3>Discover European Alternative Fabrics</h3>
              <p className="features-1-info-text">
                Achieve your ESG goals and discover unique European alternative
                fabrics on our marketplace. Our locally-sourced fabrics will
                help you reach your sustainability targets.
              </p>
            </div>

            <div className="features-1-list">
              <div className="features-1-list-item features-1-info-text">
                <img src="check-icon.png" alt="check-icon" /> Filter, export,
                and drilldown on the data quickly
              </div>
              <div className="features-1-list-item features-1-info-text">
                <img src="check-icon.png" alt="check-icon" /> Save, schedule,
                and automate reports to your inbox
              </div>
              <div className="features-1-list-item features-1-info-text">
                <img src="check-icon.png" alt="check-icon" /> Connect the tools
                you already use with 100+ integrations
              </div>
            </div>
          </div>

          {/* image */}
          <div className="features-1-image">
            <img src="features 1 mockup 3.png" alt="dashboard image" />
          </div>
        </div>
      </div>
    </section>
  );
}
