/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


 



localStorage_datato_cart();
numitems();


function addtocart(pid,pname,pprice,status){
 // alert("Ashish"+pid+"   "+pname+"    "+pprice);
 
 console.log("status"+status);
 
    
  let cart=localStorage.getItem("cart");
  
  var len=0;
  
  if(cart==null){
    let productsarray=[];
    let productobj={productid:pid,productname:pname,productquantity:1,productprice:pprice};
     productsarray.push(productobj);
    len= productsarray.length;
     localStorage.setItem("cart",JSON.stringify(productsarray));
  
    }else{
        var copy=false;
         let pcartarray= JSON.parse(cart);
        pcartarray.forEach(myFunction);

     function myFunction(item, index, arr) {
             //arr[index] = item * 10;
             if(item.productid==pid){
                 console.log("inside double");
                 item.productquantity=item.productquantity+1;
                 len=pcartarray.length;
     localStorage.setItem("cart",JSON.stringify(pcartarray));
              copy=true;   
             }
             
            }
    if(copy==false){
              console.log("outside double false");
    let productobj={productid:pid,productname:pname,productquantity:1,productprice:pprice};
     pcartarray.push(productobj);
    len=pcartarray.length;
     localStorage.setItem("cart",JSON.stringify(pcartarray));
 }
        }
        
        localStorage_datato_cart();
        $("#cartnumm").html(len);
        setTimeout(reload, 1500);
    
};


$(".deletebuttoncart").click(function(){
    
    
    console.log("yess");
  var productidfordeletion= $(this).attr("pid");

 let cartt=  localStorage.getItem("cart");
 let newcart=JSON.parse(cartt);
let updatecart= newcart.filter((item)=>item.productid!=productidfordeletion)
 //let editablecartt=JSON.parse(cartt);
 /*
   editablecartt.forEach(justnamee);
    function justnamee(item,index,arr){
        
        if(item.productid==productidfordeletion){
            editablecartt.splice(index,1);//for deletion it deletion that index and one is quantity how much item is to be deleted
           console.log("yesss");
        }
        
        
    };
    */
      localStorage.setItem("cart",JSON.stringify(updatecart));
     
 localStorage_datato_cart();
    numitems();
 location.reload();
    
});

//setInterval(localStorage_datato_cart, 2000);
function localStorage_datato_cart(){
    let cart=localStorage.getItem("cart");
    let editablecart=JSON.parse(cart);
     var carthtmlwithdata=``;
    var totalamount=0;
    editablecart.forEach(justname);
   
    console.log("inside cart");
    function justname(item,index,arr){
        console.log("count = "+index);
        var row=`<li class="header-cart-item">
            <div class="header-cart-item-img">
        	<img src="images/products/`+item.productname+`.png" alt="IMG">
            </div>

            <div class="header-cart-item-txt">
                <a href="#" class="header-cart-item-name">
                    `+item.productname+`
		</a>
            <div class="cartopt">

		<span class="header-cart-item-info">
			`+item.productquantity+` x ₹`+item.productprice+`
		</span>
                <button class="btn btn-sm btn-secondary deletebuttoncart" pid="`+item.productid+`"  >delete</button>
            </div>
	         	</div>
	</li>`;
        console.log("data = "+item.productname+","+item.productprice+","+item.productquantity);
        carthtmlwithdata=carthtmlwithdata+row;
        totalamount=totalamount +  item.productquantity *item.productprice;
        
    };
     $("#cartdata").html(``);
    $("#cartdata").html(carthtmlwithdata);
    $("#totalcartamount").html(totalamount);
};

    
   
    function reload(){
        location.reload();
    }
function numitems(){
   let cartarr= localStorage.getItem("cart");
   let carttt=JSON.parse(cartarr);
   var len=0;
   len=carttt.length;
   
      $("#cartnumm").html(len);
      
      
      
}



$(".mypclass").click(function(){
    
 var prodes=  $(this).attr("id");
 console.log("class vale se \n"+prodes);
  $("#pdescp").html(prodes);
});

function quickview(id,name,price,categoryid){
    console.log(id+","+name+" ,"+price+","+categoryid);
     $(".item-slick3").attr("data-thumb","images/products/"+name+".png");
     // console.log( $(".item-slick3").attr("data-thumb"));
   //  $(".modalpimgicon").attr("data-thumb","images/products/"+name+".png");
    $(".modalpimg").attr("src","images/products/"+name+".png");
    $("#modalpname").html(name);
    $("#modalpprice").html(price);
  
    $("#modaladdcartbutton").attr("pid",id);
    
  
    
    
}






function modaladdcartfunc(status){
  var pname= $("#modalpname").html();
  var pprice=  $("#modalpprice").html();
   var pid= $("#modaladdcartbutton").attr("pid");    
  //  console.log("modal addd cart function runining details : "+pid+","+pname+","+pprice);
    addtocart(pid,pname,pprice,status);
}


     function adddataintable(){
    
     let cart=localStorage.getItem("cart");
    let editablecart=JSON.parse(cart);
     
   var totalhtml=`<tr class="table_head">
		<th class="column-1">Product</th>
                <th class="column-2"></th>
                <th class="column-3">Price</th>
		<th class="column-4">Quantity</th>
                <th class="column-5">Total</th>
		</tr>`;
    editablecart.forEach(func);
   
    console.log("inside pageeeee table");
   
    function func(item,index,arr){
    
    
    
     var htmlrow = `<tr class="table_row">
				<td class="column-1">
					<div class="how-itemcart1">
					<img src="images/products/`+item.productname+`.png" alt="IMG">
					</div>
				</td>
                                <td class="column-2">`+item.productname+`</td>
				<td class="column-3">₹ `+item.productprice+`</td>
									<td class="column-4">
										<div class="wrap-num-product flex-w m-l-auto m-r-0">
											<div class="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
												<i class="fs-16 zmdi zmdi-minus"></i>
											</div>

											<input class="mtext-104 cl3 txt-center num-product" type="number" name="num-product1" value="`+item.productquantity+`">

											<div class="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
												<i class="fs-16 zmdi zmdi-plus"></i>
											</div>
										</div>
									</td>
									<td class="column-5">₹ `+item.productprice*item.productquantity+`</td>
								</tr>`;
        
        totalhtml=totalhtml+htmlrow;
    }
    
    $("#showtable").html(totalhtml);
    
     var ASMOUNT = $("#totalcartamount").html();
    console.log("AMOUNT"+ASMOUNT);
    $(".rate").html("₹"+ASMOUNT);
    
}

adddataintable();