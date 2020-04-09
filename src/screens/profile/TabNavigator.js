import React from 'react';
import {View, Text, StyleSheet, FlatList, ScrollView} from 'react-native';
import ScrollableTabView, {
  DefaultTabBar,
} from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  GridView,
  TaggedView,
  ListView,
  SavedView,
  CustomTabBar,
} from './components';

const TabNavigator = () => {
  return (
    <ScrollableTabView
      //   style={{marginTop: 20}}
      tabBarPosition="top"
      tabBarActiveTextColor="red"
      initialPage={0}
      renderTabBar={() => <CustomTabBar />}>
      <GridView tabLabel="md-grid" />
      <ListView tabLabel="ios-list" />
      <TaggedView tabLabel="ios-bookmark" />

      {/* <SavedView tabLabel="ios-bookmark" /> */}
      {/* <Text tabLabel="Tab #1">My</Text> */}
    </ScrollableTabView>
  );
};

export default TabNavigator;
