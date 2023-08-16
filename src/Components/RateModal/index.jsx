import { useState } from "react";
import {
  RateButton,
  Button,
  Column,
  Alert,
  Linha,
  Label,
  Input,
} from "../../styles/sharedStyles";
import { green_rate, green_rate_hover, yellow_color } from "../UI/contants";
import Modal from "react-bootstrap/Modal";

const RateModal = ({ nota }) => {
  const [show, setShow] = useState(false);

  const showModal = () => setShow(true);
  const closeModal = () => setShow(false);

  return (
    <>
      <RateButton bg={green_rate} hover={green_rate_hover} onClick={showModal}>
        avaliar
      </RateButton>
      <Modal show={show} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar avaliação?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Column>
            <Alert
              cor={yellow_color}
              style={{
                borderRadius: "3px",
                padding: "5px",
                width: "auto"
              }}
            >
              Pense bem! Esta ação não pode ser desfeita!
            </Alert>
            <Linha>
              <Label style={{ paddingBottom: "0"}} >Nota atribuída ao desenho: </Label>
              <Input
                value={nota}
                type="text"
                disabled
                style={{
                  textAlign: "center",
                }}
                width={"50px"}
              />
            </Linha>
          </Column>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            cancelar
          </Button>
          <RateButton bg={green_rate} hover={green_rate_hover}>
            confirmar
          </RateButton>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default RateModal;
