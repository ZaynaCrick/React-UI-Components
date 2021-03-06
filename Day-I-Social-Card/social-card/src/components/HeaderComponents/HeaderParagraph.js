import React from 'react';
 import './Header.css';
 import HeaderTitle from "./HeaderTitle";

 function HeaderParagraph(props) {
     return (
         <div className = "Ptext">
         <HeaderTitle text= "Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!"/>
         </div>
     )
 };

 export default HeaderParagraph;