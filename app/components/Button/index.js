import styled from 'styled-components'

export default styled.button`
  background-color: #3c8dbc;
  border-color: #367fa9;

  border-radius: 3px;
  box-shadow: none;
  border: 1px solid transparent;
  display: inline-block;
  color: #fff;
  padding: 6px 12px;
  margin-bottom: 0;
  font-weight: 400;
  font-size: 14px;
  font-family: inherit;
  text-align: center;
  vertical-align: middle;
  line-height: 1.42857143;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;

  &:active, &:hover {
    background-color: #367fa9;
  }

  &:focus {
    outline: none;
    color: #fff;
    background-color: #286090;
    border-color: #122b40;
  }
`
