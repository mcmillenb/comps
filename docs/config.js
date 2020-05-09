// eslint-disable-next-line @typescript-eslint/no-var-requires
const { name, version } = require('../package.json');

module.exports = {
  styleguideDir: './docs/dist',
  version,
  title: name,
  defaultExample: true,
  usageMode: 'expand',
  require: [
    './src/assets/css/main.scss',
    './docs/style.scss'
  ],
  sections: [
    {
      name: 'UI Components',
      components: 'src/components/[A-Z]*.vue'
    },
    {
      name: 'Themes',
      components: 'src/themes/[A-Z]*Theme.vue'
    }
  ]
};
