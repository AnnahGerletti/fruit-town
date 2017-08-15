
const getFruits = (db) => {
  return db('fruits')
    .select('*')
}

module.exports = {
  getFruits
}
