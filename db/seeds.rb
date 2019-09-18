# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "open-uri"

User.destroy_all
Campground.destroy_all
Booking.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!("users")
ActiveRecord::Base.connection.reset_pk_sequence!("campgrounds")
ActiveRecord::Base.connection.reset_pk_sequence!("bookings")

# Users

demo_user = User.create!({
    first_name: "Guest", 
    last_name: "G", 
    email: "guest@aa.io",
    password: "password",
    zipcode: 94030
})

gary_payton = User.create!({
    first_name: "Gary",
    last_name: "Payton",
    email: "garyp@aa.io",
    password: "password",
    zipcode: 12345
})

shawn_kemp = User.create!({
    first_name: "Shawn",
    last_name: "Kemp",
    email: "shawnk@aa.io",
    password: "password",
    zipcode: 12345
})

detlef_schrempf = User.create!({
    first_name: "Detlef",
    last_name: "Schrempf",
    email: "detlefs@aa.io",
    password: "password",
    zipcode: 12345
})

# ray_allen = User.create!({
#     first_name: "Ray",
#     last_name: "Allen",
#     email: "raya@aa.io",
#     password: "password",
#     zipcode: 12345
# })

# rashard_lewis = User.create!({
#     first_name: "Rashard",
#     last_name: "Lewis",
#     email: "rashardl@aa.io",
#     password: "password",
#     zipcode: 12345
# })

# nick_collison = User.create!({
#     first_name: "Nick",
#     last_name: "Collison",
#     email: "nickc@aa.io",
#     password: "password",
#     zipcode: 12345
# })

# Campgrounds

americano_riverbanks = Campground.create!({
    host_id: gary_payton.id,
    name: "Americano Riverbanks", 
    location: "Seattle", 
    price: 93, 
    latitude: 47.579908, 
    longitude: -121.697127,
    min_nights: 1, 
    max_guests: 12, 
    num_sites: 4, 
    cabin: false,
    parking: true, 
    campfires: true,
    toilets: true, 
    pets: true, 
    potable_water: false, 
    kitchen: false, 
    showers: false,
    picnic_table: true, 
    wifi: false, 
    bins: false, 
    activities: [
        "Biking", "Boating", "Hiking", "Swimming", "Wildlife Watching", 
        "Fishing", "Paddling", "Climbing"
    ], 
    checkin_time: "After 2PM", 
    checkout_time: "Before 12PM",
    description: "Welcome to the Americano Riverbanks! With 8 acres of beautiful fields and breathtaking mountain views, this is a great place to start your adventures in Seattle. If you're looking to relax, set up camp, sit back and enjoy the great outdoors of our campground!"
})

ar_urls = [
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/americano_riverbanks/ar1.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/americano_riverbanks/ar2.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/americano_riverbanks/ar3.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/americano_riverbanks/ar4.jpg"
]

ar_urls.each_with_index do |url, i|
    americano_riverbanks.photos.attach(io: open(url), filename: "americano_riverbanks#{i+1}.jpg")
end

espresso_landing = Campground.create!({
    host_id: shawn_kemp.id,
    name: "Espresso Landing", 
    location: "Seattle", 
    price: 50, 
    latitude: 47.635139, 
    longitude: -121.640498,
    min_nights: 1, 
    max_guests: 12, 
    num_sites: 8, 
    cabin: false,
    parking: true, 
    campfires: true,
    toilets: true, 
    pets: true, 
    potable_water: false, 
    kitchen: false, 
    showers: false,
    picnic_table: false, 
    wifi: false, 
    bins: false, 
    activities: [
        "Biking", "Boating", "Hiking", "Swimming", "Wildlife Watching"
    ], 
    checkin_time: "After 2PM", 
    checkout_time: "Before 12PM",
    description: "This is an excellent site for a pure camping experience! We have 8 wonderful camping sites for you and your loved ones to enjoy. Come check us out and become one with the nature!"
})

el_urls = [
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/espresso_landing/el1.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/espresso_landing/el2.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/espresso_landing/el3.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/espresso_landing/el4.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/espresso_landing/el5.jpg"
]

el_urls.each_with_index do |url, i|
    espresso_landing.photos.attach(io: open(url), filename: "espresso_landing#{i+1}.jpg")
end

affogato_escape = Campground.create!({
    host_id: detlef_schrempf.id,
    name: "Affogato Escape", 
    location: "Seattle", 
    price: 25, 
    latitude: 48.245565, 
    longitude: -121.656969,
    min_nights: 1, 
    max_guests: 6, 
    num_sites: 7, 
    cabin: false,
    parking: true, 
    campfires: true,
    toilets: true, 
    pets: true, 
    potable_water: true, 
    kitchen: true, 
    showers: false,
    picnic_table: true, 
    wifi: false, 
    bins: false, 
    activities: [
        "Biking", "Hiking", "Swimming", "Wildlife Watching", 
        "Horseback Riding", "Fishing", "Paddling", "Climbing"
    ], 
    checkin_time: "After 11AM", 
    checkout_time: "Before 10AM",
    description: "Pitch your tents on our 20 acres of wooded land just outside Seattle! The views and the smell of the outdoors will not disappoint you! Take a refreshing dip in the pond nearby and enjoy one of the many activities provided here!"
})

