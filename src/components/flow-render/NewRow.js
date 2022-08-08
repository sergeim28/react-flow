import { Handle, Position } from "react-flow-renderer";

function NewRow() {
  return (
    <div style={{ width: 100, border: "1px solid black" }}>
      <Handle type="target" position={Position.Top} id="a" />
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
      <Handle type="source" position={Position.Right} id={`b`} />
    </div>
  );
}

export default NewRow;
