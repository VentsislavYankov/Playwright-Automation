const base = require('@playwright/test');

exports.customtest = base.test.extend(
{
    testDataForOrder : {
    "username" :'aniska@qmail.com' ,
    "password" : "Iamling@000" ,
    "productName" : "Zara Coat 4"
    }

}




)