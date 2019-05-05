export const autoresize = ({ target }) => {
  target.style.height = 'auto';
  target.style.height = target.scrollHeight + 'px';
  target.scrollTop = target.scrollHeight;
};
