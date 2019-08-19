import styled from 'styled-components';

export const ItemWrapper = styled.div`
    width: 85%;
    margin-left: auto;
    margin-right: auto;
    height: 3em;
    display: block;
    cursor: pointer;
`;

export const ItemName = styled.span`
    display: block;
    width: 50%;
`;

export const ItemTags = styled.span`
    display: block;
    margin-left: 3em;
    margin-top: 0.5em;
    width: 50%;
`;

export const ItemLink = styled.a`
    width: 100%;
    display: list-item;
    margin-top: 1em;
    list-style: none;
`;

export const ItemRemove = styled.span`
`;