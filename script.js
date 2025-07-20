function toggleDescription(button) {
  const description = button.nextElementSibling;
  const isHidden = description.classList.contains('hidden');
  description.classList.toggle('hidden');
  button.textContent = isHidden ? 'Read Less' : 'Read More';
}