User.destroy_all

ricky = User.create! ({
  id: 1,
  name: "Ricky Na",
  age: "47",
  password: "12345",
  email: "rickyna@gmail.com",
  username: "Naricky"
})

edmond = User.create! ({
  id: 2,
  name: "Edmond Lee",
  age: "20",
  password: "12345",
  email: "taromonkey@gmail.com",
  username: "BBTNinja"
})

james = User.create! ({
  id: 23,
  name: "James Holland",
  age: "24",
  password: "12345",
  email: "jholland@gmail.com",
  username: "jHolland"
})

Store.destroy_all

Store.create!([{
  id: 1,
  name: "CoCo - Pender",
  address: "609 W Pender St",
  location: "Vancouver",
  phone: "604-434-5551"

},
{
  id: 2,
  name: "Cha Time - Robson",
  address: "1274 Robson St",
  location: "Vancouver",
  phone: "604-285-2428"
},
{
  id: 3,
  name: "Bubble World - Robson",
  address: "1325 Robson St",
  location: "Vancouver",
  phone: "604-431-7232"


}])

Drink.destroy_all

Drink.create!([{
  id: 1,
  name: "Taro BBT (BubbleWorld)",
  drinkpoints: "10"

},
{
  id: 2,
  name: "Lyche BBT (BubbleWorld)",
  drinkpoints: "10"

},
{
  id: 3,
  name: "Taro BBT (ChaiTime)",
  drinkpoints: "20"

},
{
  id: 4,
  name: "Lyche BBT (ChaiTime)",
  drinkpoints: "20"
}])

Inventory.destroy_all

Inventory.create!([{
  id: 1,
  store_id: "1",
  drink_id: "1"

},
{
  id: 2,
  store_id: "1",
  drink_id: "2"
},
{
  id: 3,
  store_id: "2",
  drink_id: "1"

},
{
  id: 4,
  store_id: "2",
  drink_id: "2"
},
{
  id: 5,
  store_id: "2",
  drink_id: "3"
}])


Transaction.destroy_all

Transaction.create!([{
  user: ricky,
  inventory_id: "1",
  tot: "purchase",
  transpoint: "10"

},
{
  user: ricky,
  inventory_id: "4",
  tot: "purchase",
  transpoint: "20"
},
{
  user: edmond,
  inventory_id: "1",
  tot: "purchase",
  transpoint: "10"
},
{
  user: edmond,
  inventory_id: "2",
  tot: "purchase",
  transpoint: "10"
},
{ user: james,
  inventory_id:"3",
  tot: "purchase",
  transpoint: "60"
}])

