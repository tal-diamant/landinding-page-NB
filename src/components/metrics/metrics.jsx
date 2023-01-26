import "./metricsStyles.css";

export default function Metrics() {
  return (
    <section className="metrics">
      <div className="n-container">
        <div className="metrics-content-top">
          <div className="metrics-heading-and-supporting-text">
            <div className="metrics-heading-and-subheading">
              <h4 className="metrics-subheading">
                Create a Sustainable Future:
              </h4>
              <h2 className="metrics-main-heading">
                The industry-leading data all in one place
              </h2>
            </div>
            <p className="metrics-supporting-text">
              We’re providing all the data and solution you need to launch and
              grow your brand faster and greener
            </p>
          </div>
        </div>
      </div>

      {/* metrics & testimony */}
      <div className="n-container metrics-container">
        {/* content */}
        <div className="metrics-content-bottom">
          <div className="metrics-content-bottom-row">
            <div className="metrics-content-item">
              <span className="metrics-number">400+</span>
              <p className="metrics-p-headings">Registered brands</p>
              <p className="metrics-p-support-text">We’ve helped build over 400 amazing projects.</p>
            </div>
            <div className="metrics-content-item">
              <span className="metrics-number">700</span>
              <p className="metrics-p-headings">Registered suppliers and factories</p>
              <p className="metrics-p-support-text">Our customers have reported an average of ~600% ROI.</p>
            </div>
          </div>

          <div className="metrics-content-bottom-row">
            <div className="metrics-content-item">
              <span className="metrics-number">9.914</span>
              <p className="metrics-p-headings">Tender published every month</p>
              <p className="metrics-p-support-text">Our free UI kit has been downloaded over 10k times.</p>
            </div>
            <div className="metrics-content-item">
              <span className="metrics-number">76.829+</span>
              <p className="metrics-p-headings">Relocated operations</p>
              <p className="metrics-p-support-text">We’re proud of our 5-star rating with over 200 reviews.</p>
            </div>
          </div>
        </div>

        {/* image */}
        <div>
          <img src="avatar alisa.png" alt="alisa's testimony and rating" />
        </div>
      </div>
    </section>
  );
}
