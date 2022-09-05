import { createGlobalStyle } from 'styled-components';
import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
}
html,body {
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-family: 'Rubik', sans-serif; 
    direction:rtl;
    height:100vh;
    color:black;
    overflow:hidden;
}
p {
    margin:0px;
    padding:0px;
    color:black;
    font-weight:300;
    line-height:1.2;
}

.p-dock-left {
    margin-top:64px;
    background-color:#0d3a83;
}

.p-dock-container{
    margin-bottom:64px;
}

.p-button {
    padding: 0.75rem 1.25rem;
    font-size: 1rem;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
    border-radius: 6px;
}

.p-datatable .p-paginator-bottom {
    direction:ltr;
}
`;

export default GlobalStyle;
