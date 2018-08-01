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
jgordon = User.create(first_name: "Jathmel", last_name: "Gordon", email: "jathmelgordon@flatironschool.com", gender: "Male", password: "lovelearncode", password_confirmation: "lovelearncode", avatar:, city: "New York", country: "USA")
awong = User.create(first_name: "Angelina", last_name: "Wong", email: "angelinawong@flatironschool.com", gender: "Female", password: "lovelearncode", password_confirmation: "lovelearncode", avatar:, city: "New York", country: "USA")
rricardo = User.create(first_name: "Roniece", last_name: "Ricardo", email: "roniecericardo@flatironschool.com", gender: "Female", password: "lovelearncode", password_confirmation: "lovelearncode", avatar:, city: "New York", country: "USA")
rahmed= User.create(first_name: "Razibul", last_name: "Ahmed", email: "razibulahmed@flatironschool.com", gender: "Male", password: "lovelearncode", password_confirmation: "lovelearncode", avatar:, city: "New York", country: "USA")
erazor = User.create(first_name: "Eric", last_name: "Razor", email: "ericrazor@flatironschool.com", gender: "Male", password: "lovelearncode", password_confirmation: "lovelearncode", avatar:, city: "New York", country: "USA")
adiallo = User.create(first_name: "Aisatou", last_name: "Diallo", email: "aisatoudiallo@flatironschool.com", gender: "Female", password: "lovelearncode", password_confirmation: "lovelearncode", avatar:, city: "New York", country: "USA")
jgraeff = User.create(first_name: "Jee", last_name: "Graeff", email: "jeegraeff@flatironschool.com", gender: "Female", password: "lovelearncode", password_confirmation: "lovelearncode", avatar:, city: "New York", country: "USA")
ply = User.create(first_name: "Paul", last_name: "Ly", email: "paully@flatironschool.com", gender: "Male", password: "lovelearncode", password_confirmation: "lovelearncode", avatar:, city: "New York", country: "USA")
mcasimir = User.create(first_name: "Malorie", last_name: "Casimir", email: "maloriecasimir@flatironschool.com", gender: "Female", password: "lovelearncode", password_confirmation: "lovelearncode", avatar:, city: "New York", country: "USA")
pabejar = User.create(first_name: "Patrick", last_name: "Abejar", email: "patrickabejar@flatironschool.com", gender: "Male", password: "lovelearncode", password_confirmation: "lovelearncode", avatar:, city: "New York", country: "USA")
pmoreira = User.create(first_name: "Pablo", last_name: "Moreira", email: "pablomoreira@flatironschool.com", gender: "Male", password: "lovelearncode", password_confirmation: "lovelearncode", avatar:, city: "New York", country: "USA")
lhon = User.create(first_name: "Lawrence", last_name: "Hon", email: "lawrencehon@flatironschool.com", gender: "Male", password: "lovelearncode", password_confirmation: "lovelearncode", avatar:, city: "New York", country: "USA")
sakharaz = User.create(first_name: "Sammy", last_name: "Akharaz", email: "sammyakharaz@flatironschool.com", gender: "Male", password: "lovelearncode", password_confirmation: "lovelearncode", avatar:, city: "New York", country: "USA")
mballard = User.create(first_name: "Michael", last_name: "Ballard", email: "michaelballard@flatironschool.com", gender: "", password: "lovelearncode", password_confirmation: "lovelearncode", avatar:, city: "New York", country: "USA")
alam = User.create(first_name: "Anthony", last_name: "Lam", email: "anthony@flatironschool.com", gender: "Male", password: "lovelearncode", password_confirmation: "lovelearncode", avatar:, city: "New York", country: "USA")
sweiss = User.create(first_name: "Steven", last_name: "Weiss", email: "stevenweiss@flatironschool.com", gender: "Male", password: "lovelearncode", password_confirmation: "lovelearncode", avatar:, city: "New York", country: "USA")
mmcalister = User.create(first_name: "Matt", last_name: "McAlister", email: "mattmcalister@flatironschool.com", gender: "", password: "lovelearncode", password_confirmation: "lovelearncode", avatar:, city: "New York", country: "USA")
hliutongco = User.create(first_name: "Helen", last_name: "Liutongco", email: "helenliutongco@flatironschool.com", gender: "", password: "lovelearncode", password_confirmation: "lovelearncode", avatar:, city: "New York", country: "USA")
rtaramula = User.create(first_name: "Rishikesh", last_name: "Taramula", email: "rishikeshtaramula@flatironschool.com", gender: "", password: "lovelearncode", password_confirmation: "lovelearncode", avatar:, city: "New York", country: "USA")
nmorgan = User.create(first_name: "Niky", last_name: "Morgan", email: "nikymorgan@flatironschool.com", gender: "", password: "lovelearncode", password_confirmation: "lovelearncode", avatar:, city: "New York", country: "USA")
pwilson = User.create(first_name: "Prince", last_name: "Wilson", email: "princewilson@flatironschool.com", gender: "", password: "lovelearncode", password_confirmation: "lovelearncode", avatar:, city: "New York", country: "USA")

