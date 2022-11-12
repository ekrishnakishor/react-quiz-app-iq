import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Questions from './Pages/Questions';
import Result from './Pages/Result';



function App() {
  const [res, setRes] = useState([]);
  

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/questions" element={<Questions setRes={setRes} res={res} />} />
      <Route path="/result" element={<Result res={res} />} />

    </Routes>
    </>
  );
}

export default App;
