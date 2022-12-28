import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Dang Van Sang',
    email: 'Sang@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Mây',
    email: 'May@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Arika',
    email: 'Arika@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
