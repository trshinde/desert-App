const graphql = require('graphql');
const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLFloat } = graphql;
const { NutritionType } = require('./NutritionType');

const DesertType = new GraphQLObjectType({
    name: "Desert",
    fields: () => ({
        id: { type: GraphQLInt },
        desert: { type: GraphQLString },
        nutritionInfo: { type: NutritionType }
    })
});

module.exports = DesertType;