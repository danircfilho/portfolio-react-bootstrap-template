//Bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//Estilo
import styles from './Card.module.css'

export default function Cards() {
  return (
    <Container>
      <Row className={styles.rowAdjust}>
        <Col className={styles.colAdjust}>
          <Card className={styles.cards}>
            <Card.Img src="https://images.pexels.com/photos/1327373/pexels-photo-1327373.jpeg?auto=compress&cs=tinysrgb&w=600" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>      
        <Col className={styles.colAdjust}>
          <Card className={styles.cards}>
            <Card.Img src="https://images.pexels.com/photos/1421837/pexels-photo-1421837.jpeg?auto=compress&cs=tinysrgb&w=600" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>      
        <Col className={styles.colAdjust}>
          <Card className={styles.cards}>
            <Card.Img src="https://images.pexels.com/photos/1476880/pexels-photo-1476880.jpeg?auto=compress&cs=tinysrgb&w=600" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>      
        <Col className={styles.colAdjust}>
          <Card className={styles.cards}>
            <Card.Img src="https://images.pexels.com/photos/2082949/pexels-photo-2082949.jpeg?auto=compress&cs=tinysrgb&w=600" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>      
        <Col className={styles.colAdjust}>
          <Card className={styles.cards}>
            <Card.Img src="https://images.pexels.com/photos/5882455/pexels-photo-5882455.jpeg?auto=compress&cs=tinysrgb&w=600" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>      
        <Col className={styles.colAdjust}>
          <Card className={styles.cards}>
            <Card.Img src="https://images.pexels.com/photos/12431915/pexels-photo-12431915.jpeg?auto=compress&cs=tinysrgb&w=600" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>      
      </Row> 
    </Container>
  );
}

