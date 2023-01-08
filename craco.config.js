// [craco](https://github.com/gsoft-inc/craco)
const path = require("path");

module.exports = {
	reactScriptBersion: "react-scripts",
	webpack: {
		alias: {
			"@components": path.resolve(__dirname, "src/components/"),
			"@pages": path.resolve(__dirname, "src/pages"),
			"@stores": path.resolve(__dirname, "src/stores"),
			"@assets": path.resolve(__dirname, "src/assets"),
		},
	},
};
