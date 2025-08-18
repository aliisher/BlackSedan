import React, { useRef } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  Platform,
  Text,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { WebView } from 'react-native-webview';
import { hp, wp } from './Constant/Responsive';
import Icon from 'react-native-vector-icons/Ionicons';

const LimoBooking = () => {
  const webviewRef = useRef(null);

  const handleBookNow = () => {
    Linking.openURL('https://booking.blacksedans.ca/');
  };

  const handleCall = () => {
    Linking.openURL('tel:+182573555381');
  };

  const handleEmail = () => {
    Linking.openURL('mailto:info@blacksedans.ca');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* 🚖 Website Style Split Header */}
      <View style={styles.header}>
        {/* Left: Logo */}
        <View style={styles.logoContainer}>
          <Image
            source={require('../src/Assets/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        {/* Right: Dispatch & Email */}
        <View style={styles.contactContainer}>
          {/* Dispatch */}
          <TouchableOpacity style={styles.contactRow} onPress={handleCall}>
            <View style={{ alignItems: 'flex-start' }}>
              <Text style={styles.dispatchTitle}>Dispatch Line 24/7</Text>
              <View style={styles.callRow}>
                <Icon name="call" size={wp(4.5)} color="#000" />
                <Text style={styles.dispatchNumber}>+1 825-735-55381</Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* Email */}
          <TouchableOpacity style={styles.contactRow} onPress={handleEmail}>
            <Icon name="mail" size={wp(4.5)} color="#000" />
            <Text style={styles.contactText}>info@blacksedans.ca</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* 🌐 WebView */}
      <WebView
        ref={webviewRef}
        source={{ uri: 'https://booking.blacksedans.ca/' }}
        javaScriptEnabled
        domStorageEnabled
        startInLoadingState
        style={styles.webview}
      />
    </View>
  );
};

export default LimoBooking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // logo left, contact right
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'ios' ? hp(4) : hp(2),
    paddingBottom: hp(1.5),
    paddingRight: wp(4),
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    elevation: 3,
  },
  logoContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: wp(38),
    height: hp(8),
  },
  logo: {
    width: wp(38),
    height: hp(8),
  },
  contactContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  callRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(0.5),
  },
  dispatchTitle: {
    fontSize: wp(4.2),
    fontWeight: '500',
    color: '#000',
    marginRight: wp(1.5),
  },
  dispatchNumber: {
    fontSize: wp(3.2),
    color: '#000',
    marginLeft: wp(1),
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(0.5),
  },
  contactText: {
    fontSize: wp(3.2),
    color: '#000',
    marginLeft: wp(1.5),
  },
  webview: {
    flex: 1,
  },
});
