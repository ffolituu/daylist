import React from 'react'
import logo from './assets/img/favicon.svg'
import './assets/css/app.css'
import { Col, Container, Row, ListGroup, Alert, Badge } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudSun, faMedal, faFlag } from '@fortawesome/free-solid-svg-icons'

const App: React.FunctionComponent<any> = () => {
  // State
  const [todoList, setTodoList] = React.useState<any[]>([
    {
      id: 1,
      name: "Instore > Créer un flux d'enregistrement pour un achat d'une commande",
      urgent: false,
      completed: false,
    },
    {
      id: 2,
      name: 'Instore > Créer un flux de dépôt de colis',
      urgent: true,
      completed: false,
    },
  ])
  const [inputTask, setInputTask] = React.useState<string>('')
  const month = [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre',
  ]
  const day = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']

  // Init
  const date = new Date()
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

  const handleToggleUrgent = (todo: any) => {
    const index = todoList.findIndex((task) => task.id === todo.id)
    const newTodoList = [...todoList]
    if (todo.urgent) {
      newTodoList[index] = { id: todo.id, name: todo.name, urgent: false, completed: false }
    } else {
      newTodoList[index] = { id: todo.id, name: todo.name, urgent: true, completed: false }
    }
    setTodoList(newTodoList)
  }

  const handleCompleted = (todo: any) => {
    const index = todoList.findIndex((task) => task.id === todo.id)
    const newTodoList = [...todoList]
    newTodoList[index] = { id: todo.id, name: todo.name, urgent: todo.urgent, completed: true }
    setTodoList(newTodoList)
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
              <i>{day[date.getDay()] + ' ' + date.getDate() + ' ' + month[date.getMonth()]}</i>
            </small>
          </div>
          <div className='todolist'>
            {todoList.map(
              (todo: any) =>
                !todo.completed && (
                  <div key={todo.id}>
                    <Alert>
                      <input
                        type='radio'
                        className='me-2'
                        onClick={() => handleCompleted(todo)}
                      />
                      {todo.name}
                      <FontAwesomeIcon
                        icon={faFlag}
                        fontSize={17}
                        className={`me-2 float-end text-${getColorUrgent(todo.urgent)}`}
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleToggleUrgent(todo)}
                      />
                    </Alert>
                  </div>
                )
            )}
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
