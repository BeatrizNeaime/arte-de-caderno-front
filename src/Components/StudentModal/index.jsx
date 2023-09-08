import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { ShowBtn } from "../Table/style";
import {
  Column,
  InputColumn,
  Label,
  Input,
  Title,
} from "src/styles/sharedStyles";
import { schoolRoutes } from "src/services/schoolRoutes";
import Loading from "../Loading";

const StudentModal = ({ student }) => {
  const [modal, setModal] = useState(false);
  const [school, setSchool] = useState(null);
  const [loading, setLoading] = useState(false);
  const showModal = () => setModal(true);
  const closeModal = () => setModal(false);

  const getSchool = async (school) => {
    const a = await schoolRoutes.getSchoolById(school);
    if (a) {
      setSchool(a.name);
    }
  };

  useEffect(() => {
    getSchool(student.schoolId);
  }, []);

  return (
    <>
      <ShowBtn onClick={showModal}>ver</ShowBtn>
      {!loading && (
        <Modal show={modal} onHide={closeModal}>
          <Modal.Header>
            <Modal.Title>Detalhes do Estudante</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Column
              style={{
                gap: "1rem",
              }}
            >
              <InputColumn width={"100%"}>
                <Label>Nome:</Label>
                <Input value={student.name} disabled />
              </InputColumn>
              <InputColumn width={"100%"}>
                <Label>Data de Nascimento:</Label>
                <Input value={student.date_of_birth} disabled />
              </InputColumn>
              <InputColumn width={"100%"}>
                <Label>CEP:</Label>
                <Input value={student.cep} disabled />
              </InputColumn>
              <InputColumn width={"100%"}>
                <Label>Escola:</Label>
                <Input value={school} disabled />
              </InputColumn>
            </Column>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      )}
      {loading && (
        <Modal show={modal} onHide={closeModal}>
          <Modal.Header>
            <Modal.Title>Detalhes do Estudante</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Loading />
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};

export default StudentModal;
