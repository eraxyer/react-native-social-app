import {Text, View, Image, ScrollView} from 'react-native';
import React, {Component} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Svg, Path} from 'react-native-svg';
import ProfileBg from '../components/ProfileBg';
import Header from '../components/Header';

export default function Profile({navigation}) {
  return (
    <View style={styles.container}>
      <ProfileBg />
      <ScrollView>
        <Header type={2} navigation={navigation} />

        <View style={{alignItems: 'center'}}>
          <View style={styles.ppView}>
            <Image
              resizeMode="contain"
              source={require('../assets/img/user.jpg')}
              style={styles.ppImage}
            />
          </View>

          <View style={styles.nameView}>
            <Text style={styles.nameText}>John Doe</Text>
            <Text style={styles.usernameText}>@johndoe</Text>
          </View>

          <View style={styles.profileDetailView}>
            <View style={styles.detailView}>
              <Text style={styles.titleText}>Posts</Text>
              <Text style={styles.numberText}>35</Text>
            </View>

            <View style={styles.detailView}>
              <Text style={styles.titleText}>Followers</Text>
              <Text style={styles.numberText}>35</Text>
            </View>

            <View style={styles.detailView}>
              <Text style={styles.titleText}>Follow</Text>
              <Text style={styles.numberText}>35</Text>
            </View>
          </View>

          <View style={styles.menuView}>
            <Svg
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <Path
                d="M22.9726 1.24536H3.74657C2.22968 1.24536 1 2.47504 1 3.99193V23.2179C1 24.7348 2.22968 25.9645 3.74657 25.9645H22.9726C24.4895 25.9645 25.7192 24.7348 25.7192 23.2179V3.99193C25.7192 2.47504 24.4895 1.24536 22.9726 1.24536Z"
                stroke="#424242"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M8.55306 10.8584C9.69073 10.8584 10.613 9.93612 10.613 8.79845C10.613 7.66079 9.69073 6.73853 8.55306 6.73853C7.4154 6.73853 6.49313 7.66079 6.49313 8.79845C6.49313 9.93612 7.4154 10.8584 8.55306 10.8584Z"
                stroke="#424242"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M25.7192 17.7248L18.8527 10.8584L3.74658 25.9645"
                stroke="#424242"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </Svg>

            <Svg
              width="20"
              height="26"
              viewBox="0 0 20 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <Path
                d="M9.39576 17.6199L1 23.9867V2.16667C1 1.65142 1.5319 1 2.5 1H17.5C18.4681 1 19 1.65142 19 2.16667V23.9867L10.6042 17.6199L10 17.1616L9.39576 17.6199Z"
                stroke="#424242"
                stroke-width="2"
              />
            </Svg>
          </View>

          <View style={styles.postView}>
            <Image
              source={require('../assets/img/post2.png')}
              resizeMode="stretch"
              style={styles.postImage}
            />

            <View>
              <Image
                source={require('../assets/img/post3.png')}
                resizeMode="stretch"
                style={styles.postImage2}
              />

              <Image
                source={require('../assets/img/post3.png')}
                resizeMode="stretch"
                style={[styles.postImage2, (style = {marginTop: 10})]}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  headerBackView: {
    width: wp('100%'),
    paddingHorizontal: 30,
    marginVertical: 50,
    justifyContent: 'flex-start',
  },
  ppView: {
    width: wp('30%'),
    height: wp('30%'),
    borderWidth: 2,
    borderRadius: wp('10%'),
    transform: [{rotate: '-45deg'}],
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ppImage: {
    width: wp('33%'),
    height: wp('33%'),
    transform: [{rotate: '45deg'}],
  },
  nameView: {
    marginVertical: 28,
  },
  nameText: {
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    fontSize: 25,
    color: '#000000',
  },
  usernameText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    textAlign: 'center',
    color: '#4e4e4e',
  },
  profileDetailView: {
    width: wp('85%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  detailView: {
    alignItems: 'center',
    width: wp('28%'),
  },
  titleText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    color: '#656565',
  },
  numberText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 27,
    color: '#000000',
  },
  menuView: {
    width: wp('45%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  postView: {
    width: wp('95%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  postImage: {
    width: wp('50%'),
    height: hp('35%'),
  },
  postImage2: {
    width: wp('43%'),
    height: hp('20%'),
  },
};
