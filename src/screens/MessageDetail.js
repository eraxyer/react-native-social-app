import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Svg, Path} from 'react-native-svg';
import Header from '../components/Header';

export default function MessageDetail({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Header type={3} navigation={navigation} />
        <View style={styles.messageBox}>
          <Image
            source={require('../assets/img/user.jpg')}
            resizeMode="contain"
            style={styles.userPp}
          />

          <View style={styles.textView}>
            <Text style={styles.usernameText}>Charlie Chaplin</Text>
            <Text style={styles.messageText}>Online</Text>
          </View>
        </View>
      </View>

      <View style={styles.writeMessage}>
        <TextInput
          placeholder="Write a message..."
          placeholderTextColor={'#c4c4c4'}
          style={styles.textInputStyle}
        />
        <TouchableOpacity style={styles.sendMessage}>
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
    </View>
  );
}
const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  headerView: {
    width: wp('95%'),
    height: hp('30%'),
    marginTop: hp('1%'),
    backgroundColor: '#E1F6F4',
    alignItems: 'center',
    borderRadius: 30,
  },
  messageBox: {
    width: wp('95%'),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: hp('5%'),
  },
  userPp: {
    width: wp('20%'),
    height: wp('20%'),
    borderRadius: wp('20%'),
    borderWidth: 1,
  },
  textView: {
    marginLeft: 15,
  },
  usernameText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 22,
    color: '#000000',
  },
  messageText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#656565',
    marginTop: 10,
  },
  writeMessage: {
    width: wp('85%'),
    height: hp('9%'),
    borderRadius: 40,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 2,
    position: 'absolute',
    bottom: hp('7%'),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  sendMessage: {
    width: wp('14%'),
    height: wp('14%'),
    borderRadius: wp('5.5%'),
    backgroundColor: '#000',
    transform: [{rotate: '45deg'}],
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputStyle: {
    width: wp('60%'),
  },
};
