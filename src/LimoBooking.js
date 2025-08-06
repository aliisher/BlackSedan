import React, {useRef } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { WebView } from 'react-native-webview';

const LimoBooking = () => {
  const webviewRef = useRef(null);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <WebView
          ref={webviewRef}
          source={{ uri: 'https://blacksedans.ca/booknow' }}
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
  },
  webview: {
    flex: 1,
  },
});
