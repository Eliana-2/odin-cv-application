import Header from '../components/Header.jsx'
import Main from '../components/Main.jsx'
import { useState } from 'react'
import { initialGeneralInformation } from '../data.js';
import {InformationSection} from '../components/InformationSection.jsx';
import Panel from '../components/Panel.jsx';
import Button from '../components/Button.jsx';
import Icon from '../components/Icon.jsx';
import '../styles/Page.css'

export default function Page() {
  const [contentMode, setContentMode] = useState('Edit');

  const [activeIndex, setActiveIndex] = useState(-1);
  function switchIndex(panelIndex) {
    setActiveIndex((activeIndex === panelIndex) ? -1 : panelIndex);
  }

  const [generalInformation, setGeneralInformation] = useState(initialGeneralInformation);


  return (
    <>
      <Header heading="CV Maker"></Header>
      <Main>
        {contentMode === 'Edit' ? <>
        <CVPanel onClick={() => switchIndex(0)} isActivePanel={activeIndex === 0} iconSrc="./icons/personal-details.svg" name="General Information">
          <InformationSection information={generalInformation} updateInformation={setGeneralInformation} inputTypes={{name: 'text', email: 'email', phoneNumber: 'tel', location: 'text'}}></InformationSection>
        </CVPanel>
        <CVPanel onClick={() => switchIndex(1)} isActivePanel={activeIndex === 1} iconSrc="./icons/school.svg" name="Education">

        </CVPanel>
        <CVPanel onClick={() => switchIndex(2)} isActivePanel={activeIndex === 2} iconSrc="./icons/briefcase.svg" name="Work Experience">

        </CVPanel>
        <Button onClick={() => setContentMode('View')} className="mode-toggle button">View CV</Button>
        </>
        : null}
      </Main>
    </>
  )
}

function CVPanel({onClick, isActivePanel, iconSrc, name, children}) {

  return (
    <Panel>
      <Button onClick={onClick} className="panel-button button">
        <Icon src={iconSrc}></Icon>
        {name}
        <Icon src={(isActivePanel) ? "./icons/menu-up.svg" : "icons/menu-down.svg"} className="panel-toggle icon"></Icon>
      </Button>
      {isActivePanel && children}
    </Panel>
  )
}