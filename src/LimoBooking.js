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

const LimoBooking = () => {
  const webviewRef = useRef(null);

  const handleFooterPress = () => {
    Linking.openURL('https://www.blacksedans.ca');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* 🚀 Premium Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image
            source={require('../src/Assets/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <View style={styles.centerContainer}>
            <Text style={styles.title}>Limo Booking</Text>
            <Text style={styles.subtitle}>Premium Transportation</Text>
          </View>
          <View style={styles.emptyView} />
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

      {/* 🌍 Informative Footer */}
      <TouchableOpacity style={styles.footer}>
        <Text style={styles.footerText}>
          Book your premium ride directly through this app
        </Text>
        <Text style={styles.footerSubtext}>
          Instant confirmation • 24/7 availability • Luxury vehicles
        </Text>
      </TouchableOpacity>
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
    backgroundColor: '#ffffff',
    paddingTop: Platform.OS === 'ios' ? hp(4) : hp(2),
    paddingBottom: hp(2),
    paddingHorizontal: wp(5),
    borderBottomWidth: 1,
    borderBottomColor: '#e8e8e8',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    zIndex: 10,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    width: wp(25),
    height: hp(5),
  },
  centerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: wp(2),
  },
  emptyView: {
    width: wp(10),
  },
  title: {
    fontSize: wp(5.5),
    fontWeight: '700',
    color: '#1a1a1a',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: wp(3.2),
    fontWeight: '500',
    color: '#666',
    letterSpacing: 0.3,
    marginTop: hp(0.3),
    textAlign: 'center',
  },
  webview: {
    flex: 1,
  },
  footer: {
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(4),
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#e8e8e8',
    backgroundColor: '#f9f9f9',
  },
  footerText: {
    fontSize: wp(3.8),
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    marginBottom: hp(0.5),
  },
  footerSubtext: {
    fontSize: wp(3),
    color: '#666',
    textAlign: 'center',
  },
});
