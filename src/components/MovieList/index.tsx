import { basicStyles, metrics } from '@themes';
import { TMovie } from '@types';
import React from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import MovieListItem from '../MovieListItem';
import { Spacing } from '@elements';
import { Button } from '@components';
import ListEmpty from '../ListEmpty';

type Props = {
  isSearching: boolean;
  movieList: TMovie[];
  isReady: boolean;
  isFetching: boolean;
  isRefreshing: boolean;
  isError: boolean;
  canLoadmore: boolean;
  allowRemove?: boolean;
  onRefresh?: () => void;
  onLoadmore?: () => void;
  onPressItem?: (movie: TMovie) => void;
  onRemove?: (movieId: number) => void;
};

export default function MovieList(props: Props) {
  const renderItem = ({ item }: { item: TMovie }) => {
    return (
      <MovieListItem
        movie={item}
        onPress={() => props.onPressItem?.(item)}
        allowRemove={props.allowRemove}
        onRemove={() => props.onRemove?.(item.id)}
      />
    );
  };

  const listFooterComponent = () => {
    if (props.movieList.length === 0) {
      return <Spacing space={metrics.spacing.x10} />;
    }
    if (props.canLoadmore) {
      return (
        <View>
          <Spacing space={metrics.spacing.x4} />
          <Button
            isLoading={props.isFetching}
            variant="radius-nomal"
            onPress={() => props.onLoadmore?.()}
            text="Load More"
          />
        </View>
      );
    }
  };

  const listEmptyComponent = () => {
    if (props.isFetching) {
      return (
        <View
          style={[basicStyles.flexCenter, { paddingTop: metrics.spacing.x10 }]}
        >
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View
        style={[basicStyles.flexCenter, { paddingTop: metrics.spacing.x10 }]}
      >
        <ListEmpty
          isEmptySearch={props.isSearching}
          isEmpty={props.movieList.length === 0}
          isError={props.isError}
        />
      </View>
    );
  };

  if (!props.isReady) {
    return (
      <View style={basicStyles.flexCenter}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={basicStyles.flex}
        keyExtractor={({ id }) => String(id)}
        windowSize={14}
        maxToRenderPerBatch={5}
        initialNumToRender={5}
        contentContainerStyle={{ padding: metrics.spacing.x6 }}
        data={props.movieList}
        renderItem={renderItem}
        refreshing={props.isRefreshing}
        onRefresh={() => props.onRefresh?.()}
        ItemSeparatorComponent={<Spacing space={metrics.spacing.x5} />}
        ListEmptyComponent={listEmptyComponent}
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="always"
        ListFooterComponent={listFooterComponent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
