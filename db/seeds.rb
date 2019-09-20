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

demo_user.avi_photo.attach(io: open("https://dripcamp-seed.s3-us-west-1.amazonaws.com/users/waterdrop.png"), filename: "demo_user_avi.png")

gary_payton = User.create!({
    first_name: "Gary",
    last_name: "Payton",
    email: "garyp@aa.io",
    password: "password",
    zipcode: 12345
})

gary_payton.avi_photo.attach(io: open("https://dripcamp-seed.s3-us-west-1.amazonaws.com/users/garyp.jpg"), filename: "garyp_avi.jpg")

shawn_kemp = User.create!({
    first_name: "Shawn",
    last_name: "Kemp",
    email: "shawnk@aa.io",
    password: "password",
    zipcode: 12345
})

shawn_kemp.avi_photo.attach(io: open("https://dripcamp-seed.s3-us-west-1.amazonaws.com/users/shawnk.jpg"), filename: "shawnk_avi.jpg")


detlef_schrempf = User.create!({
    first_name: "Detlef",
    last_name: "Schrempf",
    email: "detlefs@aa.io",
    password: "password",
    zipcode: 12345
})

detlef_schrempf.avi_photo.attach(io: open("https://dripcamp-seed.s3-us-west-1.amazonaws.com/users/detlefs.jpeg"), filename: "detlefs_avi.jpeg")


andre_iguodala = User.create!({
    first_name: "Andre",
    last_name: "Iguodala",
    email: "andrei@aa.io",
    password: "password",
    zipcode: 12345
})

andre_iguodala.avi_photo.attach(io: open("https://dripcamp-seed.s3-us-west-1.amazonaws.com/users/andrei.jpg"), filename: "andrei_avi.jpg")


bob_myers = User.create!({
    first_name: "Bob",
    last_name: "Myers",
    email: "bobm@aa.io",
    password: "password",
    zipcode: 12345
})

bob_myers.avi_photo.attach(io: open("https://dripcamp-seed.s3-us-west-1.amazonaws.com/users/bobm.jpg"), filename: "bobm_avi.jpg")


shaun_livingston = User.create!({
    first_name: "Shaun",
    last_name: "Livingston",
    email: "shaunl@aa.io",
    password: "password",
    zipcode: 12345
})

shaun_livingston.avi_photo.attach(io: open("https://dripcamp-seed.s3-us-west-1.amazonaws.com/users/shaunl.jpg"), filename: "shaunl_avi.jpg")


spencer_dinwiddie = User.create!({
    first_name: "Spencer",
    last_name: "Dinwiddie",
    email: "spencerd@aa.io",
    password: "password",
    zipcode: 12345
})

spencer_dinwiddie.avi_photo.attach(io: open("https://dripcamp-seed.s3-us-west-1.amazonaws.com/users/spencerd.png"), filename: "spencerd_avi.png")


caris_levert = User.create!({
    first_name: "Caris",
    last_name: "Levert",
    email: "carisl@aa.io",
    password: "password",
    zipcode: 12345
})

caris_levert.avi_photo.attach(io: open("https://dripcamp-seed.s3-us-west-1.amazonaws.com/users/carisl.jpg"), filename: "carisl_avi.jpg")


deandre_jordan = User.create!({
    first_name: "Deandre",
    last_name: "Jordan",
    email: "deandrej@aa.io",
    password: "password",
    zipcode: 12345
})

deandre_jordan.avi_photo.attach(io: open("https://dripcamp-seed.s3-us-west-1.amazonaws.com/users/deandrej.jpg"), filename: "deandrej_avi.jpg")


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
    description: "Camp out right near the bank of the Cappucino Creek in the beautiful Pacific Northwest! Only 2 miles from two huge lakes, this campsite is great for paddling, swimming, and fishing. Also, there are plenty of hiking trails and sightseeing spots close by!"
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





sf_a = Campground.create!({
    host_id: andre_iguodala.id,
    name: "Peets Campground", 
    location: "San Francisco", 
    price: 45, 
    latitude: 48.426412, 
    longitude: -121.572236,
    min_nights: 1, 
    max_guests: 8, 
    num_sites: 2, 
    cabin: false,
    parking: true, 
    campfires: false,
    toilets: true, 
    pets: true, 
    potable_water: false, 
    kitchen: false, 
    showers: false,
    picnic_table: false, 
    wifi: false, 
    bins: false, 
    activities: [
        "Biking", "Hiking", "Wildlife Watching"
    ], 
    checkin_time: "After 2PM", 
    checkout_time: "Before 12PM",
    description: "We have recently discovered our old storage unit makes a great, vrey private camping retreat. They are quire rustic. Don't get us wrong. No fancy camp, here. We are offering the paved area specifically for car, van and small trailer camping. Nearby, we have a mowed area that will work for another private tent camp spot, either as a group site, or each site as two separate individual camp uses. Come check us out!"
})

