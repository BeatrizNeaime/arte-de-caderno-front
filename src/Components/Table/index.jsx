import React, { useState, useEffect } from "react";
import { MyTable, TBody, TH, THead, TR, TD, ShowBtn } from "./style";
import { Navigate } from "react-router-dom";
import { schoolRoutes } from "src/services/schoolRoutes";
import StudentModal from "../StudentModal";

const Table = ({ header, data }) => {
  const [showModal, setShowModal] = useState(false);
  const [aluno, setAluno] = useState(null);
  const [school, setSchool] = useState(null);

  const show = (data) => {
    setAluno(data);
    setShowModal(true);
  };

  const getSchool = async (id) => {
    const a = await schoolRoutes.getSchoolById(id);
    if (a) {
      console.log(a);
      setSchool(a.name);
    }
  };

  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <MyTable>
      {showModal && <Navigate to="/info" replace />}
      <THead>
        {header.map((h) => {
          return <TH>{h}</TH>;
        })}
      </THead>
      <TBody>
        {data.map((d) => {
          return (
            <TR>
              <TD>{d.name}</TD>
              <TD>
                {school}
              </TD>
              <TD style={{ justifyContent: "center" }}>{d.drawsId.length}</TD>
              <TD style={{ justifyContent: "center" }}>
                <StudentModal student={d} />
              </TD>
            </TR>
          );
        })}
      </TBody>
    </MyTable>
  );
};

export default Table;
