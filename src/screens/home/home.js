import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {homeData} from '../../DummyData';

import Images from '../../Images';
import {CommonText, ActionsListIcons} from '../../commons';

const HomeListContainer = ({name, icon, bigImage}) => {
  return (
    <View style={{marginVertical: 10}}>
      <View style={styles.HomeListContainerWrapper}>
        <View style={styles.profileContainer}>
          <ImageBackground
            style={styles.imageContainer}
            source={Images.storyCircle}>
            <Image source={icon} style={styles.listImageStyle} />
          </ImageBackground>
          <Text style={styles.texStyle}>{name}</Text>
        </View>
        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <Icons name="dots-horizontal" style={styles.dotStyle} />
        </View>
      </View>
      <View style={styles.bigImageStyleContainer}>
        <Image source={bigImage} style={styles.bigImageStyle} />
      </View>
      <View>
        <ActionsListIcons />
      </View>
    </View>
  );
};

const Home = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.topinnerContainer}>
        <ImageBackground
          style={styles.imageContainer}
          source={Images.storyCircle}>
          <Image source={Images.profilePicture} style={styles.ImageStyle} />
        </ImageBackground>
        <CommonText title="Your Story" />
      </View>
      <ScrollView style={styles.bodyinnerContainer}>
        {homeData.map(data => (
          <HomeListContainer
            key={data.id}
            name={data.userName}
            icon={data.userIcon}
            bigImage={data.displayImage}
          />
        ))}
        {/* <Image source={Images.Pic1} style={styles.bigImageStyle} /> */}
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  topinnerContainer: {
    flexDirection: 'column',
    paddingHorizontal: 10,
    paddingVertical: 15,
    // borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  imageContainer: {
    width: 60,

    height: 60,

    overflow: 'hidden',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 3,
    marginRight: 10,
  },
  ImageStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    borderRadius: 35,
  },
  listImageStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    borderRadius: 35,
  },
  bigImageStyle: {
    width: '100%',
    height: 300,
    // resizeMode: 'contain',
  },
  bodyinnerContainer: {
    marginBottom: 15,
  },
  HomeListContainerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    alignItems: 'center',
  },
  profileContainer: {
    flexDirection: 'row',

    alignItems: 'center',
    flex: 1,
  },
  dotStyle: {
    fontSize: 26,
  },
  bigImageStyleContainer: {
    marginVertical: 10,
  },
  texStyle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
