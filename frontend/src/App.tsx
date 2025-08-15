import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemList from "./ItemList";
import ItemForm from "./ItemForm";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ItemList />}></Route>
        <Route path="/items/new" element={<ItemForm />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
