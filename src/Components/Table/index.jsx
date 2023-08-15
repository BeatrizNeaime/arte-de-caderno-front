import React, { useState } from "react";
import { MyTable, TBody, TH, THead, TR, TD, ShowBtn } from "./style";
import { Navigate } from "react-router-dom";
import StudentInfo from "../Student-info";

const Table = ({ header, data }) => {
  const [showModal, setShowModal] = useState(false);
  const [aluno, setAluno] = useState(null);

  const show = (data) => {
    setAluno(data);
    setShowModal(true);
  };

  return (
    <MyTable>
      {showModal && <Navigate to="/info" state={{student: aluno}} replace />}
      <THead>
        {header.map((h) => {
          return <TH>{h}</TH>;
        })}
      </THead>
      <TBody>
        {data.map((d) => {
          return (
            <TR>
              <TD>{d.nome}</TD>
              <TD>{d.escola}</TD>
              <TD style={{ justifyContent: "center" }}>{d.desenhos}</TD>
              <TD style={{ justifyContent: "center" }}>
                <ShowBtn type="button" onClick={() => show(d)}>
                  ver
                </ShowBtn>
              </TD>
            </TR>
          );
        })}
      </TBody>
    </MyTable>
  );
};

export default Table;
