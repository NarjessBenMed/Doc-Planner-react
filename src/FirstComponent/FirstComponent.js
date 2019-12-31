import React from 'react'

import LogoTitleCenter from '../logoTitleCenter/LogoTitleCenter'
import Paragraphs from '../paragraphs/Paragraphs';
import  DoctorsPatient from '../boxesDP/DoctorsPatient';
import CompanyLogo from '../companyLogo/CompanyLogo';
import * as data from '../allData'; 
import './FirstComponent.css'

export default function FirstComponent() {
    return (
        <div className="FirstSection">
     <LogoTitleCenter />
            <Paragraphs tab_paragraph= {data.tab_paragraphs}  />
          <DoctorsPatient tabElement={data.tabElementDP} />
          <CompanyLogo tabCountry={data.tabCountries} />

        </div>
    )
}
