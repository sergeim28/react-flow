import { Handle, Position } from "react-flow-renderer";

function TableRow() {
  return (
    <div style={{ width: 100, border: "1px solid black" }}>
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "50%",
            borderStyle: "solid",
            borderWidth: "0px 1px 0 0",
          }}
        >
          0.0.0.0
        </div>
        <div style={{ width: "50%", paddingLeft: 5 }}>local</div>
      </div>
      <Handle type="source" position={Position.Right} id={`a`} />
    </div>
  );
}

export default TableRow;
