import Badge from "../badge/badge";
import "./features-3-styles.css";

export default function Features3() {
  return (
    <section className="features-3">
      {/* top */}
      <div className="n-container features-3-content-top">
        <div className="features-3-heading-and-supporting-text">
          <div className="features-3-heading-and-badge">
            <Badge text={"Breaking Down the Numbers"} />
            <h2 className="features-3-main-heading">
              Empower your Brand with Agile and Sustainable Self-Serve Solutions
            </h2>
          </div>
          <p className="features-3-supporting-text">
            Manage your brand with our Agile Self-Serve Solutions. Our platform
            provides powerful insights to supports businesses in integrating ESG
            principles into their strategy for a more sustainable future.
          </p>
        </div>
      </div>

      {/* bottom */}
      <div className="n-container features-3-content-bottom">
        <div className="features-3-image-container">
          <img src="features 3 screen mockup.png" alt="dashboard" />
        </div>
        <div className="features-3-features-container">
          {/* 1 */}
          <div className="features-3-feature-text">
            <div>
              <img src="chat icon.png" alt="chat icon" />
            </div>

            <div className="features-3-feature-heading-and-support-text">
              <h3 className="features-3-feature-heading">A Comprehensive Look at Sales Performance</h3>
              <p className="features-3-feature-support-text">
                Provides an in-depth analysis that covers forecasting, tracking,
                analyzing sales data, identifying trends, setting targets, and
                practical advices on increasing sales.
              </p>
            </div>

            <div className="features-3-feature-subheading">
              <a href="#">Read more</a>
            </div>
          </div>

          {/* 2 */}
          <div className="features-3-feature-text">
            <div>
              <img src="lightning-icon.png" alt="lightning icon" />
            </div>

            <div className="features-3-feature-heading-and-support-text">
              <h3 className="features-3-feature-heading">A Guide to Developing an Effective Restocking Strategy</h3>
              <p className="features-3-feature-support-text">
                A comprehensive guide that covers your demand, determining
                reorder points, and managing lead times. It provides practical
                advices on creating a restocking plan.
              </p>
            </div>

            <div className="features-3-feature-subheading">
              <a href="#">Read more</a>
            </div>
          </div>

          {/* 3 */}
          <div className="features-3-feature-text">
            <div>
              <img src="outlink-icon.png" alt="outlink? icon" />
            </div>

            <div className="features-3-feature-heading-and-support-text">
              <h3 className="features-3-feature-heading">Integrating an ESG Strategies for Long-term Success</h3>
              <p className="features-3-feature-support-text">
                Guiding organizations looking to embed sustainability into their
                business. This comprehensive guide covers the why, what and how
                of ESG strategy integration
              </p>
            </div>

            <div className="features-3-feature-subheading">
              <a href="#">Read more</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
