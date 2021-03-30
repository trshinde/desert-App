const express = require('express');
const expressGraphQL = require('express-graphql').graphqlHTTP;
const schema = require('./Schemas');
const app = express();
const PORT = 5000;
const cors = require('cors');


app.use(cors());
app.use('/graphql',expressGraphQL({
    schema,
    graphiql:true
}));

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}...`)
});