puts "Created Users"

puts "Created FriendRequests"

# Friendship.create(user_id: george_bush.id, friend_id: barack_obama.id)
#
# Friendship.create(user_id: barack_obama.id, friend_id: michelle_obama.id)
# Friendship.create(user_id: barack_obama.id, friend_id: george_bush.id)
# Friendship.create(user_id: barack_obama.id, friend_id: laura_bush.id)
# Friendship.create(user_id: barack_obama.id, friend_id: bill_clinton.id)
# Friendship.create(user_id: barack_obama.id, friend_id: hillary_clinton.id)
# Friendship.create(user_id: barack_obama.id, friend_id: george_hw_bush.id)
# Friendship.create(user_id: barack_obama.id, friend_id: barbara_bush.id)
# Friendship.create(user_id: barack_obama.id, friend_id: ronald_reagan.id)
# Friendship.create(user_id: barack_obama.id, friend_id: nancy_reagan.id)
# Friendship.create(user_id: barack_obama.id, friend_id: jimmy_carter.id)
# Friendship.create(user_id: barack_obama.id, friend_id: rosalynn_carter.id)
# Friendship.create(user_id: barack_obama.id, friend_id: gerald_ford.id)
# Friendship.create(user_id: barack_obama.id, friend_id: betty_ford.id)
# Friendship.create(user_id: barack_obama.id, friend_id: richard_nixon.id)
# Friendship.create(user_id: barack_obama.id, friend_id: pat_nixon.id)
# Friendship.create(user_id: barack_obama.id, friend_id: lyndon_johnson.id)
# Friendship.create(user_id: barack_obama.id, friend_id: lady_bird_johnson.id)
# Friendship.create(user_id: barack_obama.id, friend_id: john_kennedy.id)
# Friendship.create(user_id: barack_obama.id, friend_id: jackie_kennedy.id)
# Friendship.create(user_id: barack_obama.id, friend_id: dwight_eisenhower.id)
# Friendship.create(user_id: barack_obama.id, friend_id: mamie_eisenhower.id)
#
# Friendship.create(user_id: richard_nixon.id, friend_id: michelle_obama.id)
# Friendship.create(user_id: richard_nixon.id, friend_id: george_bush.id)
# Friendship.create(user_id: richard_nixon.id, friend_id: laura_bush.id)
# Friendship.create(user_id: richard_nixon.id, friend_id: bill_clinton.id)
# Friendship.create(user_id: richard_nixon.id, friend_id: hillary_clinton.id)
# Friendship.create(user_id: richard_nixon.id, friend_id: george_hw_bush.id)
# Friendship.create(user_id: richard_nixon.id, friend_id: lyndon_johnson.id)
# Friendship.create(user_id: richard_nixon.id, friend_id: lady_bird_johnson.id)
# Friendship.create(user_id: richard_nixon.id, friend_id: john_kennedy.id)
# Friendship.create(user_id: richard_nixon.id, friend_id: jackie_kennedy.id)
# Friendship.create(user_id: richard_nixon.id, friend_id: dwight_eisenhower.id)
# Friendship.create(user_id: richard_nixon.id, friend_id: mamie_eisenhower.id)
#
# Friendship.create(friend_id: dwight_eisenhower.id, user_id: john_kennedy.id)
# Friendship.create(friend_id: lyndon_johnson.id, user_id: john_kennedy.id)
# Friendship.create(friend_id: richard_nixon.id, user_id: john_kennedy.id)
# Friendship.create(friend_id: gerald_ford.id, user_id: john_kennedy.id)
# Friendship.create(friend_id: jimmy_carter.id, user_id: john_kennedy.id)
# Friendship.create(friend_id: ronald_reagan.id, user_id: john_kennedy.id)
# Friendship.create(friend_id: george_hw_bush.id, user_id: john_kennedy.id)
puts "Created Friendships"
