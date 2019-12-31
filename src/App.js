import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as data from './allData';


import NavMenu    from  './navBar/NavMenu';
import LogoHeader from './logoHeader/LogoHeader';
import LogoTitleCenter from './logoTitleCenter/LogoTitleCenter';
import Paragraphs from './paragraphs/Paragraphs';
import DoctorsPatient from './boxesDP/DoctorsPatient';
import CompanyLogo from './companyLogo/CompanyLogo';
import LeftPart from './leftPartSection2/LeftPart'
import  RightPart from './rightPartSection2/RightPart'
import CenterParagraphs from './ThirdComponent/centerParagraphs/CenterParagraphs';
import FirstComponent from './FirstComponent/FirstComponent';
import SecondComponent from './SecondComponent/SecondComponent';
import ThirdComponent from './ThirdComponent/ThirdComponent'
import FooterComponent from './FooterComponent/FooterComponent'
import  HeaderComponent from './HeaderComponent/HeaderComponent'






 
function App() {
  return (
  <div className="App">
     <HeaderComponent />
   <FirstComponent />
   <SecondComponent />
  <ThirdComponent />
   <FooterComponent />

</div>

  
  );
}

export default App;
