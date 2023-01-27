import "./faqStyles.css";

export default function Faq() {
  return (
    <section className="FAQ">
      <div className="n-container">
        <div className="faq-heading-and-support-text">
          <h2 className="faq-main-heading">Frequently asked questions</h2>
          <p className="faq-support-text">
            Everything you need to know about the product and billing.
          </p>
        </div>
      </div>
      <div className="n-container">
        <div className="faq-faqs">
          <div className="faq-item">
            <div className="faq-item-text-and-support-text">
              <h5 className="faq-item-text">
                Is there a free trial available?
              </h5>
              <p className="faq-item-support-text">
                Yes, you can try us for free for 30 days. If you want, we’ll
                provide you with a free, personalized 30-minute onboarding call
                to get you up and running as soon as possible.
              </p>
            </div>
            <div className="faq-item-expand-fold-icon">
              <img src="minus-circle-icon.png" alt="plus minus icon" />
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-item-text-and-support-text">
              <h5 className="faq-item-text">Can I change my plan later?</h5>
              {/* <p className="faq-item-support-text"></p> */}
            </div>
            <div className="faq-item-expand-fold-icon">
              <img src="plus-circle-icon.png" alt="plus minus icon" />
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-item-text-and-support-text">
              <h5 className="faq-item-text">What is your cancellation policy?</h5>
              {/* <p className="faq-item-support-text"></p> */}
            </div>
            <div className="faq-item-expand-fold-icon">
              <img src="plus-circle-icon.png" alt="plus minus icon" />
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-item-text-and-support-text">
              <h5 className="faq-item-text">Can other info be added to an invoice?</h5>
              {/* <p className="faq-item-support-text"></p> */}
            </div>
            <div className="faq-item-expand-fold-icon">
              <img src="plus-circle-icon.png" alt="plus minus icon" />
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-item-text-and-support-text">
              <h5 className="faq-item-text">How does billing work?</h5>
              {/* <p className="faq-item-support-text"></p> */}
            </div>
            <div className="faq-item-expand-fold-icon">
              <img src="plus-circle-icon.png" alt="plus minus icon" />
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-item-text-and-support-text">
              <h5 className="faq-item-text">How do I change my account email?</h5>
              {/* <p className="faq-item-support-text"></p> */}
            </div>
            <div className="faq-item-expand-fold-icon">
              <img src="plus-circle-icon.png" alt="plus minus icon" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
