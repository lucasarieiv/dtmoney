import logoImg from '../../assets/logo.svg'
import { Summary } from '../Summary'
import { Container, Content } from './styles'


export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type='button'>
          Nova transação
        </button>
      </Content>
      <Summary />
    </Container>
  )
}