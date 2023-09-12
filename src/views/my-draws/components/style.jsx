import { colors } from "src/Components/UI/contants";
import styled from "styled-components";

const DrawContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.deepGrey};
  height: 200px;
  width: 300px;
  border-radius: 6px;
`;

const ContainerCover = styled.div`
  height: 50%;
  width: 100%;
  background-image: url(${(p) => p.img});
  background-size: cover;
`;

export { DrawContainer, ContainerCover };
