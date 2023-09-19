import { TbInfoCircle } from "react-icons/tb";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { colors } from "../UI/contants";
import { Modal } from "react-bootstrap";
import { drawRoutes } from "src/services/drawRoutes";

const Draws = ({ draw }) => {
  const [show, setShow] = useState(false);
  const [author, setAuthor] = useState(null);

  const handleOpen = () => {
    getAuthor(draw.author);
    setShow(true);
  };
  const handleClose = () => setShow(false);

  const getAuthor = async (id) => {
    const a = await drawRoutes.getAuthor(id);
    if (id && a) {
      setAuthor(a.name);
    }
  };

  return (
    <>
      <DrawCard onClick={handleOpen}>
        <div>
          <DrawImg src={draw.linkImage} />
        </div>
        <DrawInfo>
          <DrawSpan>
            <TbInfoCircle /> Edição: 2023
          </DrawSpan>
        </DrawInfo>
      </DrawCard>
      {show && (
        <Modal show={show} onHide={handleClose} size="md" >
          <Modal.Header closeButton closeVariant='red'>
            <Modal.Title >Obra: {draw.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ModalImg src={draw.linkImage} />
          </Modal.Body>
          <Modal.Footer>Autor(a): {author}</Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default Draws;

const DrawCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px;
  border-radius: 15px;
  background-color: ${colors.deepGrey};
  max-width: 250px;

  &:hover {
    cursor: pointer;
  }
`;

const DrawInfo = styled.div`
  padding: 5px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const DrawSpan = styled.p`
  display: flex;
  gap: 2px;
  align-items: center;
  justify-content: center;
`;

const DrawImg = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 15px;
`;

const ModalImg = styled.img`
  height: 100%;
  width: 100%;
`;
