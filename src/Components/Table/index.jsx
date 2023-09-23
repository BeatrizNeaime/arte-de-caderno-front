import { useState } from "react";
import { MyTable, TBody, TH, THead, TR, TD } from "./style";
import { InteractiveBtn } from "../InteractiveBtn";
import { colors } from "../UI/contants";
import { Navigate } from "react-router-dom";

const Table = ({ header, data }) => {
  const [redirect, setRedirect] = useState(false);

  return (
    <MyTable>
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
              <TD style={{ justifyContent: "center" }}>{d.drawsId.length}</TD>
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
              {redirect && <Navigate to={`/info/${d._id}`} replace />}
            </TR>
          );
        })}
      </TBody>
    </MyTable>
  );
};

export default Table;
