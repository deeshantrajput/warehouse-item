angular.module("app-test", [])
   .controller("entryCtrl", function($scope) {
        
    $scope.model = {
	items: [{id:1, name:'ipad', price:78}],
    selected: {}
	};
	$scope.options = [{label:'ipad',value:'1'}];
    $scope.options1 = [{label1:'Newyork',value1:'1'}];
	$scope.tableoptn=[{woptionname:'Newyork',ioptionname:'ipad',quantity:'80'},{woptionname:'Italy',ioptionname:'Mac',quantity:'89'}];
	$scope.model2 = {
        warehouses: [{wid:1, wname:'Newyork', address:'11 Ave 10 St NY'}],
        selecd: {}
    };
	var wcount=1;
	var count=1;
	
	//Item functions
	$scope.getTemplate = function(contact) {
        if (contact.id === $scope.model.selected.id) return 'edit';
        else return 'display';
    };
	$scope.editContact = function(contact) {
        $scope.model.selected = angular.copy(contact);
    };
    $scope.saveContact = function(idx) {
        console.log("Saving item");
        $scope.model.items[idx] = angular.copy($scope.model.selected);
        $scope.reset();
    };
    $scope.reset = function () {
        $scope.model.selected = {};
    };
	$scope.removeItem= function(index) {
    $scope.model.items.splice(index, 1);
    };
	$scope.addName = function() {
		count=count+1;
		if ($scope.getName && $scope.getPrice) {
			$scope.model.items.push({ 'id':count, 'name':$scope.getName,
            'price':$scope.getPrice});
			$scope.options.push({'label':$scope.getName,'value':1});
			$scope.getName='';
			$scope.getPrice='';	
		};
	};
	
	
	//Warehuse functions
	$scope.getTempl = function(warehouse) {
        if (warehouse.wid === $scope.model2.selecd.wid) return 'editware';
        else return 'displayware';
    };	
	$scope.removeWarehouse= function(index) {
    $scope.model2.warehouses.splice(index, 1);
    };
    $scope.editWarehouse = function(warehouse) {
        $scope.model2.selecd = angular.copy(warehouse);
    };
    $scope.saveWarehouse = function(widx) {
        console.log("Saving");
        $scope.model2.warehouses[widx] = angular.copy($scope.model2.selecd);
        $scope.resetWarehouse();
    };
	$scope.resetWarehouse = function () {
        $scope.model2.selecd = {};
    };
	$scope.addWarehouse = function() {
		wcount=wcount+1;
		if ($scope.getWarehouse && $scope.getAddress) {
			$scope.model2.warehouses.push({ 'wid':wcount, 'wname':$scope.getWarehouse,
                        'address':$scope.getAddress
                         });
		    $scope.options1.push({'label1':$scope.getWarehouse,'value1':1});
			$scope.getWarehouse='';
			$scope.getAddress='';	
		};
	};
	
	//WarehouseItem function
	$scope.addTableOption = function() {
		
			$scope.tableoptn.push({'woptionname':$scope.getwarehouseoptn, 'ioptionname':gettabloptnname,
			'quantity':getQuantity});
             var dataObj1 = {
					woptionname : $scope.getwarehouseoptn,
					ioptionname : $scope.gettabloptnname,
					quantity: $scope.getQuantity
			 };					
			$scope.getwarehouseoptn='';
			$scope.gettabloptnname='';	
			$scope.getQuantity='';
	};
	
		
});