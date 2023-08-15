import styled from "styled-components";

export const CheckupContainer = styled.div`
  width: ${(p) => p.width};
  height: auto;
  border-radius: 0.5rem;
  padding: 2rem;
  text-align: center;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(5px);
`;
