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
  components: 'src/components/[A-Z]*.vue'
};
