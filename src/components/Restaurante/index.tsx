import Tag from '../Tag'
import {
  Botao,
  Card,
  Descricao,
  FundoCard,
  InfoRestaurante,
  Nota
} from './styles'
import estrela from '../../assets/images/estrela.svg'

const Restaurante = () => (
  <Card>
    <FundoCard>
      <Tag />
    </FundoCard>
    <InfoRestaurante>
      <h3>Nome do restaurante</h3>
      <Nota>
        <h3>4.5</h3>
        <img src={estrela} alt="" />
      </Nota>
    </InfoRestaurante>
    <Descricao>
      Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
      frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
      rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão
      sem sair do lar com nosso delivery!
    </Descricao>
    <Botao>Saiba mais</Botao>
  </Card>
)

export default Restaurante
