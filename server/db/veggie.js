const getVeggies = (db) => {
  return db('veggies')
  .select('*')
}

module.exports = {
  getVeggies
}
