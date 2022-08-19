var arr = [
    {
      "look_priceUnit": "元/条",
      "name": "燃信0-0.5万条/年",
      "look_price": "0.5元/条",
      "value": "0_0",
      "nodeList": [],
      "desc": "0.5|元/条"
    },
    {
      "look_priceUnit": "元/条",
      "name": "燃信0.5-1万条/年",
      "look_price": "0.5元/条",
      "value": "0_1",
      "nodeList": [],
      "desc": "0.5|元/条"
    },
    {
      "look_priceUnit": "元/条",
      "name": "燃信1-5万条/年",
      "look_price": "0.5元/条",
      "value": "0_2",
      "nodeList": [],
      "desc": "0.5|元/条"
    },
    {
      "look_priceUnit": "元/条",
      "name": "燃信5-40万条/年",
      "look_price": "0.5元/条",
      "value": "0_4",
      "nodeList": [],
      "desc": "0.5|元/条"
    },
    {
      "look_priceUnit": "元/条",
      "name": "燃信40-80万条/年",
      "look_price": "0.5元/条",
      "value": "0_5",
      "nodeList": [],
      "desc": "0.5|元/条"
    },
    {
      "look_priceUnit": "元/条",
      "name": "燃信80万条以上/年",
      "look_price": "0.5元/条",
      "value": "0_3",
      "nodeList": [],
      "desc": "0.5|元/条"
    }
  ]
  let arr_item = arr.filter((item)=>item.value=="0_3");
  console.log(arr_item[0].desc);
  