import * as React from "react";
import ListItem from "./ListItem";
import type { ListItem as ListItemType } from "./ListItem";

type Props = {
  items: ListItemType[];
  objectType: string;
};

/**
 * Generic list component for displaying a list of items.
 * In the future, pagination should be added to this component.
 * Note: this component handles both Service and OnCallEmployee types
 * but in the future we may want to split these into separate components
 **/
const List = ({ items, objectType }: Props) => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>
        <ListItem data={item} objectType={objectType} />
      </li>
    ))}
  </ul>
);

export default List;
