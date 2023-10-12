import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Home/HomePage';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { ReactComponent as CookieImg } from "./assets/img/cookie.svg";
import FormPage from './Pages/Form/FormPage';
import SubmissionPage from './Pages/Submission/SubmissionPage';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/application-form' element={<FormPage />} />
        <Route path='/submission-page' element={<SubmissionPage />} />
      </Routes>
      <Footer>
        Come to the dark side... we have
        <CookieImg style={cookieImageStyle} />
      </Footer>
    </BrowserRouter>
  );
}

const cookieImageStyle = {
  marginLeft: '7px',
  width: '25px',
  height: '25px'
}

export default App;
