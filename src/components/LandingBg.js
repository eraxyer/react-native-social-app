import {View, Text} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Svg, Rect} from 'react-native-svg';

export default function LandingBg() {
  return (
    <View style={styles.container}>
      <Svg
        width={wp('100%')}
        height={hp('100%')}
        viewBox="0 0 375 759"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Rect
          x="-490.236"
          y="330.943"
          width="792.293"
          height="604.263"
          rx="154.5"
          transform="rotate(-45 -490.236 330.943)"
          stroke="#EEF2E2"
        />
        <Rect
          x="-399.854"
          y="357.321"
          width="680.738"
          height="469.7"
          rx="152"
          transform="rotate(-45 -399.854 357.321)"
          fill="#E1F6F4"
        />
      </Svg>
    </View>
  );
}

const styles = {
  container: {
    position: 'absolute',
    backgroundColor: '#ffff',
    width: wp('100%'),
    height: hp('100%'),
  },
};
