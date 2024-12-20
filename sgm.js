const { createApp, createExample } = require('./webpack.config.common.js');

const examples = ['basic-wrapper'];

module.exports = [
    createApp('viewer', 'molstar'),
    createApp('docking-viewer', 'molstar'),
    ...examples.map(createExample)
];
