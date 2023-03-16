const links = document.querySelector('.links');

window.addEventListener('scroll', () => {
  const linksTop = links.getBoundingClientRect().top;

  if (linksTop - window.innerHeight < 0) {
    links.classList.add('btn-show');
    links.classList.remove('btn-hide');
  } else {
    links.classList.add('btn-hide');
    links.classList.remove('btn-show');
  }
});

const socials = document.querySelector('.social');

window.addEventListener('scroll', () => {
  const socialsTop = socials.getBoundingClientRect().top;

  if (socialsTop - window.innerHeight < 0) {
    socials.classList.add('social-show');
    socials.classList.remove('social-hide');
  } else {
    socials.classList.add('social-hide');
    socials.classList.remove('social-show');
  }
});