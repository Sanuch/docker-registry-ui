import styled from "styled-components";

export const HomeHeader = styled.div`
    height: 3em;
    display: block;
    background-color: #099cec;
    color: #fff;
`;

export const HeaderTitle = styled.div`
    align-items: center;
    margin-left: 15px;
    display: flex;
    height: 100%;
`;

export const ModalWrapper = styled.div`
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
    cursor: default;
`;

export const ModalContent = styled.div`
    background-color: #fefefe;
    margin: 0 auto auto auto;
    padding: 20px;
    border-left: 1px solid #888;
    border-right: 1px solid #888;
    width: 60%;
`;

export const ModalCloseButton = styled.span`
    color: #fff;
    margin: 0 0.5rem 0 auto;
    font-size: 28px;
    font-weight: bold;
    :hover,
    :focus {
      color: black;
      text-decoration: none;
      cursor: pointer;
    }
`;

export const ModalContentText = styled.div``;

export const ModalHeader = styled.div`
     width: 60%;
     display: flex;
     margin: 15% auto 0 auto;
     padding: 10px 20px 8px 20px; 
     background-color: #099cec; 
     border-top-left-radius: 3px;
     border-top-right-radius: 3px
`;

export const ModalTitle = styled.div`
    color:#fff;
    padding-left: 1rem;
    font-size: 15px;
    font-weight: bold;
`;

export const ModalActions = styled.div`
    width: 60%;
    display: flex;
    margin: 0 auto 15% auto;
    padding: 10px 20px 8px 20px;
    background-color: rgb(255,255,255);
    border-left: 1px solid #888;
    border-right: 1px solid #888;
    border-bottom: 1px solid #888;
`;

export const ButtonYes = styled.span`
    box-shadow:inset 0px 1px 0px 0px #bee2f9;
    background:linear-gradient(to bottom, #63b8ee 5%, #468ccf 100%);
    background-color:#099cec;
    border-radius:6px;
    border:1px solid #84bbf3;
    display:inline-block;
    cursor:pointer;
    color:#fff;
    font-family:Arial;
    font-size:15px;
    font-weight:bold;
    padding:8px 19px;
    text-decoration:none;
    text-shadow:0px 1px 0px #7cacde;
`;

export const ButtonCancel = styled.span`
    box-shadow:inset 0px 1px 0px 0px #bee2f9;
    background:linear-gradient(to bottom, #63b8ee 5%, #468ccf 100%);
    background-color:#bddbfa;
    border-radius:6px;
    border:1px solid #84bbf3;
    display:inline-block;
    cursor:pointer;
    color:#fff;
    font-family:Arial;
    font-size:15px;
    font-weight:bold;
    padding:8px 19px;
    text-decoration:none;
    text-shadow:0px 1px 0px #7cacde;
    margin-left: auto;
`;
