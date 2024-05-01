import { Link } from 'react-router-dom'
import {
  BotaoPagamento,
  Botoes,
  CamposNumericos,
  CampoTexto,
  FormPagamentoContainer,
  Input,
  InputCartao,
  InputCVV,
  InputNumerico,
  Label
} from './styles'

const FormPagamento = () => (
  <FormPagamentoContainer>
    <h5>Pagamento - Valor a pagar R$ 190,90</h5>
    <CampoTexto>
      <Label htmlFor="nome">Nome do cartão</Label>
      <Input type="text" id="nome" />
    </CampoTexto>
    <CamposNumericos>
      <div>
        <Label htmlFor="cep">Número do cartão</Label>
        <InputCartao type="text" id="cep" />
      </div>
      <div>
        <Label htmlFor="numero">CVV</Label>
        <InputCVV type="text" id="numero" />
      </div>
    </CamposNumericos>
    <CamposNumericos>
      <div>
        <Label htmlFor="cep">Mês de vencimento</Label>
        <InputNumerico type="text" id="cep" />
      </div>
      <div>
        <Label htmlFor="numero">Ano de vencimento</Label>
        <InputNumerico type="text" id="numero" />
      </div>
    </CamposNumericos>
    <Botoes>
      <BotaoPagamento>
        <Link to="/confirmacao">Finalizar pagamento</Link>
      </BotaoPagamento>
      <BotaoPagamento>
        <Link to="/entrega">Voltar para a edição de endereço</Link>
      </BotaoPagamento>
    </Botoes>
  </FormPagamentoContainer>
)

export default FormPagamento
