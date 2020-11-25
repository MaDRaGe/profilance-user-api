

export const userDatabase = [
  {
    username: 'user',
    password: 'user1234'
  },
  {
    username: 'admin',
    password: 'admin1234'
  }
]

export function loginUser(userLoginInfo) {
  const user = userDatabase.filter((user) => {
    return user.username === userLoginInfo.username 
      && user.password === userLoginInfo.password 
  })

  if (user[0]) {
    return user[0]
  } else {
    throw Error()
  }
}