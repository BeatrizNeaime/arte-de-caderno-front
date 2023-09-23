import styled from "styled-components";

const InteractiveBtn = styled.p`
  color: black;
  opacity: 0.6;
  display: flex;
  font-size: 20px;
  width: ${(p) => (p.width ? p.width : "50%")};
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  background-color: ${(p) => p.bg};

  &:hover {
    background-color: ${(p) => p.hover};
    cursor: pointer;
    opacity: 1;
    color: ${(p) => (p.color ? p.color : "white")};
  }
`;
export { InteractiveBtn };
