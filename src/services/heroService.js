app.service("heroService", function () {
    return{
        getAllHeros: function () {

            return[
                {id: 1, name: "rutik roshan", language: "hindi"},
                {id: 1, name: "salman khan", language: "hindi"},
                {id: 1, name: "tiger shroff", language: "hindi"},
                {id: 1, name: "ritesh deshmukh", language: "hindi"}
            ];
        }
    };
});