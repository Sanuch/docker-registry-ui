import styled from 'styled-components';

export const ItemWrapper = styled.div`
    width: 85%;
    margin-left: auto;
    margin-right: auto;
    height: 3em;
    display: table-row;
    cursor: pointer;
`;

export const ItemName = styled.span`
    display: table-cell;
    border: solid 2px black;
    width: 50%;
`;

export const ItemTags = styled.span`
    display: table-cell;
    margin-left: 3em;
    border: solid 2px red;
    width: 50%;
`;

export const ItemRemove = styled.span`
`;