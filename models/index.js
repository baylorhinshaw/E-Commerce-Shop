// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id'
});

// Hint: Make sure you set up foreign key relationships that match the column we created in the respective models.
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {model: ProductTag, unique: false, sourceKey: 'product_id', targetKey: 'tag_id'}
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {model: ProductTag, unique: false, sourceKey: 'tag_id', targetKey: 'product_id'}
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
