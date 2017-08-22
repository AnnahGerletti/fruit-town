function getSuppliers(db){
  return db('suppliers')
  .select('*')
}
