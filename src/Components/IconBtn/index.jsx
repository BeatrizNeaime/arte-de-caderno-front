import styled from "styled-components";

const IconBtn = ({ icon, action, options }) => {
  return (
    <IconP
      color={options.color}
      hover={options.hover}
      font={options.font}
      onClick={action}
    >
      <ion-icon name={icon}></ion-icon>
    </IconP>
  );
};

export default IconBtn;

const IconP = styled.p`
  color: ${(p) => p.color};
  font-size: ${(p) => p.font};

  &:hover {
    cursor: pointer;
    color: ${(p) => p.hover};
  }
`;
