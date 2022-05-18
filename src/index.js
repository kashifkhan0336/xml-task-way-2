import xmlSource from "./index.xml";
import "./index.css";
console.log(xmlSource);
const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlSource, "text/xml");

function getElementByXpath(path, doc) {
  return document.evaluate(
    path,
    doc,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;
}
function getElementsByXPath(xpath, parent) {
  let results = [];
  let query = document.evaluate(
    xpath,
    parent || document,
    null,
    XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
    null
  );
  for (let i = 0, length = query.snapshotLength; i < length; ++i) {
    results.push(query.snapshotItem(i));
  }
  return results;
}
let items = getElementsByXPath("persons/person", xmlDoc);
items.forEach((item) => {
  console.log(getElementByXpath("email", item).textContent);
  document.querySelector("table").innerHTML += `<tr>
            <td>${getElementByXpath("first-name", item).textContent}</td>
            <td>${getElementByXpath("last-name", item).textContent}</td>
            <td>${getElementByXpath("address", item).textContent}</td>
            <td>${getElementByXpath("phone", item).textContent}</td>
            <td>${getElementByXpath("email", item).textContent}</td>
        </tr>`;
});
