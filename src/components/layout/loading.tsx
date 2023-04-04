import Image from "next/image";
import styled, { keyframes } from "styled-components";

export default function Loading() {
  const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
  const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  `;
  const Loader = styled.img`
    width: 50%;
    height: 50%;
    object-fit: contain;
    animation: ${rotate} 0.7s linear infinite;
  `;
  return (
    <Main>
      <Loader src="/portal.png" alt="loading" />
    </Main>
  );
}
