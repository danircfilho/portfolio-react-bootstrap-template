//Bootstrap
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//Estilos
import styles from './Home.module.css';

//Imagem - Assets
import ImgExOne from '../../assets/netflix.png';

//Animação
import { motion } from 'framer-motion';
import { animationPage } from '../../animation'

export default function Home() {
  return ( 
    <motion.div
      initial='hidden'
      animate='show'
      exit='exit'
      variants={animationPage}

    >

      <Container className={styles.wrapper}/* "align-items-center border rounded-3 my-5 shadow-lg" */> 
          <Row className="my-4">
            <Col lg={7} className={styles.fontStyle}>
              <h1 className="px-5">Hero com imagem recortada e sombras</h1>
              <p className="px-5 pt-2">Utilize o Bootstrap para implementar um "Hero" em sua página. De forma simplista, Hero é um termo utilizado para descrever um produto. Nesse conceito, os e-commerces utilizam as imagens com o zoom adequado para destacar as características principais dessa mercadoria acompanhadas por banners ao lado da imagem</p>
              <div className="ps-5 pt-2 mb-4">
                <button type="button" className="btn btn-primary btn-lg">Primary</button>
                <button type="button" className="btn btn-outline-secondary btn-lg ms-3">Default</button>
              </div>
            </Col>
            <Col lg={5} className="overflow-hidden p-0 shadow-lg">
                <img src={ImgExOne} alt="BootstrapSiteImage" width="740"/>
            </Col>
          </Row>      
      </Container>

    </motion.div> 
  )
};

/* 
Where property is one of:
m - for classes that set margin
p - for classes that set padding
Where sides is one of:

t - for classes that set margin-top or padding-top
b - for classes that set margin-bottom or padding-bottom
s - (start) for classes that set margin-left or padding-left in LTR, margin-right or padding-right in RTL
e - (end) for classes that set margin-right or padding-right in LTR, margin-left or padding-left in RTL
x - for classes that set both *-left and *-right
y - for classes that set both *-top and *-bottom
blank - for classes that set a margin or padding on all 4 sides of the element
Where size is one of:

0 - for classes that eliminate the margin or padding by setting it to 0
1 - (by default) for classes that set the margin or padding to $spacer * .25
2 - (by default) for classes that set the margin or padding to $spacer * .5
3 - (by default) for classes that set the margin or padding to $spacer
4 - (by default) for classes that set the margin or padding to $spacer * 1.5
5 - (by default) for classes that set the margin or padding to $spacer * 3
auto - for classes that set the margin to auto 
*/
