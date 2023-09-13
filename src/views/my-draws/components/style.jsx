import { colors, fonts } from "src/Components/UI/contants";
import styled from "styled-components";

const DrawContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.deepGrey};
  height: 300px;
  width: 300px;
  border-radius: 6px;
  border: 1px solid ${colors.deepGrey};
`;

const ContainerCover = styled.div`
  height: 50%;
  width: 100%;
  background-image: url(${(p) => p.img});
  background-size: cover;
  object-fit: cover;
`;

const DrawTitle = styled.p`
  font-family: ${fonts.jetbrains};
  font-size: 20px;
  font-weight: 600;
`

const CardBody = styled.div`
  display:flex;
  flex-direction: column;
  padding: 1rem;
  align-items: center;
`

export { DrawContainer, ContainerCover, DrawTitle, CardBody };

