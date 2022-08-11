import {useState, useEffect} from 'react';
import './App.css';


function App() {
  const [Celcius, setCelcius] = useState(0);
  const [Farenheit, setFaren] = useState(0);
  const [kelvin, setKelvin] = useState(0);


  const [tipo, setTipo] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setCelcius((total * tipo) / 1);
    setFaren((total * 9/5) + 32);
    setKelvin((total * tipo) + 273.15);
  }, [total, tipo]);


  const handleTotalChange = e => {
    if (!isNaN(e.target.value)) {
      setTotal(e.target.value);
    }
  };


  return (
    <div className="App">
      <h1>Convertidor de temperaturas</h1>

      <p>Celcius: {Celcius}</p>
      <p>Farenheit: {Farenheit}</p>
      <p>Kelvin: {kelvin}</p>

      <hr />

      <h3>{total}</h3>

      <select onChange={event => setTipo(event.target.value)} value={tipo}>
        <option value={1}>Celcius</option>
      </select>
      <input onChange={handleTotalChange} value={total} />
    </div>
  );
}

export default App;
