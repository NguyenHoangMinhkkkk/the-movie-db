import { DropdownSelection } from '@components';
import { CategoryEnum } from '@types';
import React from 'react';

type Props = {
  disabled?: boolean;
  selectedCategory: string;
  onSelectCategory: (category: CategoryEnum) => void;
};

type Selection = {
  key: CategoryEnum;
  title: string;
};

const selections: Array<Selection> = [
  {
    key: CategoryEnum.upcoming,
    title: 'Upcoming',
  },
  {
    key: CategoryEnum.now_playing,
    title: 'Now Playing',
  },
  {
    key: CategoryEnum.popular,
    title: 'Popular',
  },
];

export default function MovieCategory(props: Props) {
  return (
    <DropdownSelection
      disabled={props.disabled}
      selections={selections}
      onSelectKey={newKey => props.onSelectCategory(newKey as CategoryEnum)}
      selectedKey={props.selectedCategory}
    />
  );
}
