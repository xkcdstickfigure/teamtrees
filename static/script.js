var elementCount = 0;
var actualCount = 0;

setInterval(function () {
  fetch("/trees").then(function (res) {
    if (res.status != 200) return;
    res.json().then(function (body) {
      actualCount = body;
      if (elementCount === 0) elementCount = actualCount;
    });
  }).catch(function () {});
}, 1000);

setInterval(() => {
  document.querySelector(".treeCounter").innerText = elementCount;
  if (actualCount > elementCount) {
    elementCount++;
  }
}, 10);