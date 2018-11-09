import React from 'react';
import { View, StyleSheet, StatusBar,Text } from 'react-native';
import DataSearch from './DataSearchView';

const styles = StyleSheet.create({
  headerSpacer: {
    paddingTop: StatusBar.currentHeight,
  },
});

export const Basic = ({ navigation }) => (
  <View style={{ flex: 1 }}>
    <View style={styles.headerSpacer} />
    {/* <DataSearch
      navigate={() =>  navigation.toggleDrawer()
      }
    /> */}
    <Text>this is Basic Screen</Text>
  </View>
);

export const WithIconPosition = ({ navigation }) => (
  <View style={{ flex: 1 }}>
    <View style={styles.headerSpacer} />
    <Text>this is WithIConPosition</Text>
    {/* <DataSearch
      showFilter={false}
      iconPosition="right"
      navigate={() => {
        navigation.toggleDrawer();
      }} */}
    {/* /> */}
  </View>
);
