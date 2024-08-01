import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactForm from './components/ContactForm';
import SuccessPage from './components/SuccessPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ContactForm />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
