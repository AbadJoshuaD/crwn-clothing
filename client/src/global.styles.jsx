import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Open Sans Condensed', sans-serif;
}

h1,h2,h3,h4,h5,h6{
    margin-bottom: 0;
}

a,li{
    text-decoration: none;
    color:black;
}

body{
    margin:10px 50px;
}

@media screen and (max-width:900px){
    body{
        margin:10px 10px;
    }
}
`;