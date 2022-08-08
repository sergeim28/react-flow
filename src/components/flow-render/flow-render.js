import { useCallback, useState } from "react";
import ReactFlow, {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from "react-flow-renderer";

import TextUpdaterNode from "./TextUpdaterNode.js";

import "./text-updater-node.css";
import TableRow from "./TableRow.js";
import NatGateway from "./NatGateway.js";

const rfStyle = {
  backgroundColor: "#B8CEFF",
  fontSize: 8,
};

const initialNodes = [
  {
    id: "A",
    type: "subnet",
    position: { x: -200, y: 50 },
  },
  {
    id: "A-1",
    type: "tableRow",
    position: { x: 10, y: 80 },
    parentNode: "A",
    extent: "parent",
  },
  {
    id: "A-2",
    type: "tableRow",
    position: { x: 10, y: 92 },
    parentNode: "A",
    extent: "parent",
  },
  {
    id: "A-3",
    type: "natGateway",
    position: { x: 25, y: 120 },
    parentNode: "A",
    extent: "parent",
  },
  {
    id: "B",
    type: "output",
    position: { x: 400, y: 200 },
    data: null,
    style: {
      width: 170,
      height: 140,
      backgroundColor: "rgba(240,240,240,0.25)",
    },
  },
  {
    id: "B-1",
    data: { label: "Child 1" },
    position: { x: 50, y: 10 },
    parentNode: "B",
    extent: "parent",
    draggable: false,
    style: {
      width: 60,
    },
  },
  {
    id: "B-2",
    data: { label: "Child 2" },
    position: { x: 10, y: 90 },
    parentNode: "B",
    extent: "parent",
    draggable: false,
    style: {
      width: 60,
    },
  },
  {
    id: "B-3",
    data: { label: "Child 3" },
    position: { x: 100, y: 90 },
    parentNode: "B",
    extent: "parent",
    draggable: false,
    style: {
      width: 60,
    },
  },
  {
    id: "D",
    type: "subnet",
    position: { x: 200, y: -200 },
  },
  {
    id: "D-1",
    type: "tableRow",
    position: { x: 10, y: 80 },
    parentNode: "D",
    extent: "parent",
  },
  {
    id: "D-2",
    type: "tableRow",
    position: { x: 10, y: 92 },
    parentNode: "D",
    extent: "parent",
  },
  {
    id: "D-3",
    type: "natGateway",
    position: { x: 25, y: 120 },
    parentNode: "D",
    extent: "parent",
  },
];

const initialEdges = [
  {
    id: "a1-a2",
    source: "A-2",
    target: "B-2",
    type: "step",
    markerStart: { type: "arrow" },
    markerEnd: { type: "arrowclosed" },
  },
  {
    id: "a1-b3",
    source: "A-1",
    target: "B-3",
    type: "step",
    markerStart: { type: "arrow" },
    markerEnd: { type: "arrowclosed" },
  },
  {
    id: "a1-d3",
    source: "A-1",
    target: "D-2",
    type: "step",
    markerStart: { type: "arrow" },
    markerEnd: { type: "arrowclosed" },
  },
];

// we define the nodeTypes outside of the component to prevent re-renderings
// you could also use useMemo inside the component
const nodeTypes = {
  subnet: TextUpdaterNode,
  tableRow: TableRow,
  natGateway: NatGateway,
};

function Flow() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      fitView
      style={rfStyle}
      connectionMode="loose"
    />
  );
}

export default Flow;
