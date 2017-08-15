const getMeat = (db) => {
  return db('meats')
  .select('*')
}

module.exports = {
  getMeat
}
