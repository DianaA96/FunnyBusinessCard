import './App.css';
import Card from './Card'

let diana = {nombres: "Diana Guadalupe", apellidos: "García Aguirre", logosLinks: ["diana.aguirre.0011", "DianaA96", "dianaa0011", "diana-garcia-aguirre", "dianaa960611@gmail.com"] };

function App() {
  return (
    <Card {...diana}/>
  );
}

export default App;
