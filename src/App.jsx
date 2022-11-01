import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar';
import SignUpModal from './components/SignUpModal';


function App() {
  return (
    <>

      <Navbar />
      <SignUpModal />
      <Routes>
        <Route path="/" element={< Home />} />
        {/* <Route path="/private" element={< Private />}>
        </Route> */}
      </Routes>


    </>
  );
}

export default App;
