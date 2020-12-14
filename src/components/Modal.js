import React from 'react';

const Modal = ({ handleClose, show, values }) => {
  const showHideClassName = show ? "my-modal display-block" : "my-modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <p>Catalog Name: <span>{values.catalog_name}</span></p>
        <p>Catalog Type: <span>{values.type}</span></p>
        <p>Site: <span>{values.site}</span></p>
        <p>Course:</p>
        <select>

        </select>
        <button type="button" className="btn btn-primary" onClick={handleClose}>close</button>
      </section>
    </div>
  );
};

export default Modal
