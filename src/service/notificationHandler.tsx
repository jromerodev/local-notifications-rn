import PushNotification from 'react-native-push-notification';

function NotificationHandler() {

  const onNotification = (notification) => {
    console.log('NotificationHandler:', notification);
    if (typeof this._onNotification === 'function') {
      this._onNotification(notification);
    }
  }

  const onRegister = (token) => {
    console.log('NotificationHandler:', token);

    if (typeof this._onRegister === 'function') {
      this._onRegister(token);
    }
  }

  const onAction = (notification) => {
    console.log('Notification action received:');
    console.log(notification.action);
    console.log(notification);

    if (notification.action === 'Yes') {
      PushNotification.invokeApp(notification);
    }
  }

  const onRegistrationError = (err) => {
    console.log(err);
  }

  const attachRegister = (handler) => {
    this._onRegister = handler;
  }

  const attachNotification = (handler) => {
    this._onNotification = handler;
  }
}

const handler = new NotificationHandler();

PushNotification.configure({
  onRegister: handler.onRegister.bind(handler),
  onNotification: handler.onNotification.bind(handler),
  onAction: handler.onAction.bind(handler),
  onRegistrationError: handler.onRegistrationError.bind(handler),
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },
  // default: true
  popInitialNotification: true,
  requestPermissions: true,
});

export default handler;
