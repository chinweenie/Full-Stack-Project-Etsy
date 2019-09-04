# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create!(email: "chinwn@gmail.com", fname: "Winnie", password: "hunter12")

jewelry = Category.create!(name: "Jewelry & Accessories")
clothing = Category.create!(name: "Clothing & Shoes")
home = Category.create!(name: "Home & Living")
wedding = Category.create!(name: "Wedding & Party")
toys = Category.create!(name: "Toys & Entertainment")
art = Category.create!(name: "Art & Collectibles")
craft = Category.create!(name: "Craft Supplies & Tools")
vintage = Category.create!(name: "Vintage")


shop1 = Shop.create!(name: "The wanderers", owner_id: user1.id)

vanicream = Product.create!(title: "Vanicream facial wash", description: "A gentle face wash", price: 20, category_id: home.id, shop_id: shop1.id)