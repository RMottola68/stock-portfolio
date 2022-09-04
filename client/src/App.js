import { useState, useEffect} from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Link
} from 'react-router-dom';
import Count from "./Count"
function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <Routes>
      <Route path="*" element={<Navigate to="/count" replace/>} />
      <Route path="count" element={<Count />} />
    </Routes>
  );
}

export default App;
