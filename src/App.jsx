import { useState } from 'react'
import { initialGeneralInformation } from './data.js';
import {InformationSection} from './components/InformationSection.jsx';
import Panel from './components/Panel.jsx';
import Button from './components/Button.jsx';
import Icon from './components/Icon.jsx';
import './App.css'

export default function App() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [generalInformation, setGeneralInformation] = useState(initialGeneralInformation);

  
  return (
    <>
      <Panel>
        <Button onClick={() => {(activeIndex === 0) ? setActiveIndex(-1) : setActiveIndex(0)}} className="panel-button button">
          <Icon src="./icons/personal-details.svg"></Icon>
          General Information
          <Icon src={(activeIndex === 0) ? "./icons/menu-up.svg" : "./icons/menu-down.svg"} className="panel-toggle icon"></Icon>
        </Button>
        {(activeIndex === 0) && 
          <InformationSection information={generalInformation} updateInformation={setGeneralInformation} inputTypes={{name: 'text', email: 'email', phoneNumber: 'tel', location: 'text'}}></InformationSection>}
      </Panel>
    </>
  )
}