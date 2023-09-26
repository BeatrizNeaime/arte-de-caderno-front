import { useState } from "react";
import { Navigate } from "react-router-dom";
import {TD, TR} from './style'
import { InteractiveBtn } from "../InteractiveBtn";
import { colors } from "../UI/contants";

const TableRow = ({ student }) => {
  const [redirect, setRedirect] = useState(false);

  return (
    <TR> 
      <TD>{student.name}</TD>
      <TD style={{ justifyContent: "center" }}>{student.drawsId.length}</TD>
      <TD style={{ justifyContent: "center" }}>
        <InteractiveBtn
          width={"10%"}
          bg={colors.facebook}
          hover={colors.deepBlue}
          onClick={() => setRedirect(true)}
        >
          <ion-icon name="eye-outline"></ion-icon>
        </InteractiveBtn>
      </TD>
      {redirect && <Navigate to={`/info/${student._id}`} replace />}
    </TR>
  );
};

export default TableRow;
