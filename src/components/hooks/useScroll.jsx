import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

export const useScroll = () => {
  const controls = useAnimation()
  const [element, view] = useInView({ threshold: 0.3 })
  
  if(view) {
    controls.start('show')
  }else{
    controls.start('hidden')
  }

  return [element, controls]
}

/*
threshold: (sempre permanecer com o mouse sobre os elemntos para explicação)
Número entre 0 e 1 indicando a porcentagem que deve estar visível antes do acionamento.
Também pode ser uma matriz de números, para criar vários pontos de disparo.
*/
