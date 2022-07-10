import { selector } from "recoil";
import { items } from "./atoms";
import { filterItemsValue } from "./atoms";

export const filterItems = selector({
  key: "filterItems",
  get: ({ get }) => {
    const itemsState = get(items);
    const filterItemsValueState = get(filterItemsValue);

    return items;
  },
});
