import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const DATA = [
  {
    id: '1',
    name: 'John Doe',
    message: 'hey, i got new memes for you',
    photo: require('../assets/img/user.jpg'),
  },
  {
    id: '2',
    name: 'Selena Joe',
    message: 'Amir said we’d be staying over for a while... but ...',
    photo: require('../assets/img/user2.jpeg'),
  },
  {
    id: '3',
    name: 'Michael Smith',
    message: 'Hey, how’s it goin?',
    photo: require('../assets/img/user3.jpeg'),
  },
];

export default function MessageBox({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={styles.messageBox}
              onPress={() => navigation.navigate('MessageDetail')}>
              <Image
                source={item.photo}
                resizeMode="stretch"
                style={styles.userPp}
              />

              <View style={styles.textView}>
                <Text style={styles.usernameText}>{item.name}</Text>
                <Text style={styles.messageText}>{item.message}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = {
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
};
