angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyShoppingController', ToBuyShoppingController)
  .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
  var toBuyCtrl = this;
  toBuyCtrl.toBuyItems = ShoppingListCheckOffService.getToBuyItems();

  toBuyCtrl.buyItem = function (index) {
    ShoppingListCheckOffService.buyItem(index);
  };
}

AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
  var boughtCtrl = this;
  boughtCtrl.boughtItems = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;

  // Initial "to buy" items
  var toBuyItems = [
    { name: 'Cookies', quantity: 10 },
    { name: 'Milk', quantity: 2 },
    { name: 'Bread', quantity: 1 },
    { name: 'Eggs', quantity: 12 },
    { name: 'Bananas', quantity: 5 }
  ];

  var boughtItems = [];

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };

  service.buyItem = function (index) {
    var item = toBuyItems.splice(index, 1)[0];
    boughtItems.push(item);
  };
}
