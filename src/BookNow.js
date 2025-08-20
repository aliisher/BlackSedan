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
        <Text style={styles.heading}>PRIVATE CHAUFFEUR SERVICE IN CALGARY</Text>
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
    justifyContent: 'center', // center box vertically
    alignItems: 'center', // center box horizontally
  },
  overlayBox: {
    backgroundColor: 'rgba(255,255,255,0.9)', // semi-transparent white
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
  heading: {
    fontSize: wp('5%'),
    fontWeight: '700',
    color: '#000',
    textAlign: 'center',
    marginBottom: hp('3%'),
  },
  bookNowBtn: {
    backgroundColor: '#000',
    paddingVertical: hp('1.8%'),
    paddingHorizontal: wp('12%'),
    borderRadius: wp('3%'),
  },
  bookNowText: {
    color: '#fff',
    fontSize: wp('4.5%'),
    fontWeight: '600',
  },
});
