function Subnet() {
  return (
    <div
      style={{
        backgroundColor: "transparent",
        border: "1px solid black",
        borderRadius: 8,
        padding: 12,
        width: 120,
        height: 150,
      }}
    >
      {/* <Handle type="target" position={Position.Top} /> */}
      <h5 style={{ wrap: "nowrap", margin: "4px 0" }}>
        nOps-prod-public-1 subnet-08f234cca7b234jk34d
      </h5>
      <p style={{ wrap: "nowrap", margin: "4px 0" }}>10.8.4.0/22 - 10.8.4.1</p>

      <h5 style={{ wrap: "nowrap", margin: "4px 0" }}>
        rtb-0614432421a4532343 | nOps-prod-public
      </h5>
    </div>
  );
}

export default Subnet;
