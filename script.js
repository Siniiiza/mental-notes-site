// Открытие модалки
document.getElementById('openChat').addEventListener('click', function() {
  document.getElementById('chatModal').style.display = 'block';
});

// Закрытие модалки
document.getElementById('closeChat').addEventListener('click', function() {
  document.getElementById('chatModal').style.display = 'none';
});

// Закрытие при клике вне окна
window.addEventListener('click', function(event) {
  const modal = document.getElementById('chatModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
