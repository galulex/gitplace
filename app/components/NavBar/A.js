import { Link } from 'react-router'
import styled from 'styled-components'
import { navLinkColor } from '../../styles/variables'

export default styled(Link)`
  color: ${navLinkColor};
  display: block;
  text-decoration: none;
  padding: 15px;
`
