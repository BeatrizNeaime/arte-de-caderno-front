import { MyTable, TBody, TH, THead } from "src/Components/Table/style";
import DrawsWaitingTR from "./tr";

const DrawsTableConstructor = ({ head, data }) => {
  return (
    <MyTable>
      <THead>
        {head.map((d, i) => {
          return <TH key={i}>{d}</TH>;
        })}
      </THead>
      <TBody>
        {data.map((d, i) => {
          return <DrawsWaitingTR draw={d} key={i} />;
        })}
      </TBody>
    </MyTable>
  );
};

export default DrawsTableConstructor;
