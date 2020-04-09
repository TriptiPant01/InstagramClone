import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Icons} from '../TabIcons';
import {Colors} from '../../../constant/colors';
const {width} = Dimensions.get('window');

export const CustomTabBar = props => {
  const handleTabNavigation = i => {
    props.goToPage(i);
  };
  return (
    <View style={styles.wrapper}>
      {props.tabs.map((val, i) => (
        <TouchableOpacity
          style={styles.iconwrapper}
          key={i}
          onPress={() => handleTabNavigation(i)}>
          <Icons
            name={val}
            color={
              props.activeTab === i ? Colors.activeColor : Colors.borderColor
            }
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderBottomColor: Colors.borderColor,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconwrapper: {
    marginHorizontal: 10,
    padding: 15,
  },
});
