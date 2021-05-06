import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import ParticleBackground from './components/ParticleBackground'
function App() {
  return (
    <>
    <ParticleBackground />
    <Navbar />
    <Header />
    </>
  );
}

export default App;
