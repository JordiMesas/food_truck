const path = require('path');

module.exports = {
	entry: {
		slider: path.resolve(__dirname, 'src/js/slider.js'),
		hamburguer: path.resolve(__dirname, 'src/js/hamburguer.js'),
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].min.js',
	},
};
