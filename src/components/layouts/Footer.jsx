import { Link } from 'react-router-dom';

//Estilo
import styles from './Footer.module.css'

//Bootstrap
import { Container } from "react-bootstrap"; //mantém margens no padrão do bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//Icones
import { 
  FaBootstrap, 
  FaCss3Alt, 
  FaHtml5, 
  FaJsSquare, 
  FaReact, 
  FaFontAwesome, 
  FaInstagramSquare, 
  FaFacebookSquare, 
  FaYoutubeSquare, 
  FaPhoneAlt, 
  FaAt, 
  FaHouseUser 
} from "react-icons/fa";

export default function Footer() {
  //Instanciar data atual (usado no final do footer)
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <div className={styles.bg_footer_margin_out}>           
      <Container className={styles.bg_footer}>
        <div className={styles.border_footer_top}></div>
        <Row className="align-items-start" >
          <Col xs={12} sm={12} md={3} lg={3} className={styles.iconTechnology}>
            <h4>Website Technologies:</h4>
              <Col>
                <i><FaReact /></i>
                <i><FaBootstrap /></i>
                <i><FaFontAwesome /></i>  
              </Col>
              <Col>
                <i><FaHtml5 /></i>
                <i><FaCss3Alt /></i>
                <i><FaJsSquare/></i>  
              </Col>            
          </Col>
          <Col xs={12} sm={12} md={2} lg={2} className={styles.list}>
            <h5>Links Internals</h5>
            <ul>
              <li><Link to="/">Go to Home</Link></li>
              <li><Link to="/card">Go to Cards</Link></li>
              <li><Link to="/form">Go to Form</Link></li>
            </ul>
            <h5>Links Externals</h5>
            <ul>
              <li><a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Google</a></li>
              <li><a href="https://www.microsoft.com" target="_blank" rel="noopener noreferrer">Microsoft</a></li>
              <li><a href="https://www.wikipedia.org" target="_blank" rel="noopener noreferrer">Wikipedia</a></li>
            </ul>
          </Col>   
          <Col>
            <h4>Example Title</h4>
            <p>Dolor sit amet consectetur adipisicing elit. Facere quisquam autem quam mollitia quo sequi deserunt provident.</p>
          </Col>        
          <Col>
            <h4>Example Title</h4>
            <p>Dolor sit amet consectetur adipisicing elit. Facere quisquam autem quam mollitia quo sequi deserunt provident.</p>
          </Col>           
          <Col xs={12} sm={12} md={3} lg={3} className={styles.address}>
            <Col>
              <h4>Contact</h4>
              <p>
                <i><FaHouseUser/></i>&ensp; 10 5th Ave, New York, NY
              </p>
              <p>
                <i><FaAt/></i>&ensp; personal@personal.com
              </p>
              <p>
                <i><FaPhoneAlt/></i>&ensp; 11+ (99) 9999-99999
              </p>             
            </Col>
            <Col className={styles.iconSocialMedia}>
                <i><FaFacebookSquare/></i>
                <i><FaInstagramSquare /></i>
                <i><FaYoutubeSquare/></i>  
            </Col>         
          </Col>
        </Row>
        <Row className={styles.copyright}>
          <Col>
            <p>Copyright &copy; {currentYear} All Rights Reserved<br/>Daniel Rodrigues</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

//Notas: Caracteres especiais. Para espaços -> &nbsp; (1 espaço), &ensp; (2 espaços), &emsp; (4 espaços). Ao repetir insere a mesma qtde de espaço.
//xs={12}=mobile sm={12}=tablet md={2}=telas/médias (notebooks/desktop) lg={2}=telas/grandes (TV´s)