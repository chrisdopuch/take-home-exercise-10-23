import * as React from "react";
import ListItem from "./ListItem";
import type { ListItem as ListItemType } from "./ListItem";

type Props = {
  items: ListItemType[];
  objectType: string;
};

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
