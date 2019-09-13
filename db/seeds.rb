# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Campground.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!("users")
ActiveRecord::Base.connection.reset_pk_sequence!("campgrounds")

demo_user = User.create({
    first_name: "Guest", 
    last_name: "G", 
    email: "guest@aa.io",
    password: "password",
    zipcode: 94030
})

americano_riverbanks = Campground.create({
    host_id: 1,
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
        "Horseback Riding", "Fishing", "Paddling", "Climbing"
    ], 
    checkin_time: "After 2PM", 
    checkout_time: "Before 12PM",
    description: "Welcome to the Americano Riverbanks! With 8 acres of beautiful fields and breathtaking mountain views, this is a great place to start your adventures in Seattle. If you're looking to relax, set up camp, sit back and enjoy the great outdoors of our campground!"
})

espresso_landing = Campground.create({
    host_id: 2,
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
        "Biking", "Boating", "Hiking", "Swimming", "Wildlife Watching", 
        "Horseback Riding", "Fishing", "Paddling", "Climbing"
    ], 
    checkin_time: "After 2PM", 
    checkout_time: "Before 12PM",
    description: "This is an excellent site for a pure camping experience! We have 8 wonderful camping sites for you and your loved ones to enjoy. Come check us out and become one with the nature!"
})

affogato_falls = Campground.create({
    host_id: 3,
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

macchiato_beach = Campground.create({
    host_id: 4,
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
        "Biking", "Boating", "Hiking", "Swimming", "Wildlife Watching",
        "Fishing", "Paddling", "Climbing"
    ], 
    checkin_time: "After 1PM", 
    checkout_time: "Before 12PM",
    description: "Our campsite sits right along the water, where theere are plenty of handing swings, fire pits, and campsites for you and your loved ones to enjoy. Easy parking and proximity to the water make this a magical campsite for all to enjoy year-round!"
})

cappuccino_creekside = Campground.create({
    host_id: 5,
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
        "Biking", "Boating", "Hiking", "Swimming", "Wildlife Watching", 
        "Fishing", "Paddling", "Climbing"
    ], 
    checkin_time: "After 2PM", 
    checkout_time: "Before 12PM",
    description: "Camp out right neat the bank of the Cappucino Creek in the beautiful Pacific Northwest! Only 2 miles from two huge lakes, this campsite is great for paddling, swimming, and fishing. Also, there are plenty of hiking trails and sightseeing spots close by!"
}) 