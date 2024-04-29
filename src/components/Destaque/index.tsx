import { Link } from 'react-router-dom'
import {
  Botao,
  CardDestaque,
  Descricao,
  FundoCard,
  InfoDestaque,
  Nota,
  TagDestaque,
  TagRestaurante
} from './styles'
import estrela from '../../assets/images/estrela.svg'

const Destaque = () => (
  <CardDestaque>
    <FundoCard>
      <TagDestaque>
        <p>Destaque da semana</p>
      </TagDestaque>
      <TagRestaurante>
        <p>Japonesa</p>
      </TagRestaurante>
    </FundoCard>
    <InfoDestaque>
      <h3>Hioki Sushi</h3>
      <Nota>
        <h3>4.9</h3>
        <img src={estrela} alt="estrela" />
      </Nota>
    </InfoDestaque>
    <Descricao>
      Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
      frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
      rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão
      sem sair do lar com nosso delivery!
    </Descricao>
    <Botao>
      <Link to="perfil">Saiba mais</Link>
    </Botao>
  </CardDestaque>
)

export default Destaque
