//listen port stuff
//sync db??

if (process.env.NODE_ENV === 'development') {
  require('../secret'); // this will mutate the process.env object with your secrets.
}

// console.log('HIIII')
const { db } = require('./db')
const app = require('./index')
const PORT = process.env.PORT || 3000



db.sync().then(() => {
  console.log('db synced')
  app.listen(PORT, () => console.log(`serving dad jokes on port ${PORT}`))
})
