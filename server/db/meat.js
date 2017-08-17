const getMeat = (db) => {
  return db('meats')
  // .select('*')
  .select('meats.*', 'suppliers.name as supplier_name')
  .join('suppliers', 'meats.supplier_id', 'suppliers.id')
}

function getSupplierMeats(db){
  return db ('meats')
    .select('meats.*', 'suppliers.name as supplier_name')
    .join('suppliers', 'meats.supplier_id', 'suppliers.id')
}

module.exports = {
  getMeat,
  getSupplierMeats
}
