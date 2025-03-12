import React from "react";
import Modal from "react-modal";
import {
  customStyles,
  ButtonApply,
  InputModal,
  Title,
  Buttons,
  ButtonClose,
  InputContainer,
  Overlay,
} from "./styled";

Modal.setAppElement("#modal");

function ModalWindow() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <Title>NEW NOTE</Title>
        <form>
          <InputContainer>
            <InputModal placeholder="   Input your note..." />
          </InputContainer>
          <Buttons>
            <ButtonClose onClick={closeModal}>CANSEL</ButtonClose>
            <ButtonApply> APPLY</ButtonApply>
          </Buttons>
        </form>
      </Modal>
    </div>
  );
}

export default ModalWindow;
