var unirest = require('unirest');

module.exports = function(app) {
    app.get('/api/recipes', function(req,res){
        unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=3&tags=vegetarian")
        .header("X-RapidAPI-Key", "91768cbd75msh5a9edf5320630f2p1d94a1jsnedb2ec0cf669")
        .end(function (result) {
            console.log("************ROUTES.JS*************", result.status, result.headers, result.body);
            res.json(result.body);
        });
    })
}