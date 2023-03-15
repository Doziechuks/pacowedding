import { createSelector } from "reselect";

const selectButton = (state) => state.toggle;

export const selectToggleButton = createSelector(
  [selectButton],
  toggle => toggle.toggleButton
);