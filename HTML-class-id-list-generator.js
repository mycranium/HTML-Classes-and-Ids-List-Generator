
// Script by Mike Rainey 
// Include this script in your page to generate a list of all elements
// and their ids and classes for elements that have either attribute.
//
// This adds a button at the bottom of the body element that, when clicked,
// will generate and download a tab-separated-values textfile that you
// can import into Google Sheets, MS Excel etc.
//
// The basic code to create and download the file came from this page:
// https://ourcodeworld.com/articles/read/189/how-to-create-a-file-and-generate-a-download-with-javascript-in-the-browser-without-a-server
//


function makeButton() {
  let btn = document.createElement('button');
  btn.setAttribute('id', 'lister');
  btn.setAttribute('type', 'button');
  let btnTxt = document.createTextNode('Generate List');
  btn.appendChild(btnTxt);
  document.body.appendChild(btn);
}

function generateList() {
  let myBody = document.querySelector('body');
  let all = myBody.getElementsByTagName('*');
  let len = all.length;
  let i;
  let outArray = ["Tag\tId\tClasses"];
  outArray.push(getAtts(myBody));
  for (i = 0; i < len; i++) {
    let tmpString = getAtts(all[i]);
    if (tmpString) { outArray.push(tmpString); }
  }
  return outArray.join('\r\n');
}

function getAtts(el) {
  let tag = (el.nodeName) ? el.nodeName.toLowerCase() : "No Tag Name";
  let retString;
  if (el.hasAttribute('id')) {
    retString = tag + "\t" + el.id;
    if (el.hasAttribute('class')) {
      retString += "\t" + el.className.replace(/ /g, '\t');
    }
  } else {
    if (el.hasAttribute('class')) {
      retString = tag + "\t\t" + el.className.replace(/ /g, '\t');
    }
  }
  return retString;
}

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

const myBtn = makeButton();

document.getElementById("lister").addEventListener("click", function () {
  let text = generateList();
  let filename = "Class_and_ID_list.tsv";
  download(filename, text);
}, false);