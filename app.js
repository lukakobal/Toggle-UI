import { useState } from "react";
import "./styles.css";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  function togglePanel() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className="app">
      <button onClick={togglePanel}>
        {isOpen ? "Hide details" : "Show details"}
      </button>
      {isOpen && (
        <div className="panel">
          <p>This is the details panel.</p>
        </div>
      )}
    </div>
  );
}
