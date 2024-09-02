import { useEffect, useState } from "react";
import "./App.css";
import axios, { Axios } from "axios";


function App() {
  // USING FETCH FUNCTION
  // fetch("https://catfact.ninja/fact")
  // .then((res) => res.json())
  // .then((data) => {console.log(data)});
  
  const [catFact, setCatFact] = useState("");

  const fetchCatFact = () => {
    axios.get("https://catfact.ninja/fact").then((res) => {
    setCatFact(res.data.fact)
  })
  }
  // USING AXIOS
  useEffect(() => {
    fetchCatFact();
  }, []);
  
  return (
    <div className="App">
      <button onClick={fetchCatFact}>Generate Cat Fact</button>
      <p>{catFact}</p>
    </div>
  );
}

export default App;
