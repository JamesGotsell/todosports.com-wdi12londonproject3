# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

user1 = User.create({ name: "james" , age: 27, picture: nil , email: "james@james.com", password: "password", admin: true})
user1 = User.create({ name: "bob" , age: 29, picture: nil , email: "bob@bob.com", password: "password", admin: false})
user1 = User.create({ name: "jack" , age: 27, picture: nil , email: "jack@jack.com", password: "password", admin: false})