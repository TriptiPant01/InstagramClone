import React from 'react';
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';

import Images from '../../Images';
import {Divider} from '../../commons';
import {ActivityData} from '../../DummyData';

const ActivitList = ({name, icon}) => {
  return (
    <View>
      <View style={styles.mainListWrapper}>
        <View style={styles.activitiesContainer}>
          <View style={styles.ImageContainer}>
            <Image source={icon} style={styles.imageStyle} />
          </View>
          <Text style={styles.activitiesNameStyle}>{name} </Text>
          <Text style={styles.likesTextStyle}>likes your video</Text>
        </View>
        <View>
          <Image source={Images.profilePicture} style={styles.ProfileStyle} />
        </View>
      </View>
      <Divider />
    </View>
  );
};
export const Activity = () => {
  return (
    <ScrollView contentContainerStyle={styles.wrapper}>
      <View style={styles.textContainer}>
        <Text style={styles.titleTextStyle}>Activity</Text>
      </View>
      <View style={styles.listContainer}>
        {ActivityData.map(i => (
          <ActivitList name={i.name} icon={i.icon} key={i.id} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
  },
  titleTextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textContainer: {
    alignItems: 'center',
  },
  listContainer: {
    paddingHorizontal: 10,
    marginVertical: 20,
  },
  activitiesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  activitiesNameStyle: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  imageStyle: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  ImageContainer: {
    height: 50,
    width: 50,
    borderRadius: 25,
    overflow: 'hidden',
    marginRight: 15,
  },
  mainListWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ProfileStyle: {
    height: 45,
    width: 45,
  },
  likesTextStyle: {
    fontSize: 16,
  },
});
//
