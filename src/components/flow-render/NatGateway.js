import { useCallback, useRef } from "react";
import { Handle, Position } from "react-flow-renderer";

const handleStyle = { top: 100 };

function NatGateway({ data, children }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div
      style={{
        width: 100,
        height: 50,
        border: "1px solid black",
        borderRadius: 6,
      }}
    >
      {/* <Handle type="target" position={Position.Top} /> */}
      <p style={{ margin: 0 }}>nOps-prod-nat-gw-1</p>
      <p style={{ margin: 0 }}>nat-0bf41eed-642de6cdb</p>
      <p style={{ margin: 0 }}>10.8.4.23</p>
      <p style={{ margin: 0 }}>44.228.116.85</p>
      <Handle type="source" position={Position.Bottom} id="b" />
    </div>
  );
}

export default NatGateway;
