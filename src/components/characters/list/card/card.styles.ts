import Image from "next/image";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  height: 350px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  transition: transform 0.5s ease-in-out;
  transform-style: preserve-3d;
  transform: ${({ isFlipped }: { isFlipped: boolean }) =>
    isFlipped ? "rotateY(180deg)" : "none"};
`;
const Perfil = styled(Image)`
  border-radius: 15px;
  width: 100%;
  height: 100%;
  &:hover {
    opacity: 0.9;
  }
`;

const CardFace = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;

const CardFront = styled(CardFace)`
  background-color: black;
  display: flex;
`;

const CardBack = styled(CardFace)`
  background-color: black;
  border: 2px solid #9ec150;
  border-radius: 10px;
  transform: rotateY(180deg);
  z-index: 2;
  cursor: pointer;
`;

const BottomBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 10px;
  z-index: 1;
  height: 40px;
  background-color: black;
  position: absolute;
  bottom: 0px;
  > * {
    display: flex;
    flex-grow: 1;
    background-color: black;
    height: 100%;
    border: none;
    color: #9ec150;
    font-size: 18px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: #9ec150;
      color: black;
    }
    > * {
      margin: auto;
    }
  }
`;

export { CardContainer, Perfil, CardFront, CardBack, BottomBar };
