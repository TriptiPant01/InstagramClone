import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

import {ImageList} from '../../../DummyData';
import Images from '../../../Images';

const {width, height} = Dimensions.get('window');

const ListViewContainer = ({icon}) => {
  return (
    <View style={styles.ListContainer}>
      <View style={styles.listTopContainer}>
        <View style={styles.listTopLeftContainer}>
          <Image source={Images.profilePicture} style={styles.topimageStyle} />
          <Text style={styles.topTextStyle}>pant.tripti</Text>
        </View>
        <Icons name="dots-horizontal" size={25} />
      </View>
      <Image source={{uri: icon}} style={styles.imageStyle} />
    </View>
  );
};

export const ListView = () => {
  return (
    <FlatList
      data={ImageList}
      renderItem={({item}) => <ListViewContainer icon={item.Icon} />}
    />
  );
};

const styles = StyleSheet.create({
  topTextStyle: {
    fontWeight: 'bold',
    fontSize: 17,
  },

  wrapper: {
    flex: 1,
    backgroundColor: 'white',
  },
  ListContainer: {
    marginVertical: 20,
  },
  imageStyle: {
    width: '100%',
    aspectRatio: 1,
  },
  listTopContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginBottom: 20,
    alignItems: 'center',
  },
  listTopLeftContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width / 2.8,
  },
  topimageStyle: {
    height: 40,
    width: 40,
    borderRadius: 20,
    resizeMode: 'contain',
  },
});
