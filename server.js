const express = require('express');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const categoryRoutes = require('./api/routes/category-routes');
const productRoutes = require('./api/routes/product-routes');
const tagRoutes = require('./api/routes/tag-routes');

app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);
app.use('/api/tags', tagRoutes);

// Syncing sequelize models and starting Express server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  });
});
