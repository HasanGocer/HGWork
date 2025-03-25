import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());

const graphData = {
  nodes: [
    { id: 1, x: 100, y: 200, image: "http://placekitten.com/100/100" },
    { id: 2, x: 300, y: 400, image: "http://placekitten.com/100/100" },
    { id: 3, x: 500, y: 200, image: "http://placekitten.com/100/100" },
  ],
  edges: [
    { from: 1, to: 2 },
    { from: 2, to: 3 },
  ],
};

app.get("/graph", (req, res) => {
  res.json(graphData);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
