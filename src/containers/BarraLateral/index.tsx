import { BarraLateralContainer } from './styles'

export type Props = {
  children: JSX.Element
}

const BarraLateral = ({ children }: Props) => (
  <BarraLateralContainer>{children}</BarraLateralContainer>
)

export default BarraLateral
