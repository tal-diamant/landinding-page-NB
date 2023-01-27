import "./badgeStyles.css";

export default function Badge({ text, type, icon }) {
  return (
    <div className="badge-container">
      <div className={`badge-content ${type ? "with-badge" : ""}`}>
        {type && <span className="badge-type">{type}</span>}
        <div className="text-and-icon">
          {text}
          {icon && <img src={icon} alt="icon" />}
        </div>
      </div>
    </div>
  );
}
