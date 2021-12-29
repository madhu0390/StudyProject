import React from 'react'
import {
  Container,
  Image,
  UserName,
  Task,
  RemoveButton,
  Content,
  ContentAction,
  ContentButton
} from './styles'

const App = (props) => {
  const { className, imageSrc, userName, task, onRemoveClick,onCompleteClick,onLaterDoClick,status } = props

  return (
    <Container className={className}>
      <RemoveButton onClick={onRemoveClick}>x</RemoveButton>

      <Image src={imageSrc} alt={userName} />

      <Content>
        <UserName>{userName}</UserName>
        <Task>{task}</Task>
      </Content>
      {status == 1 && <ContentAction>
        <ContentButton bg="#2ecc71" onClick={onCompleteClick}>Done</ContentButton>
        <ContentButton bg="#c0392b" onClick={onLaterDoClick}>Do Later</ContentButton>
        </ContentAction>}
      
    </Container>
  )
}

export default App
