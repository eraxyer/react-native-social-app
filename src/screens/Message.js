import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {Component} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Svg, Path} from 'react-native-svg';
import MessageBg from '../components/MessageBg';
import Header from '../components/Header';
import MessageBox from '../components/MessageBox';

export default function Message({navigation}) {
  return (
    <View style={styles.container}>
      <MessageBg />
      <ScrollView>
        <Header type={2} navigation={navigation} />

        <Text style={styles.messageTitle}>Messages</Text>

        <View style={styles.centerView}>
          <View style={styles.searchBar}>
            <Svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <Path
                d="M9.85858 17.5964C14.2168 17.5964 17.7499 14.0147 17.7499 9.59644C17.7499 5.17816 14.2168 1.59644 9.85858 1.59644C5.50034 1.59644 1.96729 5.17816 1.96729 9.59644C1.96729 14.0147 5.50034 17.5964 9.85858 17.5964Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M19.7227 19.5963L15.4318 15.2463"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </Svg>

            <TextInput
              placeholder="Search for contacts"
              placeholderTextColor={'#c4c4c4'}
              style={styles.textInputStyle}
            />
          </View>

          <MessageBox navigation={navigation} />
        </View>
      </ScrollView>

      <TouchableOpacity
        style={styles.sendMessage}
        onPress={() => navigation.navigate('MessageDetail')}>
        <Svg
          style={{transform: [{rotate: '-45deg'}]}}
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <Path
            d="M22.837 2.06299L11.837 13.063"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M22.837 2.06299L15.837 22.063L11.837 13.063L2.83704 9.06299L22.837 2.06299Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </Svg>
      </TouchableOpacity>
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
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  messageTitle: {
    width: wp('100%'),
    paddingLeft: 30,
    marginBottom: 20,
    fontFamily: 'Poppins-Bold',
    fontSize: 27,
    textAlign: 'left',
    color: '#000000',
  },
  searchBar: {
    width: wp('75%'),
    height: hp('7%'),
    borderRadius: 15,
    backgroundColor: '#ffffff',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowRadius: 25,
    shadowOpacity: 1,
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInputStyle: {
    marginLeft: 10,
    width: wp('65%'),
  },
  messageBox: {
    width: wp('85%'),
    height: hp('15%'),
    borderRadius: 33,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    alignItems: 'center',
    paddingLeft: 20,
    marginTop: 10,
    flexDirection: 'row',
  },
  textView: {
    marginLeft: 15,
  },
  usernameText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12.8,
    color: '#000000',
  },
  messageText: {
    width: wp('53%'),
    fontFamily: 'Poppins-Regular',
    fontSize: 12.8,
    color: '#656565',
    marginTop: 10,
  },
  userPp: {
    width: wp('20%'),
    height: wp('20%'),
    borderRadius: wp('20%'),
    borderWidth: 1,
  },
  sendMessage: {
    width: wp('17%'),
    height: wp('17%'),
    borderRadius: wp('5.5%'),
    backgroundColor: '#000',
    transform: [{rotate: '45deg'}],
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: hp('2%'),
  },
  centerView: {
    alignItems: 'center',
  },
};
