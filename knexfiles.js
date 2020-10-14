module.exports= {
    developement:{
        client: "postgressql",
        connetion:{
            database: process.env.DB_NAME || 'fec',
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            host: process.env.DB_HOSTNAME,
        },
        migrations: {
            directory: __dirname + "/20181029094559_initUsers"
        },
        seeds:{
            directory: __dirname + "/addUsers"
        }
    }
};