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
# Booking.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!("users")
ActiveRecord::Base.connection.reset_pk_sequence!("campgrounds")
# ActiveRecord::Base.connection.reset_pk_sequence!("bookings")

# ============================ Users ========================================

demo_user = User.create!({
    first_name: "Guest", 
    last_name: "G", 
    email: "guest@aa.io",
    password: "password",
    zipcode: 94030
})

demo_user.avi_photo.attach(io: open("https://dripcamp-seed.s3-us-west-1.amazonaws.com/users/waterdrop.png"), filename: "demo_user_avi.png")

## Seattle ========================

gary_payton = User.create!({
    first_name: "Gary",
    last_name: "Payton",
    email: "garyp@aa.io",
    password: "password",
    zipcode: 12345
})
gary_payton.avi_photo.attach(io: open("https://dripcamp-seed.s3-us-west-1.amazonaws.com/users/seattle/garyp.jpg"), filename: "garyp_avi.jpg")

shawn_kemp = User.create!({
    first_name: "Shawn",
    last_name: "Kemp",
    email: "shawnk@aa.io",
    password: "password",
    zipcode: 12345
})
shawn_kemp.avi_photo.attach(io: open("https://dripcamp-seed.s3-us-west-1.amazonaws.com/users/seattle/shawnk.jpg"), filename: "shawnk_avi.jpg")

detlef_schrempf = User.create!({
    first_name: "Detlef",
    last_name: "Schrempf",
    email: "detlefs@aa.io",
    password: "password",
    zipcode: 12345
})
detlef_schrempf.avi_photo.attach(io: open("https://dripcamp-seed.s3-us-west-1.amazonaws.com/users/seattle/detlefs.jpg"), filename: "detlefs_avi.jpg")

isaiah_thomas = User.create!({
    first_name: "Isaiah",
    last_name: "Thomas",
    email: "isaiaht@aa.io",
    password: "password",
    zipcode: 12345
})
isaiah_thomas.avi_photo.attach(io: open("https://dripcamp-seed.s3-us-west-1.amazonaws.com/users/seattle/isaiaht.png"), filename: "isaiaht_avi.png")

jamal_crawford = User.create!({
    first_name: "Jamal",
    last_name: "Crawford",
    email: "jamalc@aa.io",
    password: "password",
    zipcode: 12345
})
jamal_crawford.avi_photo.attach(io: open("https://dripcamp-seed.s3-us-west-1.amazonaws.com/users/seattle/jamalc.jpg"), filename: "jamalc_avi.jpg")


## San Francisco =============================

andre_iguodala = User.create!({
    first_name: "Andre",
    last_name: "Iguodala",
    email: "andrei@aa.io",
    password: "password",
    zipcode: 12345
})
andre_iguodala.avi_photo.attach(io: open("https://dripcamp-seed.s3-us-west-1.amazonaws.com/users/sanfrancisco/andrei.jpg"), filename: "andrei_avi.jpg")

bob_myers = User.create!({
    first_name: "Bob",
    last_name: "Myers",
    email: "bobm@aa.io",
    password: "password",
    zipcode: 12345
})
bob_myers.avi_photo.attach(io: open("https://dripcamp-seed.s3-us-west-1.amazonaws.com/users/sanfrancisco/bobm.jpg"), filename: "bobm_avi.jpg")

shaun_livingston = User.create!({
    first_name: "Shaun",
    last_name: "Livingston",
    email: "shaunl@aa.io",
    password: "password",
    zipcode: 12345
})
shaun_livingston.avi_photo.attach(io: open("https://dripcamp-seed.s3-us-west-1.amazonaws.com/users/sanfrancisco/shaunl.jpg"), filename: "shaunl_avi.jpg")

chris_mullin = User.create!({
    first_name: "Chris",
    last_name: "Mullin",
    email: "chrism@aa.io",
    password: "password",
    zipcode: 12345
})
chris_mullin.avi_photo.attach(io: open("https://dripcamp-seed.s3-us-west-1.amazonaws.com/users/sanfrancisco/chrism.png"), filename: "chrism_avi.png")

tim_hardaway = User.create!({
    first_name: "Tim",
    last_name: "Hardaway",
    email: "timh@aa.io",
    password: "password",
    zipcode: 12345
})
tim_hardaway.avi_photo.attach(io: open("https://dripcamp-seed.s3-us-west-1.amazonaws.com/users/sanfrancisco/timh.png"), filename: "timh_avi.png")

## New York =============================

spencer_dinwiddie = User.create!({
    first_name: "Spencer",
    last_name: "Dinwiddie",
    email: "spencerd@aa.io",
    password: "password",
    zipcode: 12345
})
spencer_dinwiddie.avi_photo.attach(io: open("https://dripcamp-seed.s3-us-west-1.amazonaws.com/users/newyork/spencerd.png"), filename: "spencerd_avi.png")


caris_levert = User.create!({
    first_name: "Caris",
    last_name: "Levert",
    email: "carisl@aa.io",
    password: "password",
    zipcode: 12345
})
caris_levert.avi_photo.attach(io: open("https://dripcamp-seed.s3-us-west-1.amazonaws.com/users/newyork/carisl.jpg"), filename: "carisl_avi.jpg")


deandre_jordan = User.create!({
    first_name: "Deandre",
    last_name: "Jordan",
    email: "deandrej@aa.io",
    password: "password",
    zipcode: 12345
})
deandre_jordan.avi_photo.attach(io: open("https://dripcamp-seed.s3-us-west-1.amazonaws.com/users/newyork/deandrej.jpg"), filename: "deandrej_avi.jpg")

kevin_durant = User.create!({
    first_name: "Kevin",
    last_name: "Durant",
    email: "kevind@aa.io",
    password: "password",
    zipcode: 12345
})
kevin_durant.avi_photo.attach(io: open("https://dripcamp-seed.s3-us-west-1.amazonaws.com/users/newyork/kevind.jpg"), filename: "kevind_avi.jpg")

kyrie_irving = User.create!({
    first_name: "Kyrie",
    last_name: "Irving",
    email: "kyriei@aa.io",
    password: "password",
    zipcode: 12345
})
kyrie_irving.avi_photo.attach(io: open("https://dripcamp-seed.s3-us-west-1.amazonaws.com/users/newyork/kyriei.jpg"), filename: "kyriei_avi.jpg")

## Los Angeles ================================

anthony_davis = User.create!({
    first_name: "Anthony",
    last_name: "Davis",
    email: "anthonyd@aa.io",
    password: "password",
    zipcode: 12345
})
anthony_davis.avi_photo.attach(io: open("https://dripcamp-seed.s3-us-west-1.amazonaws.com/users/losangeles/anthonyd.jpg"), filename: "anthonyd_avi.jpg")

earvin_johnson = User.create!({
    first_name: "Earvin",
    last_name: "Johnson",
    email: "earvinj@aa.io",
    password: "password",
    zipcode: 12345
})
earvin_johnson.avi_photo.attach(io: open("https://dripcamp-seed.s3-us-west-1.amazonaws.com/users/losangeles/earvinj.jpg"), filename: "earvinj_avi.jpg")

kawhi_leonard = User.create!({
    first_name: "Kawhi",
    last_name: "Leonard",
    email: "kawhil@aa.io",
    password: "password",
    zipcode: 12345
})
kawhi_leonard.avi_photo.attach(io: open("https://dripcamp-seed.s3-us-west-1.amazonaws.com/users/losangeles/kawhil.jpg"), filename: "kawhil_avi.jpg")

kyle_kuzma = User.create!({
    first_name: "Kyle",
    last_name: "Kuzma",
    email: "kylek@aa.io",
    password: "password",
    zipcode: 12345
})
kyle_kuzma.avi_photo.attach(io: open("https://dripcamp-seed.s3-us-west-1.amazonaws.com/users/losangeles/kylek.png"), filename: "kylek_avi.png")

lebron_james = User.create!({
    first_name: "Lebron",
    last_name: "James",
    email: "lebronj@aa.io",
    password: "password",
    zipcode: 12345
})
lebron_james.avi_photo.attach(io: open("https://dripcamp-seed.s3-us-west-1.amazonaws.com/users/losangeles/lebronj.jpg"), filename: "lebronj_avi.jpg")

## Chicago ============================

derrick_rose = User.create!({
    first_name: "Derrick",
    last_name: "Rose",
    email: "derrickr@aa.io",
    password: "password",
    zipcode: 12345
})
derrick_rose.avi_photo.attach(io: open("https://dripcamp-seed.s3-us-west-1.amazonaws.com/users/chicago/derrickr.jpg"), filename: "derrickr_avi.jpg")

lauri_markkanen = User.create!({
    first_name: "Lauri",
    last_name: "Markkanen",
    email: "laurim@aa.io",
    password: "password",
    zipcode: 12345
})
lauri_markkanen.avi_photo.attach(io: open("https://dripcamp-seed.s3-us-west-1.amazonaws.com/users/chicago/laurim.jpeg"), filename: "laurim_avi.jpeg")

luol_deng = User.create!({
    first_name: "Luol",
    last_name: "Deng",
    email: "luold@aa.io",
    password: "password",
    zipcode: 12345
})
luol_deng.avi_photo.attach(io: open("https://dripcamp-seed.s3-us-west-1.amazonaws.com/users/chicago/luold.jpg"), filename: "luold_avi.jpg")

michael_jordan = User.create!({
    first_name: "Michael",
    last_name: "Jordan",
    email: "michaelj@aa.io",
    password: "password",
    zipcode: 12345
})
michael_jordan.avi_photo.attach(io: open("https://dripcamp-seed.s3-us-west-1.amazonaws.com/users/chicago/michaelj.jpg"), filename: "michaelj_avi.jpg")

scottie_pippen = User.create!({
    first_name: "Scottie",
    last_name: "Pippen",
    email: "scottiep@aa.io",
    password: "password",
    zipcode: 12345
})
scottie_pippen.avi_photo.attach(io: open("https://dripcamp-seed.s3-us-west-1.amazonaws.com/users/chicago/scottiep.jpg"), filename: "scottiep_avi.jpg")

## Denver =================================

mahmoud_rauf = User.create!({
    first_name: "Mahmoud",
    last_name: "Rauf",
    email: "mahmoudr@aa.io",
    password: "password",
    zipcode: 12345
})
mahmoud_rauf.avi_photo.attach(io: open("https://dripcamp-seed.s3-us-west-1.amazonaws.com/users/denver/mahmoudr.jpg"), filename: "mahmoudr_avi.jpg")

