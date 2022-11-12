//Animação
import { motion } from 'framer-motion';
import { scroolReview } from '../../animation'

//Hooks
import { useScroll } from '../hooks/useScroll'

export default function Pricing() {
  //utilizando o hook no componente - o hook contém element, controls
  const [element, controls] = useScroll()

  return (
    <motion.div
      class="container p-3 text-center"
      initial='hidden'
      exit='exit'
      /* animate='show' */
      animate={ controls }
      variants={ scroolReview }
      ref={ element }
    >
      <div>
        <h1 class="text-muted text-reset">Preços</h1>
        <p class="fs-5 text-muted">
          Exemplo de uma tabela de preços simples e eficiente feita com o Bootstrap. Os seus componentes e utilitários foram construídos com o padrão do Bootstrap e possui pouca personalização.
        </p>
      </div>
      <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3">
              <h4 class="my-0 fw-normal">Free</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">$0<small class="text-muted fw-light">/mo</small></h1>
              <ul class="list-unstyled mt-3 mb-4">
                <li>10 users included</li>
                <li>2 GB of storage</li>
                <li>Email support</li>
                <li>Help center access</li>
              </ul>
              <button type="button" class="w-100 btn btn-lg btn-outline-primary">Sign up for free</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3">
              <h4 class="my-0 fw-normal">Pro</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">$15<small class="text-muted fw-light">/mo</small></h1>
              <ul class="list-unstyled mt-3 mb-4">
                <li>20 users included</li>
                <li>10 GB of storage</li>
                <li>Priority email support</li>
                <li>Help center access</li>
              </ul>
              <button type="button" class="w-100 btn btn-lg btn-primary">Get started</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm border-primary">
            <div class="card-header py-3 text-white bg-primary border-primary">
              <h4 class="my-0 fw-normal">Enterprise</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">$29<small class="text-muted fw-light">/mo</small></h1>
              <ul class="list-unstyled mt-3 mb-4">
                <li>30 users included</li>
                <li>15 GB of storage</li>
                <li>Phone and email support</li>
                <li>Help center access</li>
              </ul>
              <button type="button" class="w-100 btn btn-lg btn-primary">Contact us</button>
            </div>
          </div>
        </div>
      </div>

      <div class="container text-center">
        <div class="row gx-2 text-center">
          <div class="col-sm-6 col-md-8 border bg-light">.col-sm-6 .col-md-8</div>
          <div class="col-6 col-md-4 border bg-light">.col-6 .col-md-4</div>
        </div>
      </div>

    </motion.div>
  )
}

/* 
Texto:
Font Size - fs: 
<p class="fs-1">Texto</p>..até...<p class="fs-6">

Font weight and italics
<p class="fw-bold">
<p class="fw-light">
<p class="fst-italic">
<p class="fst-normal">

Muted-Reset (ex: assumir formas esmaecidas ou não)
text-muted -> fica esmaecido, apagado (sileciado-muted)text-reset -> herda a cor do pai

Linhas e Colunas (row row-cols)
row = linhas (envolver a div) os elementos estarão dispostos em linha
col = Colunas (envolver a div) os elementos estarão dispostos em coluna
Exemplo = (row row-cols) quando a div for row row-cols-1, para entendimento, representa que os elementos que estão dispostos em linha (row), ao atingir um break.point (responsividade) eles se ajustarão a uma coluna na tela (row-col-1), se for row-col-2 duas colunas e assim por diante...

row-cols-md-3: quer dizer que os elementos assumirão tamnhos iguais na view expandida (md-3 = 4+4+4=12 conceito de largura do grid até 12)
usar este exemplo:
<div class="row g-0 text-center">
  <div class="col-sm-6 col-md-8">.col-sm-6 .col-md-8</div>
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
</div>

    <div class="container text-center">
      <div class="row gx-2">
        <div class="col">
        <div class="p-3 border bg-light">Custom column padding</div>
        </div>
        <div class="col">
          <div class="p-3 border bg-light">Custom column padding</div>
        </div>
      </div>
    </div>
*/