var profile = {      
    basePath: "./", 
    layerOptimize: "shrinksafe.keepLines", 
    releaseDir: "../release",
    hasReport: true,

    packages:[ 
        { 
            name: "dojo", 
            location: "./dojo"
        }, 
        { 
            name: "dijit", 
            location: "./dijit"
        },
        { 
            name: "mycompany", 
            location: "../scripts/mycompany"
        }
    ], 

    layers: {             
        "mycompany/layers/core": { 
            include: [ 
                "dijit/_Widget",
                "dijit/_Templated"
            ]
        },
        "mycompany/layers/example": { 
            include: [ 
                "mycompany/widgets/Example"
            ],
            exclude: [
                "mycompany/layers/core"
            ]
        }
    }
};