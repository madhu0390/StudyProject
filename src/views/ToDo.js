import React, { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import { removeTaskById, requestFetchUser,markCompleteTaskById,doLaterTaskById } from '../store/ducks/task'
import {
  Container,
  InputContainer,
  Input,
  TodoListContainer,
  TodoContainer,
  Title,
  EmptyListMessage,
  AddButton,
  TaskItem,
  Error,
  StyledLink
} from '../components/styles/ToDo.styled'

const ToDoList  = () => {

  const userNameRef = useRef(null)
  const [username, setUserName] = useState('')
  const [task, setTask] = useState('')

  const dispatch = useDispatch()
  const { taskList, showError } = useSelector(({ Task }) => Task)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!username.trim() || !task.trim()) return

    const fetchUserAction = requestFetchUser(username, task)
    dispatch(fetchUserAction)

    setUserName('')
    setTask('')

    userNameRef.current.focus()
  }

  const handleRemoveTask = (id) => {
    const removeTaskAction = removeTaskById(id)
    dispatch(removeTaskAction)
  }

  const handleComplete = (id) => {
    const removeTaskAction = markCompleteTaskById(id)
    dispatch(removeTaskAction)
  }

  const handleDoLater = (id) => {
    const removeTaskAction = doLaterTaskById(id)
    dispatch(removeTaskAction)
  }

  return (
    <Container>
      <TodoContainer onSubmit={handleSubmit}>
        <Title>Todo List</Title>
        <InputContainer>
          <Input
            ref={userNameRef}
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Github Username"
          />

          <Input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Task"
          />
        </InputContainer>

        <AddButton type="submit" data-testid="btn-addTask">Add Task +</AddButton>

        {!!showError && <Error text="Uer not found!" />}
        <Router> 
        <>
        <InputContainer>
          <StyledLink exact to='/'>New Task</StyledLink>
          <StyledLink exact to='/completed'>Completed</StyledLink>
          <StyledLink exact to='/later'>Later</StyledLink>
        </InputContainer>
        <Switch>
            <Route path="/" exact component={() => (<NewTask taskList={taskList.filter(({status})=>status == 1)} handleRemoveTask={handleRemoveTask} handleComplete={handleComplete} handleDoLater={handleDoLater} />)}/> 
            <Route path="/completed" exact component={()=>(<Completed taskList={taskList.filter(({status})=>status == 2)} handleRemoveTask={handleRemoveTask}/>)} />
            <Route path="/later" exact component={()=>(<Later taskList={taskList.filter(({status})=>status == 3)} handleRemoveTask={handleRemoveTask}/>)} />
          </Switch>
          </>
        </Router>
      </TodoContainer>
    </Container>
  )
}

const NewTask = ({taskList,handleRemoveTask,handleComplete,handleDoLater }) => {return(<TodoListContainer>
  {!taskList.length && (
    <EmptyListMessage>No Task to Show</EmptyListMessage>
  )}

  {
    taskList.map((taskItem) => {
      const { id, userName, task, name, avatar,status } = taskItem
      const onRemove = () => handleRemoveTask(id)
      const onComplete = () => handleComplete(id)
    const onDoLater = () => handleDoLater(id)

      return (
        <TaskItem
          key={id}
          task={task}
          status={status}
          imageSrc={avatar}
          onRemoveClick={onRemove}
          onCompleteClick={onComplete}
          onLaterDoClick={onDoLater}
          userName={name || userName}
        />
      )
    })
  }
</TodoListContainer>)};

const Completed = ({taskList,handleRemoveTask}) => <TodoListContainer>
{!taskList.length && (
  <EmptyListMessage>No Completed Task to Show</EmptyListMessage>
)}

{
  taskList.map((taskItem) => {
    const { id, userName, task, name, avatar,status } = taskItem
    const onRemove = () => handleRemoveTask(id)

    return (
      <TaskItem
        key={id}
        task={task}
        status={status}
        imageSrc={avatar}
        onRemoveClick={onRemove}
        userName={name || userName}
      />
    )
  })
}
</TodoListContainer>;
const Later = ({taskList,handleRemoveTask}) => <TodoListContainer>
{!taskList.length && (
  <EmptyListMessage>No To Do later Task to Show</EmptyListMessage>
)}

{
  taskList.map((taskItem) => {
    const { id, userName, task, name, avatar,status } = taskItem
    const onRemove = () => handleRemoveTask(id)

    return (
      <TaskItem
        key={id}
        task={task}
        status={status}
        imageSrc={avatar}
        onRemoveClick={onRemove}
        userName={name || userName}
      />
    )
  })
}
</TodoListContainer>;

export default ToDoList
