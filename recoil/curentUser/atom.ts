import { atom } from "recoil";

const currentUserAtom = atom({
    key: "currentUser",

    default: {
        user: localStorage.getItem("user"),
        accessToken: localStorage.getItem("access_token"),
    },
});

export default currentUserAtom;
