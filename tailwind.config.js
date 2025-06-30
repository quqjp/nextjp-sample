import componentConfig from '@zenkigen-inc/component-config';

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/@zenkigen-inc/**/*.{js,ts,tsx}',
  ],
  presets: [
    componentConfig
  ],
}