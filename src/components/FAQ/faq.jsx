import FaqItem from "../faq item/faqItem";
import "./faqStyles.css";

import { faqs } from "../../mock data/faq-data";

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
          {faqs.map((item,i) => (
            <FaqItem data={item} key={i}/>
          ))}

        </div>
      </div>
    </section>
  );
}
