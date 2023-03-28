import { atom } from "recoil";

const currentUserAtom = atom({
    key: "currentUser",

    default: {
        user: localStorage.getItem("user"),
        accessToken: localStorage.getItem("accessToken"),
    },
});

export default currentUserAtom;