sf_a_urls = [
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/sfa/sfa1.png",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/sfa/sfa2.png",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/sfa/sfa3.png",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/sfa/sfa4.png",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/sfa/sfa5.png"
]

sf_a_urls.each_with_index do |url, i|
    sf_a.photos.attach(io: open(url), filename: "sfa#{i+1}.png")
end

sf_b = Campground.create!({
    host_id: shaun_livingston.id,
    name: "Blue Bottle Camp", 
    location: "San Francisco", 
    price: 80, 
    latitude: 48.426412, 
    longitude: -121.572236,
    min_nights: 1, 
    max_guests: 30, 
    num_sites: 2, 
    cabin: false,
    parking: false, 
    campfires: false,
    toilets: true, 
    pets: false, 
    potable_water: false, 
    kitchen: false, 
    showers: false,
    picnic_table: true, 
    wifi: false, 
    bins: false, 
    activities: [
        "Biking", "Boating", "Hiking", "Wildlife Watching", 
        "Fishing", "Paddling"
    ], 
    checkin_time: "After 1PM", 
    checkout_time: "Before 11AM",
    description: "Blue Bottle Campground is a wild camping oasis in the heart of San Francisco. The campground claims the title of the only overnight campsite in the city! Perched above Baker Beach and the mighty Pacific, visitors will enjoy the campground’s wooded wilds set amidst a stunning eucalyptus grove. Book a visit with us today!"
})

sf_b_urls = [
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/sfb/sfb1.png",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/sfb/sfb2.png",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/sfb/sfb3.png",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/sfb/sfb4.png",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/sfb/sfb5.png"
]

sf_b_urls.each_with_index do |url, i|
    sf_b.photos.attach(io: open(url), filename: "sfb#{i+1}.png")
end

sf_c = Campground.create!({
    host_id: bob_myers.id,
    name: "Cento Ravine", 
    location: "San Francisco", 
    price: 72, 
    latitude: 48.426412, 
    longitude: -121.572236,
    min_nights: 1, 
    max_guests: 5, 
    num_sites: 16, 
    cabin: true,
    parking: false, 
    campfires: false,
    toilets: true, 
    pets: false, 
    potable_water: true, 
    kitchen: false, 
    showers: false,
    picnic_table: true, 
    wifi: false, 
    bins: false, 
    activities: [
        "Biking", "Boating", "Hiking", "Wildlife Watching", 
        "Fishing", "Paddling", "Climbing", "Horseback Riding"
    ], 
    checkin_time: "After 1PM", 
    checkout_time: "Before 11AM",
    description: "Get in on a little secret that lies just across the Golden Gate Bridge from San Francisco. Let us introduce you to the elusive Cento Ravine Cabins in Marin. On Mt. Tamalpais, just to the north of the city, there are a group of wooden structures that date back to the 1940s. They are insanely popular and rightfully so. Come check us out!"
})

sf_c_urls = [
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/sfc/sfc1.png",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/sfc/sfc2.png",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/sfc/sfc3.png",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/sfc/sfc4.png",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/sfc/sfc5.png"
]

sf_c_urls.each_with_index do |url, i|
    sf_c.photos.attach(io: open(url), filename: "sfc#{i+1}.png")
end





ny_a = Campground.create!({
    host_id: spencer_dinwiddie.id,
    name: "Reveille Valley", 
    location: "New York", 
    price: 30, 
    latitude: 48.426412, 
    longitude: -121.572236,
    min_nights: 2, 
    max_guests: 6, 
    num_sites: 4, 
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
        "Biking", "Hiking", "Wildlife Watching"
    ], 
    checkin_time: "After 2PM", 
    checkout_time: "Before 12PM",
    description: "Wake up to beautiful Catskill Mountain views. Kayaking on the Hudson River just a few miles away. Campfires under the amazing star filled sky. Hiking trails nearby. Not to forget the many wineries, distilleries and breweries, some offering delicious meals or charcuterie."
})

ny_a_urls = [
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/nya/nya1.png",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/nya/nya2.png",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/nya/nya3.png",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/nya/nya4.png",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/nya/nya5.png"
]

ny_a_urls.each_with_index do |url, i|
    ny_a.photos.attach(io: open(url), filename: "nya#{i+1}.png")
end

ny_b = Campground.create!({
    host_id: caris_levert.id,
    name: "Mocha Mountains", 
    location: "New York", 
    price: 55, 
    latitude: 48.426412, 
    longitude: -121.572236,
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
        "Biking", "Hiking", "Wildlife Watching", "Paddling", "Fishing"
    ], 
    checkin_time: "After 1PM", 
    checkout_time: "Before 11AM",
    description: "No Car? No Gear? No Problem! We are a Hike in-Hike out Campground. The easiest way to access the campground is to take the Metro North Hudson Line to the Beacon Train Station. If arriving by car, you can park at the Beacon train station free on weekends. While you enjoy your hike in, we can take your gear to your campsite."
})

