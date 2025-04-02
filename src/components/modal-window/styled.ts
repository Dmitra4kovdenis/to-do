import styled from "styled-components";

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  margin: 0px auto 25px;
  font-size: 24px;
`;
export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 30px;
  margin-top: 128px;
`;
export const customStyles = {
  content: {
    width: "500px",
    height: "300px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "16px",
    opacity: "1",
    overflow: "hidden",
    backgroundColor: "rgba (0,0,0,0.75)",
  },
};
export const ButtonApply = styled.button`
  width: 110px;
  height: 40px;
  font-size: 18px;
  background: #6c63ff;
  border-radius: 5px;
  border: none;
  color: white;

  &:disabled {
    opacity: 0.8;
    pointer-events: none;
  }
`;
export const ButtonClose = styled.button`
  width: 110px;
  height: 40px;
  font-size: 18px;
  border-color: #6c63ff;
  border-radius: 5px;
  color: #6c63ff;
`;

export const InputModal = styled.input`
  width: 440px;
  height: 40px;
  font-size: 16px;
  display: flex;
  padding: 0px 24px;
  border: 1px solid #6c63ff;
  border-radius: 5px;
`;
export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const PlusButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
  width: 50px;
  height: 50px;
  background: #6c63ff;
  border-radius: 25px;
  font-size: 45px;
  position: absolute;
  bottom: 36px;
  right: 340px;
`;

export const Overlay = styled.div`
  display: none; /* Изначально скрытый */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Полупрозрачный черный фон */
  z-index: 1; /* Убедитесь, что это под модальным окном */
`;
