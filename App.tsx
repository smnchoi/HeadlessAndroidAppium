/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {Button, Platform, SafeAreaView, StyleSheet, Text} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const accessibilityId = 'ToggleThemeButton';

function testIdProps(id: string) {
  return Platform.OS === 'ios'
    ? {testID: id}
    : {accessible: true, accessibilityLabel: id};
}

function App(): React.JSX.Element {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const textStyle = {
    color: isDarkMode ? Colors.lighter : Colors.darker,
  };

  return (
    <SafeAreaView style={[styles.root, backgroundStyle]}>
      <Button
        {...testIdProps(accessibilityId)}
        title="Toggle Theme"
        onPress={() => setIsDarkMode(!isDarkMode)}
      />
      <Text
        children={`It's ${isDarkMode ? 'Dark Mode' : 'Light Mode'}`}
        style={textStyle}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 20,
    gap: 10,
  },
});

export default App;
