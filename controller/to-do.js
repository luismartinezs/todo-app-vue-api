const getToDos = (req, res, db) => {
  db.select('*')
    .from('todo')
    .then(todos => {
      res.json(todos)
    })
    .catch(() => res.status(400).json('error getting to dos'))
}

const createToDo = (req, res, db) => {
  const { title, done, description = '' } = req.body
  db('todo')
    .insert({ title, description, done })
    .then(resp => {
      if (resp) {
        res.json('success')
      } else {
        res.status(400).json('Unable to create to-do')
      }
    })
    .catch(() => res.status(400).json('Error creating to-do'))
}

const updateToDo = (req, res, db) => {
  const { title, done, description = '' } = req.body
  const { id } = req.params
  db('todo')
    .where({ id })
    .update({ title, description, done })
    .then(resp => {
      if (resp) {
        res.json('success')
      } else {
        res.status(400).json('Unable to update to-do')
      }
    }).catch(() => res.status(400).json('Error updating to-do'))
}

const deleteToDo = (req, res, db) => {
  const { id } = req.params
  db('todo')
    .where({ id })
    .del()
    .then(resp => {
      if (resp) {
        res.json('success')
      } else {
        res.status(400).json('Unable to delete to-do')
      }
    }).catch(() => res.status(400).json('Error deleting to-do'))
}

module.exports = {
  getToDos,
  createToDo,
  updateToDo,
  deleteToDo
}
