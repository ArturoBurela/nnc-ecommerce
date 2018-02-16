module.exports = {
  extend: 'apostrophe-pieces',
  name: 'ncc-category',
  label: 'Product Category',
  pluralLabel: 'Product Categories',
  addFields: [
    {
      name: 'title',
      label: 'Name',
      type: 'string',
      required: true
    }
  ],
  construct: function(self, options) {
  }
};