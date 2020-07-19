export default {
  cart: {
    order: {
      Distributor__c: '',
      order_date__c: null, // is set while placing order
      order_value__c: '', // is set wen in cart
      Scheme__c: '',
      Discount__c: '',
    },
    items: [],
  },

  quantity: 1,

  total: 0,
};
