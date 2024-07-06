const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedTags = require('./tag-seeds');
const seedProductTags = require('./product-tag-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('Database synced!');

  await seedCategories();
  console.log('Categories seeded!');

  await seedProducts();
  console.log('Products seeded!');

  await seedTags();
  console.log('Tags seeded!');

  await seedProductTags();
  console.log('Product tags seeded!');

  process.exit(0);
};

seedAll();
