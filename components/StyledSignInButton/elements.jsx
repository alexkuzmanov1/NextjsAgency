import styled from 'styled-components';
import { SignInButton } from '@clerk/clerk-react';

export const StyledSignInButton = styled(SignInButton)`
  position: absolute;
  top: 2rem;
  left: 2rem;
  font-family: sans-serif;
  overflow: hidden;
  text-align: center;
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  min-width: 184px;
  min-height: 56px;
  padding: 16px 0;
  cursor: pointer;
  border: none;
`;


/* CSS */
// .button-9 {
//   appearance: button;
//   backface-visibility: hidden;
//   background-color: #405cf5;
//   
//   box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset,rgba(50, 50, 93, .1) 0 2px 5px 0,rgba(0, 0, 0, .07) 0 1px 1px 0;
//   box-sizing: border-box;
//   color: #fff;
//   cursor: pointer;
//   font-family: -apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif;
//   font-size: 100%;
//   height: 44px;
//   line-height: 1.15;
//   margin: 12px 0 0;
//   outline: none;
//   overflow: hidden;
//   padding: 0 25px;
//   position: relative;
//   text-align: center;
//   text-transform: none;
//   transform: translateZ(0);
//   transition: all .2s,box-shadow .08s ease-in;
//   user-select: none;
//   -webkit-user-select: none;
//   touch-action: manipulation;
//   width: 100%;
// }

// .button-9:disabled {
//   cursor: default;
// }

// .button-9:focus {
//   box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset, rgba(50, 50, 93, .2) 0 6px 15px 0, rgba(0, 0, 0, .1) 0 2px 2px 0, rgba(50, 151, 211, .3) 0 0 0 4px;
// }