import { selector } from "recoil";
import currentUserAtom from "./atom";

const accessToken = selector({
    key : "access-token",
    get : ({get}) => get(currentUserAtom)
})


export default accessToken