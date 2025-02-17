import styled from "styled-components";

export const Wrapper = styled.div`
    display:flex;
    
`;
export const Input = styled.input`
    width: 750px;
    height: 40px;
    outline: none;
    
    flex-grow: 1; 
    border: none; 
    padding: 5px;
   

   
`
export const Icon = styled.img`
    width: 34px;
    height: 34px;
    position: absolute;
    left: 1210px;    
    top: 40px;
`
export const ButtonSearch = styled.button`
    background: #fff;
    border: none;
    cursor: pointer;
    
`
export const InputButtonContainer = styled.div`
    display: flex;
    
    border: 2px solid magenta;  
    border-radius: 5px;
    margin: 30px auto;
    &:hover {
        outline: pink;
        border-color: darkorchid;
    }
    
`
