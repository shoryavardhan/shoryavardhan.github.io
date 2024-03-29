import styled from "styled-components";
export const StyledBurger = styled.button`
         position: absolute;
         top: 5%;
         right: 3rem;
         display: flex;
         flex-direction: column;
         justify-content: space-around;
         width: 2rem;
         height: 2rem;
         background: transparent;
         border: none;
         cursor: pointer;
         padding: 0;
         z-index: 999;

         &:focus {
           outline: none;
         }

         div {
           width: 2rem;
           height: 0.25rem;
           background: ${({ open }) => (open ? "#66fcf1" : "#66fcf1")};
           border-radius: 10px;
           transition: all 0.3s linear;
           position: relative;
           transform-origin: 1px;

           :first-child {
             transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
           }

           :nth-child(2) {
             opacity: ${({ open }) => (open ? "0" : "1")};
             transform: ${({ open }) =>
               open ? "translateX(20px)" : "translateX(0)"};
             width:1.5rem;  
           }

           :nth-child(3) {
             transform: ${({ open }) =>
               open ? "rotate(-45deg)" : "rotate(0)"};
           }
         }
       `;
