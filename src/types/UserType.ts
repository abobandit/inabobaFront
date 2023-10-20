import type {NumOrNull, StrOrNull} from "@/types/GeneralTypes";

type Role = 'user' | 'admin' | null
type UserStateType = {
    id: NumOrNull
    login: StrOrNull,
    email: StrOrNull,
    first_name:StrOrNull,
    last_name:StrOrNull,
    img_url:StrOrNull,
    role:Role
}
interface UserRequestUnauthorized{
    email: string,
    password: string
}

export {UserStateType, UserRequestUnauthorized}