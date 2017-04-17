import styled from 'styled-components'
import { white, blue } from '../../styles/variables'

export default styled.legend`
  background-color: ${blue.toString()};
  color: ${white.toString()};
  display: block;
  font-size: 20px;
  padding: 15px;
  width: 100%;

  span.fa {
    font-size: 85px;
    position: absolute;
    opacity: 0.2;
    margin-left: 165px;
    margin-top: -15px;
  }
`
