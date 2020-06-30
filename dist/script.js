var shoplist={};
shoplist.name="Cart カート";
shoplist.time="2010/10/10";
shoplist.list=[
  {name:"目薬",price: 642},
  {name: "UVミルク SPF50+",price: 1980},
  {name: "手作りいちご大福",price: 499},
  {name: "ミニ扇風機",price: 3000},
  {name: "MacBook Pro",price: 148200}
];

var item_html="<li id={{id}}  class='buy_item'>{{num}}.{{item}}<div class='price'>{{price}}</div><div id={{del_id}} data-delid-id={{deled}} class='del_btn'>✗</div></li>";

var total_html="<li class='buy_item total'>合計<div class='price'>{{price}}</div></li>";

function showlist(){
  $("#items_list").html("");
  var total_price=0;
  for (var i=0;i<shoplist.list.length;i++){  
    var item=shoplist.list[i];
    var item_id="buy_item"+i;
    var del_item_id="del_buy_item"+i;
    total_price+=parseInt(item.price);
    var current_item_html=
        item_html.replace("{{num}}",i+1)
                 .replace("{{item}}",item.name)
                 .replace("{{price}}",item.price)
                 .replace("{{id}}",item_id)
                 .replace("{{del_id}}",del_item_id)
                 .replace("{{deled}}",i)
        $("#items_list").append(current_item_html);
        $("#"+del_item_id).click(function(){
          remove_item($(this).attr("data-delid-id"))
        });
  };
var current_total_price=total_html.replace("{{price}}",total_price);
$("#items_list").append(current_total_price)
};


showlist();
$(".addbtn").click(function(){
  shoplist.list.push(
  {
    name:$("#input_name").val(),
    price:$("#input_price").val()
  }
  );
  name:$("#input_name").val("");
  price:$("#input_price").val("");
  showlist()
});

function remove_item(id){
  shoplist.list.splice(id,1);
  showlist()
}