export interface IUserInfo {
  name: string,
  email: string,
}

export interface IContextUser {
  user: IUserInfo,
  logoutUser: () => void
}
