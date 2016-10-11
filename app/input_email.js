module.exports = function () {
  var element = document.createElement('input');

    element.id = 'input-email';
    element.type = 'text';
    element.name = 'input_email';
    element.className='input-text';
    element.placeholder = 'Your email';

  return element;
};
