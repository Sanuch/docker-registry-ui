import styled from 'styled-components';

export const ItemRow = styled.div`
    width: calc(100% - 100px);
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;
    background-color: white;
`;

export const ItemDetails = styled.div`
`;

export const ItemId = styled.div`
    width: 10%;
    display: inline-block;
    margin-right: 0.2em;
    background-color: white;
`;

export const ItemCmd = styled.div`
    width: 80vw;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    word-wrap: break-word; 
    display: inline-block;
    background-color: white;
    margin-left: 1em;
`;