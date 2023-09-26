import { useState } from "react";
import { MyTable, TBody, TH, THead} from "./style";
import TableRow from "./tr";

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
          return <TableRow student={d} />;
        })}
      </TBody>
    </MyTable>
  );
};

export default Table;
