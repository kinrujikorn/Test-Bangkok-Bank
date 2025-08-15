import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ItemForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.post("http://localhost:3000/items", { name, description });
    navigate("/");
  };

  return (
    <>
      <div>
        <h1>Add New Items</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name: </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Description: </label>
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button type="submit">Add Item</button>
          <button type="button" onClick={() => navigate("/")}>
            Cancel
          </button>
        </form>
      </div>
    </>
  );
}

export default ItemForm;
