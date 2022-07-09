import { useRecoilState } from "recoil";
import { sideBarStatusState } from "../components/recoilStateAtoms/sideBarAtom";

function useSideBar() {
  const [sideBarStatus, setSideBarStatus] = useRecoilState(sideBarStatusState);
  const toggleDrawer = () => setSideBarStatus((prev) => !prev);

  return { sideBarStatus, toggleDrawer };
}

export default useSideBar;
