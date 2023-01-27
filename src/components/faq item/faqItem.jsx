import { useState } from "react";
import "./faqItemStyles.css";

export default function FaqItem({ data }) {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(prev => !prev);
  }

  return (
    <div className="faq-item" onClick={() => toggleOpen()}>
      <div className="faq-item-text-and-support-text">
        <h5 className="faq-item-text">{data.question}</h5>
        {open && <p className="faq-item-support-text">{data.answer}</p>}
      </div>
      <div className="faq-item-expand-fold-icon">
        <img src={open? "minus-circle-icon.png":"plus-circle-icon.png"} alt="plus minus icon" />
      </div>
    </div>
  );
}