nikola_jokic = User.create!({
    first_name: "Nikola",
    last_name: "Jokic",
    email: "nikolaj@aa.io",
    password: "password",
    zipcode: 12345
})
nikola_jokic.avi_photo.attach(io: open("https://dripcamp-seed.s3-us-west-1.amazonaws.com/users/denver/nikolaj.jpg"), filename: "nikolaj_avi.jpg")

paul_millsap = User.create!({
    first_name: "Paul",
    last_name: "Millsap",
    email: "paulm@aa.io",
    password: "password",
    zipcode: 12345
})
paul_millsap.avi_photo.attach(io: open("https://dripcamp-seed.s3-us-west-1.amazonaws.com/users/denver/paulm.jpg"), filename: "paulm_avi.jpg")





# ============================== Campgrounds ===================================

## Seattle ===========================

seattle_a = Campground.create!({
    host_id: gary_payton.id,
    name: "Americano Farm", 
    location: "Seattle", 
    price: 45, 
    latitude: 47.748082, 
    longitude: -121.711547,
    min_nights: 1, 
    max_guests: 6, 
    num_sites: 1, 
    cabin: false,
    parking: false, 
    campfires: false,
    toilets: true, 
    pets: false, 
    potable_water: true, 
    kitchen: false, 
    showers: true,
    picnic_table: true, 
    wifi: false, 
    bins: true, 
    activities: [
        "Biking", "Hiking", "Wildlife Watching", "Climbing"
    ], 
    checkin_time: "After 2PM", 
    checkout_time: "Before 12PM",
    description: "Pitch your tent in our beloved forest and stroll the trails through our four acres of woods or on nearby state trails. Say hello to the goats and chickens. Outdoor kitchenette and sink are by the house to help you.",
    rating: 93
})
seattle_a_urls = [
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/seattle/seattlea/seattlea1.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/seattle/seattlea/seattlea2.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/seattle/seattlea/seattlea3.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/seattle/seattlea/seattlea4.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/seattle/seattlea/seattlea5.jpg",
]
seattle_a_urls.each_with_index do |url, i|
    seattle_a.photos.attach(io: open(url), filename: "seattlea#{i+1}.jpg")
end

seattle_b = Campground.create!({
    host_id: shawn_kemp.id,
    name: "Espresso Camp", 
    location: "Seattle", 
    price: 30, 
    latitude: 47.386671, 
    longitude: -121.716942,
    min_nights: 1, 
    max_guests: 8, 
    num_sites: 1, 
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
        "Biking", "Fishing", "Hiking", "Horseback Riding", "Wildlife Watching"
    ], 
    checkin_time: "After 2PM", 
    checkout_time: "Before 12PM",
    description: "Espresso Camp is a great spot to get away from the city life and have a moment to relax. Near camp you will find easy access to the Cedar River Trail as well as an old artistic railroad bridge overlooking the Cedar River itself. The trail is very flat and great for walking, running, biking, or even horse back riding. Lots of trees to provide shade and a sense of seclusion without another home in sight. At night you may hear the frogs in the near by wetlands. Feel free to bring your tents, yurts, trailer, or small camper and prepare to relax in nature.",
    rating: 93
})

seattle_b_urls = [
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/seattle/seattleb/seattleb1.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/seattle/seattleb/seattleb2.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/seattle/seattleb/seattleb3.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/seattle/seattleb/seattleb4.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/seattle/seattleb/seattleb5.jpg"
]

seattle_b_urls.each_with_index do |url, i|
    seattle_b.photos.attach(io: open(url), filename: "seattle_b#{i+1}.jpg")
end


seattle_c = Campground.create!({
    host_id: detlef_schrempf.id,
    name: "Affogato Treehouse", 
    location: "Seattle", 
    price: 185, 
    latitude: 47.474779, 
    longitude: -122.025302,
    min_nights: 1, 
    max_guests: 3, 
    num_sites: 1, 
    cabin: true,
    parking: true, 
    campfires: true,
    toilets: true, 
    pets: false, 
    potable_water: true, 
    kitchen: false, 
    showers: true,
    picnic_table: false, 
    wifi: true, 
    bins: true, 
    activities: [
        "Hiking", "Wildlife Watching"
    ], 
    checkin_time: "After 4PM", 
    checkout_time: "Before 12PM",
    description: "Nestled 11 feet in the trees, standing at nearly 22 ft HIGH! a quaint 70sqft treehouse, overlooking a Mountain View with a full sized sleeping loft upstairs. The best way to explain this treehouse? Camping in the trees! You’ll have power and heat but no kitchen. Outdoor shower and porta potty access.",
    rating: 95
})

seattle_c_urls = [
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/seattle/seattlec/seattlec1.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/seattle/seattlec/seattlec2.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/seattle/seattlec/seattlec3.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/seattle/seattlec/seattlec4.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/seattle/seattlec/seattlec5.jpg"
]

seattle_c_urls.each_with_index do |url, i|
    seattle_c.photos.attach(io: open(url), filename: "seattle_c#{i+1}.jpg")
end

seattle_d = Campground.create!({
    host_id: isaiah_thomas.id,
    name: "Macchiato Ranch", 
    location: "Seattle", 
    price: 50, 
    latitude: 47.637416, 
    longitude: -122.976604,
    min_nights: 1, 
    max_guests: 5, 
    num_sites: 1, 
    cabin: false,
    parking: true, 
    campfires: true,
    toilets: true, 
    pets: true, 
    potable_water: false, 
    kitchen: false, 
    showers: false,
    picnic_table: true, 
    wifi: true, 
    bins: true, 
    activities: [
        "Hiking", "Horseback Riding", "Biking", "Boating", "Fishing", "Wildlife Watching"
    ], 
    checkin_time: "After 2PM", 
    checkout_time: "Before 12PM",
    description: "The ranch is 23 acres partially wooded with a nature trail and open fenced paddocks and fields. We have a herd of horses on the property and offer Equine Assisted Learning and riding lessons onsite. There is an RV hookup next to the main house for electricity and sewage. We offer a porta-potty as well.",
    rating: 96
})

seattle_d_urls = [
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/seattle/seattled/seattled1.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/seattle/seattled/seattled2.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/seattle/seattled/seattled3.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/seattle/seattled/seattled4.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/seattle/seattled/seattled5.jpg"
]

seattle_d_urls.each_with_index do |url, i|
    seattle_d.photos.attach(io: open(url), filename: "seattle_d#{i+1}.jpg")
end

seattle_e = Campground.create!({
    host_id: jamal_crawford.id,
    name: "Cappuccino Retreat", 
    location: "Seattle", 
    price: 38, 
    latitude: 47.544655, 
    longitude: -123.119117,
    min_nights: 1, 
    max_guests: 6, 
    num_sites: 1, 
    cabin: false,
    parking: true, 
    campfires: false,
    toilets: true, 
    pets: true, 
    potable_water: true, 
    kitchen: false, 
    showers: false,
    picnic_table: false, 
    wifi: false, 
    bins: true, 
    activities: [
        "Hiking", "Paddling", "Biking", "Boating", "Fishing", "Wildlife Watching", "Swimming"
    ], 
    checkin_time: "After 11AM", 
    checkout_time: "Before 12PM",
    description: "Cappuccino Retreat is a flat, area in woods for tents. No visible neighbors. Very quiet, lush vegetation. One block from beautiful swimming/fishing lake and close to hiking. 4-6 miles from towns and beaches. One older woman lives in the house on the property. A table can  be supplied for tent campers if requested.",
    rating: 96
})

seattle_e_urls = [
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/seattle/seattlee/seattlee1.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/seattle/seattlee/seattlee2.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/seattle/seattlee/seattlee3.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/seattle/seattlee/seattlee4.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/seattle/seattlee/seattlee5.jpg"
]

seattle_e_urls.each_with_index do |url, i|
    seattle_e.photos.attach(io: open(url), filename: "seattle_e#{i+1}.jpg")
end

seattle_f = Campground.create!({
    host_id: gary_payton.id,
    name: "Arabica Camp", 
    location: "Seattle", 
    price: 50, 
    latitude: 47.865200, 
    longitude: -122.938294,
    min_nights: 1, 
    max_guests: 16, 
    num_sites: 3, 
    cabin: false,
    parking: false, 
    campfires: true,
    toilets: true, 
    pets: true, 
    potable_water: true, 
    kitchen: true, 
    showers: false,
    picnic_table: true, 
    wifi: false, 
    bins: true, 
    activities: [
        "Hiking", "Wildlife Watching"
    ], 
    checkin_time: "After 2PM", 
    checkout_time: "Before 12PM",
    description: "Do you feel closest to God in nature? Do you need to connect to Mother Earth? Old growth, creeks, peace, serenity, fairies, elementals, bald eagles, owls, deer, coyotes- Arabica Camp is a magical experience that immerses you in nature and all it's wonder. If you've been feeling like you need to get away, leave your electronics and your chaotic, busy lives behind, Mother Nature is calling you.",
    rating: 90
})

seattle_f_urls = [
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/seattle/seattlef/seattlef1.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/seattle/seattlef/seattlef2.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/seattle/seattlef/seattlef3.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/seattle/seattlef/seattlef4.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/seattle/seattlef/seattlef5.jpg"
]

seattle_f_urls.each_with_index do |url, i|
    seattle_f.photos.attach(io: open(url), filename: "seattle_f#{i+1}.jpg")
end

seattle_g = Campground.create!({
    host_id: shawn_kemp.id,
    name: "Peets Retreat", 
    location: "Seattle", 
    price: 25, 
    latitude: 47.334992, 
    longitude: -121.855188,
    min_nights: 1, 
    max_guests: 4, 
    num_sites: 4, 
    cabin: false,
    parking: true, 
    campfires: true,
    toilets: true, 
    pets: true, 
    potable_water: true, 
    kitchen: false, 
    showers: true,
    picnic_table: false, 
    wifi: false, 
    bins: false, 
    activities: [
        "Hiking", "Paddling", "Biking", "Boating", "Fishing", "Wildlife Watching", "Swimming", "Climbing", "Horseback Riding"
    ], 
    checkin_time: "After 2PM", 
    checkout_time: "Before 12PM",
    description: "We're smack in the middle of the Big Bottom valley with views of foothills (and hopefully a local elk herd) all around. Whether you're doing snow sports, water sports, or hiking the Gifford Pinchot and beyond, this is a great, low-cost space to plan your daytime adventures and enjoy some quiet relaxation on your return. You'll also have access to a toilet, shower, and communal fire pit. This property also has 4 hook-up sites. See our Best of the Big Bottom listing to book these.",
    rating: 99
})

