const graphql = require('graphql');
const DesertType = require('./TypeDefs/DesertType');
const { NutritionInputType } = require('./TypeDefs/NutritionType');
const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList, GraphQLSchema } = graphql;

const data = require('../DATA_MOCK');


const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        getAllDeserts: {
            type: new GraphQLList(DesertType),
            args: {
                id: { type: GraphQLInt }
            },
            resolve (parent, args) {
                return data;
            }
        }
    }
});
const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createDesert: {
            type: DesertType,
            args: {
                desert: { type: GraphQLString },
                nutritionInfo: { type: NutritionInputType }
            },
            resolve (parent, args) {
                data.push({
                    id: data.length + 1,
                    desert: args.desert,
                    nutritionInfo: args.nutritionInfo
                });
                return args;
            }
        }
    }
});

// Qeury: recieve the data
// Mutation: update/create statements
module.exports = new GraphQLSchema({
    query: RootQuery, mutation: Mutation
});

