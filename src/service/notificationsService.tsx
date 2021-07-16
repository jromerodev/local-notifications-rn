import { useEffect } from 'react';
import PushNotification, { Importance } from 'react-native-push-notification';
import NotificationHandler from './NotificationHandler';


function NotifService(props) {

  const [lastId,setLastId] = useState(0);
     
  const [lastChannelCounter,setLastChannelCounter] = useState(0);
  this.lastChannelCounter = 0;
  setLastId(0)
  setLastChannelCounter(0)

    this.createDefaultChannels();

    NotificationHandler.attachRegister(onRegister);
    NotificationHandler.attachNotification(onNotification);

    PushNotification.getApplicationIconBadgeNumber(function (number) {
      if (number > 0) {
        PushNotification.setApplicationIconBadgeNumber(0);
      }
    });
    
    PushNotification.getChannels(function(channels) {
      console.log(channels);
    });


  const createDefaultChannels = () => {
    PushNotification.createChannel(
      {
        channelId: "default-channel-id", // (required)
        channelName: `Default channel`, // (required)
        channelDescription: "A default channel",
        importance: Importance.HIGH,
        vibrate: true, 
      },
      (created) => console.log(`createChannel 'default-channel-id' returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
    );
    PushNotification.createChannel(
      {
        channelId: "sound-channel-id",
        channelName: `Sound channel`,
        channelDescription: "A sound channel",
        soundName: "sample.mp3", 
        importance: Importance.HIGH,
        vibrate: true,
      },
      (created) => console.log(`createChannel 'sound-channel-id' returned '${created}'`)
    );
  }

  const createOrUpdateChannel = () => {
    this.lastChannelCounter++;
    PushNotification.createChannel(
      {
        channelId: "custom-channel-id", // (required)
        channelName: `Custom channel - Counter: ${this.lastChannelCounter}`, // (required)
        channelDescription: `A custom channel to categorise your custom notifications. Updated at: ${Date.now()}`,
        soundName: "default", 
        importance: Importance.HIGH,
        vibrate: true, 
      },
      (created) => console.log(`createChannel returned '${created}'`)
    );
  }

  const popInitialNotification = () => {  
    PushNotification.popInitialNotification((notification) => console.log('InitialNotication:', notification));
  }

  const localNotif = (soundName)  => {
    this.lastId++;
    PushNotification.localNotification({
      /* Android Only Properties */
      channelId: soundName ? 'sound-channel-id' : 'default-channel-id',
      ticker: 'My Notification Ticker',
      autoCancel: true,
      largeIcon: 'ic_launcher',
      smallIcon: 'ic_notification',
      bigText: 'My big text that will be shown when notification is expanded',
      subText: 'This is a subText',
      color: 'red',
      vibrate: true,
      vibration: 300,
      tag: 'some_tag',
      group: 'group',
      groupSummary: false,
      actions: ['Yes', 'No'],
      invokeApp: true,
      when: null,
      usesChronometer: false,
      timeoutAfter: null,
      /* iOS only properties */
      category: '',
      subtitle: "Its time to do some exercise! lets go!",
      /* iOS and Android properties */
      id: this.lastId,
      title: 'Yana daily reminder ',
      message: 'Wake up early every morning', // (required)
      userInfo: { screen: 'home' },
      playSound: !!soundName,
      soundName: soundName ? soundName : 'default',
      number: 10,
    });
  }

  const scheduleNotif = (soundName) => {
    this.lastId++;
    PushNotification.localNotificationSchedule({
      date: new Date(Date.now() + 30 * 1000), 
      /* Android Only Properties */
      channelId: soundName ? 'sound-channel-id' : 'default-channel-id',
      ticker: 'My Notification Ticker', 
      autoCancel: true,
      largeIcon: 'ic_launcher',
      smallIcon: 'ic_notification',
      bigText: 'My big text that will be shown when notification is expanded',
      subText: 'This is a subText',
      color: 'blue',
      vibrate: true,
      vibration: 300,
      tag: 'some_tag',
      group: 'group',
      groupSummary: false,
      ongoing: false,
      actions: ['Yes', 'No'],
      invokeApp: false,
      when: null,
      usesChronometer: false, 
      timeoutAfter: null, 
      category: '',
      /* iOS and Android properties */
      id: this.lastId,
      title: 'Yana daily reminder ',
      message: 'Wake up early every morning',
      userInfo: { sceen: "home" },
      playSound: !!soundName,
      soundName: soundName ? soundName : 'default',
      number: 10, 
    });
  }

  const checkPermission = (cbk) => {
    return PushNotification.checkPermissions(cbk);
  }

  const requestPermissions = () => {
    return PushNotification.requestPermissions();
  }

  const cancelNotif = () => {
    PushNotification.cancelLocalNotifications({id: '' + this.lastId});
  }

  const cancelAll = () => {
    PushNotification.cancelAllLocalNotifications();
  }

  const abandonPermissions = () => {
    PushNotification.abandonPermissions();
  }

  const getScheduledLocalNotifications = (callback) => {
    PushNotification.getScheduledLocalNotifications(callback);
  }

  const getDeliveredNotifications = (callback) => {
    PushNotification.getDeliveredNotifications(callback);
  }  

  useEffect(() => {
		PushNotification.configure({
			onRegister: ({ token }) => console.log(token);
		});
	}, []);

}