seattle_g_urls = [
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/seattle/seattleg/seattleg1.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/seattle/seattleg/seattleg2.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/seattle/seattleg/seattleg3.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/seattle/seattleg/seattleg4.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/seattle/seattleg/seattleg5.jpg"
]

seattle_g_urls.each_with_index do |url, i|
    seattle_g.photos.attach(io: open(url), filename: "seattle_g#{i+1}.jpg")
end

seattle_h = Campground.create!({
    host_id: detlef_schrempf.id,
    name: "Cento Landing", 
    location: "Seattle", 
    price: 93, 
    latitude: 47.694003, 
    longitude: -121.654910,
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
        "Hiking", "Paddling", "Biking", "Boating", "Fishing", "Wildlife Watching", "Swimming", "Climbing", "Horseback Riding"
    ], 
    checkin_time: "After 2PM", 
    checkout_time: "Before 12PM",
    description: "Welcome to The Cento Landing - located on the South Fork Skykomish River, in the western foothills of the Cascade Mountains, off of Highway 2. With 16 acres of beautiful, private woods and breathtaking views of Mt. Index, this is a wonderful getaway to kick back and relax after your day of adventures, or just to escape the city rush. The campsite is at the bottom of a rugged drive so an SUV or AWD vehicle are recommended, especially during the wetter seasons of Spring and Fall.",
    rating: 98
})

seattle_h_urls = [
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/seattle/seattleh/seattleh1.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/seattle/seattleh/seattleh2.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/seattle/seattleh/seattleh3.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/seattle/seattleh/seattleh4.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/seattle/seattleh/seattleh5.jpg"
]

seattle_h_urls.each_with_index do |url, i|
    seattle_h.photos.attach(io: open(url), filename: "seattle_h#{i+1}.jpg")
end

seattle_i = Campground.create!({
    host_id: demo_user.id,
    name: "Blue Bottle Hill", 
    location: "Seattle", 
    price: 40, 
    latitude: 47.244941, 
    longitude: -121.589047,
    min_nights: 1, 
    max_guests: 8, 
    num_sites: 6, 
    cabin: false,
    parking: true, 
    campfires: true,
    toilets: true, 
    pets: true, 
    potable_water: true, 
    kitchen: false, 
    showers: false,
    picnic_table: true, 
    wifi: true, 
    bins: false, 
    activities: [
        "Hiking", "Paddling", "Biking", "Boating", "Fishing", "Wildlife Watching", "Swimming", "Climbing", "Horseback Riding"
    ], 
    checkin_time: "After 2PM", 
    checkout_time: "Before 12PM",
    description: "Enjoy our beautiful nestled private campground in the glorious Snoqualmie Valley near historic Carnation and the legendary Snoqualmie Falls. You can’t resist the trail system leading to thousands of trails for walking, running, horseback riding, rest and relaxation. Yes, we live here and hip camp generally encourages backyard camping, our backyard just happens to be a little forest that connects to a huge forest, that we are sharing with you!",
    rating: 95
})

seattle_i_urls = [
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/seattle/seattlei/seattlei1.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/seattle/seattlei/seattlei2.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/seattle/seattlei/seattlei3.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/seattle/seattlei/seattlei4.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/seattle/seattlei/seattlei5.jpg"
]

seattle_i_urls.each_with_index do |url, i|
    seattle_i.photos.attach(io: open(url), filename: "seattle_i#{i+1}.jpg")
end

## San Francisco =============================

sf_a = Campground.create!({
    host_id: andre_iguodala.id,
    name: "Equator Lane", 
    location: "San Francisco", 
    price: 100, 
    latitude: 38.109487, 
    longitude: -122.901408,
    min_nights: 1, 
    max_guests: 4, 
    num_sites: 1, 
    cabin: true,
    parking: true, 
    campfires: true,
    toilets: true, 
    pets: true, 
    potable_water: false, 
    kitchen: false, 
    showers: true,
    picnic_table: true, 
    wifi: false, 
    bins: false, 
    activities: [
        "Biking", "Fishing", "Hiking", "Paddling", "Wildlife Watching"
    ], 
    checkin_time: "After 2PM", 
    checkout_time: "Before 12PM",
    description: "Very peaceful and private immersion into the beautiful wild lands of the Coast. Amazing! Views! of Ocean and Coastal mountains. Great smells, lots of wildlife and star gazing! Bring everything you need for a camping trip from sleeping gear to ice chests. Gorgeous Canvas tent best for two, has a queen size memory foam pad..bring your own bedding. There is a deck, two comfy chairs, a fire pit, a picnic table and AWESOME VIEWS and PEACE!!",
    rating: 100
})
sf_a_urls = [
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/sanfrancisco/sfa/sfa1.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/sanfrancisco/sfa/sfa2.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/sanfrancisco/sfa/sfa3.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/sanfrancisco/sfa/sfa4.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/sanfrancisco/sfa/sfa5.jpg",
]
sf_a_urls.each_with_index do |url, i|
    sf_a.photos.attach(io: open(url), filename: "sf_a#{i+1}.jpg")
end

sf_b = Campground.create!({
    host_id: bob_myers.id,
    name: "Ritual Range", 
    location: "San Francisco", 
    price: 95, 
    latitude: 37.951498, 
    longitude: -122.654811,
    min_nights: 1, 
    max_guests: 2, 
    num_sites: 2, 
    cabin: false,
    parking: true, 
    campfires: true,
    toilets: true, 
    pets: false, 
    potable_water: true, 
    kitchen: true, 
    showers: true,
    picnic_table: true, 
    wifi: false, 
    bins: true, 
    activities: [
        "Biking", "Hiking", "Paddling", "Climbing", "Swimming", "Wildlife Watching"
    ], 
    checkin_time: "After 2PM", 
    checkout_time: "Before 12PM",
    description: "Our peaceful eight acre parcel is 13 miles from Santa Cruz, CA, minutes away from Big Basin and walking distance to downtown Boulder Creek. Your site is nestled in the redwoods with a gorgeous swimming pool available until midnight. The pool area has an outdoor shower, bathroom, and BBQ available to our campers.",
    rating: 93
})

sf_b_urls = [
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/sanfrancisco/sfb/sfb1.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/sanfrancisco/sfb/sfb2.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/sanfrancisco/sfb/sfb3.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/sanfrancisco/sfb/sfb4.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/sanfrancisco/sfb/sfb5.jpg"
]

sf_b_urls.each_with_index do |url, i|
    sf_b.photos.attach(io: open(url), filename: "sf_b#{i+1}.jpg")
end


sf_c = Campground.create!({
    host_id: shaun_livingston.id,
    name: "St. Frank Fort", 
    location: "San Francisco", 
    price: 55, 
    latitude: 37.240914, 
    longitude: -122.400996,
    min_nights: 1, 
    max_guests: 2, 
    num_sites: 1, 
    cabin: false,
    parking: true, 
    campfires: false,
    toilets: true, 
    pets: false, 
    potable_water: false, 
    kitchen: false, 
    showers: false,
    picnic_table: false, 
    wifi: false, 
    bins: false, 
    activities: [
        "Hiking", "Biking", "Wildlife Watching"
    ], 
    checkin_time: "After 5PM", 
    checkout_time: "Before 9AM",
    description: "This is a quiet, safe, beautiful and basic camp site (bring all you need) and place to park while on a coastal adventure. We provide long and detailed directions that will make perfect sense when you are traveling the nondescript country roads (be sure to have a saved copy that doesn't require connection) - to get you smoothly through horse fields with gates and safety considerations for all.",
    rating: 90
})

sf_c_urls = [
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/sanfrancisco/sfc/sfc1.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/sanfrancisco/sfc/sfc2.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/sanfrancisco/sfc/sfc3.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/sanfrancisco/sfc/sfc4.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/sanfrancisco/sfc/sfc5.jpg"
]

sf_c_urls.each_with_index do |url, i|
    sf_c.photos.attach(io: open(url), filename: "sf_c#{i+1}.jpg")
end

sf_d = Campground.create!({
    host_id: chris_mullin.id,
    name: "Counter Culture Camp", 
    location: "San Francisco", 
    price: 90, 
    latitude: 37.107933, 
    longitude: -121.867604,
    min_nights: 1, 
    max_guests: 8, 
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
        "Hiking", "Horseback Riding", "Biking", "Climbing", "Paddling", "Wildlife Watching"
    ], 
    checkin_time: "After 2PM", 
    checkout_time: "Before 1PM",
    description: "Counter Culture Camp offers secluded tranquility on the banks of Salmon Creek, home of collaborative efforts to restore native Coho Salmon. Up to 4 campers are included in the base price and sites can accommodate a few additional people, some more than others. If your group is larger than 4, please utilize the additional person feature.",
    rating: 96
})

sf_d_urls = [
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/sanfrancisco/sfd/sfd1.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/sanfrancisco/sfd/sfd2.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/sanfrancisco/sfd/sfd3.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/sanfrancisco/sfd/sfd4.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/sanfrancisco/sfd/sfd5.jpg"
]

sf_d_urls.each_with_index do |url, i|
    sf_d.photos.attach(io: open(url), filename: "sf_d#{i+1}.jpg")
end

sf_e = Campground.create!({
    host_id: tim_hardaway.id,
    name: "Wrecking Ball Valley", 
    location: "San Francisco", 
    price: 50, 
    latitude: 38.192011, 
    longitude: -122.369761,
    min_nights: 1, 
    max_guests: 2, 
    num_sites: 1, 
    cabin: false,
    parking: false, 
    campfires: false,
    toilets: true, 
    pets: false, 
    potable_water: true, 
    kitchen: false, 
    showers: true,
    picnic_table: true, 
    wifi: false, 
    bins: true, 
    activities: [
        "Hiking", "Paddling", "Biking", "Boating", "Fishing", "Wildlife Watching", "Swimming", "Climbing", "Horseback Riding"
    ], 
    checkin_time: "After 2PM", 
    checkout_time: "Before 12PM",
    description: "Pitch your tent in a pretty private flower garden in a charming coastal town less than an hour from San Francisco. The site is surrounded by state and national parks accommodating many recreational activities. We have added an outdoor shower and a place to store surfboards.Brighton and Wharf Rd. Beach are both good surfing spots.",
    rating: 96
})

