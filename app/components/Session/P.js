import styled from 'styled-components'
import {
  blue,
  white,
  formFocusInputBorderColor,
  formImageColor,
  formButtonHover,
  formInputBorderColor
} from '../../styles/variables'

export default styled.p`
  position: relative;
  margin: 15px auto;
  padding: 0 15px;

  input {
    border: 1px solid ${formInputBorderColor};
    font-size: 14px;
    padding: 10px 5px 10px 40px;
    display: block;
    transition: 0.2s ease-out;
    width: 100%;

    &:focus {
      border-color: ${formFocusInputBorderColor};
      box-shadow: none;
      outline: 0;
      padding-left: 10px;
    }

    &:focus + span {
      opacity: 0;
    }
  }

  input[type='submit'] {
    background-color: ${blue.toString()};
    border-color: ${formFocusInputBorderColor};
    color: ${white.toString()};
    cursor: pointer;
    padding-left: 0;

    &:hover {
      background-color: ${formButtonHover};
    }
  }

  span.fa {
    color: ${formImageColor};
    position: absolute;
    top: 10px;
    left: 25px;
    font-size: 20px;
    transition: 0.2s ease-out;
  }
`
