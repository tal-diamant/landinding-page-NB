import "./faqStyles.css";

export default function Faq() {
  return (
    <section>
      <div className="container">
        <h2>Frequently asked questions</h2>
        <p>Everything you need to know about the product and billing.</p>
        <ul>
          <li>
            <h5>Is there a free trial available?</h5>
            <img src="" alt="plus minus icon" />
            <p>
              Yes, you can try us for free for 30 days. If you want, we’ll
              provide you with a free, personalized 30-minute onboarding call to
              get you up and running as soon as possible.
            </p>
          </li>
          <li>
            <h5>Can I change my plan later?</h5>
            <img src="" alt="plus minus icon" />
          </li>
          <li>
            <h5>What is your cancellation policy?</h5>
            <img src="" alt="plus minus icon" />
          </li>
          <li>
            <h5>Can other info be added to an invoice?</h5>
            <img src="" alt="plus minus icon" />
          </li>
          <li>
            <h5>How does billing work?</h5>
            <img src="" alt="plus minus icon" />
          </li>
          <li>
            <h5>How do I change my account email?</h5>
            <img src="" alt="plus minus icon" />
          </li>
        </ul>
      </div>
    </section>
  );
}
