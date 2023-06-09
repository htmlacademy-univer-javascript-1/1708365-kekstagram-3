const ALERT_SHOW_TIME = 5000;

export function showAlert(message) {
  const alertContainer = document.createElement('div');
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.right = '0';
  alertContainer.style.backgroundColor = 'red';
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
}

export function showUpAlert() {
  showAlert('Could not upload image');
}

export function showDownAlert() {
  showAlert('Could not download images');
}
