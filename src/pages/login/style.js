import css from 'styled-jsx/css'

export default css.global `
#app {
    position: absolute;
    margin: 0;
    top: 0;
    left: 0;
    padding: 0;
    width: 100%;
    height: 1092.33px;
    background-color: rgba(0, 0, 0, 0.6);
}

.background-wrapper {
    position: absolute;
    background-size: cover;
    height: 100%;
    min-height: 100vh;
    overflow: hidden;
    width: 100%;
    z-index: -1;
}

.background-wrapper .background {
    min-height: 100%;
    min-width: 100%;
}

#header {
    position: relative;
    width: 100vw;
    margin: 22.5px 0 20px 3vw;
}

#logo {
    height: auto;
    width: 167px;
}

#container {
    position: relative;
    display: block;
    background-color: rgba(0, 0, 0, 0.7);
    width: 314px;
    height: 575.33px;
    left: 50vw;
    margin-left: -233.5px;
    border-radius: 4px;
    padding: 60px 68px 40px 68px;
    margin-bottom: 90px;
}


#log-in-form {
    position: relative;
    display: block;
    width: 100%;
    height: 340.667px;
}

#sign-in-text {
    margin: 0;
    font-size: 32px;
    color: white;
}

.label-container {
    position: relative;
    display: block;
    width: 100%;
    margin-bottom: 28px;
}

.inputError {
    position: relative;
    top: -10px;
    padding: 0 3px 6px 3px;
    font-size: 13px;
    color: #E87C03;
}

.inputError#email-inputError, .inputError#pwd-inputError {
    display: none;
}

.box-container {
    position: relative;
    width: 100%;
    height: 50px;
    margin-bottom: 16px;
    border-radius: 4px;
    border-width: 0;
    background-color: #363636;
}

#login-button-container {
    margin-top: 40px;
    margin-bottom: 12px;
    height: 48px;
}

.field {
    position: relative;
    width: 274px;
    height: 32px;
    border-radius: 4px;
    outline: 0 none;
    border-width: 0;
    padding: 16px 20px 0 20px;
    color: white;
    background-color: transparent;
}

#login-button {
    position: relative;
    width: 100%;
    height: 100%;
    border-width: 0;
    border-radius: 4px;
    background-color: red;
    color: white;
    font-weight: bold;
    text-align: center;
    padding: 0;
    font-size: 16px;
}

.checkbox-row {
    position: relative;
    width: 100%;
    top: 2px;
    font-size: 13px;
}

.checkbox-container {
    position: absolute;
    background-color: white;
    outline: 0 none;
    opacity: 60%;
    border-radius: 2px;
    border-width: 0;
    width: 16px;
    height: 16px;
    padding: 0;
    margin: 0;
}

#icon {
    color: black;
    position: absolute;
    pointer-events: none;
    width: 12px;
    left: 50%;
    top: 50%;
    margin-left: -6px;
    margin-top: -6px;
}

input#remember-me:focus {
    opacity: 100%;
}

#remember-me-label {
    position: relative;
    color: white;
    opacity: 60%;
    user-select: none;
    width: max-content;
    margin: 0 0 0 20px;
}

#help {
    position: relative;
    cursor: pointer;
    text-align: right;
    float: right;
    color: white;
    text-decoration: none;
    opacity: 90%;
}

#help:hover {
    text-decoration: underline;
}

.label {
    position: absolute;
    cursor: text;
    user-select: none;
    font-size: 16px;
    opacity: 50%;
    font-family: Arial, Helvetica, sans-serif;
    left: 20px;
    top: 15px;
    color: white;
    transition: font-size 100ms ease, top 100ms ease, opacity 100ms ease;
}
.fb-login-form {
    position: relative;
    width: 100%;
    height: fit-content;
}
.fb-login-button {
    position: relative;
    display: block;
    margin: 16px 0 0 0;
    padding: 0;
    background: none;
    border-width: 0;
    height: 20px;
    cursor: pointer;
}
.fb-login {
    position: relative;
    padding: 0;
    margin: 0;
    height: fit-content;
    width: fit-content;
}
.fb-icon {
    position: relative;
    margin: 0 10px 0 0;
    padding: 0;
    width: 20px;
    height: 20px;
    vertical-align: middle;
    user-select: none;
}
.fb-btn-text {
    position: relative;
    color: #737373;
    font-size: 13px;
    font-weight: 500;
    user-select: none;
    left: -4px;
}

.sign-up {
    position: relative;
    width: 100%;
    margin: 16px 0 0 0;
    color: #737373;
}
.sign-up-link {
    color: white;
    text-decoration: none;
}

.sign-up-link:hover {
    text-decoration: underline;
}

.reCAPTCHA {
    position: relative;
    margin: 13px 0 0 0;
    width: 100%;
    height: 135.667px;
}
#reCAPTCHA-text {
    position: relative;
    text-align: left;
    font-size: 13px;
    color: #737373;
}

.learn-more-button {
    position: relative;
    margin: 0;
    padding: 0;
    height: fit-content;
    width: fit-content;
}
#learn-more {
    position: relative;
    background-color: transparent;
    border: none;
    color: #0071eb;
    cursor: pointer;
    display: inline;
    font-family: inherit;
    font-size: inherit;
    padding: 0;
    outline: 0 none;
}

#learn-more:hover {
    text-decoration: underline;
}

#terms-of-use {
    position: relative;
    visibility: hidden;
    width: 100%;
    text-align: left;
    font-family: inherit;
    font-size: 13px;
    color: #737373;
}

.blue-link {
    color: #0071eb;
    cursor: pointer;
    font-family: inherit;
    font-size: inherit;
    text-decoration: none;
}

.blue-link:hover {
    text-decoration: underline;
}

/* footer {
    position: absolute;
    width: 100vw;
    height: 236px;
    bottom: 0;
    background: rgba(0, 0, 0, 0.75);
} */

.footer {
    position: relative;
    display: block;
    padding: 30px 0 30px 0;
    height: 148px;
    margin-left: 10.27vw;
    margin-right: 10.27vw;
    color: #999;
}

.footer-header {
    position: relative;
    padding: 0;
    width: 100%;
    margin: 0 0 30px 0;
    font-size: 1rem;
}

.inline-footer-ul {
    position: relative;
    width: 100%;
    padding: 0;
    margin: 0;
}

.inline-footer-li {
    display: inline-block;
    vertical-align: text-top;
    margin-top: 0;
    width: 18.26vw;
    min-width: fit-content;
    padding-right: 12px;
    list-style-type: none;
    font-size: 13px;
}

.footer-link {
    cursor: pointer;
    color: #999;
    text-decoration: none;
}

.footer-link:hover {
    text-decoration: underline;
}

.language-selector-container {
    position: relative;
    width: 100%;
    margin: 20px 0 0 0;
}

.language-selector-boundaries {
    position: absolute;
    display: inline-block;
    padding: 0;
    margin: 0;
    width: 137.33px;
    height: 48px;
    border: none;
    background: none;
}

#language-selector {
    position: absolute;
    -webkit-appearance: none;
    appearance: none;
    color: #999;
    padding: 12px 26px 12px 50px;
    background-color: black;
    font-size: 13px;
    text-align: left;
    text-decoration: none;
    border: 1px solid #333;
    width: 100%;
    height: 100%;
    text-indent: 0;
    line-height: 1.7;
}

.language-selector-boundaries:after {
    position: absolute;
    user-select: none;
    content: "";
    top: 20px;
    right: 8px;
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-color: #999 transparent transparent transparent;
}

#language-selector option {
    font-weight: normal;
    display: block;
    white-space: pre;
    min-height: 1.2em;
    padding: 0px 2px 1px;
}

.globe-icon {
    position: absolute;
    top: 12px;
    left: 12px;
    width: 25px;
}
`