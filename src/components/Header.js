import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Svg, Path} from 'react-native-svg';

export default function Header({navigation, type}) {
  if (type == 1) {
    return (
      <View style={styles.topView}>
        <Text style={styles.sociallyText}>Socially</Text>
        <Svg
          width={wp('5%')}
          height={wp('5%')}
          viewBox="0 0 17 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <Path
            d="M8.29761 19.75C9.39761 19.75 10.2976 18.85 10.2976 17.75H6.29761C6.29761 18.85 7.18761 19.75 8.29761 19.75ZM14.2976 13.75V8.75C14.2976 5.68 12.6576 3.11 9.79761 2.43V1.75C9.79761 0.92 9.12761 0.25 8.29761 0.25C7.46761 0.25 6.79761 0.92 6.79761 1.75V2.43C3.92761 3.11 2.29761 5.67 2.29761 8.75V13.75L0.297607 15.75V16.75H16.2976V15.75L14.2976 13.75Z"
            fill="black"
          />
        </Svg>
      </View>
    );
  } else if (type == 2) {
    return (
      <View>
        <View style={styles.headerBackView}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <Path
                d="M20.3446 8.69984L5.35126 8.69984L12.2381 1.81303L10.4887 0.0759277L0.632751 9.93183L10.4887 19.7877L12.2258 18.0506L5.35126 11.1638L20.3446 11.1638V8.69984Z"
                fill="black"
              />
            </Svg>
          </TouchableOpacity>

          <Svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <Path
              d="M3 12.9319H21"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <Path
              d="M3 6.93188H21"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <Path
              d="M3 18.9319H21"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </Svg>
        </View>
      </View>
    );
  } else if (type == 3) {
    return (
      <View>
        <View style={styles.headerBackView2}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <Path
                d="M20.3446 8.69984L5.35126 8.69984L12.2381 1.81303L10.4887 0.0759277L0.632751 9.93183L10.4887 19.7877L12.2258 18.0506L5.35126 11.1638L20.3446 11.1638V8.69984Z"
                fill="black"
              />
            </Svg>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = {
  headerBackView: {
    width: wp('100%'),
    paddingHorizontal: 30,
    marginVertical: 50,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  topView: {
    width: wp('100%'),
    marginTop: hp('4%'),
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sociallyText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color : '#000'
  },
  headerBackView2: {
    width: wp('100%'),
    paddingHorizontal: 30,
    marginTop: hp('5%'),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
};
