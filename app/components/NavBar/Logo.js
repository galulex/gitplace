import { Link } from 'react-router'
import styled from 'styled-components'
import { white } from '../../styles/variables'

export default styled(Link)`
  color: ${white.toString()};
  font-size: 20px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 300;
  line-height: 50px;
  text-decoration: none;
  width: 230px;
`
