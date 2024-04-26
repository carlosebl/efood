import {
  Botao,
  CardRestaurante,
  Descricao,
  FundoCard,
  InfoRestaurante,
  Nota,
  TagRestaurante
} from './styles'
import estrela from '../../assets/images/estrela.svg'

const Restaurante = () => (
  <CardRestaurante>
    <FundoCard>
      <TagRestaurante>
        <p>Italiana</p>
      </TagRestaurante>
    </FundoCard>
    <InfoRestaurante>
      <h3>La Dolce Vita Trattoria</h3>
      <Nota>
        <h3>4.6</h3>
        <img src={estrela} alt="estrela" />
      </Nota>
    </InfoRestaurante>
    <Descricao>
      A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
      Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo
      no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor
      inesquecível. Peça já!
    </Descricao>
    <Botao>Saiba mais</Botao>
  </CardRestaurante>
)

export default Restaurante
