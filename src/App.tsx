import React from 'react'
import logo from './assets/img/favicon.svg'
import './assets/css/app.css'
import { Col, Container, Row, ListGroup, Alert, Badge } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudSun, faMedal, faFlag } from '@fortawesome/free-solid-svg-icons'

const App: React.FunctionComponent<any> = () => {
  // State
  const [todoList, setTodoList] = React.useState<any[]>([])
  const [inputTask, setInputTask] = React.useState<string>('')

  // Init
  const getColorUrgent = (param: boolean) => {
    return param ? 'danger' : 'muted'
  }

  // Event
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputTask(e.currentTarget.value)
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    const newTask = { id: Math.random(), name: inputTask, urgent: false, completed: false }
    setTodoList([...todoList, newTask])
    setInputTask('')
  }

  const handleToggleUrgent = (todo: object) => {
    //console.log(todo)
    //const index = todoList.findIndex((task) => task.id === todo.id)
    //const newTodoList = [...todoList]

    //console.log(index)
    //console.log(newTodoList)

    //newTodoList[index] = { id: id, name: inputValueEdit.name }
    //setList(newList)
    //setInputValueEdit({ name: '' })
  }

  // Render
  return (
    <Container fluid className='app'>
      <Row>
        <Col sm={4} lg={2} className='p-3 col-start' style={{ height: '100vh' }}>
          <div className='brand ms-4'>
            <img src={logo} width={40} alt='Daylist' className='float-start me-2' />
            <h3>DayList</h3>
          </div>
          <ListGroup variant='flush' className='mt-5'>
            <ListGroup.Item>
              <FontAwesomeIcon icon={faCloudSun} fontSize={20} className='me-2 text-primary' />
              Ma journée
              <Badge pill className='float-end'>
                {todoList.length}
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item>
              <FontAwesomeIcon icon={faFlag} fontSize={20} className='me-2 text-danger' />
              Important
              <Badge bg='danger' pill className='float-end'>
                {todoList.filter((item) => item.urgent === true).length}
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item>
              <FontAwesomeIcon icon={faMedal} fontSize={20} className='me-2 text-success' />
              Terminé
              <Badge bg='success' pill className='float-end'>
                {todoList.filter((item) => item.completed === true).length}
              </Badge>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col className='p-3 col-end'>
          <div className='title text-white mb-4'>
            <h4 className='mb-0'>
              <FontAwesomeIcon icon={faCloudSun} fontSize={25} className='me-2' />
              Ma journée
            </h4>
            <small>
              <i>Vendredi 18 mars</i>
            </small>
          </div>
          <div className='todolist'>
            {todoList.map((todo: any) => (
              <Alert key={todo.id}>
                <input type='radio' className='me-2' /> {todo.name}
                <FontAwesomeIcon
                  icon={faFlag}
                  fontSize={17}
                  className={`me-2 float-end text-${getColorUrgent(todo.urgent)}`}
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleToggleUrgent(todo)}
                />
              </Alert>
            ))}
          </div>
          <div className='form-add-todo'>
            <form onSubmit={handleSubmit}>
              <input
                type='text'
                className='form-control'
                placeholder='Ajouter une nouvelle tâche'
                value={inputTask}
                onChange={handleChange}
              />
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default App
