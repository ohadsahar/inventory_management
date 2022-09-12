import { createGlobalStyle } from 'styled-components';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; // Prime icons
import 'primeflex/primeflex.css'; // Prime flex

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

.p-button .p-button-icon-left{
    margin-left:8px;
}
.p-float-label label {
    right:16px;
}

.p-input-icon-left > .p-inputtext {
    padding-left:16px;
}

.p-toast .p-toast-message .p-toast-message-content .p-toast-message-text {
    margin-right:2vh;
}
`;

export default GlobalStyle;
