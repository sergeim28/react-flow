import { useCallback, useRef } from "react";
import { Handle, Position } from "react-flow-renderer";

const handleStyle = { top: 100 };

function TableRow({ id }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);
  const target1 = useRef(null);

  return (
    <div style={{ width: 100, border: "1px solid black" }}>
      {/* <Handle type="target" position={Position.Top} /> */}
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
