import {selector} from 'recoil'
import currentUserAtom from './atom'

const userInfo = selector({
    key : 'user-info',
    get: ({get}) =>  get(currentUserAtom).user
})


export default userInfo