ny_b_urls = [
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/nyb/nyb1.png",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/nyb/nyb2.png",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/nyb/nyb3.png",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/nyb/nyb4.png",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/nyb/nyb5.png"
]

ny_b_urls.each_with_index do |url, i|
    ny_b.photos.attach(io: open(url), filename: "nyb#{i+1}.png")
end


ny_c = Campground.create!({
    host_id: deandre_jordan.id,
    name: "Robusta Cabin", 
    location: "New York", 
    price: 90, 
    latitude: 48.426412, 
    longitude: -121.572236,
    min_nights: 2, 
    max_guests: 4, 
    num_sites: 1, 
    cabin: true,
    parking: false, 
    campfires: true,
    toilets: true, 
    pets: true, 
    potable_water: true, 
    kitchen: true, 
    showers: false,
    picnic_table: true, 
    wifi: true, 
    bins: true, 
    activities: [
        "Biking", "Boating", "Hiking", "Swimming", "Wildlife Watching", 
        "Fishing", "Paddling", "Climbing"
    ], 
    checkin_time: "After 10AM", 
    checkout_time: "Before 1PM",
    description: "Not really camping... The farm's cabin has been spiffed up for guests with a comfy double bed, a window seat and a small table for writing or just coffee. This one room cabin on short stilts sits slightly uphill from the farmstead. Fully screened it's a wonderful, quiet perch from which to hear, smell, watch and enjoy farm life."
})

ny_c_urls = [
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/nyc/nyc1.png",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/nyc/nyc2.png",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/nyc/nyc3.png",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/nyc/nyc4.png",
    "https://dripcamp-seed.s3-us-west-1.amazonaws.com/nyc/nyc5.png"
]

ny_c_urls.each_with_index do |url, i|
    ny_c.photos.attach(io: open(url), filename: "nyc#{i+1}.png")
end




# Bookings

Booking.create!(
    campground_id: 1,
    user_id: 1,
    num_guests: 4,
    booked_price: 93,
    checkin_date: Date.new(2019, 9, 30),
    checkout_date: Date.new(2019, 10, 2)
)

Booking.create!(
    campground_id: 4,
    user_id: 1,
    num_guests: 5,
    booked_price: 46,
    checkin_date: Date.new(2019, 10, 30),
    checkout_date: Date.new(2019, 11, 2)
)

Booking.create!(
    campground_id: 7,
    user_id: 1,
    num_guests: 2,
    booked_price: 55,
    checkin_date: Date.new(2019, 9, 3),
    checkout_date: Date.new(2019, 9, 5)
)

Booking.create!(
    campground_id: 9,
    user_id: 1,
    num_guests: 3,
    booked_price: 42,
    checkin_date: Date.new(2019, 11, 5),
    checkout_date: Date.new(2019, 11, 12)
)

Booking.create!(
    campground_id: 10,
    user_id: 1,
    num_guests: 4,
    booked_price: 40,
    checkin_date: Date.new(2019, 12, 10),
    checkout_date: Date.new(2019, 12, 13)
)




Booking.create!(
    campground_id: 2,
    user_id: 3,
    num_guests: 2,
    booked_price: 90,
    checkin_date: Date.new(2020, 1, 3),
    checkout_date: Date.new(2020, 1, 7)
)

Booking.create!(
    campground_id: 3,
    user_id: 5,
    num_guests: 2,
    booked_price: 52,
    checkin_date: Date.new(2020, 2, 7),
    checkout_date: Date.new(2020, 2, 9)
)

Booking.create!(
    campground_id: 10,
    user_id: 8,
    num_guests: 5,
    booked_price: 72,
    checkin_date: Date.new(2020, 1, 15),
    checkout_date: Date.new(2020, 1, 20)
)

Booking.create!(
    campground_id: 12,
    user_id: 7,
    num_guests: 4,
    booked_price: 35,
    checkin_date: Date.new(2020, 1, 26),
    checkout_date: Date.new(2020, 1, 29)
)

Booking.create!(
    campground_id: 9,
    user_id: 6,
    num_guests: 4,
    booked_price: 60,
    checkin_date: Date.new(2019, 10, 7),
    checkout_date: Date.new(2019, 10, 10)
)

Booking.create!(
    campground_id: 8,
    user_id: 5,
    num_guests: 5,
    booked_price: 48,
    checkin_date: Date.new(2019, 11, 23),
    checkout_date: Date.new(2019, 11, 25)
)

Booking.create!(
    campground_id: 6,
    user_id: 4,
    num_guests: 2,
    booked_price: 25,
    checkin_date: Date.new(2020, 1, 6),
    checkout_date: Date.new(2020, 1, 9)
)

