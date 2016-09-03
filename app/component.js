module.exports = function () {
  var element = document.createElement('h1');

  element.innerHTML = '<span class="big">He<em>llo</em></span> World';

  return element;
};
