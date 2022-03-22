import styled from "styled-components"


export const ContainerGeral = styled.section`
    display:flex;
    background-image: url("https://i2.wp.com/i.imgur.com/lUYsZol.gif");
    background-repeat:no-repeat;
    background-size: 100%;   
    height: 690px;
`

export const ContainerErro = styled.div`
    display: flex;
    justify-content : center;
    
`
export const CardErro  = styled.div`
    margin-top: 120px;
    background-color: rgba(172,129,74, 0.5);
    width: 520px;
    height: 500px;
    margin-left: 280px;
    border:9px double green;
    border-radius: 50px;

`
export const TextoErro = styled.div`
    font-size: 90px;
    color: white;
    background-color: rgba(186,94,31,0.3);
    border-radius: 50px 50px 0px 0px;
`

export const Piadinha = styled.div`
    font-size: 10px;
    background-color: rgba(186,94,31,0.3);
    height:192px;
    border-radius: 0px 0px 50px 50px;
    :hover{
    background-color: red;
    margin-left: 15px;
    font-size: 40px;
    color:green;
}
`




