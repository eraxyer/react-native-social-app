import {View} from 'react-native';
import React, {Component} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Svg, Rect} from 'react-native-svg';

export default function MessageBg() {
  return (
    <View style={styles.container}>
      <Svg
        width={wp('100%')}
        height={hp('100%')}
        viewBox="0 0 375 665"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Rect
          x="-149.293"
          y="272.984"
          width="472.739"
          height="464.84"
          rx="151.5"
          transform="rotate(-45 -149.293 272.984)"
          stroke="#EEF2E2"
        />
        <Rect
          x="-149.293"
          y="331.984"
          width="472.739"
          height="464.84"
          rx="151.5"
          transform="rotate(-45 -149.293 331.984)"
          stroke="#EEF2E2"
        />
        <Rect
          x="-274"
          y="504.494"
          width="649.823"
          height="575.521"
          rx="152"
          transform="rotate(-45 -274 504.494)"
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
    flex: 1,
  },
};
