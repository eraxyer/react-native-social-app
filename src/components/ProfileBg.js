import {View} from 'react-native';
import React, {Component} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Svg, Rect} from 'react-native-svg';

export default class ProfileBg extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Svg
          width={wp('100%')}
          height={hp('60%')}
          viewBox="0 0 375 519"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <Rect
            x="-137.187"
            y="189.578"
            width="472.739"
            height="464.84"
            rx="151.5"
            transform="rotate(-45 -137.187 189.578)"
            stroke="#EEF2E2"
          />
          <Rect
            x="-137.187"
            y="144.984"
            width="472.739"
            height="464.84"
            rx="151.5"
            transform="rotate(-45 -137.187 144.984)"
            stroke="#EEF2E2"
          />
          <Rect
            x="-137.894"
            y="95.9841"
            width="473.739"
            height="465.84"
            rx="152"
            transform="rotate(-45 -137.894 95.9841)"
            fill="#E1F6F4"
          />
        </Svg>
      </View>
    );
  }
}
const styles = {
  container: {
    position: 'absolute',
    backgroundColor: '#ffff',
    flex: 1,
  },
};
