const item = [ 
  {name: 'Bike', price:100}, 
  {name: 'TV', price:200}, 
  {name: 'Album', price:10}, 
  {name: 'Book', price:5}, 
  {name: 'Phone', price:500}, 
  {name: 'Computer', price:1000} 
  ];
  // Cheap Product
  function cheapProduct(item)
  {
  	 var min=item[0].price;
 	 var minProduct="";
     for(let i=0;i<item.length;i++)
     {
       if(item[i].price<min)
       {
          min=item[i].price;
          minProduct=item[i].name;
       }
     }
    return minProduct;
  }
  // Expensive product
  function expensiveProduct(item)
  {
      var max=item[0].price;
      var maxProduct="";
      for(let i=0;i<item.length;i++)
      {
         if(item[i].price>max)
         {
           max=item[i].price;
           maxProduct=item[i].name;
         }
      }
      return maxProduct;    
  }
   // Total price
  function getTotalPrice(item)
  {
     var totalPrice=0;
     for(let i=0;i<item.length;i++)
     {
       totalPrice+=item[i].price;
     }
     return totalPrice;
     
  }
   // removed product
   function getPriceAbove(item,totalPrice)
   {
      for(let i=0;i<item.length;i++)
      {
         if(item[i].price<10)
         {
            totalPrice-=item[i].price;
         }
      }
      console.log("Total Price Above 10$ is:"+totalPrice);
   }
   
   console.log("cheap product is:"+cheapProduct(item));
   console.log("expensive product is:"+expensiveProduct(item));
   console.log("Total Price is:"+getTotalPrice(item));
   getPriceAbove(item,getTotalPrice(item));
   