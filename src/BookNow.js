import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { hp, wp } from './Constant/Responsive';
import { useNavigation } from '@react-navigation/native';

const BookNow = () => {
  const navigation = useNavigation();
  const handleBookNow = () => {
    console.log('Book Now Pressed');
    navigation.navigate('LimoBooking');
    // yahan ap apna navigation ya API call laga sakte ho
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      <Image
        source={require('../src/Assets/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <TouchableOpacity style={styles.bookNowBtn} onPress={handleBookNow}>
        <Text style={styles.bookNowText}>Book Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BookNow;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', // galti thi, 5 'f' ki jagah 6 kar diye
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: wp('90%'),
    height: hp('30%'),
    marginBottom: hp('5%'),
  },
  bookNowBtn: {
    backgroundColor: '#000000',
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('20%'),
    borderRadius: wp('3%'),
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 3,
  },
  bookNowText: {
    color: '#fff',
    fontSize: wp('5%'),
    fontWeight: '600',
    textAlign: 'center',
  },
});
