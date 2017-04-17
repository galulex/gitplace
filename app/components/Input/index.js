import styled from 'styled-components'
import { borderColor, white, blue } from '../../styles/variables'

export default styled.input`
  background-color: ${white.toString()};
  border-radius: 0;
  box-shadow: none;
  border: 1px solid ${borderColor};
  display: block;
  padding: 6px 12px;
  font-size: 14px;
  height: 34px;
  width: 100%;

  &:focus {
    border-color: ${blue.toString()};
    box-shadow: none;
    outline: 0;
  }
`
