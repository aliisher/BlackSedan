import React from 'react';
import {
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
      source={{ uri: 'https://blacksedans.ca/public/header/images/about.webp' }}
      style={styles.bgImage}
      resizeMode="cover"
    >
      <StatusBar barStyle="dark-content" />

      {/* Overlay Box */}
      <View style={styles.overlayBox}>
        {/* App Name */}
        <Text style={styles.appName}>BlackSedan</Text>

        {/* Subheading */}
        <Text style={styles.subHeading}>PRIVATE CHAUFFEUR SERVICE</Text>

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
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayBox: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    paddingVertical: hp('5%'),
    paddingHorizontal: wp('6%'),
    borderRadius: wp('2%'),
    alignItems: 'center',
    width: '90%',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
  appName: {
    fontSize: wp('7%'), // bigger text
    fontFamily: 'Lato-Black',
    color: '#000',
    textAlign: 'center',
    marginBottom: hp('1.5%'),
  },
  subHeading: {
    fontSize: wp('5%'), // smaller than appName
    fontFamily: 'Lato-Medium',
    color: '#333',
    textAlign: 'center',
    marginBottom: hp('4%'),
  },
  bookNowBtn: {
    backgroundColor: '#000',
    paddingVertical: hp('1.8%'),
    paddingHorizontal: wp('12%'),
    borderRadius: wp('2%'),
  },
  bookNowText: {
    color: '#fff',
    fontSize: wp('4.5%'),
    fontFamily: 'Lato-Black',
  },
});
