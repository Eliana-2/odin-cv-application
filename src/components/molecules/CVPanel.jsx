import Container from '../atoms/Container.jsx'
import Button from '../atoms/Button.jsx'
import Icon from '../atoms/Icon.jsx'
import React from 'react'

export default function CVPanel({onClick, isActivePanel, iconSrc, name, children}) {

  return (
    <Container className="panel">
      <Button onClick={onClick} className="panel-button">
        <Icon src={iconSrc}></Icon>
        {name}
        <Icon src={(isActivePanel) ? "./icons/menu-up.svg" : "icons/menu-down.svg"} className="panel-toggle"></Icon>
      </Button>
      {isActivePanel && <Container className="panel-content">{children}</Container>}
    </Container>
  )
}