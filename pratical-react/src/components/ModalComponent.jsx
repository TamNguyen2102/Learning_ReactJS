import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");
function ModalComponent() {
  const [modalIsOpen, setOpenModal] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Open Modal
      </button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setOpenModal(false)}>
        <h1>Modal Header</h1>
        <h3>Modal body</h3>
        <button
          onClick={() => {
            setOpenModal(!modalIsOpen);
          }}
        >
          Close
        </button>
      </Modal>
    </div>
  );
}

export default ModalComponent;