sf_e_urls = [
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/sanfrancisco/sfe/sfe1.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/sanfrancisco/sfe/sfe2.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/sanfrancisco/sfe/sfe3.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/sanfrancisco/sfe/sfe4.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/sanfrancisco/sfe/sfe5.jpg"
]

sf_e_urls.each_with_index do |url, i|
    sf_e.photos.attach(io: open(url), filename: "sf_e#{i+1}.jpg")
end

sf_f = Campground.create!({
    host_id: andre_iguodala.id,
    name: "Tartine Turnaround", 
    location: "San Francisco", 
    price: 70, 
    latitude: 37.251282, 
    longitude: -121.371633,
    min_nights: 1, 
    max_guests: 4, 
    num_sites: 15, 
    cabin: false,
    parking: true, 
    campfires: false,
    toilets: true, 
    pets: false, 
    potable_water: true, 
    kitchen: true, 
    showers: true,
    picnic_table: true, 
    wifi: true, 
    bins: true, 
    activities: [
        "Hiking", "Wildlife Watching", "Swimming"
    ], 
    checkin_time: "After 9AM", 
    checkout_time: "Before 11AM",
    description: "Pitch your tent in one of a dozen clothing-optional spots... in the woods or on the grass! Camping spot is close to the bathrooms (flushable) and showers and restaurant! Still has a very quaint feeling, with deer on your lawn, wild turkeys wandering around and plenty of wildlife. Safe and affordable.",
    rating: 90
})

sf_f_urls = [
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/sanfrancisco/sff/sff1.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/sanfrancisco/sff/sff2.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/sanfrancisco/sff/sff3.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/sanfrancisco/sff/sff4.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/sanfrancisco/sff/sff5.jpg"
]

sf_f_urls.each_with_index do |url, i|
    sf_f.photos.attach(io: open(url), filename: "sf_f#{i+1}.jpg")
end

sf_g = Campground.create!({
    host_id: bob_myers.id,
    name: "Andytown Townhome", 
    location: "San Francisco", 
    price: 175, 
    latitude: 38.427953, 
    longitude: -122.504448,
    min_nights: 1, 
    max_guests: 4, 
    num_sites: 3, 
    cabin: true,
    parking: false, 
    campfires: true,
    toilets: true, 
    pets: true, 
    potable_water: true, 
    kitchen: true, 
    showers: true,
    picnic_table: true, 
    wifi: true, 
    bins: true, 
    activities: [
        "Hiking", "Paddling", "Biking", "Boating", "Fishing", "Wildlife Watching", "Swimming"
    ], 
    checkin_time: "After 3PM", 
    checkout_time: "Before 12PM",
    description: "Our site is a 10-acre homestead and working organic farm close to epic beaches and wide open nature in Bolinas. We're surrounded by preserved agricultural property and Pt. Reyes National Seashore. You’ll love our land because of the bounty of organic produce from our on-site farm, our cute sheep and llamas, abundant bird and wildlife, nearby hiking trails, surf spots and live music at Smiley's Saloon.",
    rating: 99
})

sf_g_urls = [
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/sanfrancisco/sfg/sfg1.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/sanfrancisco/sfg/sfg2.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/sanfrancisco/sfg/sfg3.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/sanfrancisco/sfg/sfg4.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/sanfrancisco/sfg/sfg5.jpg"
]

sf_g_urls.each_with_index do |url, i|
    sf_g.photos.attach(io: open(url), filename: "sf_g#{i+1}.jpg")
end

sf_h = Campground.create!({
    host_id: andre_iguodala.id,
    name: "Port of Mokha Road", 
    location: "San Francisco", 
    price: 50, 
    latitude: 37.047405, 
    longitude: -121.201844,
    min_nights: 1, 
    max_guests: 5, 
    num_sites: 5, 
    cabin: false,
    parking: true, 
    campfires: false,
    toilets: true, 
    pets: false, 
    potable_water: true, 
    kitchen: false, 
    showers: false,
    picnic_table: true, 
    wifi: false, 
    bins: true, 
    activities: [
        "Hiking", "Biking", "Fishing"
    ], 
    checkin_time: "After 2PM", 
    checkout_time: "Before 12PM",
    description: "We are the working mini farm. If you like to wake up with the roosters and enjoy the farm life, this place is for you. If you are a light sleeper we recommend to bring the ear plugs. We have chickens, pigeons, pet emu and rhea, ponies and goats. Please, let us know if you will be arriving with the RV or the tent - it will help us to provide you with an appropriate site for your stay.",
    rating: 98
})

sf_h_urls = [
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/sanfrancisco/sfh/sfh1.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/sanfrancisco/sfh/sfh2.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/sanfrancisco/sfh/sfh3.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/sanfrancisco/sfh/sfh4.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/sanfrancisco/sfh/sfh5.jpg"
]

sf_h_urls.each_with_index do |url, i|
    sf_h.photos.attach(io: open(url), filename: "sf_h#{i+1}.jpg")
end

sf_i = Campground.create!({
    host_id: demo_user.id,
    name: "Fellow Farm", 
    location: "San Francisco", 
    price: 40, 
    latitude: 38.005405, 
    longitude: -122.985243,
    min_nights: 1, 
    max_guests: 5, 
    num_sites: 16, 
    cabin: true,
    parking: false, 
    campfires: true,
    toilets: true, 
    pets: false, 
    potable_water: true, 
    kitchen: false, 
    showers: false,
    picnic_table: true, 
    wifi: false, 
    bins: false, 
    activities: [
        "Hiking", "Biking", "Fishing", "Wildlife Watching", "Climbing", "Horseback Riding"
    ], 
    checkin_time: "After 2PM", 
    checkout_time: "Before 12PM",
    description: "Get in on a little secret that lies just across the Golden Gate Bridge from San Francisco. Let us introduce you to the elusive Steep Ravine Cabins and Campground in Marin. On Mt. Tamalpais, just to the north of the city, there are a group of wooden structures that date back to the 1940s. They are insanely popular and rightfully so. Each cabin features a wood stove, picnic table and several benches, sleeping platforms, and of course, an outdoor barbeque.",
    rating: 95
})

sf_i_urls = [
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/sanfrancisco/sfi/sfi1.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/sanfrancisco/sfi/sfi2.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/sanfrancisco/sfi/sfi3.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/sanfrancisco/sfi/sfi4.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/sanfrancisco/sfi/sfi5.jpg"
]

sf_i_urls.each_with_index do |url, i|
    sf_i.photos.attach(io: open(url), filename: "sf_i#{i+1}.jpg")
end

## New York ====================================

ny_a = Campground.create!({
    host_id: spencer_dinwiddie.id,
    name: "Parlor Place", 
    location: "New York", 
    price: 55, 
    latitude: 41.059693, 
    longitude: -74.321836,
    min_nights: 2, 
    max_guests: 3, 
    num_sites: 5, 
    cabin: false,
    parking: false, 
    campfires: true,
    toilets: true, 
    pets: false, 
    potable_water: true, 
    kitchen: false, 
    showers: true,
    picnic_table: true, 
    wifi: false, 
    bins: false, 
    activities: [
        "Fishing", "Hiking", "Paddling", "Wildlife Watching"
    ], 
    checkin_time: "After 1PM", 
    checkout_time: "Before 11AM",
    description: "No Car? No Gear ? No Problem! We are a Hike in-Hike out Campground. The easiest way to access the campground is to take the Metro North Hudson Line to the Beacon Train Station. If arriving by car, you can park at the Beacon train station free on weekends. While you enjoy your hike in, we can take your gear to your campsite.",
    rating: 100
})
ny_a_urls = [
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/newyork/nya/nya1.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/newyork/nya/nya2.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/newyork/nya/nya3.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/newyork/nya/nya4.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/newyork/nya/nya5.jpg",
]
ny_a_urls.each_with_index do |url, i|
    ny_a.photos.attach(io: open(url), filename: "ny_a#{i+1}.jpg")
end

ny_b = Campground.create!({
    host_id: caris_levert.id,
    name: "Spectrum Stream", 
    location: "New York", 
    price: 30, 
    latitude: 40.699535, 
    longitude: -74.449412,
    min_nights: 1, 
    max_guests: 10, 
    num_sites: 4, 
    cabin: false,
    parking: true, 
    campfires: true,
    toilets: true, 
    pets: false, 
    potable_water: true, 
    kitchen: true, 
    showers: true,
    picnic_table: true, 
    wifi: false, 
    bins: true, 
    activities: [
        "Biking", "Hiking", "Paddling", "Climbing", "Swimming", "Wildlife Watching", "Horseback Riding", "Fishing", "Boating"
    ], 
    checkin_time: "After 2PM", 
    checkout_time: "Before 12PM",
    description: "Pitch your Tent on a 100 year old working horse farm, with a little petting zoo that includes, goats, ducks, geese, chickens and a turkey. Beautiful setting with views of the Horses grazing. Quiet Surroundings near many local activities, close to Large Parks and Peddlers Village. Tour the stables to meet our horses or sign up for a Horseback Ride.",
    rating: 93
})

ny_b_urls = [
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/newyork/nyb/nyb1.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/newyork/nyb/nyb2.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/newyork/nyb/nyb3.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/newyork/nyb/nyb4.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/newyork/nyb/nyb5.jpg"
]

ny_b_urls.each_with_index do |url, i|
    ny_b.photos.attach(io: open(url), filename: "ny_b#{i+1}.jpg")
end


ny_c = Campground.create!({
    host_id: deandre_jordan.id,
    name: "Felix Fairgrounds", 
    location: "New York", 
    price: 70, 
    latitude: 41.144728, 
    longitude: -74.152769,
    min_nights: 2, 
    max_guests: 3, 
    num_sites: 5, 
    cabin: false,
    parking: false, 
    campfires: true,
    toilets: true, 
    pets: false, 
    potable_water: true, 
    kitchen: true, 
    showers: true,
    picnic_table: true, 
    wifi: false, 
    bins: false, 
    activities: [
        "Hiking", "Fishing", "Wildlife Watching", "Paddling"
    ], 
    checkin_time: "After 1PM", 
    checkout_time: "Before 11AM",
    description: "Upon arrival, the first thing you'll notice is the privacy of each site. You will find your Tarp covered fire pit area with a grate that flips over for cooking. You will see your covered platform which is especially nice because you're not stuck in your tent if it rains. You can bring your own tent or rent one from us. Then, there is our chow box - it has everything you will need for your stay, from pots and pans to a pad of paper and a deck of cards.",
    rating: 90
})

