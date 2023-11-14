import Header from '../components/atoms/Header.jsx'
import Main from '../components/atoms/Main.jsx'
import {useState} from 'react'
import {initialGeneralInformation, initialEducationalInformation, initialEmploymentInformation} from '../data.js';
import {InformationSection} from '../components/molecules/InformationSection.jsx';
import Button from '../components/atoms/Button.jsx';
import CVPanel from '../components/molecules/CVPanel.jsx';
import {PanelContent} from '../components/molecules/PanelContent.jsx';
import '../styles/Page.css'

export default function Page() {
  const [contentMode, setContentMode] = useState('Edit');

  const [activeIndex, setActiveIndex] = useState(-1);
  function switchIndex(panelIndex) {
    setActiveIndex((activeIndex === panelIndex) ? -1 : panelIndex);
  }

  const [generalInformation, setGeneralInformation] = useState(initialGeneralInformation);
  const [educationalInformation, setEducationalInformation] = useState(initialEducationalInformation);
  const [employmentInformation, setEmploymentInformation] = useState(initialEmploymentInformation);


  return (
    <>
      <Header heading="CV Maker"></Header>
      <Main>
        {contentMode === 'Edit' ? <>
        <CVPanel onClick={() => switchIndex(0)} isActivePanel={activeIndex === 0} iconSrc="./icons/personal-details.svg" name="General Information">
          <InformationSection information={generalInformation} updateInformation={setGeneralInformation} inputTypes={{name: 'text', email: 'email', phoneNumber: 'tel', location: 'text'}}></InformationSection>
        </CVPanel>
        <CVPanel onClick={() => switchIndex(1)} isActivePanel={activeIndex === 1} iconSrc="./icons/school.svg" name="Education">
          <PanelContent information={educationalInformation} updateInformation={setEducationalInformation} inputTypes={{degree: "text", school: "text", startDate: "date", endDate: "date"}}></PanelContent>
        </CVPanel>
        <CVPanel onClick={() => switchIndex(2)} isActivePanel={activeIndex === 2} iconSrc="./icons/briefcase.svg" name="Work Experience">
          <PanelContent information={employmentInformation} updateInformation={setEmploymentInformation} inputTypes={{company: "text", position: "text", description: "textarea", startDate: "date", endDate: "date"}}></PanelContent>
        </CVPanel>
        {(activeIndex === -1) && <Button onClick={() => setContentMode('View')}>View CV</Button>}
        </>
        : null}
      </Main>
    </>
  )
}