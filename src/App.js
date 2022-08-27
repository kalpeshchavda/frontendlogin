import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/" element={<Login />} />
    </Routes>
  </Router>
    
  );
}

export default App;
