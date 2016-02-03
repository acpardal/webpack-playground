import './assets/Component.css';
import './assets/css/font-awesome.css';
import webpackLogo from './assets/webpack.png';
import nodeLogo from './assets/node.png';

export function helloWorld() {
  var element = document.createElement('h1');
  element.innerHTML = 'Hello world';
  return element;
}

export default function() {
  var element = document.createElement('h1');
  element.innerHTML = 'Component with css applied';
  element.className = 'Component-wrapper';
  return element;
}

export function img() {
  var element = document.createElement('img');
  element.src = webpackLogo;
  return element;
}

export function inlineImg() {
  var element = document.createElement('img');
  element.src = nodeLogo;
  return element;
}

export function twitterIcon() {
  var icon = document.createElement('i');
  icon.className = 'fa fa-twitter';
  return icon;
}

export function carIcon() {
  var icon = document.createElement('i');
  icon.className = 'fa fa-car';
  return icon;
}
