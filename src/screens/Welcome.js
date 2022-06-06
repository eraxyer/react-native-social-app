import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {SvgUri} from 'react-native-svg';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Swiper from 'react-native-swiper';
import LandingBg from '../components/LandingBg';

export default function Welcome({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <LandingBg />

      <View style={styles.textView}>
        <Text style={styles.welcomeText}>Welcome to</Text>
        <Text style={styles.titleText}>Socially</Text>
      </View>

      <View style={{height: hp('40%')}}>
        <Swiper
          autoplay
          showsButtons={false}
          dotStyle={{
            backgroundColor: 'transparent',
            borderColor: '#000',
            borderWidth: 1,
            width: 11.33,
            height: 11.33,
            borderRadius: 6,
          }}
          activeDotStyle={{
            borderWidth: 1,
            width: 11.33,
            height: 11.33,
            borderRadius: 6,
          }}
          activeDotColor="#000">
          <SvgUri width="100%" uri="https://svgshare.com/i/i0a.svg" />
          <SvgUri width="100%" uri="https://svgshare.com/i/i0a.svg" />
          <SvgUri width="100%" uri="https://svgshare.com/i/i0a.svg" />
        </Swiper>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('Feed')}
        style={styles.firstView}>
        <View style={styles.secondView}>
          <Text style={styles.nextText}>Next</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = {
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    flex: 1,
  },
  textView: {
    marginVertical: hp('9%'),
  },
  welcomeText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    color: '#4e4e4e',
    textAlign: 'center',
  },
  titleText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 39,
    color: '#000',
  },
  firstView: {
    width: wp('60%'),
    height: wp('60%'),
    backgroundColor: '#fff',
    borderRadius: 70,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{rotate: '-45deg'}],
    position: 'absolute',
    bottom: -wp('10%'),
    right: -wp('10%'),
  },
  secondView: {
    width: wp('55%'),
    height: wp('55%'),
    backgroundColor: '#000',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 23,
    color: '#ffff',
    transform: [{rotate: '45deg'}],
  },
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
};
