import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column 2;
    .main {
        display: flex;
        flex-direction: column;
    }
    
    @media screen and (max-width: 600px) {
        columns: 1;
        flex-wrap: wrap;
    }
`;

export const Start = styled.div`
    box-shadow: 0px 0px 7px black;
    background-color: white;
    margin: 15px 15px 15px 50px;
    overflow: hidden;
    width: 450px;
    
    img {
        width: 100%;
        height: 300px;
    }
    
    h2 {
        position: absolute;
        top: 250px;
        left: 70px;
    }

    svg {
        color: #009688;
        padding: 0px 15px;
    }

    p {
        display: flex;
        color: #757575;
    }

    .p1{
        padding: 0px 15px;
    }

    hr {
        width: 90%;
        color: #F1F1F1;
    }

    @media screen and (max-width: 900px) {
        h2 {
            font-size: 1em;
            top: 270px;
            left: 60px;
        }
    }

    @media screen and (max-width: 600px) {
        margin: auto;
        margin-top: 15px;
        width: 90%;
    }
`;

export const Br = styled.div`
    height: 5px;
`;

export const Box1 = styled.div`
    background-color: #F1F1F1;
    border-radius: 50px;
    text-align: center;
    height: 20px;
    color: white;
    margin: 0px 0px 15px 15px;
    width: 90%;
`;

export const Box_item1 = styled.div`
    background-color: #009688;
    border-radius: 50px;
    text-align: center;
    height: 20px;
    color: white;
    width: 90%;
`;

export const Box_item2 = styled.div`
    background-color: #009688;
    border-radius: 50px;
    text-align: center;
    height: 20px;
    color: white;
    width: 80%;
`;

export const Box_item3 = styled.div`
    background-color: #009688;
    border-radius: 50px;
    text-align: center;
    height: 20px;
    color: white;
    width: 75%;
`;

export const Box_item4 = styled.div`
    background-color: #009688;
    border-radius: 50px;
    text-align: center;
    height: 20px;
    color: white;
    width: 50%;
`;

export const Box_item5 = styled.div`
    background-color: #009688;
    border-radius: 50px;
    text-align: center;
    height: 20px;
    color: white;
    width: 100%;
`;

export const Box_item6 = styled.div`
    background-color: #009688;
    border-radius: 50px;
    text-align: center;
    height: 20px;
    color: white;
    width: 50%;
`;

export const Box_item7 = styled.div`
    background-color: #009688;
    border-radius: 50px;
    text-align: center;
    height: 20px;
    color: white;
    width: 25%;
`;


export const Quite = styled.div`
    box-shadow: 0px 0px 7px black;
    background-color: white;
    margin: 15px 15px 15px 0px;
    height: 100%;

    @media screen and (max-width: 600px) {
        margin: auto;
        margin-top: 15px;
        width: 90%;
    }

    svg {
        color: #009688;
        padding: 0px 20px;
    }

    h1 {
        display: flex;
        color: #757575;
    }

    h2 {
        margin-left: 30px;
        display: flex;
        color: #757575;
        font-weight: normal;
    }

    p {
        display: flex;
        color: #009688;
        padding-left: 10px;
    }
    
    mark {
        background-color: #009688;
        color: white;
        border-radius: 5px;
        padding: 0px 3px;
    }

    div {
        margin: 0px 15px 0px 30px;
    }

    hr {
        width: 90%;
        color: #F1F1F1;
    }
`;

export const End = styled.div`
    box-shadow: 0px 0px 7px black;
    background-color: white;
    margin: 15px 15px 15px 0px;
    height: 100%;

    @media screen and (max-width: 600px) {
        margin: auto;
        margin-top: 15px;
        width: 90%;
    }

    svg {
        color: #009688;
        padding: 0px 20px;
    }

    h1 {
        display: flex;
        color: #757575;
    }

    h2 {
        margin-left: 30px;
        display: flex;
        color: #757575;
        font-weight: normal;
    }

    p {
        display: flex;
        color: #009688;
        padding-left: 10px;
    }
    
    mark {
        background-color: #009688;
        color: white;
        border-radius: 5px;
        padding: 0px 3px;
    }

    div {
        margin-left: 30px;
    }

    hr {
        width: 90%;
        color: #F1F1F1;
    }
`;

export const Footer = styled.div`
    height: 20vh;
    width: 100%;
    text-align: center;
    margin-top: 20px;
    padding-top: 20px;
    background-color: #009688;
    color: white;

    svg {
        margin: 0px 1px;
        &:hover {
            opacity: 0.6;
        }
    }
`;