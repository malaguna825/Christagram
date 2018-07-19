# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Post.destroy_all

viola = User.create!({full_name:'Viola Su',username:'violahahaha', password:"7777777", email:"vsu@gmail.com"} )
frances = User.create!({full_name:'Frances Lee',username:'flee', password:"456789", email:"flee@gmail.com"} )
erin = User.create!({full_name:'Erin Sullivan',username:'erins', password:"123456", email:"erins@gmail.com"} )
angela = User.create!({full_name:'Angela Chen',username:'achen', password:"000000", email:"achen@gmail.com"} )
yvet = User.create!({full_name:'Yvette Chung',username:'yvetc', password:"222222", email:"yvetc@gmail.com"} )
steve = User.create!({full_name:'Steve Ma',username:'stevema', password:"111111", email:"stevema@gmail.com"} )
erinc = User.create!({full_name:'Erin Chung',username:'echung', password:"555555", email:"somethingelove@gmail.com"} )
steph = User.create!({full_name:'Steph Jones',username:'sjones', password:"333333", email:"stephj@gmail.com"} )
beka = User.create!({full_name:'Beka Young',username:'byoung', password:"999999", email:"byoung@gmail.com"} )

post1 = Post.create!({body:'After class HH', user_id: viola.id })
post1.photo.attach(io: File.open(ActionController::Base.helpers.asset_path('Image0.jpg')), filename: "Image0.jpg")
post2 = Post.create!({body:'summer body ready', user_id: frances.id })
post2.photo.attach(io: File.open(ActionController::Base.helpers.asset_path('image1.jpg')), filename: "image1.jpg")
post3 = Post.create!({body:'Crossfit Regional2018', user_id: erin.id })
post3.photo.attach(io: File.open(ActionController::Base.helpers.asset_path('image2.jpg')), filename: "image2.jpg")
post4 = Post.create!({body:'Merci beaucoup de mavoir fait vivre cette experience de vie pour la seconde fois!!!', user_id: angela.id })
post4.photo.attach(io: File.open(ActionController::Base.helpers.asset_path('image3.jpg')), filename: "image3.jpg")
post5 = Post.create!({body:'take me back to here', user_id: yvet.id})
post5.photo.attach(io: File.open(ActionController::Base.helpers.asset_path('image4.jpg')), filename: "image4.jpg")
post6 = Post.create!({body:'babiessss',user_id: steve.id })
post6.photo.attach(io: File.open(ActionController::Base.helpers.asset_path('image5.jpg')), filename: "image5.jpg")
post7 = Post.create!({body:'vacation mode on!',user_id: erinc.id })
post7.photo.attach(io: File.open(ActionController::Base.helpers.asset_path('image6.jpg')), filename: "image6.jpg")
post8 = Post.create!({body:'whos a good girl?',user_id: steph.id })
post8.photo.attach(io: File.open(ActionController::Base.helpers.asset_path('image7.jpg')), filename: "image7.jpg")
post9 = Post.create!({body:'Summer 2018',user_id: beka.id })
post9.photo.attach(io: File.open(ActionController::Base.helpers.asset_path('image8.jpg')), filename: "image8.jpg")
post10 = Post.create!({body:'Bruano Island, Italy',user_id: erin.id})
post10.photo.attach(io: File.open(ActionController::Base.helpers.asset_path('image9.jpg')), filename: "image9.jpg")
post11 = Post.create!({body:'breakfast with a view', user_id: angela.id })
post11.photo.attach(io: File.open(ActionController::Base.helpers.asset_path('image10.jpg')), filename: "image10.jpg")