ny_c_urls = [
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/newyork/nyc/nyc1.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/newyork/nyc/nyc2.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/newyork/nyc/nyc3.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/newyork/nyc/nyc4.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/newyork/nyc/nyc5.jpg"
]

ny_c_urls.each_with_index do |url, i|
    ny_c.photos.attach(io: open(url), filename: "ny_c#{i+1}.jpg")
end

ny_d = Campground.create!({
    host_id: kevin_durant.id,
    name: "Stumptown Townhouse", 
    location: "New York", 
    price: 30, 
    latitude: 39.876368, 
    longitude: -74.508616,
    min_nights: 1, 
    max_guests: 10, 
    num_sites: 20, 
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
    bins: true, 
    activities: [
        "Hiking", "Horseback Riding", "Biking", "Climbing", "Paddling", "Wildlife Watching", "Fishing", "Boating", "Swimming"
    ], 
    checkin_time: "After 2PM", 
    checkout_time: "Before 12PM",
    description: "Tent or van camp on a working horse farm. Beautiful setting with a pond. Many local activities and hosts would be happy to give you a tour of the stables to meet the champion show horses.",
    rating: 96
})

ny_d_urls = [
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/newyork/nyd/nyd1.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/newyork/nyd/nyd2.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/newyork/nyd/nyd3.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/newyork/nyd/nyd4.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/newyork/nyd/nyd5.jpg"
]

ny_d_urls.each_with_index do |url, i|
    ny_d.photos.attach(io: open(url), filename: "ny_d#{i+1}.jpg")
end

ny_e = Campground.create!({
    host_id: kyrie_irving.id,
    name: "Central Perk Park", 
    location: "New York", 
    price: 88, 
    latitude: 39.937341, 
    longitude: -74.268884,
    min_nights: 1, 
    max_guests: 12, 
    num_sites: 1, 
    cabin: false,
    parking: false, 
    campfires: true,
    toilets: true, 
    pets: true, 
    potable_water: true, 
    kitchen: false, 
    showers: false,
    picnic_table: true, 
    wifi: false, 
    bins: true, 
    activities: [
        "Hiking", "Paddling", "Biking", "Boating", "Fishing", "Wildlife Watching", "Swimming", "Climbing", "Horseback Riding"
    ], 
    checkin_time: "After 1PM", 
    checkout_time: "Before 12PM",
    description: "Private Campsite for your family or friends. Single camp site that is secluded but still close to everything. 20+ acres of a 46 acre property are set aside for guest campers.  2 miles from the town of Palmerton, 2 miles to Blue Mountain Ski Resort, close to Beltzville State Park and Lehigh Gap (Appalachian Trail). Hiking trails, rock climbing and a nice stream are features of our property that we are happy to share with our guests.",
    rating: 96
})

ny_e_urls = [
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/newyork/nye/nye1.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/newyork/nye/nye2.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/newyork/nye/nye3.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/newyork/nye/nye4.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/newyork/nye/nye5.jpg"
]

ny_e_urls.each_with_index do |url, i|
    ny_e.photos.attach(io: open(url), filename: "ny_e#{i+1}.jpg")
end

ny_f = Campground.create!({
    host_id: spencer_dinwiddie.id,
    name: "Gibralter Garden", 
    location: "New York", 
    price: 60, 
    latitude: 41.269475, 
    longitude: -74.080280,
    min_nights: 1, 
    max_guests: 12, 
    num_sites: 1, 
    cabin: false,
    parking: true, 
    campfires: true,
    toilets: true, 
    pets: true, 
    potable_water: true, 
    kitchen: false, 
    showers: false,
    picnic_table: true, 
    wifi: false, 
    bins: true, 
    activities: [
        "Hiking", "Wildlife Watching", "Biking", "Climbing", "Fishing"
    ], 
    checkin_time: "After 3PM", 
    checkout_time: "Before 11AM",
    description: "Winery by day, campgrounds by night. Our secluded field is the perfect spot to pitch a tent and enjoy a night away from the noise. A roaring fire is a must as many can sit around in our tables and chairs and feel the heat from our 5 foot diameter fire pit! Many local hiking, fishing, and climbing spots nearby just a few miles away from our location.",
    rating: 90
})

ny_f_urls = [
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/newyork/nyf/nyf1.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/newyork/nyf/nyf2.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/newyork/nyf/nyf3.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/newyork/nyf/nyf4.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/newyork/nyf/nyf5.jpg"
]

ny_f_urls.each_with_index do |url, i|
    ny_f.photos.attach(io: open(url), filename: "ny_f#{i+1}.jpg")
end

ny_g = Campground.create!({
    host_id: kyrie_irving.id,
    name: "Drip Down Driveway", 
    location: "New York", 
    price: 100, 
    latitude: 41.483814, 
    longitude: -73.446773,
    min_nights: 1, 
    max_guests: 55, 
    num_sites: 5, 
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
        "Hiking", "Paddling", "Biking", "Fishing", "Wildlife Watching", "Horseback Riding"
    ], 
    checkin_time: "After 11AM", 
    checkout_time: "Before 12PM",
    description: "Pitch your tent in our hay field or set up a spot in the woods. Fish off our dock. Dark skies for viewing the stars.",
    rating: 99
})

ny_g_urls = [
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/newyork/nyg/nyg1.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/newyork/nyg/nyg2.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/newyork/nyg/nyg3.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/newyork/nyg/nyg4.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/newyork/nyg/nyg5.jpg"
]

ny_g_urls.each_with_index do |url, i|
    ny_g.photos.attach(io: open(url), filename: "ny_g#{i+1}.jpg")
end

ny_h = Campground.create!({
    host_id: kevin_durant.id,
    name: "Flora Fauna", 
    location: "New York", 
    price: 100, 
    latitude: 41.269164, 
    longitude: -73.319031,
    min_nights: 1, 
    max_guests: 4, 
    num_sites: 1, 
    cabin: true,
    parking: false, 
    campfires: true,
    toilets: true, 
    pets: true, 
    potable_water: true, 
    kitchen: false, 
    showers: true,
    picnic_table: true, 
    wifi: false, 
    bins: true, 
    activities: [
        "Hiking", "Swimming", "Fishing", "Paddling", "Boating"
    ], 
    checkin_time: "After 3PM", 
    checkout_time: "Before 11AM",
    description: "Enjoy a farm stay in our luxurious yurt tent complete with queen size bed and outdoor shower. Meet the goats, cows, ducks, chickens and our pony, Mr. BoJangles, and have a walk around the acre plot of permaculture grown produce. Stop into the farm shop, The Shack and purchase some maple syrup, jam and whatever is in season. Plenty of things to do locally.",
    rating: 98
})

ny_h_urls = [
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/newyork/nyh/nyh1.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/newyork/nyh/nyh2.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/newyork/nyh/nyh3.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/newyork/nyh/nyh4.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/newyork/nyh/nyh5.jpg"
]

ny_h_urls.each_with_index do |url, i|
    ny_h.photos.attach(io: open(url), filename: "ny_h#{i+1}.jpg")
end

ny_i = Campground.create!({
    host_id: caris_levert.id,
    name: "Everyman Everglade", 
    location: "New York", 
    price: 60, 
    latitude: 41.268733, 
    longitude: -74.657088,
    min_nights: 1, 
    max_guests: 5, 
    num_sites: 5, 
    cabin: true,
    parking: true, 
    campfires: true,
    toilets: true, 
    pets: true, 
    potable_water: true, 
    kitchen: false, 
    showers: false,
    picnic_table: true, 
    wifi: true, 
    bins: true, 
    activities: [
        "Hiking", "Biking", "Wildlife Watching", "Horseback Riding", "Boating", "Swimming"
    ], 
    checkin_time: "After 12PM", 
    checkout_time: "Before 12PM",
    description: "33 acres with 23 wooded marked hiking trails. Wake up to four Majestic Mustangs and two beautiful Puerto Rican Paso Finos. You can ride them for an additional fee. Splashdown water park is 1 mile away. Hudson River boat rides available 15 minutes away. Scenic dining on the Hudson River waterfront 15 minutes away. Very private and secluded yet minutes away from major attractions.",
    rating: 95
})

ny_i_urls = [
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/newyork/nyi/nyi1.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/newyork/nyi/nyi2.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/newyork/nyi/nyi3.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/newyork/nyi/nyi4.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/newyork/nyi/nyi5.jpg"
]

ny_i_urls.each_with_index do |url, i|
    ny_i.photos.attach(io: open(url), filename: "ny_i#{i+1}.jpg")
end

## Chicago =================================

chi_a = Campground.create!({
    host_id: lauri_markkanen.id,
    name: "Metric Metro", 
    location: "Chicago", 
    price: 100, 
    latitude: 41.373866, 
    longitude: -88.072522,
    min_nights: 2, 
    max_guests: 2, 
    num_sites: 1, 
    cabin: true,
    parking: true, 
    campfires: true,
    toilets: true, 
    pets: false, 
    potable_water: true, 
    kitchen: true, 
    showers: true,
    picnic_table: false, 
    wifi: true, 
    bins: true, 
    activities: [
        "Fishing", "Hiking", "Paddling", "Wildlife Watching", "Biking", "Swimming", "Horseback Riding", "Swimming", "Boating"
    ], 
    checkin_time: "After 3PM", 
    checkout_time: "Before 11AM",
    description: "Enjoy nightly hot tub soaks and bon fires at our cozy woodland retreat! Beer and wine taste by day and enjoy the leaves changing in Michigan or watch the big game and we'll have the wood fired hot tub stoked for you when you return.",
    rating: 100
})
chi_a_urls = [
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/chicago/chia/chia1.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/chicago/chia/chia2.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/chicago/chia/chia3.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/chicago/chia/chia4.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/chicago/chia/chia5.jpg",
]
chi_a_urls.each_with_index do |url, i|
    chi_a.photos.attach(io: open(url), filename: "chi_a#{i+1}.jpg")
end

chi_b = Campground.create!({
    host_id: derrick_rose.id,
    name: "Ipsento Social", 
    location: "Chicago", 
    price: 45, 
    latitude: 41.167634, 
    longitude: -87.513858,
    min_nights: 1, 
    max_guests: 6, 
    num_sites: 1, 
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
    bins: true, 
    activities: [
        "Biking", "Hiking", "Swimming", "Wildlife Watching", "Fishing", "Boating"
    ], 
    checkin_time: "After 2PM", 
    checkout_time: "Before 12PM",
    description: "Nice wooded campsite with plenty of shade beside a meadow and a working vineyard. Mixed farm and woodland setting with many surrounding activities..... 10 Wineries and Tasting Rooms within a 3 mile radius. Lake Michigan about 8 miles away and easy access.",
    rating: 93
})

