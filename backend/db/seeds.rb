# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

FriendRequest.destroy_all
Friendship.destroy_all

User.destroy_all
barack_obama = User.create(first_name: "Barack", last_name: "Obama", email: "barackobama@whitehouse.gov", gender: "male", password: "washington", password_confirmation: "washington", avatar: "https://upload.wikimedia.org/wikipedia/commons/8/8d/President_Barack_Obama.jpg")
george_bush = User.create(first_name: "George", last_name: "Bush", email: "georgebush@whitehouse.gov", gender: "male", password: "washington", password_confirmation: "washington", avatar: "https://upload.wikimedia.org/wikipedia/commons/d/d4/George-W-Bush.jpeg")
bill_clinton = User.create(first_name: "Bill", last_name: "Clinton", email: "barack@whitehouse.gov", gender: "male", password: "washington", password_confirmation: "washington", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Bill_Clinton.jpg/220px-Bill_Clinton.jpg")
george_hw_bush = User.create(first_name: "George", last_name: "Bush", email: "georgehwbush@whitehouse.gov", gender: "male", password: "washington", password_confirmation: "washington", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/George_H._W._Bush%2C_President_of_the_United_States%2C_1989_official_portrait_cropped%28b%29.jpg/220px-George_H._W._Bush%2C_President_of_the_United_States%2C_1989_official_portrait_cropped%28b%29.jpg")
ronald_reagan = User.create(first_name: "Ronald", last_name: "Reagan", email: "ronaldreagan@whitehouse.gov", gender: "male", password: "washington", password_confirmation: "washington", avatar: "https://upload.wikimedia.org/wikipedia/commons/1/16/Official_Portrait_of_President_Reagan_1981.jpg")
jimmy_carter = User.create(first_name: "Jimmy", last_name: "Carter", email: "jimmycarter@whitehouse.gov", gender: "male", password: "washington", password_confirmation: "washington", avatar: "https://upload.wikimedia.org/wikipedia/commons/5/5a/JimmyCarterPortrait2.jpg")
gerald_ford = User.create(first_name: "Gerald", last_name: "Ford", email: "geraldford@whitehouse.gov", gender: "male", password: "washington", password_confirmation: "washington", avatar: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE1ODA0OTcxNjI5Nzc0MzQ5/gerald-ford-9298683-1-402.jpg")
richard_nixon = User.create(first_name: "Richard", last_name: "Nixon", email: "richardnixon@whitehouse.gov", gender: "male", password: "washington", password_confirmation: "washington", avatar: "https://cdn.history.com/sites/2/2013/11/Richard_Nixon-AB.jpeg")
lyndon_johnson = User.create(first_name: "Lyndon", last_name: "Johnson", email: "geraldford@whitehouse.gov", gender: "male", password: "washington", password_confirmation: "washington", avatar: "https://millercenter.org/sites/default/files/2016-10/36-lyndon-b-johnson_0.png")
john_kennedy = User.create(first_name: "John", last_name: "Kennedy", email: "johnkennedy@whitehouse.gov", gender: "male", password: "washington", password_confirmation: "washington", avatar: "https://vignette.wikia.nocookie.net/xmenmovies/images/4/40/JFK-first-class.jpg")
dwight_eisenhower = User.create(first_name: "Dwight", last_name: "Eisenhower", email: "dwighteisenhower@whitehouse.gov", gender: "male", password: "washington", password_confirmation: "washington", avatar: "https://cdn.history.com/sites/2/2013/11/Dwight_D_Eisenhower-AB.jpeg")

michelle_obama = User.create(first_name: "Michelle", last_name: "Obama", email: "michelleobama@whitehouse.gov", gender: "female", password: "washington", password_confirmation: "washington", avatar: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Michelle_Obama_2013_official_portrait.jpg")
laura_bush = User.create(first_name: "Laura", last_name: "Bush", email: "laurabush@whitehouse.gov", gender: "female", password: "washington", password_confirmation: "washington", avatar: "https://www.texasstandard.org/wp-content/uploads/2015/10/Laura_Bush.jpg")
hillary_clinton = User.create(first_name: "Hillary", last_name: "Clinton", email: "hillaryclinton@whitehouse.gov", gender: "female", password: "washington", password_confirmation: "washington", avatar: "https://pbs.twimg.com/profile_images/839938827837976576/leN1zJJx_400x400.jpg")
barbara_bush = User.create(first_name: "Barbara", last_name: "Bush", email: "barbarabush@whitehouse.gov", gender: "female", password: "washington", password_confirmation: "washington", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Barbara_Bush_portrait.jpg/220px-Barbara_Bush_portrait.jpg")
nancy_reagan = User.create(first_name: "Nancy", last_name: "Reagan", email: "nancyreagan@whitehouse.gov", gender: "female", password: "washington", password_confirmation: "washington", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Nancy_Reagan.jpg/220px-Nancy_Reagan.jpg")
rosalynn_carter = User.create(first_name: "Rosalynn", last_name: "Carter", email: "rosalynncarter@whitehouse.gov", gender: "female", password: "washington", password_confirmation: "washington", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Rose_Carter%2C_official_color_photo%2C_1977-cropped.jpg/220px-Rose_Carter%2C_official_color_photo%2C_1977-cropped.jpg")
betty_ford = User.create(first_name: "Betty", last_name: "Ford", email: "bettyford@whitehouse.gov", gender: "female", password: "washington", password_confirmation: "washington", avatar: "https://www.biography.com/.image/t_share/MTE5NDg0MDU0OTY2MjczNTUx/betty-ford-wc-9298615-1-402.jpg")
pat_nixon = User.create(first_name: "Pat", last_name: "Nixon", email: "patnixon@whitehouse.gov", gender: "female", password: "washington", password_confirmation: "washington", avatar: "https://cdn.history.com/sites/2/2013/11/Pat_Nixon-AB.jpeg")
lady_bird_johnson = User.create(first_name: "Lady Bird", last_name: "Johnson", email: "ladybirdjohnson@whitehouse.gov", gender: "female", password: "washington", password_confirmation: "washington", avatar: "https://www.biography.com/.image/t_share/MTE1ODA0OTcxNjc2MTczODM3/lady-bird-johnson-9356088-1-402.jpg")
jackie_kennedy = User.create(first_name: "Jackie", last_name: "Kennedy", email: "jackiekenndy@whitehouse.gov", gender: "female", password: "washington", password_confirmation: "washington", avatar: "https://s3.eu-west-2.amazonaws.com/alarabuk.prod/styles/article_image_800x450_scale/s3/empictures/slide/_37264_171.jpg")
mamie_eisenhower = User.create(first_name: "Mamie", last_name: "Eisenhower", email: "mamieeisenhower@whitehouse.gov", gender: "female", password: "washington", password_confirmation: "washington", avatar: "https://www.biography.com/.image/t_share/MTIwNjA4NjMzODAzNzM2NTg4/mamie-eisenhower-9285497-1-402.jpg")

puts "Created Users"
puts " Barack Obama ID: #{barack_obama.id}"
puts " George Bush ID: #{george_bush.id}"
puts " Dwight Eisenhower ID: #{dwight_eisenhower.id}"

puts "Created FriendRequests"

Friendship.create(user_id: george_bush.id, friend_id: barack_obama.id)

Friendship.create(user_id: barack_obama.id, friend_id: michelle_obama.id)
Friendship.create(user_id: barack_obama.id, friend_id: george_bush.id)
Friendship.create(user_id: barack_obama.id, friend_id: laura_bush.id)
Friendship.create(user_id: barack_obama.id, friend_id: bill_clinton.id)
Friendship.create(user_id: barack_obama.id, friend_id: hillary_clinton.id)
Friendship.create(user_id: barack_obama.id, friend_id: george_hw_bush.id)
Friendship.create(user_id: barack_obama.id, friend_id: barbara_bush.id)
Friendship.create(user_id: barack_obama.id, friend_id: ronald_reagan.id)
Friendship.create(user_id: barack_obama.id, friend_id: nancy_reagan.id)
Friendship.create(user_id: barack_obama.id, friend_id: jimmy_carter.id)
Friendship.create(user_id: barack_obama.id, friend_id: rosalynn_carter.id)
Friendship.create(user_id: barack_obama.id, friend_id: gerald_ford.id)
Friendship.create(user_id: barack_obama.id, friend_id: betty_ford.id)
Friendship.create(user_id: barack_obama.id, friend_id: richard_nixon.id)
Friendship.create(user_id: barack_obama.id, friend_id: pat_nixon.id)
Friendship.create(user_id: barack_obama.id, friend_id: lyndon_johnson.id)
Friendship.create(user_id: barack_obama.id, friend_id: lady_bird_johnson.id)
Friendship.create(user_id: barack_obama.id, friend_id: john_kennedy.id)
Friendship.create(user_id: barack_obama.id, friend_id: jackie_kennedy.id)
Friendship.create(user_id: barack_obama.id, friend_id: dwight_eisenhower.id)
Friendship.create(user_id: barack_obama.id, friend_id: mamie_eisenhower.id)

Friendship.create(user_id: richard_nixon.id, friend_id: michelle_obama.id)
Friendship.create(user_id: richard_nixon.id, friend_id: george_bush.id)
Friendship.create(user_id: richard_nixon.id, friend_id: laura_bush.id)
Friendship.create(user_id: richard_nixon.id, friend_id: bill_clinton.id)
Friendship.create(user_id: richard_nixon.id, friend_id: hillary_clinton.id)
Friendship.create(user_id: richard_nixon.id, friend_id: george_hw_bush.id)
Friendship.create(user_id: richard_nixon.id, friend_id: lyndon_johnson.id)
Friendship.create(user_id: richard_nixon.id, friend_id: lady_bird_johnson.id)
Friendship.create(user_id: richard_nixon.id, friend_id: john_kennedy.id)
Friendship.create(user_id: richard_nixon.id, friend_id: jackie_kennedy.id)
Friendship.create(user_id: richard_nixon.id, friend_id: dwight_eisenhower.id)
Friendship.create(user_id: richard_nixon.id, friend_id: mamie_eisenhower.id)

Friendship.create(friend_id: dwight_eisenhower.id, user_id: john_kennedy.id)
Friendship.create(friend_id: lyndon_johnson.id, user_id: john_kennedy.id)
Friendship.create(friend_id: richard_nixon.id, user_id: john_kennedy.id)
Friendship.create(friend_id: gerald_ford.id, user_id: john_kennedy.id)
Friendship.create(friend_id: jimmy_carter.id, user_id: john_kennedy.id)
Friendship.create(friend_id: ronald_reagan.id, user_id: john_kennedy.id)
Friendship.create(friend_id: george_hw_bush.id, user_id: john_kennedy.id)
puts "Created Friendships"
