import Button from '../atoms/Button.jsx'
import Container from '../atoms/Container.jsx'
import {InformationSection} from '../molecules/InformationSection.jsx'
import {useState} from 'react'

function PanelContent({information, updateInformation, inputTypes}) {
  const [activeIndex, setActiveIndex] = useState(-1);
  function addInformation() {
    setActiveIndex(information.length);
  }

  function saveInformation(newInformationItem) {
    const newInformation = [...information];
    newInformation[activeIndex] = newInformationItem;
    updateInformation(newInformation);
    setActiveIndex(-1);
  }

  function removeInformation(selectedIndex) {
    updateInformation(information.filter((informationItem, index) => index !== selectedIndex))
  }

  if (activeIndex === -1) {
    return <>
    {information.map((informationItem, index) =>
    <Container className="button-container" key={"contain " + index}>
    <Button onClick={() => setActiveIndex(index)} className="section-button" key={index}>{Object.values(informationItem)[0]}</Button>
    {information.length > 1 && <Button onClick={() => removeInformation(index)} key={"delete " + index}>Delete</Button>}
    </Container>)
    }
    <Button onClick={addInformation}>{"Add " + Object.keys(information[0])[0]}</Button>
    </>
  }
  else {
    const sectionInformation = (activeIndex === information.length) ? Object.fromEntries(Object.keys(inputTypes).map((key) => [key, ""])) : information[activeIndex];
    return <>
    <InformationSection information={sectionInformation} updateInformation={saveInformation} inputTypes={inputTypes} cancelFunction={() => setActiveIndex(-1)}></InformationSection>
    </>
  }
}

export {PanelContent}