import './App.css';
import {Card} from "./components/card"
import {TukiNavbar} from './components/TukiNavbar'
import {Tukifooter} from "./components/Tukifooter";
import {VerticalCard} from "./components/cards";
function App() {
  return (
    <div><TukiNavbar />
    <div className="fonditotukituki">
      <div className="tukiitems">
        <header >
        <VerticalCard  />
        <VerticalCard />
        <VerticalCard />
        <VerticalCard />
        <VerticalCard />
        </header>
      <Tukifooter />
      </div>
     </div>
     </div>
  );
}
export default App;