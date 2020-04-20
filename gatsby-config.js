module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: "https://www.notion.so/younotion/174a275e5c6a48429e5eeba61aee6b0d?v=cdc0d7d4fdb84f11b07c4446e38b6d2e"
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
            options: {
                configTable: "https://www.notion.so/younotion/c83cfdb141ce4a2395f06ed8662da428?v=83fe0ffd997e4b028182f0dbcf0f23a1"
            }
        }
    ],
}
