var appRouter = function(app){
    app.get("/",function(req,res){
        res.status(200).send("Welcome to Restful API");
    });
};


module.exports = appRouter;