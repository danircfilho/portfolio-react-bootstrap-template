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
import { animationPage, animationTitle, animationFade, animateImage } from '../../animation'

export default function Home() {
  return ( 
    <motion.div
      initial='hidden'
      animate='show'
      exit='exit'
      variants={ animationPage }
    >
      <Container className={styles.wrapper}> 
          <Row className="my-4">
            <Col lg={7} className={styles.fontStyle}>
              <motion.h1 
                variants={ animationTitle } 
                className="px-5">Hero com imagem recortada e sombras
              </motion.h1>
              <motion.p 
                variants={ animationFade }
                className="px-5 pt-2"                
              >
                Utilize o Bootstrap para implementar um "Hero" em sua página. De forma simplista, Hero é um termo utilizado para descrever um produto. Nesse conceito, os e-commerces utilizam as imagens com o zoom adequado para destacar as características principais dessa mercadoria acompanhadas por banners ao lado da imagem
              </motion.p>
              <div className="ps-5 pt-2 mb-4">
                <button type="button" className="btn btn-primary btn-lg">Primary</button>
                <button type="button" className="btn btn-outline-secondary btn-lg ms-3">Default</button>
              </div>
            </Col>
            <Col lg={5} className="overflow-hidden p-0 shadow-lg">
              <motion.div variants={ animateImage }>
                <img src={ImgExOne} alt="BootstrapSiteImage" width="740"/>
              </motion.div>
            </Col>
          </Row>      
      </Container>
    </motion.div> 
  )
};

/*
Várias formas de se usar o motion na div e ou container:
  **1º caso: envolva todo <Container> com <motion.div> configurada)
  <motion.div><Container className={styles.wrapper}></Container></motion.div>
  **2º caso: troque Container pela sequencia abaixo (veja a classe com container sendo configurada)
  <motion.div className="container align-items-center border rounded-3 my-5 shadow-lg"></motion.div>

*/

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

/*
    <div class="container my-5">
    <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
      <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1 class="display-4 fw-bold lh-1">Border hero with cropped image and shadows</h1>
        <p class="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
          <button type="button" class="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Primary</button>
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button>
        </div>
      </div>
      <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
        <img src={ImgExOne} alt="BootstrapSiteImage" width="720"/>
      </div>
    </div>
  </div>
*/
