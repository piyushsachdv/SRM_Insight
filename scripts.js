function toggleMenu() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('active');
}

// Close sidebar when clicking outside
window.addEventListener('click', (event) => {
  const sidebar = document.getElementById('sidebar');
  const toggle = document.querySelector('.toggle');
  if (!sidebar.contains(event.target) && !toggle.contains(event.target)) {
      sidebar.classList.remove('active');
  }
});