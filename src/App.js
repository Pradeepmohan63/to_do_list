
import './App.css';
import Header from './Header';
import Add from './AddTask';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tasklist from './Tasklist';
function App() {
  return (
    <div className="App">
      <Container className='container'>
     <Row className="justify-content-md-center">
        <Col  lg="6">
          <Header />
          <Add />
          <Tasklist />
        </Col>
      </Row >
     </Container>
 </div>
  );
}

export default App;