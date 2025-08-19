import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { hp, wp } from './Constant/Responsive';
import { useNavigation } from '@react-navigation/native';

const BookNow = () => {
  const navigation = useNavigation();

  const handleBookNow = () => {
    navigation.navigate('LimoBooking');
  };

  return (
    <ImageBackground
      source={require('../src/Assets/bmw.png')} // BMW background
      style={styles.bgImage}
      resizeMode="contain"
    >
      <StatusBar barStyle="dark-content" />

      {/* Logo Top */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../src/Assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Button Bottom */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.bookNowBtn} onPress={handleBookNow}>
          <Text style={styles.bookNowText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default BookNow;

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  logoContainer: {
    marginTop: hp('15%'),
    alignItems: 'center',
  },
  logo: {
    width: wp('100%'),
    height: hp('15%'),
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: hp('18%'),
  },
  bookNowBtn: {
    backgroundColor: '#000',
    paddingVertical: hp('1.8%'),
    paddingHorizontal: wp('16%'),
    borderRadius: wp('3%'),
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 5,
  },
  bookNowText: {
    color: '#fff',
    fontSize: wp('4.7%'),
    fontWeight: '700',
    textAlign: 'center',
  },
});
