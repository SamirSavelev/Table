import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	*{padding: 0;margin: 0;border: 0;}
	*,*:before,*:after{box-sizing:border-box;}
	html,body{height:100%;width:100%;font-size:100%;}  
	html {scroll-behavior: smooth;}
	input,button,textarea,select{font-family:inherit; outline: none;}
	button{cursor: pointer; color: inherit; background: transparent;}
	ul{list-style: none;}
	img {display: block; max-width: 100%; height: auto;}

	a { 
		font-weight: 500; 
		font-size: inherit; 
		line-height: inherit;
		text-decoration: none;
		color: inherit;
	}

	html {  
		@media only screen and (max-width: 900px) {
			font-size: 70%;
		}
	}
	
	iframe {
		font-family: 'Nunito', sans-serif !important;
	}

	body {
		overflow-x: hidden;
		font-family: 'Nunito', sans-serif;
		font-weight: 400;
		font-size: 13px;
		line-height: 13px;
		color: ${({ theme }) => theme.textBlack};
		background-color: ${({ theme }) => theme.bgColor};
	}

	html, body {
		height: 100vh !important;
	}
	
	main {
		height: 100%;
		padding: 0;
	}
	
	#__next {
		height:100%;
	}

	#root {
		margin: 0 auto;
	}
`;

export default GlobalStyle;
