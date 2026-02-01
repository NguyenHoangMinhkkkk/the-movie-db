import { DropdownSelection } from '@components';
import { MovieSortEnum } from '@types';
import React from 'react';

type Props = {
  disabled?: boolean;
  selectedSortKey: string;
  onSelectSortKey: (sortKey: MovieSortEnum) => void;
};

type Selection = {
  key: MovieSortEnum;
  title: string;
};

const selections: Array<Selection> = [
  {
    key: MovieSortEnum['title.asc'],
    title: 'By alphabetical order',
  },
  {
    key: MovieSortEnum['vote_average.asc'],
    title: 'By rating',
  },
  {
    key: MovieSortEnum['primary_release_date.asc'],
    title: 'By release date',
  },
];

export default function MovieSort(props: Props) {
  return (
    <DropdownSelection
      disabled={props.disabled}
      selections={selections}
      onSelectKey={newKey => props.onSelectSortKey(newKey as MovieSortEnum)}
      selectedKey={props.selectedSortKey}
      defaultTitle="Sort by"
    />
  );
}
