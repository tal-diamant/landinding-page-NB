import "./badgeStyles.css";

export default function Badge({ text, type, icon, outline }) {
  return (
    <div className="badge-container">
      <div className={`badge-content ${type ? "with-badge" : ""} ${outline? "badge-outline":""}`}>
        {type && <span className="badge-type">{type}</span>}
        <div className="badge-text-and-icon">
          {text}
          {icon && <img src={icon} alt="icon" />}
        </div>
      </div>
    </div>
  );
}
