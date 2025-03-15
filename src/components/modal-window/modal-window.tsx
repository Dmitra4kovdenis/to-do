import React, { useState } from "react";
import Modal from "react-modal";
import {
  customStyles,
  ButtonApply,
  InputModal,
  Title,
  Buttons,
  ButtonClose,
  InputContainer,
  PlusButton,
} from "./styled";
import IconPlus from "../../icons/icon-plus/plus";

Modal.setAppElement("#modal");

interface ModalProps {
  addItem: (item: string) => void;
}

function ModalWindow({ addItem }: ModalProps) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [value, setValue] = useState("");

  return (
    <div>
      <PlusButton onClick={openModal}>
        <IconPlus />
      </PlusButton>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <Title>NEW NOTE</Title>
        <InputContainer>
          <InputModal
            value={value}
            placeholder="Input your note..."
            onChange={(event) => {
              setValue(event.target.value);
            }}
          />
        </InputContainer>
        <Buttons>
          <ButtonClose onClick={closeModal}>CANSEL</ButtonClose>
          <ButtonApply
            onClick={() => {
              addItem(value);
              setValue("");
              closeModal();
            }}
          >
            APPLY
          </ButtonApply>
        </Buttons>
      </Modal>
    </div>
  );
}

export default ModalWindow;
