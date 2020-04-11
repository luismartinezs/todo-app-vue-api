const handleLogin = (db, bcrypt, req, res) => {
  console.log('req:', req.body)
  const { email, password } = req.body
  if (!email || !password) {
    return Promise.reject(Error('Incorrect form submission'))
  }
  return db
    .select('email', 'hash')
    .from('login')
    .where('email', '=', email)
    .then(data => {
      console.log('data: ', data)
      return bcrypt.compare(password, data[0].hash)
    })
    .then(isValid => {
      console.log('isValid: ', isValid)
      if (isValid) {
        return db
          .select('*')
          .from('login')
          .where('email', '=', email)
          .then(user => user[0])
          .catch(() => Promise.reject(Error('Unable to get user')))
      } else {
        return Promise.reject(Error('Wrong credentials!'))
      }
    })
    .catch(() => Promise.reject(Error('Error logging in')))
}

const signinAuthentication = (db, bcrypt) => (req, res) => {
  return handleLogin(db, bcrypt, req, res)
    .then(user => {
      console.log('user: ', user)
      return user.id && user.email
        ? res.json({ success: true, userId: user.id })
        : Promise.reject(Error('Unknown user'))
    })
    .catch(err => {
      console.log('err: ', err)
      res.status(400).json(err.message)
    })
}

// Login with user and password

// Login with jwt

module.exports = {
  handleLogin,
  signinAuthentication
}
