import {View, Text, ScrollView, StatusBar} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FeedBg from '../components/FeedBg';
import Header from '../components/Header';
import Posts from '../components/Posts';
import Story from '../components/Story';
console.disableYellowBox = true;

export default function Feed({navigation, props}) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <FeedBg />
      <ScrollView>
        <Header type={1} navigation={navigation} />

        <Text style={styles.feedText}>Feed</Text>

        <Story />
        <Posts />
      </ScrollView>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  topView: {
    width: wp('100%'),
    marginTop: hp('4%'),
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  feedText: {
    width: wp('100%'),
    fontFamily: 'Poppins-Bold',
    fontSize: 25,
    paddingLeft: 20,
    paddingTop: 10,
    textAlign: 'left',
    color : '#000'
  },
  storyView: {
    width: wp('100%'),
    height: hp('10%'),
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  user: {
    width: wp('15%'),
    height: wp('15%'),
    borderRadius: wp('15%'),
    borderStyle: 'solid',
    borderWidth: 3,
    borderColor: '#25a0b0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shareView: {
    width: wp('15%'),
    height: wp('15%'),
    borderRadius: wp('15%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowRadius: 25,
    shadowOpacity: 1,
  },
  userImage: {
    width: wp('14%'),
    height: wp('14%'),
    borderRadius: wp('14%%'),
  },
};