chi_b_urls = [
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/chicago/chib/chib1.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/chicago/chib/chib2.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/chicago/chib/chib3.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/chicago/chib/chib4.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/chicago/chib/chib5.jpg"
]

chi_b_urls.each_with_index do |url, i|
    chi_b.photos.attach(io: open(url), filename: "chi_b#{i+1}.jpg")
end


chi_c = Campground.create!({
    host_id: luol_deng.id,
    name: "606 Circle", 
    location: "Chicago", 
    price: 25, 
    latitude: 42.411185, 
    longitude: -88.325969,
    min_nights: 1, 
    max_guests: 6, 
    num_sites: 6, 
    cabin: false,
    parking: true, 
    campfires: true,
    toilets: true, 
    pets: true, 
    potable_water: true, 
    kitchen: false, 
    showers: true,
    picnic_table: true, 
    wifi: false, 
    bins: true, 
    activities: [
        "Hiking", "Biking", "Wildlife Watching", "Climbing"
    ], 
    checkin_time: "After 2PM", 
    checkout_time: "Before 12PM",
    description: "Pitch your tent in under the shade of our mature oak trees. Our park like camping area over looks our own Triple Sweet Bi-Color Sweet Corn field and Honeycrisp Apple Orchard. Free firewood is available for your own personal bon fire under the stars.",
    rating: 90
})

chi_c_urls = [
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/chicago/chic/chic1.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/chicago/chic/chic2.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/chicago/chic/chic3.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/chicago/chic/chic4.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/chicago/chic/chic5.jpg"
]

chi_c_urls.each_with_index do |url, i|
    chi_c.photos.attach(io: open(url), filename: "chi_c#{i+1}.jpg")
end

chi_d = Campground.create!({
    host_id: scottie_pippen.id,
    name: "Bow Truss BLVD", 
    location: "Chicago", 
    price: 25, 
    latitude: 41.952736, 
    longitude: -89.348121,
    min_nights: 1, 
    max_guests: 7, 
    num_sites: 5, 
    cabin: false,
    parking: true, 
    campfires: true,
    toilets: true, 
    pets: true, 
    potable_water: true, 
    kitchen: false, 
    showers: true,
    picnic_table: true, 
    wifi: false, 
    bins: true, 
    activities: [
        "Biking", "Swimming", "Hiking", "Wildlife Watching"
    ], 
    checkin_time: "After 2PM", 
    checkout_time: "Before 12PM",
    description: "One acre surrounded by crops basically down the road from the Kankakee State Park. Pitch a tent or pull your camper in easy to forget you are only one hour from the city. Have a fire under the stars or swim in the pool (weather permitting), cook on the grill or open fire. Fires can be dug anywhere you like just return the grass after.",
    rating: 96
})

chi_d_urls = [
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/chicago/chid/chid1.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/chicago/chid/chid2.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/chicago/chid/chid3.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/chicago/chid/chid4.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/chicago/chid/chid5.jpg"
]

chi_d_urls.each_with_index do |url, i|
    chi_d.photos.attach(io: open(url), filename: "chi_d#{i+1}.jpg")
end

chi_e = Campground.create!({
    host_id: michael_jordan.id,
    name: "Halfwit Hill", 
    location: "Chicago", 
    price: 50, 
    latitude: 42.085184, 
    longitude: -86.264329,
    min_nights: 1, 
    max_guests: 8, 
    num_sites: 1, 
    cabin: false,
    parking: true, 
    campfires: true,
    toilets: true, 
    pets: true, 
    potable_water: true, 
    kitchen: false, 
    showers: false,
    picnic_table: true, 
    wifi: false, 
    bins: false, 
    activities: [
        "Biking", "Wildlife Watching", "Hiking", "Climbing"
    ], 
    checkin_time: "After 2PM", 
    checkout_time: "Before 12PM",
    description: "This campsite is in the middle of Halfwit Hill, an established certified organic apple orchard in SW Michigan. The farm is 49 acres, with the campsite being in a soft hollow about 200 feet wide separating 2 blocks of trees. Very quiet at night. In the day, depending on the season, there are farm activities taking place. Firewood is provided and fresh organic produce is available in season.",
    rating: 96
})

chi_e_urls = [
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/chicago/chie/chie1.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/chicago/chie/chie2.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/chicago/chie/chie3.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/chicago/chie/chie4.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/chicago/chie/chie5.jpg"
]

chi_e_urls.each_with_index do |url, i|
    chi_e.photos.attach(io: open(url), filename: "chi_e#{i+1}.jpg")
end

chi_f = Campground.create!({
    host_id: lauri_markkanen.id,
    name: "Caffe Streets Lane", 
    location: "Chicago", 
    price: 160, 
    latitude: 41.880831, 
    longitude: -86.499916,
    min_nights: 2, 
    max_guests: 6, 
    num_sites: 6, 
    cabin: true,
    parking: true, 
    campfires: true,
    toilets: true, 
    pets: true, 
    potable_water: true, 
    kitchen: true, 
    showers: true,
    picnic_table: true, 
    wifi: true, 
    bins: true, 
    activities: [
        "Hiking", "Wildlife Watching", "Biking", "Climbing", "Fishing", "Swimming", "Paddling", "Boating"
    ], 
    checkin_time: "After 3PM", 
    checkout_time: "Before 12PM",
    description: "Breweries, Wineries, Berry Picking, Art Studios, Farmers Markets, hiking trails, biking trails, Lake Michigan boating, kayaking, fishing, canoeing.......all those things and more await you in Southwest Michigan.",
    rating: 90
})

chi_f_urls = [
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/chicago/chif/chif1.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/chicago/chif/chif2.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/chicago/chif/chif3.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/chicago/chif/chif4.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/chicago/chif/chif5.jpg"
]

chi_f_urls.each_with_index do |url, i|
    chi_f.photos.attach(io: open(url), filename: "chi_f#{i+1}.jpg")
end

chi_g = Campground.create!({
    host_id: michael_jordan.id,
    name: "Tonic Turnpike", 
    location: "Chicago", 
    price: 30, 
    latitude: 42.598931, 
    longitude: -88.174043,
    min_nights: 1, 
    max_guests: 6, 
    num_sites: 2, 
    cabin: false,
    parking: true, 
    campfires: true,
    toilets: true, 
    pets: true, 
    potable_water: true, 
    kitchen: true, 
    showers: true,
    picnic_table: false, 
    wifi: true, 
    bins: false, 
    activities: [
        "Hiking", "Paddling", "Biking", "Fishing", "Wildlife Watching", "Horseback Riding", "Swimming", "Climbing", "Boating"
    ], 
    checkin_time: "After 2PM", 
    checkout_time: "Before 12PM",
    description: "Breakaway from it all, grab your gear and head to Breakaway Stables where you will experience a beautiful panoramic view of Blue Mounds State Park located in the Driftless Area of southern WI. Enjoy being in the presence of equine energy from near or far depending on your comfort level.",
    rating: 99
})

chi_g_urls = [
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/chicago/chig/chig1.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/chicago/chig/chig2.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/chicago/chig/chig3.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/chicago/chig/chig4.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/chicago/chig/chig5.jpg"
]

chi_g_urls.each_with_index do |url, i|
    chi_g.photos.attach(io: open(url), filename: "chi_g#{i+1}.jpg")
end

chi_h = Campground.create!({
    host_id: scottie_pippen.id,
    name: "Long Pull Lake", 
    location: "Chicago", 
    price: 75, 
    latitude: 42.707127, 
    longitude: -88.618714,
    min_nights: 1, 
    max_guests: 6, 
    num_sites: 3, 
    cabin: false,
    parking: true, 
    campfires: true,
    toilets: true, 
    pets: false, 
    potable_water: true, 
    kitchen: true, 
    showers: true,
    picnic_table: true, 
    wifi: true, 
    bins: true, 
    activities: [
        "Hiking", "Swimming", "Fishing", "Paddling", "Boating", "Biking", "Horseback Riding", "Wildlife Watching"
    ], 
    checkin_time: "After 12PM", 
    checkout_time: "Before 3PM",
    description: "We are in Driftless Southwest Wisconsin - gorgeous hills and quilted cropland bisected by oak woods and switchback rivers. Pitch your tent or park a small camper/rv as close as the backyard or further away by the sheep pasture or frog pond. You'll share the house bathrooms and join us for a big farmhouse breakfast.",
    rating: 98
})

chi_h_urls = [
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/chicago/chih/chih1.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/chicago/chih/chih2.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/chicago/chih/chih3.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/chicago/chih/chih4.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/chicago/chih/chih5.jpg"
]

chi_h_urls.each_with_index do |url, i|
    chi_h.photos.attach(io: open(url), filename: "chi_h#{i+1}.jpg")
end

chi_i = Campground.create!({
    host_id: derrick_rose.id,
    name: "Cortado Ranch", 
    location: "Chicago", 
    price: 28, 
    latitude: 42.026932, 
    longitude: -85.882774,
    min_nights: 1, 
    max_guests: 20, 
    num_sites: 1, 
    cabin: false,
    parking: true, 
    campfires: true,
    toilets: true, 
    pets: true, 
    potable_water: true, 
    kitchen: true, 
    showers: false,
    picnic_table: false, 
    wifi: false, 
    bins: true, 
    activities: [
        "Hiking", "Biking", "Wildlife Watching", "Boating", "Swimming", "Fishing"
    ], 
    checkin_time: "After 1PM", 
    checkout_time: "Before 12PM",
    description: "Pitch the tent or set up your small camper, bring the family, including the pets and enjoy nature at its finest. Our private 1 acre site is backed up to hundreds of acres of Michigan forest. A storage shed features electricity that can be run anywhere on site (cord provided), a camping toilet (waist bags available at Walmart) and small travel grill (charcoal not included).",
    rating: 95
})

chi_i_urls = [
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/chicago/chii/chii1.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/chicago/chii/chii2.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/chicago/chii/chii3.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/chicago/chii/chii4.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/chicago/chii/chii5.jpg"
]

chi_i_urls.each_with_index do |url, i|
    chi_i.photos.attach(io: open(url), filename: "chi_i#{i+1}.jpg")
end

## Los Angeles ================================

