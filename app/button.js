module.exports = function () {
  var element = document.createElement('button');

    element.id = 'submit-button';
    element.type = 'submit';
    element.name = 'submit_button';
    element.className='submit-button';
    element.innerHTML='Send';

  return element;
};
