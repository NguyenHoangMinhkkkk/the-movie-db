import { DEFAULT } from '@constants';
import { SImage, Spacing, SText } from '@elements';
import { colors, metrics } from '@themes';
import { TCreditCastPerson } from '@types';
import { buildImageUrl } from '@utils';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

type Props = {
  casts: TCreditCastPerson[];
};

export default function MovieCasts({ casts }: Props) {
  const convertedArray = casts.map(cast => ({
    name: cast?.name || '',
    character: cast?.character || '',
    avatar: cast?.profile_path || '',
  }));

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <SText.Semibold size="xl">Top Billed Cast</SText.Semibold>
      </View>
      <Spacing space={metrics.spacing.x4} />
      <FlatList
        horizontal
        pagingEnabled
        snapToInterval={ITEM_WIDTH + metrics.spacing.x4}
        data={convertedArray}
        keyExtractor={(_, index) => `movie-cast-fact-${index}`}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: metrics.spacing.x4,
          paddingHorizontal: metrics.spacing.x6,
        }}
        renderItem={({ item }) => (
          <View style={styles.castItem}>
            <SImage
              source={{
                uri: buildImageUrl(DEFAULT.mediaUrl, 'w185', item.avatar),
              }}
              style={styles.posterImage}
              resizeMode="cover"
            />
            <View style={styles.castName}>
              <SText.Black size="md" lineHeight="less" numberOfLines={2}>
                {item.name}
              </SText.Black>
              <SText.Regular size="sm" lineHeight="less" numberOfLines={2}>
                {item.character}
              </SText.Regular>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const ITEM_WIDTH = 140;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingVertical: metrics.spacing.x6,
  },
  posterImage: { width: ITEM_WIDTH, height: 154 },
  castItem: {
    width: ITEM_WIDTH,
    gap: metrics.spacing.x1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderWidth: metrics.lineWidth,
    borderRadius: metrics.radius.x2,
    overflow: 'hidden',
    borderColor: colors.gray.x3(),
  },
  castName: {
    padding: metrics.spacing.x2,
  },
  title: {
    paddingHorizontal: metrics.spacing.x6,
  },
});