la_a = Campground.create!({
    host_id: earvin_johnson.id,
    name: "Go Get'em Greens", 
    location: "Los Angeles", 
    price: 50, 
    latitude: 34.151726, 
    longitude: -117.857843,
    min_nights: 1, 
    max_guests: 5, 
    num_sites: 2, 
    cabin: false,
    parking: false, 
    campfires: true,
    toilets: true, 
    pets: false, 
    potable_water: true, 
    kitchen: true, 
    showers: true,
    picnic_table: true, 
    wifi: false, 
    bins: false, 
    activities: [
        "Biking", "Hiking", "Climbing", "Wildlife Watching"
    ], 
    checkin_time: "After 4PM", 
    checkout_time: "Before 2PM",
    description: "For a truly unique experience pitch your tent on a small bluff overlooking the home of over 40 gibbons and listen to them sing as you peacefully sip your morning coffee. With just a short drive from the hustle bustle find yourself a world away in ranch country, where the earth is parched, the sunsets are fiery and the night sky is filled with stars.",
    rating: 100
})
la_a_urls = [
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/losangeles/laa/laa1.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/losangeles/laa/laa2.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/losangeles/laa/laa3.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/losangeles/laa/laa4.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/losangeles/laa/laa5.jpg",
]
la_a_urls.each_with_index do |url, i|
    la_a.photos.attach(io: open(url), filename: "la_a#{i+1}.jpg")
end

la_b = Campground.create!({
    host_id: kyle_kuzma.id,
    name: "Tiger Trails", 
    location: "Los Angeles", 
    price: 95, 
    latitude: 34.238234, 
    longitude: -118.237298,
    min_nights: 1, 
    max_guests: 5, 
    num_sites: 1, 
    cabin: true,
    parking: true, 
    campfires: false,
    toilets: true, 
    pets: false, 
    potable_water: true, 
    kitchen: false, 
    showers: true,
    picnic_table: true, 
    wifi: true, 
    bins: true, 
    activities: [
        "Biking", "Hiking", "Surfing", "Climbing", "Swimming", "Wildlife Watching"
    ], 
    checkin_time: "After 3PM", 
    checkout_time: "Before 11AM",
    description: "Adorable diminutive vintage mid-century travel-trailer nestled under a big tree, with queen-sized bed, mini-kitchen and heater inside. Outside, it is surrounded by outdoor rooms -- an outdoor bedroom with a king-sized bed under a canopy, plus an outdoor kitchen and bath under a translucent roof. The bathroom has a big two-person clawfoot tub and an antique marble sink.",
    rating: 93
})

la_b_urls = [
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/losangeles/lab/lab1.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/losangeles/lab/lab2.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/losangeles/lab/lab3.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/losangeles/lab/lab4.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/losangeles/lab/lab5.jpg"
]

la_b_urls.each_with_index do |url, i|
    la_b.photos.attach(io: open(url), filename: "la_b#{i+1}.jpg")
end


la_c = Campground.create!({
    host_id: lebron_james.id,
    name: "Pourover Park", 
    location: "Los Angeles", 
    price: 95, 
    latitude: 34.170961, 
    longitude: -117.608683,
    min_nights: 1, 
    max_guests: 2, 
    num_sites: 1, 
    cabin: true,
    parking: true, 
    campfires: true,
    toilets: true, 
    pets: true, 
    potable_water: true, 
    kitchen: true, 
    showers: true,
    picnic_table: true, 
    wifi: false, 
    bins: true, 
    activities: [
        "Hiking", "Biking", "Wildlife Watching"
    ], 
    checkin_time: "After 2PM", 
    checkout_time: "Before 12PM",
    description: "Pourover Park was established in 1893 and is located, ONLY via hiking trails, 4.25 miles from Chantry Flat in the Angeles National Forest. The Honeymoon Cottage is the third oldest building in Camp, dating back to the 1920’s. It is the last of many identical cabins that dotted the grounds of Sturtevant Camp.",
    rating: 90
})

la_c_urls = [
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/losangeles/lac/lac1.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/losangeles/lac/lac2.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/losangeles/lac/lac3.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/losangeles/lac/lac4.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/losangeles/lac/lac5.jpg"
]

la_c_urls.each_with_index do |url, i|
    la_c.photos.attach(io: open(url), filename: "la_c#{i+1}.jpg")
end

la_d = Campground.create!({
    host_id: kawhi_leonard.id,
    name: "Tectonic Trailhead", 
    location: "Los Angeles", 
    price: 25, 
    latitude: 34.436056, 
    longitude: -118.438822,
    min_nights: 1, 
    max_guests: 6, 
    num_sites: 6, 
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
    bins: true, 
    activities: [
        "Hiking", "Fishing", "Biking", "Climbing", "Wildlife Watching"
    ], 
    checkin_time: "After 9AM", 
    checkout_time: "Before 1PM",
    description: "We are fully fenced and private. Direct access to the desert for OHV riding and less than 2 miles to the Angeles National Forest. Plenty of hiking and exploring to do. It's a short drive into the Angeles National Forest and to dedicated climbing and hiking areas. Your dogs can run off-leash here.",
    rating: 96
})

la_d_urls = [
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/losangeles/lad/lad1.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/losangeles/lad/lad2.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/losangeles/lad/lad3.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/losangeles/lad/lad4.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/losangeles/lad/lad5.jpg"
]

la_d_urls.each_with_index do |url, i|
    la_d.photos.attach(io: open(url), filename: "la_d#{i+1}.jpg")
end

la_e = Campground.create!({
    host_id: anthony_davis.id,
    name: "Matcha Marsh", 
    location: "Los Angeles", 
    price: 250, 
    latitude: 34.073272, 
    longitude: -118.652800,
    min_nights: 1, 
    max_guests: 2, 
    num_sites: 1, 
    cabin: true,
    parking: true, 
    campfires: false,
    toilets: true, 
    pets: false, 
    potable_water: true, 
    kitchen: false, 
    showers: true,
    picnic_table: true, 
    wifi: true, 
    bins: true, 
    activities: [
        "Hiking", "Swimming", "Biking", "Wildlife Watching", "Climbing", "Horseback Riding"
    ], 
    checkin_time: "After 3PM", 
    checkout_time: "Before 11AM",
    description: "Lovely studio with jaw-dropping, with expansive, spectacular outdoor room overlooking mind-blowing mountain views. Located in Topanga, the legendary bohemian citadel of love. A lush fountain emits water-spraying sound. There is a king-sized bed inside and a brass bed outside under a canopy. Ten minutes to the beach, five minutes to town. Convenient little kitchen.",
    rating: 96
})

la_e_urls = [
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/losangeles/lae/lae1.png",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/losangeles/lae/lae2.png",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/losangeles/lae/lae3.png",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/losangeles/lae/lae4.png",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/losangeles/lae/lae5.png"
]

la_e_urls.each_with_index do |url, i|
    la_e.photos.attach(io: open(url), filename: "la_e#{i+1}.png")
end

la_f = Campground.create!({
    host_id: earvin_johnson.id,
    name: "Latte Landing", 
    location: "Los Angeles", 
    price: 179, 
    latitude: 33.955214, 
    longitude: -117.823161,
    min_nights: 1, 
    max_guests: 52, 
    num_sites: 1, 
    cabin: true,
    parking: true, 
    campfires: false,
    toilets: true, 
    pets: false, 
    potable_water: true, 
    kitchen: true, 
    showers: true,
    picnic_table: true, 
    wifi: false, 
    bins: false, 
    activities: [
        "Hiking", "Wildlife Watching", "Swimming", "Climbing", "Paddling"
    ], 
    checkin_time: "After 3PM", 
    checkout_time: "Before 11AM",
    description: "The Latte Landing is great for 2 people  or as a base camp for larger groups. The cabin holds 2 people and there is  lots of room to set up tents around it for up to 50 guests. Private cabin on Lake Caldwell, a small sag pond on our 70 acre regenerative goat ranch, Angeles Crest Creamery, just 90 minutes from Los Angeles.",
    rating: 90
})

la_f_urls = [
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/losangeles/laf/laf1.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/losangeles/laf/laf2.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/losangeles/laf/laf3.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/losangeles/laf/laf4.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/losangeles/laf/laf5.jpg"
]

la_f_urls.each_with_index do |url, i|
    la_f.photos.attach(io: open(url), filename: "la_f#{i+1}.jpg")
end

la_g = Campground.create!({
    host_id: kyle_kuzma.id,
    name: "Vanilla Latte Ranch", 
    location: "Los Angeles", 
    price: 250, 
    latitude: 34.094556, 
    longitude: -117.145559,
    min_nights: 1, 
    max_guests: 56, 
    num_sites: 10, 
    cabin: false,
    parking: true, 
    campfires: true,
    toilets: true, 
    pets: true, 
    potable_water: true, 
    kitchen: false, 
    showers: true,
    picnic_table: true, 
    wifi: false, 
    bins: true, 
    activities: [
        "Hiking", "Biking", "Wildlife Watching", "Swimming", "Climbing"
    ], 
    checkin_time: "After 2PM", 
    checkout_time: "Before 12PM",
    description: "15-acre ranch in the Angeles National Forest - near Los Angeles. Also a private zoo of animals including tortoises and farm animals like goats, sheep, alapacs, cows, donkeys, turkeys and pigs. We have lots of birds, reptiles, and a camel and zebra!",
    rating: 99
})

la_g_urls = [
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/losangeles/lag/lag1.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/losangeles/lag/lag2.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/losangeles/lag/lag3.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/losangeles/lag/lag4.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/losangeles/lag/lag5.jpg"
]

la_g_urls.each_with_index do |url, i|
    la_g.photos.attach(io: open(url), filename: "la_g#{i+1}.jpg")
end

la_h = Campground.create!({
    host_id: lebron_james.id,
    name: "Piccolo Place", 
    location: "Los Angeles", 
    price: 48, 
    latitude: 33.681933, 
    longitude: -117.548089,
    min_nights: 1, 
    max_guests: 12, 
    num_sites: 1, 
    cabin: false,
    parking: true, 
    campfires: false,
    toilets: true, 
    pets: true, 
    potable_water: false, 
    kitchen: true, 
    showers: false,
    picnic_table: true, 
    wifi: false, 
    bins: false, 
    activities: [
        "Hiking", "Biking", "Wildlife Watching", "Climbing"
    ], 
    checkin_time: "After 2PM", 
    checkout_time: "Before 12PM",
    description: "Enjoy the beautiful landscape of Antelope Valley with your own private and secluded desert getaway. Located in the Lake Los Angeles area with direct access to Saddleback Butte State Park. Enjoy the super-bloom wildflowers, awe-inspiring flyby's from Edwards Airfield and miles of offroading trails. 90 Minutes from LA.",
    rating: 98
})

