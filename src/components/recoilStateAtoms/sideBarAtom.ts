import { atom } from "recoil";

interface sideBarState {
  isOpen: boolean;
}

export const sideBarStatusState = atom({
  key: "sideBarStatusState",
  default: false as sideBarState["isOpen"],
});
