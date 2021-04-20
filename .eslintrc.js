module.exports = {
    "env": {
        "browser": true,
		"es6": true,
		"mocha": true,
		"jest": true
    },
    "extends": [
        "airbnb-base",
        "plugin:react/recommended",
		"plugin:react-hooks/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "babel-eslint", 
    "parserOptions": {        
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2020,
        "sourceType": "module"        
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "prefer-const": "error",
        "quotes": [2,"double", "avoid-escape"],
        "indent": ["error", "tab"],
        "no-tabs": ["error", { allowIndentationTabs: true }],        
        "no-trailing-spaces": ["error", { "skipBlankLines": true, "ignoreComments": true }],
        "linebreak-style": 0,
        "import/no-unresolved": 0,
        "comma-dangle": ["error", {
            "arrays": "never",
            "objects": "never",
            "imports": "never",
            "exports": "never",
            "functions": "never"
		}],
		"no-console": 0,
		"import/prefer-default-export": 0,
		"array-callback-return": 0,
		"consistent-return": 0,
		"import/order": 0,
		"import/extensions": 0,
		"max-len": ["error", { 
			"code": 120, 
			"comments": 80, 
			"ignoreUrls": true,
			"ignoreStrings": true,
			"ignoreTemplateLiterals": true
		}],
		"arrow-body-style": 0,
		"no-restricted-globals": 0
    }
};
