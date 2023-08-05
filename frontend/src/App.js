import './App.css';
import MyForm from './components/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'
import MyTable from './components/Table';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MyForm/>}/>
        <Route path="/:id" element={<MyForm/>}/>
        <Route path="/tabledata" element={<MyTable/>}/>
      </Routes>
    </>
  );
}

export default App;
