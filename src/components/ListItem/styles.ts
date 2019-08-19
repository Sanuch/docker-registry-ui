import styled from 'styled-components';

export const ItemWrapper = styled.div`
    width: 85%;
    margin-left: auto;
    margin-right: auto;
    height: 3em;
    display: block;
    cursor: pointer;
    background-color: white;
    height: 100%;
    font-family: Open Sans,sans-serif;
    box-sizing: border-box;
    font-size: 14px;
    #overflow-x: hidden;
    line-height: 18px;
`;

export const ItemName = styled.span`
    display: block;
    width: 50%;
    padding: 10px;
    font-weight: 600;
    color: black;
`;

export const ItemTags = styled.div`
    display: block;
    margin-left: 3em;
    margin-top: 0.5em;
    margin-bottom: 0.2em;
    width: 50%;
`;

export const ItemLink = styled.a`
    width: 100%;
    display: list-item;
    margin-top: 1em;
    list-style: none;
    text-decoration: none;
    color: grey;
    
    :hover {
        color: grey;
        text-decoration: none;
    }
    :visited {
        color: grey;
        text-decoration: none;
    }
`;

export const ItemTagList = styled.div`
    width: 100%;
    display: list-item;
    margin-top: 0.5em;
    list-style: none;
`;

export const ItemTag = styled.div`
    margin-right: 4px;
    align-items: center;
    background-color: #f1f4f6;
    border-radius: 2px;
    color: #81939f;
    display: inline-flex;
    font-size: 12px;
    line-height: 12px;
    padding: 6px 10px;
`;

export const ItemRemove = styled.span`
`;