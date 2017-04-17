import styled from 'styled-components'
import { borderColor, white } from '../../styles/variables'

export default styled.footer`
  background-color: ${white.toString()};
  border-top: 1px solid ${borderColor};
  padding: 15px;
  text-align: center;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
`
