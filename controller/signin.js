const handleSignin = (db, bcrypt, req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    return Promise.reject(new Error('Incorrect form submission'))
  }
  return db
    .select('email', 'hash')
    .from('user')
    .where('email', '=', email)
    .then(data => {
      const isValid = bcrypt.compareSync(password, data[0].hash)
      if (isValid) {
        return Promise.resolve('Logged in')
      } else {
        Promise.reject(new Error('Wrong credentials'))
      }
    })
    .catch(() => Promise.reject(new Error('Wrong credentials')))
}

module.exports = {
  handleSignin
}
