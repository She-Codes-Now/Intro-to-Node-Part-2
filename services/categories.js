var categoryServiceEndpoint = "http://www.mocky.io/v2/594475f61200000016fcb611";
var request = require('request-promise');

module.exports = {
    
    get: function(category) {
        
        var options = {
            uri: categoryServiceEndpoint,
            headers: {
                'User-Agent': 'Request-Promise'
            },
            json: true
        };

        var servicePromise = new Promise((resolve, reject) => {
            
            request(options).then(function(categories){
                
                var categoryList = {};
                
                if ( typeof categories === "object" ) {
                    
                    if ( category ) {
                        
                        if ( categories[category] ) { 
                            
                            categoryList = categories[category];
                            
                        }
                        
                    }
                    else {
                        categoryList = categories;
                    }
                    
                    resolve(categoryList);
                }
                else {
                    reject(
                        { 
                            error: "No Categories Found"
                        }
                    );
                }
                    
            });
            
        });

        return servicePromise;
    }
	
};
