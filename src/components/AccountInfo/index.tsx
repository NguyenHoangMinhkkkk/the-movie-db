import { useAccountContext } from '@contexts';
import { SText } from '@elements';
import { basicStyles, colors, metrics } from '@themes';
import moment from 'moment';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function AccountInfo() {
  const { account } = useAccountContext();

  const firstLetter = account?.username
    ? account.username.charAt(0).toUpperCase()
    : '';
  const username = account?.username || '';

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.avatar}>
          <SText.Regular size="3xl" color={colors.white}>
            {firstLetter}
          </SText.Regular>
        </View>
      </View>

      {/*============== TODO ==============*/}

      <View style={basicStyles.flexJustifyCenter}>
        <SText.Bold color={colors.white}>{username}</SText.Bold>
        <SText.Regular color={colors.white}>{`Member since ${moment().format(
          'MMMM YYYY',
        )}`}</SText.Regular>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: metrics.spacing.x6,
    paddingHorizontal: metrics.spacing.x6,
    backgroundColor: colors.sky.x95(),
    flexDirection: 'row',
    gap: metrics.spacing.x4,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: metrics.radius.max,
    backgroundColor: colors.purple.x5(),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
