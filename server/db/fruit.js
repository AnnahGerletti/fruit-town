
const getFruits = (db) => {
  return db('fruits')
    .select('*')
}

function getSupplierFruits(db, supplier) => {
  return db('fruits')
    .select('fruits.*', 'name as supplier_name')
    .join('supplier', 'fruits.supplier_id', 'supplier.id')
}

module.exports = {
  getFruits
}
