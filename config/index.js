export const Config = {
ACCESS_URL: 'https://test.salesforce.com/services/oauth2/token?password=Test@4321&client_secret=FD45AB1D7283A5778D540FE23702156D48718C696048F35AEA8A3AA1CD78E9CE&client_id=3MVG9Po2PmyYruunruFZ8VOGjtOe27rryity4JVZHiWaL4DyLyx.g9r2ETfDAAl0.unNoRhp1hVJ6LP8ZRn3f&username=jagpreet.singh@zoxima.com.dms2&grant_type=password' ,
ALL_PRODUCT_URL: 'https://zx--dms2.my.salesforce.com/services/data/v45.0/query/?q=select+id,name,Product_Group__c+from+Product__c',


ALL_PRODUCT_PRICE_URL:"https://zx--dms2.my.salesforce.com/services/data/v45.0/query/?q=select+id,name,Product_Group__c,Gender__c,Product_Code_del__c,Sleeve__c,Pattern__c,Neck_Type__c,Fabric_Types__c,(select+id,name,MRP__c,MSP__c,Customer_Price__c,Dealer_Price__c,Product_Group__c,Party__c+from+Products_Pricing__r),(select+id,name,Discount__c,Product__c,Product_Category__c,Product_Group__c,Product_Sub_Category__c+from+Scheme__r)+from+Product__c+where+ id in+(select+Product_c__c+from+Product_Pricing__c+where+Party__c='Customer') " ,
SIGN_UP : " https://zx--dms2.my.salesforce.com/services/apexrest/SignUP/" ,
}