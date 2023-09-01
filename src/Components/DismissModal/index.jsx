import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Column, RateButton, Button } from "../../styles/sharedStyles";
import { colors } from "../UI/contants";
import { dismissReasons } from "../../utils/dismiss";

const DiscardModal = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const [checkedReason, setCheckedReason] = useState(
    new Array(dismissReasons.length).fill(false)
  );

  const handleReason = (i) => {
    const updateState = checkedReason.map((item, index) =>
      index === i ? !item : item
    );

    setCheckedReason(updateState);
  };

  const desclassificar = () => {
    const reasons = [];
    for (let i = 0; i < checkedReason.length; i++) {
      if (checkedReason[i]) {
        reasons.push(dismissReasons[i].value);
      }
    }
    console.log(reasons);
  };

  return (
    <>
      <RateButton onClick={openModal} bg={colors.gmail} hover={colors.gmail_hover}>
        desclassificar
      </RateButton>
      {showModal && (
        <div
          className="modal show"
          style={{ display: "flex", position: "initial" }}
        >
          <Modal show={showModal}>
            <Modal.Header closeButton>
              <Modal.Title>Desclassificar Obra?</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p style={{ textAlign: "justify" }}>
                Selecione o(s) motivo(s) que o levaram a crer que a obra{" "}
                {"<nome da obra>"} deva ser desclassificado:
              </p>
              <Column
                style={{
                  alignItems: "flex-start",
                  gap: "1rem",
                  margin: "1rem 0",
                }}
              >
                <Form>
                  {dismissReasons.map((reason, index) => {
                    return (
                      <Form.Check
                        key={index}
                        type="checkbox"
                        value={reason.value}
                        label={reason.name}
                        style={{
                          textAlign: "left",
                        }}
                        onChange={() => handleReason(index)}
                      />
                    );
                  })}
                </Form>
              </Column>
            </Modal.Body>

            <Modal.Footer>
              <Button onClick={closeModal}>cancelar</Button>
              <RateButton
                bg={colors.gmail}
                hover={colors.gmail_hover}
                onClick={desclassificar}
              >
                desclassificar
              </RateButton>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </>
  );
};

export default DiscardModal;
