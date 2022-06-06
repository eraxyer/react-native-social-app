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
import {Svg, Path, G, Defs, Rect, ClipPath, Ellipse} from 'react-native-svg';

const DATA = [
  {
    id: '1',
    name: 'John Doe',
    time: '2 hrs ago',
    like: '5.2 K',
    comments: '1.1 K',
    favorite: '362',
    photo: require('../assets/img/user.jpg'),
    post: require('../assets/img/post1.png'),
  },
  {
    id: '2',
    name: 'Selena Joe',
    time: '3 hrs ago',
    like: '8.2 K',
    comments: '1.3 K',
    favorite: '116',
    photo: require('../assets/img/user2.jpeg'),
    post: require('../assets/img/post2.jpeg'),
  },
  {
    id: '3',
    name: 'Michael Smith',
    time: '15 hrs ago',
    like: '18.2 K',
    comments: '21 K',
    favorite: '997',
    photo: require('../assets/img/user3.jpeg'),
    post: require('../assets/img/post3.jpeg'),
  },
];

export default function Posts() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <View style={styles.postView}>
              <Image
                resizeMode="stretch"
                source={item.post}
                style={styles.postImage}
              />

              <View style={styles.headerMain}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image source={item.photo} style={styles.postUserImage} />

                  <View style={styles.postUserTextView}>
                    <Text style={styles.userNameText}>{item.name}</Text>
                    <Text style={styles.timeText}>{item.time}</Text>
                  </View>
                </View>

                <Svg
                  width={wp('5%')}
                  height={wp('5%')}
                  viewBox="0 0 6 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <Ellipse
                    cx="2.93481"
                    cy="2.318"
                    rx="2.11938"
                    ry="2.03699"
                    fill="white"
                  />
                  <Ellipse
                    cx="2.93481"
                    cy="9.49598"
                    rx="2.11938"
                    ry="2.03699"
                    fill="white"
                  />
                  <Ellipse
                    cx="2.93481"
                    cy="16.6741"
                    rx="2.11938"
                    ry="2.03699"
                    fill="white"
                  />
                </Svg>
              </View>

              <View style={styles.footerMain}>
                <TouchableOpacity style={styles.footer}>
                  <Svg
                    width={wp('5%')}
                    height={wp('5%')}
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <G clip-path="url(#clip0_27_678)">
                      <Path
                        d="M12.5723 2.71252C11.2553 2.71252 9.9912 3.3018 9.16616 4.23299C8.34111 3.3018 7.07705 2.71252 5.76 2.71252C3.42868 2.71252 1.59692 4.47307 1.59692 6.71376C1.59692 9.4637 4.17046 11.7044 8.06862 15.1091L9.16616 16.0621L10.2637 15.1018C14.1619 11.7044 16.7354 9.4637 16.7354 6.71376C16.7354 4.47307 14.9036 2.71252 12.5723 2.71252ZM9.24185 14.0251L9.16616 14.0979L9.09046 14.0251C5.48751 10.8896 3.11077 8.81622 3.11077 6.71376C3.11077 5.25876 4.24616 4.16752 5.76 4.16752C6.92566 4.16752 8.06105 4.88774 8.46222 5.88441H9.87766C10.2713 4.88774 11.4067 4.16752 12.5723 4.16752C14.0862 4.16752 15.2215 5.25876 15.2215 6.71376C15.2215 8.81622 12.8448 10.8896 9.24185 14.0251Z"
                        fill="white"
                      />
                    </G>
                    <Defs>
                      <ClipPath id="clip0_27_678">
                        <Rect
                          width="18.1662"
                          height="17.4599"
                          fill="white"
                          transform="translate(0.0830688 0.530029)"
                        />
                      </ClipPath>
                    </Defs>
                  </Svg>

                  <Text style={styles.footerText}>{item.like}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footer}>
                  <Svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <Path
                      d="M14.7323 10.1967C14.7323 10.5798 14.5801 10.9472 14.3092 11.2181C14.0383 11.489 13.6709 11.6411 13.2879 11.6411H4.62119L1.7323 14.53V2.97447C1.7323 2.59138 1.88448 2.22398 2.15537 1.9531C2.42625 1.68221 2.79365 1.53003 3.17674 1.53003H13.2879C13.6709 1.53003 14.0383 1.68221 14.3092 1.9531C14.5801 2.22398 14.7323 2.59138 14.7323 2.97447V10.1967Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </Svg>

                  <Text style={styles.footerText}>{item.comments}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footer}>
                  <Svg
                    width="11"
                    height="15"
                    viewBox="0 0 11 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <Path
                      d="M5.0738 9.87242L1.7323 12.7962V1.25C1.7323 1.11166 1.84396 1 1.9823 1H9.4823C9.62064 1 9.7323 1.11166 9.7323 1.25V12.7962L6.3908 9.87242L5.7323 9.29623L5.0738 9.87242Z"
                      stroke="white"
                      stroke-width="2"
                    />
                  </Svg>

                  <Text style={styles.footerText}>{item.favorite}</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}
const styles = {
  postView: {
    alignItems: 'center',
  },
  postImage: {
    width: wp('95%'),
    height: hp('30%'),
    borderRadius: wp('6%'),
    marginVertical: wp('4%'),
  },
  footerMain: {
    width: wp('90%'),
    flexDirection: 'row',
    position: 'absolute',
    height: hp('30%'),
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
  },
  footer: {
    width: wp('23'),
    height: hp('4%'),
    borderRadius: 35,
    backgroundColor: 'rgba(229, 229, 229, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  footerText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#fff',
    marginLeft: 5,
  },
  headerMain: {
    width: wp('95%'),
    height: hp('12%'),
    flexDirection: 'row',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    margin: 10,
  },
  postUserImage: {
    width: wp('14%'),
    height: wp('14%'),
    borderRadius: wp('14%%'),
  },
  postUserTextView: {
    marginLeft: 10,
  },
  userNameText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#fff',
  },
  timeText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#d8d8d8',
  },
};
