const handleRegister = (db, bcrypt) => (req, res) => {
  const { email, password } = req.body
  db.select('*')
    .from('login')
    .where({ email })
    .then(user => {
      if (user[0].email) {
        return res.status(400).json('Unable to register')
      } else {
        const saltRounds = 10
        return bcrypt.hash(password, saltRounds, function (err, hash) {
          if (err) {
            throw err
          }
          db('login')
            .insert({ email, hash })
            .then(resp => {
              if (resp) {
                res.json('Success')
              } else {
                res.status(400).json('Unable to register')
              }
            })
            .catch(() => {
              return res.status(400).json('Unable to register')
            })
        })
      }
    })
    .catch(() => {
      res.status(400).json('Unable to register')
    })
}

module.exports = {
  handleRegister
}
