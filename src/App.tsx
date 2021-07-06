import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import PushNotification from 'react-native-push-notification';
//import { RootStateType } from './@types/store';

function App() {
  // const {
	// 	requestLoginNotification,
	// 	token,
	// } = useSelector((s: RootStateType) => s.session);


  const [notification, setNotification] = useState({});

	useEffect(() => {
		(async () => {

	
				if (requestLoginNotification) {
					PushNotification.configure({
						onRegister: (token) =>
            token = token
					});
				}
			
		})();
	}, []);

  const onRegister = (token) => {
    setNotification({
      registerToken: token.token, fcmRegistered: true
    });
  }

  const onNotif = (notif) => {
    Alert.alert(notif.title, notif.message);
  }

  const handlePerm = (perms) => {
    Alert.alert('Permissions', JSON.stringify(perms));
  }
  return (
    <View style={styles.container}>

      <View style={styles.spacer}></View>
      <View style={styles.spacer}></View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          this.notif.localNotif();
        }}>
        <Text>Local Notification (now)</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          this.notif.localNotif('sample.mp3');
        }}>
        <Text>Local Notification with sound (now)</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          this.notif.scheduleNotif();
        }}>
        <Text>Schedule Notification in 30s</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          this.notif.scheduleNotif('sample.mp3');
        }}>
        <Text>Schedule Notification with sound in 30s</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          this.notif.cancelNotif();
        }}>
        <Text>Cancel last notification (if any)</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          this.notif.cancelAll();
        }}>
        <Text>Cancel all notifications</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          this.notif.checkPermission(this.handlePerm.bind(this));
        }}>
        <Text>Check Permission</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          this.notif.requestPermissions();
        }}>
        <Text>Request Permissions</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          this.notif.abandonPermissions();
        }}>
        <Text>Quit Permissions</Text>
      </TouchableOpacity>
      <View style={styles.spacer}></View>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    borderWidth: 1,
    borderColor: '#000000',
    margin: 5,
    padding: 5,
    width: '70%',
    backgroundColor: '#E56767',
    borderRadius: 5,
  },
  textField: {
    borderWidth: 1,
    borderColor: '#AAAAAA',
    margin: 5,
    padding: 5,
    width: '70%',
  },
  spacer: {
    height: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
});

