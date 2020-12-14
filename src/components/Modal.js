import React from 'react';

const Modal = ({ handleClose, show, values }) => {
  if (values === [] || values.course === undefined) {
    return <div></div>
  }

  var handleChange = (e) => {
    values.catalog_name = e.target.value;
  }

  const showHideClassName = show ? "my-modal display-block" : "my-modal display-none";
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <p>Catalog Name: <input type="text" value={values.catalog_name} onChange={handleChange}/></p>
        <p>Catalog Type: <span>{values.type}</span></p>
        <p>Site: <span>{values.site}</span></p>
        <p>Course:</p>
        <select multiple>
        {values.course.map(i => <option value="{i}">{i}</option>)}
        </select>
        <button type="button" className="btn btn-primary" onClick={handleClose}>close</button>
      </section>
    </div>
  );
};

export default Modal
