module.exports = function () {
  var element = document.createElement('input');

    element.id = 'input-password';
    element.type = 'password';
    element.name = 'input_password';
    element.className='input-text';
    element.placeholder = 'Your password';

  return element;
};
