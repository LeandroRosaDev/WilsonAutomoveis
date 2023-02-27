import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Sobre from './Components/sobre/Sobre';
import Veiculos from './Components/Veiculos/Veiculos';
import Veiculo from './Components/Veiculos/Veiculo';
import Mapa from './Components/Mapa/Mapa';
import Contato from './Components/Contato/Contato';
import Carro1 from './Components/Veiculos/Carros/Carro1';
import Carro2 from './Components/Veiculos/Carros/Carro2';
import Carro3 from './Components/Veiculos/Carros/Carro3';
import Carro4 from './Components/Veiculos/Carros/Carro4';
import Carro5 from './Components/Veiculos/Carros/Carro5';
import Carro6 from './Components/Veiculos/Carros/Carro6';
import Carro7 from './Components/Veiculos/Carros/Carro7';
import Carro8 from './Components/Veiculos/Carros/Carro8';
import Crvl from './Components/Conteudo/Crvl';
import Cnh from './Components/Conteudo/Cnh';
import Km from './Components/Conteudo/Km';
import MotApp from './Components/Conteudo/MotApp';
import PickUp from './Components/Veiculos/PickUp';
import Hatch from './Components/Veiculos/Hatch';
import Sedan from './Components/Veiculos/Sedan';
import Suv from './Components/Veiculos/Suv';
import Whatsapp from './Components/Animations/Whatsapp';
import ScrollToTop from './Components/Animations/ScrollToTop';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/civic" element={<Carro1 />} />
          <Route path="/ranger" element={<Carro2 />} />
          <Route path="/ka" element={<Carro3 />} />
          <Route path="/laguna" element={<Carro4 />} />
          <Route path="/siena" element={<Carro5 />} />
          <Route path="/tcross" element={<Carro6 />} />
          <Route path="/voyage" element={<Carro7 />} />
          <Route path="/undefined" element={<Carro8 />} />
          <Route path="/Cnh" element={<Cnh />} />
          <Route path="/CrvlDigital" element={<Crvl />} />
          <Route path="/Km" element={<Km />} />
          <Route path="/MotoristaApp" element={<MotApp />} />
          <Route path="/veiculos" element={<Veiculos />} />
          <Route path="/veiculo" element={<Veiculo />} />
          <Route path="/Hatch" element={<Hatch />} />
          <Route path="/PickUp" element={<PickUp />} />
          <Route path="/Sedan" element={<Sedan />} />
          <Route path="/SUV" element={<Suv />} />
          <Route path="/mapa" element={<Mapa />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
        <Whatsapp />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
