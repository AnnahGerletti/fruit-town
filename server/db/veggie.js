const getVeggies = (db) => {
  return db('veggies')
  // .select('*')
  .select('veggies.*', 'suppliers.name as supplier_name')
  .join('suppliers', 'veggies.supplier_id', 'suppliers.id')
}

function getSupplierVeggies(db){
  return db('veggies')
    .select('veggies.*', 'suppliers.name as supplier_name')
    .join('suppliers', 'veggies.supplier_id', 'suppliers.id')
}

module.exports = {
  getVeggies,
  getSupplierVeggies
}
