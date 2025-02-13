import './App.css'
import {
  BrowserRouter as Router,
} from "react-router-dom";

import AuthenticatedRoutes from './routers/AuthenticatedRoutes.js';

export default function App() {
  return (
    <Router>
      <AuthenticatedRoutes />
    </Router>
  );
}