ae_urls = [
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/affogato_escape/ae1.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/affogato_escape/ae2.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/affogato_escape/ae3.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/affogato_escape/ae4.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/affogato_escape/ae5.jpg"
]

ae_urls.each_with_index do |url, i|
    affogato_escape.photos.attach(io: open(url), filename: "affogato_escape#{i+1}.jpg")
end

macchiato_beach = Campground.create!({
    host_id: gary_payton.id,
    name: "Macchiato Beach", 
    location: "Seattle", 
    price: 40, 
    latitude: 47.718383, 
    longitude: -121.676589,
    min_nights: 1, 
    max_guests: 4, 
    num_sites: 3, 
    cabin: false,
    parking: true, 
    campfires: true,
    toilets: true, 
    pets: true, 
    potable_water: true, 
    kitchen: true, 
    showers: true,
    picnic_table: true, 
    wifi: false, 
    bins: false, 
    activities: [
        "Biking", "Boating", "Swimming", "Wildlife Watching",
        "Fishing", "Paddling", "Climbing"
    ], 
    checkin_time: "After 1PM", 
    checkout_time: "Before 12PM",
    description: "Our campsite sits right along the water, where there are plenty of handing swings, fire pits, and campsites for you and your loved ones to enjoy. Easy parking and proximity to the water make this a magical campsite for all to enjoy year-round!"
})

mb_urls = [
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/macchiato_beach/mb1.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/macchiato_beach/mb2.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/macchiato_beach/mb3.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/macchiato_beach/mb4.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/macchiato_beach/mb5.jpg"
]

mb_urls.each_with_index do |url, i|
    macchiato_beach.photos.attach(io: open(url), filename: "macchiato_beach#{i+1}.jpg")
end

cappuccino_creekside = Campground.create!({
    host_id: shawn_kemp.id,
    name: "Cappuccino Creekside", 
    location: "Seattle", 
    price: 75, 
    latitude: 48.480412, 
    longitude: -121.629228,
    min_nights: 1, 
    max_guests: 6, 
    num_sites: 5, 
    cabin: false,
    parking: true, 
    campfires: true,
    toilets: true, 
    pets: true, 
    potable_water: false, 
    kitchen: false, 
    showers: false,
    picnic_table: true, 
    wifi: false, 
    bins: true, 
    activities: [
        "Biking", "Boating", "Hiking", "Wildlife Watching", 
        "Climbing"
    ], 
    checkin_time: "After 2PM", 
    checkout_time: "Before 12PM",
    description: "Camp out right neat the bank of the Cappucino Creek in the beautiful Pacific Northwest! Only 2 miles from two huge lakes, this campsite is great for paddling, swimming, and fishing. Also, there are plenty of hiking trails and sightseeing spots close by!"
}) 

cc_urls = [
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/cappuccino_creekside/cc1.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/cappuccino_creekside/cc2.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/cappuccino_creekside/cc3.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/cappuccino_creekside/cc4.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/cappuccino_creekside/cc5.jpg"
]

cc_urls.each_with_index do |url, i|
    cappuccino_creekside.photos.attach(io: open(url), filename: "cappuccino_creekside#{i+1}.jpg")
end

arabica_ranch = Campground.create!({
    host_id: gary_payton.id,
    name: "Arabica Ranch", 
    location: "Seattle", 
    price: 30, 
    latitude: 48.426412, 
    longitude: -121.572236,
    min_nights: 1, 
    max_guests: 3, 
    num_sites: 4, 
    cabin: false,
    parking: true, 
    campfires: true,
    toilets: true, 
    pets: true, 
    potable_water: true, 
    kitchen: false, 
    showers: false,
    picnic_table: false, 
    wifi: false, 
    bins: false, 
    activities: [
        "Biking", "Boating", "Hiking", "Swimming", "Wildlife Watching", 
        "Fishing", "Paddling", "Climbing"
    ], 
    checkin_time: "After 2PM", 
    checkout_time: "Before 12PM",
    description: "Come camp with us here at Arabica Ranch! Nestled right on the outskirts of the Pacific Northwest, Arabica Ranch has been in the Payton family since 1975. With plenty of acres to venture, come horseback riding, enjoy some biking, or just come to sit back and enjoy the beautiful landscape! "
})

a_ranch_urls = [
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/arabica_ranch/a_ranch1.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/arabica_ranch/a_ranch2.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/arabica_ranch/a_ranch3.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/arabica_ranch/a_ranch4.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/arabica_ranch/a_ranch5.jpg"
]

a_ranch_urls.each_with_index do |url, i|
    arabica_ranch.photos.attach(io: open(url), filename: "arabica_ranch#{i+1}.jpg")
end


# Bookings

booking_1 = Booking.create!(
    campground_id: 1,
    user_id: 1,
    num_guests: 4,
    booked_price: 93,
    checkin_date: Date.new(2019, 9, 30),
    checkout_date: Date.new(2019, 10, 2)
)