la_h_urls = [
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/losangeles/lah/lah1.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/losangeles/lah/lah2.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/losangeles/lah/lah3.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/losangeles/lah/lah4.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/losangeles/lah/lah5.jpg"
]

la_h_urls.each_with_index do |url, i|
    la_h.photos.attach(io: open(url), filename: "la_h#{i+1}.jpg")
end

la_i = Campground.create!({
    host_id: kawhi_leonard.id,
    name: "Demitasse Dream", 
    location: "Los Angeles", 
    price: 80, 
    latitude: 34.051205, 
    longitude: -117.030412,
    min_nights: 1, 
    max_guests: 20, 
    num_sites: 1, 
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
    bins: true, 
    activities: [
        "Hiking", "Biking", "Wildlife Watching", "Climbing", "Horseback Riding"
    ], 
    checkin_time: "After 2PM", 
    checkout_time: "Before 12PM",
    description: "This expanded campsite is similar to our simple Songdog Campsites only bigger! The shaded table area is twice as big and will accommodate 8 people easily. The Privacy is greater with the nearest campsite being 150 feet south. the site has more room for you and your friends to spread out. And last but not least, two firerings. One for cooking and one for social. It really is twice the site.",
    rating: 95
})

la_i_urls = [
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/losangeles/lai/lai1.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/losangeles/lai/lai2.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/losangeles/lai/lai3.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/losangeles/lai/lai4.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/losangeles/lai/lai5.jpg"
]

la_i_urls.each_with_index do |url, i|
    la_i.photos.attach(io: open(url), filename: "la_i#{i+1}.jpg")
end

## Denver =====================================

den_a = Campground.create!({
    host_id: mahmoud_rauf.id,
    name: "Huckleberry Hill", 
    location: "Denver", 
    price: 30, 
    latitude: 39.882905, 
    longitude: -105.393455,
    min_nights: 1, 
    max_guests: 10, 
    num_sites: 3, 
    cabin: false,
    parking: true, 
    campfires: false,
    toilets: true, 
    pets: true, 
    potable_water: true, 
    kitchen: false, 
    showers: false,
    picnic_table: true, 
    wifi: false, 
    bins: false, 
    activities: [
        "Biking", "Fishing", "Hiking", "Paddling", "Wildlife Watching", "Horseback Riding"
    ], 
    checkin_time: "After 2PM", 
    checkout_time: "Before 12PM",
    description: "Great views. Mountainous terrain but with lots of gentle slopes. Located at 7200 ft alt. All 3000 + acres of private property. A working horse ranch. Foxton Morgans. No rentals but you may trailer camp with your horse. 3 campsites with fire pits. Firewood available for sale or scavenge for free.",
    rating: 100
})
den_a_urls = [
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/denver/dena/dena1.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/denver/dena/dena2.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/denver/dena/dena3.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/denver/dena/dena4.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/denver/dena/dena5.jpg",
]
den_a_urls.each_with_index do |url, i|
    den_a.photos.attach(io: open(url), filename: "den_a#{i+1}.jpg")
end

den_b = Campground.create!({
    host_id: paul_millsap.id,
    name: "MiddleState Lane", 
    location: "Denver", 
    price: 25, 
    latitude: 39.597825, 
    longitude: -105.464817,
    min_nights: 1, 
    max_guests: 6, 
    num_sites: 6, 
    cabin: false,
    parking: true, 
    campfires: false,
    toilets: true, 
    pets: true, 
    potable_water: false, 
    kitchen: true, 
    showers: true,
    picnic_table: true, 
    wifi: true, 
    bins: true, 
    activities: [
        "Biking", "Hiking", "Paddling", "Climbing", "Fishing", "Wildlife Watching"
    ], 
    checkin_time: "After 3PM", 
    checkout_time: "Before 11AM",
    description: "There are countless reasons why you would want to camp at MiddleState Lane!  MiddleState is located in Bailey, Colorado which is the perfect vacation spot for friends, family, reunions, or a private get away. Glen Isle was originally built for an escape from hectic Denver. Once you cross the bridge into the resort, you’ll understand why it has served as a peaceful getaway for over a century.",
    rating: 93
})

den_b_urls = [
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/denver/denb/denb1.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/denver/denb/denb2.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/denver/denb/denb3.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/denver/denb/denb4.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/denver/denb/denb5.jpg"
]

den_b_urls.each_with_index do |url, i|
    den_b.photos.attach(io: open(url), filename: "den_b#{i+1}.jpg")
end


den_c = Campground.create!({
    host_id: nikola_jokic.id,
    name: "Amethyst Acres", 
    location: "Denver", 
    price: 65, 
    latitude: 39.428762, 
    longitude: -105.175550,
    min_nights: 1, 
    max_guests: 5, 
    num_sites: 3, 
    cabin: true,
    parking: true, 
    campfires: true,
    toilets: true, 
    pets: true, 
    potable_water: true, 
    kitchen: false, 
    showers: true,
    picnic_table: false, 
    wifi: false, 
    bins: true, 
    activities: [
        "Hiking", "Biking", "Wildlife Watching", "Climbing"
    ], 
    checkin_time: "After 12PM", 
    checkout_time: "Before 2PM",
    description: "Amethyst Acres is located on the first road that was built to bring people into Lake County and originally the road was a toll road. The property was a mining claim and there are still some remnants of mining activity that occurred over a century ago. A group of about six people and many volunteers spent six years building the hut. It is completely off of the grid. The beams used to construct the hut are from locally harvested trees and we milled them ourselves. Many other materials are recycled or obtained with a priority placed on sustainability.",
    rating: 90
})

den_c_urls = [
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/denver/denc/denc1.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/denver/denc/denc2.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/denver/denc/denc3.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/denver/denc/denc4.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/denver/denc/denc5.jpg"
]

den_c_urls.each_with_index do |url, i|
    den_c.photos.attach(io: open(url), filename: "den_c#{i+1}.jpg")
end

den_d = Campground.create!({
    host_id: mahmoud_rauf.id,
    name: "Method Marsh", 
    location: "Denver", 
    price: 90, 
    latitude: 39.955918, 
    longitude: -105.347961,
    min_nights: 1, 
    max_guests: 4, 
    num_sites: 4, 
    cabin: false,
    parking: false, 
    campfires: true,
    toilets: true, 
    pets: true, 
    potable_water: true, 
    kitchen: false, 
    showers: false,
    picnic_table: true, 
    wifi: false, 
    bins: true, 
    activities: [
        "Hiking", "Horseback Riding", "Biking", "Climbing", "Paddling", "Wildlife Watching"
    ], 
    checkin_time: "After 2PM", 
    checkout_time: "Before 1PM",
    description: "One new note: I have two Hipcamp properties, one in Summit County and one in Park County. So this is the story of Park County. Perhaps you have seen the TV show, South Park. We are in the center of South Park, Colorado. Many people I met out here could have been characters in the show. Perhaps that is why it was the inspiration for the comedy. Like one neighbor once told me, There are two types of people out here. Neighbors and Strangers. If they wave when they drive by, they are neighbors.",
    rating: 96
})

den_d_urls = [
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/denver/dend/dend1.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/denver/dend/dend2.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/denver/dend/dend3.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/denver/dend/dend4.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/denver/dend/dend5.jpg"
]

den_d_urls.each_with_index do |url, i|
    den_d.photos.attach(io: open(url), filename: "den_d#{i+1}.jpg")
end

den_e = Campground.create!({
    host_id: paul_millsap.id,
    name: "Batch Brew Bounty", 
    location: "Denver", 
    price: 90, 
    latitude: 39.330770, 
    longitude: -105.050428,
    min_nights: 1, 
    max_guests: 2, 
    num_sites: 1, 
    cabin: true,
    parking: false, 
    campfires: true,
    toilets: true, 
    pets: false, 
    potable_water: true, 
    kitchen: false, 
    showers: true,
    picnic_table: true, 
    wifi: true, 
    bins: true, 
    activities: [
        "Hiking", "Paddling", "Biking", "Boating", "Fishing", "Wildlife Watching", "Swimming", "Climbing", "Horseback Riding"
    ], 
    checkin_time: "After 2PM", 
    checkout_time: "Before 12PM",
    description: "The original land owners were homesteaders who came to cattle ranch. The sons grew up on the ranch, went to school in Canon City, were educated as lawyers, and their widows acquired the land. I purchased the land from the widows. They held this land when they sold the majority of the ranch to the present ranchers who now run cattle. BLM has much of the land in this area because of its beauty and the amount of wildlife on the land. For many years people suspected this land might have the minerals found in Cripple Creek, and maybe even gold.",
    rating: 96
})

den_e_urls = [
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/denver/dene/dene1.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/denver/dene/dene2.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/denver/dene/dene3.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/denver/dene/dene4.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/denver/dene/dene5.jpg"
]

den_e_urls.each_with_index do |url, i|
    den_e.photos.attach(io: open(url), filename: "den_e#{i+1}.jpg")
end

den_f = Campground.create!({
    host_id: nikola_jokic.id,
    name: "Pinwheel Peak", 
    location: "Denver", 
    price: 68, 
    latitude: 39.933095, 
    longitude: -105.896757,
    min_nights: 1, 
    max_guests: 4, 
    num_sites: 2, 
    cabin: false,
    parking: false, 
    campfires: true,
    toilets: true, 
    pets: true, 
    potable_water: true, 
    kitchen: false, 
    showers: true,
    picnic_table: true, 
    wifi: false, 
    bins: true, 
    activities: [
        "Hiking", "Wildlife Watching", "Swimming", "Climbing", "Horseback Riding"
    ], 
    checkin_time: "After 9AM", 
    checkout_time: "Before 11AM",
    description: "Our family friendly farm is full of loving animals who love to be pet, rubbed and some even like to be cuddled.  Try your hand at milking a goat, feeding the hogs, and collecting eggs.  We have a full size basketball court so bring a ball, kids scooters or bikes, but lots of goat heads around the farm so make sure you have special tire tubes and goo in the tires if you're going to ride around or they will go flat. Hike up the road a mile or so and see Prospect Reservoir.",
    rating: 90
})

den_f_urls = [
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/denver/denf/denf1.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/denver/denf/denf2.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/denver/denf/denf3.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/denver/denf/denf4.jpg",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/denver/denf/denf5.jpg"
]

den_f_urls.each_with_index do |url, i|
    den_f.photos.attach(io: open(url), filename: "den_f#{i+1}.jpg")
end