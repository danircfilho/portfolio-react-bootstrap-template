import styles from './Wrapper.module.css'

export default function Wrapper({children}) {
  return (
    <main className={styles.wrapper}>
      {children}
    </main>
  )
}

//Nota: O Wrapper corresponde a uma tag que envolverá outros componentes que passam a ser os seus filhos e receberão as propriedades (props) do componente pai.
//Em programação, a palavra container é geralmente usada para estruturas que podem conter mais de um elemento, um wrapper é algo que envolve um único objeto para fornecer mais funcionalidade e interface para ele. Os termos wrapper e container também podem significar a mesma coisa dependendo do desenvolvedor e do que eles pretendem.