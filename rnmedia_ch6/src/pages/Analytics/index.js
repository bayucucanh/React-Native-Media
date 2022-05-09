import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useEffect} from 'react';
import analytics from '@react-native-firebase/analytics';

const Analytics = () => {
  const onLogScreenView = async () => {
    try {
      await analytics().logScreenView({
        screen_name: 'Analytics',
        screen_class: 'Analytics',
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    onLogScreenView();
  }, []);

  return (
    <View>
      <Button
        title="Press me"
        // Logs in the firebase analytics console as "select_content" event
        // only accepts the two object properties which accept strings.
        onPress={async () =>
          await analytics().logSelectContent({
            content_type: 'clothing',
            item_id: 'abcd',
          })
        }
      />
    </View>
  );
};

export default Analytics;

const styles = StyleSheet.create({});
