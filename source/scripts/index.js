
const navigation = document.querySelector('.navigation');
const navToggle = document.querySelector('.navigation__toggle');

navigation.classList.remove('navigation--nojs');
navigation.classList.add('navigation--closed');

navToggle.onclick = function() {
  if (navigation.classList.contains('navigation--closed')) {
    navigation.classList.remove('navigation--closed');
    navigation.classList.add('navigation--opened');

  } else {
    navigation.classList.add('navigation--closed');
    navigation.classList.remove('navigation--opened');
  }
};
