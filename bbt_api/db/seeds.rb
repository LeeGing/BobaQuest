User.destroy_all

ricky = User.create! ({
  id: 1,
  name: "Ricky",
  age: "27",
  password: "abc123",
  email: "ricky@ricky.com",
  username: "Naricky"
})

edmond = User.create! ({
  id: 2,
  name: "Edmond",
  age: "21",
  password: "qwe123",
  email: "edmond@edmond.com",
  username: "Naedmond"

})

Store.destroy_all

Store.create!([{
  id: 1,
  name: "BubbleWorld",
  address: "4300 Kingsway",
  location: "Burnaby",
  phone: "6044345551"

},
{
  id: 2,
  name: "ChaiTime",
  address: "450-9100 Blundell Rd",
  location: "Richmond",
  phone: "6042852428"
},
{
  id: 3,
  name: "Zeta",
  address: "123 Zeta Rd",
  location: "Burnaby",
  phone: "604431ZETA"


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
}])

