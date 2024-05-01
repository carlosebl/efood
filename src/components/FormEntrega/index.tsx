import { Link } from 'react-router-dom'
import {
  BotaoEntrega,
  Botoes,
  CamposNumericos,
  CampoTexto,
  FormEntregaContainer,
  Input,
  InputNumerico,
  Label
} from './styles'

const FormEntrega = () => (
  <FormEntregaContainer>
    <h5>Entrega</h5>
    <CampoTexto>
      <Label htmlFor="nome">Quem irá receber</Label>
      <Input type="text" id="nome" />
    </CampoTexto>
    <CampoTexto>
      <Label htmlFor="endereco">Endereço</Label>
      <Input type="text" id="endereco" />
    </CampoTexto>
    <CampoTexto>
      <Label htmlFor="cidade">Cidade</Label>
      <Input type="text" id="cidade" />
    </CampoTexto>
    <CamposNumericos>
      <div>
        <Label htmlFor="cep">CEP</Label>
        <InputNumerico type="text" id="cep" />
      </div>
      <div>
        <Label htmlFor="numero">Número</Label>
        <InputNumerico type="text" id="numero" />
      </div>
    </CamposNumericos>
    <CampoTexto>
      <Label htmlFor="complemento">Complemento</Label>
      <Input type="text" id="complemento" />
    </CampoTexto>
    <Botoes>
      <BotaoEntrega>
        <Link to="/pagamento">Continuar com o pagamento</Link>
      </BotaoEntrega>
      <BotaoEntrega>
        <Link to="/carrinho">Voltar para o carrinho</Link>
      </BotaoEntrega>
    </Botoes>
  </FormEntregaContainer>
)

export default FormEntrega
