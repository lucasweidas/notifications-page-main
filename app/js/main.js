import '../scss/main.scss';

// Global Variables
const main = document.querySelector('[data-js="main"]');

// Event Listeners
main.addEventListener('click', filterMainClick);

// Functions
function filterMainClick({ target }) {
  switch (target.dataset.js) {
    case 'toggle-mark-all':
      return markAllNotificationAsRead();
    case 'notification':
      return markNotificationAsRead(target);
    default:
      isNotificationContainer(target);
  }
}

function markAllNotificationAsRead() {
  const notifications = document.querySelectorAll('[data-js="notification"].unread');

  if (!notifications.length) return;

  for (const notification of notifications) {
    notification.classList.remove('unread');
  }
  updateNotificationCounter();
}

function markNotificationAsRead(notification) {
  if (!notification.classList.contains('unread')) return;

  notification.classList.remove('unread');
  updateNotificationCounter(1);
}

function updateNotificationCounter(value = 0) {
  const counter = document.querySelector('[data-js="counter"]');
  const counterValue = +counter.innerText;

  counter.textContent = value === 0 ? value : counterValue - value;
}

function isNotificationContainer(target) {
  const notification = target.closest('[data-js="notification"].unread');

  notification && markNotificationAsRead(notification);
}
