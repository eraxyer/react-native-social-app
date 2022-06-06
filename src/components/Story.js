import {View, Image, SafeAreaView, FlatList, ScrollView} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Svg, Path} from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';

const DATA = [
  {
    id: '1',
    photo: require('../assets/img/user.jpg'),
  },
  {
    id: '2',
    photo: require('../assets/img/user2.jpeg'),
  },
  {
    id: '3',
    photo: require('../assets/img/user3.jpeg'),
  },
  {
    id: '1',
    photo: require('../assets/img/user.jpg'),
  },
  {
    id: '2',
    photo: require('../assets/img/user2.jpeg'),
  },
  {
    id: '3',
    photo: require('../assets/img/user3.jpeg'),
  },
];

export default function Posts() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.storyView}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <LinearGradient
            colors={['#FFE1E0', '#E1F6F4']}
            style={styles.shareView}>
            <Svg
              width={wp('7%')}
              height={wp('7%')}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <Path
                d="M10.0695 2.68677V17.4683"
                stroke="black"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M2.67877 10.0776H17.4603"
                stroke="black"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </Svg>
          </LinearGradient>
          <FlatList
            horizontal={true}
            data={DATA}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              return (
                <View style={styles.user}>
                  <Image source={item.photo} style={styles.userImage} />
                </View>
              );
            }}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
const styles = {
  container: {
    flex: 1,
  },
  storyView: {
    width: wp('100%'),
    height: hp('15%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  user: {
    width: wp('16%'),
    height: wp('16%'),
    borderRadius: wp('16%'),
    borderStyle: 'solid',
    borderWidth: 3,
    marginHorizontal: 10,
    borderColor: '#25a0b0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userImage: {
    width: wp('15%'),
    height: wp('15%'),
    borderRadius: wp('15%%'),
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
    marginLeft: 20,
  },
};
