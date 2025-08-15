const express = require("express");
import type { Request, Response } from "express";
const cors = require("cors");

interface Item {
  id: number;
  name: string;
  description: string | undefined;
  createdAt: Date;
}

const app = express();
app.use(cors());
app.use(express.json());

let id = 1;
let items: Item[] = [
  {
    id: id++,
    name: "Bank",
    description: "Bangkok",
    createdAt: new Date(),
  },
];

// GET /items
app.get("/items", (req: Request, res: Response<Item[]>) => {
  res.json(items);
});

// POST /items
app.post("/items", (req: Request, res: Response<Item | { error: string }>) => {
  const { name, description } = req.body as {
    name?: string;
    description?: string;
  };

  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }

  const newItem: Item = {
    id: id++,
    name,
    description,
    createdAt: new Date(),
  };

  items.push(newItem);
  res.status(201).json(newItem);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
