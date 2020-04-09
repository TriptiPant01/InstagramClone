import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';

import {ImageList} from '../../../DummyData';

const {width, height} = Dimensions.get('window');
const GridViewContainer = ({icon, count}) => {
  console.log(count / 2);
  return (
    <View style={styles.ImageContainer}>
      <Image
        source={{uri: icon}}
        style={[styles.ImageStyle, count % 2 == 0 && {marginRight: 4}]}
        resizeMethod="scale"
      />
    </View>
  );
};

export const GridView = () => {
  return (
    <FlatList
      data={ImageList}
      horizontal={false}
      numColumns={3}
      renderItem={({item}) => (
        <GridViewContainer icon={item.Icon} count={item.id} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  ImageContainer: {
    marginBottom: 4,
  },
  ImageStyle: {
    // height: 150,
    width: width / 3,
    aspectRatio: 1,
  },
});
