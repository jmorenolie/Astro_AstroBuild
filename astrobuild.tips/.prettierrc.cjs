module.exports = {
    semi: true,
    singleQuote: false,
    tabWidth: 2,
    useTans: true,
    puglins:[
        require("prettier-plugin-astro")
    ],
    overrides: [
        {
            files: "**/*astro",
            option: {
                parser: "astro"
            }
        }
    ]
};
