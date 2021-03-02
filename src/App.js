import { useState } from "react";
import CFemailer from "./components/CFemailer.js";

export default function App() {
  const [form, setForm] = useState(false);

  return (
    <div className="App">
      <CFemailer color={"#4caf50"} onClick={() => setForm(!form)} />
    </div>
  );
}
