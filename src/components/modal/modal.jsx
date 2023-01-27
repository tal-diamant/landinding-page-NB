import "./modalStyles.css";

export default function Modal({ data, close }) {
  const closeModal = (e) => {
    if(e.target.id === "modal") {
        close();
    }
  };

  return (
    <div className="modal-container" id="modal" onClick={(e) => closeModal(e)}>
      <div className="modal-box">
        <div className="modal-content">
          <div className="modal-icon-heading">
            <div>
              <img src={data.icon} alt="icon" />
            </div>
            <h3 className="modal-heading">{data.heading}</h3>
          </div>
          <p className="modal-text">{data.text}</p>
        </div>
        <div className="modal-actions">
          <button className="modal-ok-btn btn" onClick={() => close()}>
            Ok
          </button>
        </div>
        <div className="modal-close-btn x-btn" onClick={() => close()}>
          <img src="modal-close-icon.png" alt="close icon" />
        </div>
      </div>
    </div>
  );
}
