module.exports = createPageObjects({
  Home: {
    actions: {
      // add action functions here
      iSearchForProduct: function() { 
       
      element(by.control({
        id: "container-cart---homeView--searchField",
        interaction: {
            idSuffix: "I"
        }
    })).sendKeys("Watch");

    },
    iSelectTheFirstProduct: function () {
      element(by.control({
          controlType: "sap.m.Text",
          viewId: "container-cart---homeView",
          properties: {
              text: "Flat Watch HD32"
          },
          interaction: {
              idSuffix: "inner"
          }
      })).click();
  }
      
    },
    assertions: {
      // add assertion functions here
      iShouldSeeAllCategories: function () {
        var list = element.all(by.control({
            controlType: "sap.m.StandardListItem",
            viewId: "container-cart---homeView",
            
        }));
        
        var test  = element(by.control({
          id: "container-cart---homeView--categoryList"
      }));
        
       // expect(test.headerText).toBe('Categories');
        
        expect(list.count()).toBe(16);

    },

    theProductListShouldBeFiltered: function () {
    var list = element.all(by.control({
        controlType: "sap.m.ObjectListItem",
        viewId: "container-cart---homeView",
        
    }));
    var firstItem = list.get(0);
    expect(firstItem.asControl().getProperty('title')).toBe('Flat Watch HD32');
}
      
    }
  }
});
