module.exports = function () {
  var element = document.createElement('form');

    element.id = 'login-form';
    element.method = 'post';
    element.action = '#';
    element.innerHTML = '';

  return element;
};
