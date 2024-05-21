import HouseList from "../house/house";
import "./App.css";
import Header from "./Header";

function App() {
  return (
    <div className="container">
      <Header subtitle="Providing houses all over the world"></Header>
      <HouseList />
    </div>
  );
}

export default App;
