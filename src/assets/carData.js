const cars_data = [
    { "_id" : 1, "brand" : "Fiat", "make" : "Doblo", "year" : 2015, "price" : 5700, "km" : 77000,  "imported" : false, 
     "fuel" : "diesel",  "color" : "WH",  },
    
    { "_id" : 2, "brand" : "Fiat", "make" : "Doblo", "year" : 2015, "price" : 7500, "km" : 210000,  "imported" : false, 
     "fuel" : "diesel",  "color" : "WH" },
    
    { "_id" : 3, "brand" :"BMW", "make" : "316", "year" : 2013, "price" : 10800, "km" : 199000,  "imported" : false, 
     "fuel" : "diesel", "color" : "VAR" },
    
    { "_id" : 4, "brand" : "Citroen", "make" : "C3", "year" : 2010, "price" : 3200, "km" : 142000,  "imported" : false, 
     "fuel" : "diesel",  "color" : "WH", },
    
     { "_id" : 5, "brand" : "Renault", "make" : "Kangoo", "year" : 2015, "price" : 6700, "km" : 81000,  "imported" : false, 
     "fuel" : "diesel",  "color" : "BL3", },
    
     { "_id" : 6, "brand" : "Hyundai", "make" : "ix35", "year" : 2012, "price" : 9000, "km" : 143500,  "imported" : false, 
     "fuel" : "petrol",  "color" : "GR4", },
    
    
    
    
    ]
    
    const getCars = () => 
    Promise.resolve(Object.values(cars_data));
    
  export {getCars} ;