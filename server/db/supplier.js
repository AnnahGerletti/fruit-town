const getSuppliers = (db) =>{
  return db('suppliers')
  .select('*')
}

module.exports = {
  getSuppliers
}
