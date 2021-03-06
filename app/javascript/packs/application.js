import "bootstrap";
import $ from 'jquery';
import 'mousetrap';
import initPhotosUpload from "../components/initPhotosUpload.js";
import {
  initLearn
} from "../components/initLearn.js";
import initGoogleSign from '../components/initGoogleLog';
import initDictionary from "../components/initDictionary.js"
//import init from "../components/initMindMap.js";
//import initD3 from "../components/initD3.js"
import initStickyBar from "../components/initStickyBar.js"
import "./anime";
// import highlightPlant from "./highlight_plant";
import render from "../components/initTree"
import initInput from "../components/initInput"
import initCircle from "../components/initCirclePacking"
import initCardLecteur from "../components/initCardLecteur.js"
import initNewTheme from "../components/initNewTheme.js"
import initForest from "../components/initForest";


$(function () {
  initPhotosUpload();
  initCardLecteur();
  initLearn();


  const json = (document.querySelector('.raw-json'))
  if (json) render(JSON.parse(json.innerHTML))
  initStickyBar();

});


//initForest();
initInput();
initDictionary();
//initCircle();
// init();
// initD3();
//initGoogleSign()

initStickyBar();
// highlightPlant();

initNewTheme();
