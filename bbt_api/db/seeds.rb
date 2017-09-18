# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

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
  drink_id: "1"     ##BubbleWorld sold Taro

},
{
  id: 2,
  store_id: "1",
  drink_id: "2" ##BubbleWorld sold Lyche
},
{
  id: 3,
  store_id: "2",
  drink_id: "1" ##ChaiTime sold Taro

},
{
  id: 4,
  store_id: "2",
  drink_id: "2"   ##ChaiTime sold Lyche
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
  transpoint: "10" ##Ricky purchased Taro from BubbleWorld

},
{
  user: ricky,
  inventory_id: "4",
  tot: "purchase",
  transpoint: "20" ##Ricky purchased Lyche from ChaiTime
},
{
  user: edmond,
  inventory_id: "1",
  tot: "purchase",
  transpoint: "10" ##Edmond purchased Taro from BubbleWorld
},
{
  user: edmond,
  inventory_id: "2",
  tot: "purchase",
  transpoint: "10" ##Edmond purchased lyche from BubbleWorld
}])

