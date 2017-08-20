
const getFruits = (db) => {
  return db('fruits')
    // .select('*')
    .select('fruits.*', 'suppliers.name as supplier_name')
    .join('suppliers', 'fruits.supplier_id', 'suppliers.id')//one to many
}

function getSupplierFruits(db) {
  return db('fruits')
    .select('fruits.*', 'suppliers.name as supplier_name')
    .join('suppliers', 'fruits.supplier_id', 'suppliers.id')//one to many
}

function addFruit(fruit, db) {
return db('fruits')
.insert(fruit)
}


module.exports = {
  getFruits,
  getSupplierFruits,
  addFruit
}

//adding the .join to the getFruits will get supplier names to render on the page.
