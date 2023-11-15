import type {NumOrNull, StrOrNull} from "@/types/GeneralTypes";

type Role = 'user' | 'admin' | null
type UserStateType = Omit<UserResponseData, "updated_at", "created_at", "email_verified_at">
type UserResponseData = {
    id: NumOrNull
    login: StrOrNull,
    email: StrOrNull,
    first_name: StrOrNull,
    last_name: StrOrNull,
    profile_pic: StrOrNull,
    role: Role,
    email_verified_at: StrOrNull,
    created_at: StrOrNull,
    updated_at: StrOrNull,
    token: StrOrNull
}
type ResponseData<K, T> = {
    status: boolean,
    K: T
    message: string
}
type UsersArray = UserStateType[] | Array

interface UserRequestLogIn {
    email: string,
    password: string
}

type UserRequestSignUp = {
    first_name: string,
    last_name: string,
    email: string,
    login: string,
    password: string,
}
export {UserStateType, ResponseData, UserResponseData, UserRequestLogIn, UserRequestSignUp, UsersArray}