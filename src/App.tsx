import { Col, Container, Row, ListGroup, Alert, Badge } from 'react-bootstrap'
import logo from './assets/img/favicon.svg'
import './assets/css/app.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudSun, faMedal, faFlag } from '@fortawesome/free-solid-svg-icons'

const App: React.FunctionComponent<any> = () => {
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
                3
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item>
              <FontAwesomeIcon icon={faFlag} fontSize={20} className='me-2 text-danger' />
              Important
              <Badge bg='danger' pill className='float-end'>
                2
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item>
              <FontAwesomeIcon icon={faMedal} fontSize={20} className='me-2 text-success' />
              Terminé
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
            <Alert>
              <input type='radio' className='me-2' /> Mettre à jour le template de mail pour la
              zone de livraison Cleveron
              <FontAwesomeIcon
                icon={faFlag}
                fontSize={17}
                className='me-2 float-end text-danger'
              />
            </Alert>
            <Alert>
              <input type='radio' className='me-2' /> Tester toute la liste des Erreurs de
              Cleveron
              <FontAwesomeIcon
                icon={faFlag}
                fontSize={17}
                className='me-2 float-end text-danger'
              />
            </Alert>
            <Alert>
              <input type='radio' className='me-2' /> Ne pas oublier d'appeler Vaiana pour
              Teanu
              <FontAwesomeIcon
                icon={faFlag}
                fontSize={17}
                className='me-2 float-end text-muted'
              />
            </Alert>
          </div>
          <div className='form-add-todo'>
            <form>
              <input
                type='text'
                className='form-control'
                placeholder='Ajouter une nouvelle tâche'
              />
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default App
