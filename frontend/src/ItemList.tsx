import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import type { Item } from "./types";

function ItemList() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const getItems = async () => {
      try {
        const res = await axios.get<Item[]>("http://localhost:3000/items");
        setItems(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    getItems();
  }, []);

  return (
    <>
      <div>
        <h1>List of Products</h1>
        <Link to="/items/new">Add New Item</Link>
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ItemList;
