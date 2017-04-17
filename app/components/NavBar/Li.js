import styled from 'styled-components'
import { navLinkHover } from '../../styles/variables'

export default styled.li`
  cursor: pointer;
  float: left;
  font-weight: 400;
  font-size: 14px;

  &:hover {
    background-color: ${navLinkHover};
  }
`
