import {View} from 'react-native';
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
        viewBox="0 0 215 690"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Rect
          x="-599"
          y="357.321"
          width="680.738"
          height="469.7"
          rx="152"
          transform="rotate(-45 -599 357.321)"
          fill="#E1F6F4"
        />
        <Rect
          x="-569.439"
          y="244.623"
          width="503.341"
          height="564.859"
          rx="151.5"
          transform="rotate(-45 -569.439 244.623)"
          stroke="white"
        />
        <Rect
          x="-570.185"
          y="258.746"
          width="452.603"
          height="536.401"
          rx="151.5"
          transform="rotate(-45 -570.185 258.746)"
          stroke="white"
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
