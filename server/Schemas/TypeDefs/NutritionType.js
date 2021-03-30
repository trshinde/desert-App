const graphql = require('graphql');
const { GraphQLObjectType, GraphQLFloat, GraphQLInputObjectType } = graphql;

const NutritionType = new GraphQLObjectType({
    name: "Nutrition",
    fields: () => ({
        calories: { type: GraphQLFloat },
        protein: { type: GraphQLFloat },
        carb: { type: GraphQLFloat },
        fat: { type: GraphQLFloat }
    })
});

const NutritionInputType = new GraphQLInputObjectType({
    name: "NutritionInput",
    fields: () => ({
        calories: { type: GraphQLFloat },
        protein: { type: GraphQLFloat },
        carb: { type: GraphQLFloat },
        fat: { type: GraphQLFloat }
    })
});
module.exports = { NutritionType, NutritionInputType };