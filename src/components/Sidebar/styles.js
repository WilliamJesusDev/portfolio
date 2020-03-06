import { createGlobalStyle } from "styled-components";
import * as remixFill from "@styled-icons/remix-fill";

export const IconGithub = remixFill.Github;
export const IconInstagram = remixFill.Instagram;
export const IconFacebook = remixFill.FacebookBox;
export const IconLinkedin = remixFill.LinkedinBox;

export const Container = createGlobalStyle`
.sidebar {
  background: #181818;
  width: 60px;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 3;
  min-height: 500px;
  text-align: center;
}

.logo {
  background: #070707;
  display: block;
  padding: 8px 0;
}

.logo img{
  display: block;
  margin: 8px auto;
  width: 80%;
}

.logo img:first-child+img{
  margin-top: 12px;
  margin-bottom: -5px;
  width: 90%;
}

nav {
    top: 35%;
    width: 100%;
    display: block;
    position: absolute;
    text-align: center;
}

nav a {
    margin: 5px 16px 20px;
    color: ${props => props.theme.accent};
    display: block;
    position: relative;
    text-decoration: none;
    text-align: center;
}

nav a svg {
    -webkit-transition: all .2s ease-out;
    transition: all .2s ease-out
}

nav a:hover svg {
    opacity: 0
}

nav a.active,nav a:hover {
    color: ${props => props.theme.primary}
}

nav a:after {
    content: '';
    font-size: 10px;
    top: 40%;
    letter-spacing: 2px;
    position: absolute;
    bottom: 5px;
    left: 0;
    display: block;
    width: 100%;
    text-align: center;
    opacity: 0;
    -webkit-transition: all .3s ease-out;
    transition: all .2s ease-out
}

nav a:first-child:after {
    content: 'HOME'
}

nav a:first-child+a:after {
    content: 'ABOUT'
}

nav a:first-child+a+a:after {
    content: 'SKILLS'
}

nav a:first-child+a+a+a:after {
    content: 'MY WORK'
}

nav a:first-child+a+a+a+a:after {
    content: 'CONTACT'
}

nav.pl a:first-child:after {
    content: 'START'
}

nav.pl a:first-child+a:after {
    content: 'O MNIE'
}

nav.pl a:first-child+a+a:after {
    content: 'SKILSY'
}

nav.pl a:first-child+a+a+a:after {
    content: 'PORTFOLIO'
}

nav.pl a:first-child+a+a+a+a:after {
    content: 'KONTAKT'
}

nav a:hover:after {
    opacity: 1
}

ul {
    position: absolute;
    bottom: 20px;
    width: 100%;
    display: block;
    padding: 0;
    list-style: none;
}

ul li a {
    padding: 5px 0;
    display: block;
    width: 30%;
    margin: auto;
    color: ${props => props.theme.accent}
}

a#github:hover {
    color: #283e4a
}
a#facebook:hover {
    color: #4267b2
}
a#linkedin:hover {
    color: #285AEB
}
a#instagram:hover {
    color: #d6249f
}

@media only screen and (max-height: 700px) {
    ul{
        display: none;
    }
 }
`;
