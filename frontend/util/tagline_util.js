const getTaglines = (location) => {

    let locationHash = {
        address: "",
        tagline1: "",
        tagline2: "",
        tagline3: ""
    }

    if (location === "Seattle") {
        locationHash["address"] = "Seattle, Washington"
        locationHash["tagline1"] = "From kayaking and crabbing to high-elevation hiking, the Seattle mountains have it all."
        locationHash["tagline2"] = "With its enviable location on the Puget Sound, Seattle blends urban and outdoor lifestyles. When you’re craving a camping trip, you’re in luck—an hour’s drive takes you out of the city and into the wild. Northwestern Washington has it all, from backcountry mountain sites to coastal RV parks.";
        locationHash["tagline3"] = "Weather is always a consideration on a Seattle camping trip. The rainy season runs from November to May, but it’s a good idea to bring rain gear year-round. Summer brings sunshine and warm weather—be sure to book campsites early to beat the crowds."
    }

    if (location === "San Francisco") {
        locationHash["address"] = "San Francisco, California";
        locationHash["tagline1"] = "Pitch a tent in the big city or rough it in the challenging backcountry in the diverse Bay Area."
        locationHash["tagline2"] = "Located at about the midpoint of the California coast, the Bay Area offers a slightly cooler climate than Southern California. You'll have easy access to both the Pacific Ocean and San Francisco Bay from here.";
        locationHash["tagline3"] = "Angel Island State Park is another great sightseeing spot. Here on the largest island in the Bay, you'll find extensive hiking trails. There's also a 788-foot summit to climb in Mount Caroline Livermore. Note there's no bridge to Angel Island. Multiple public ferries run daily, though."
    }

    if (location === "New York") {
        locationHash["address"] = "New York, New York";
        locationHash["tagline1"] = "Hop on the train or jump in the car for quiet, scenic, adventure-filled camping just outside the city."
        locationHash["tagline2"] = "The dog days of summer can make any New Yorker long for a leafy escape. Luckily, you don't have to travel far—or even drive—to camp under the stars. From the Catskills to Brooklyn, these outdoor oases are under two hours from New York City.";
        locationHash["tagline3"] = "Just over an hour from midtown Manhattan, near the Cold Spring Metro-North stop, Fahnestock State Park has 14,000 wooded acres surrounding a lake. The park is a favorite for families, with a sandy swimming beach and rentable rowboats. Rustic tent sites are close by, as is the Appalachian Trail."
    }

    if (location === "Chicago") {
        locationHash["address"] = "Chicago, Illinois";
        locationHash["tagline1"] = "From beach camping on Lake Michigan to peaceful forest campsites, the Chicagoland area has it all."
        locationHash["tagline2"] = "In Chicago, the trails and marinas along Lake Michigan provide a respite from city life. When only serious wilderness will do, however, you’re in luck. Within 100 miles of downtown, a wealth of campgrounds provide peace and quiet. From lakeside retreats to grassland getaways, this part of the midwest has it all.";
        locationHash["tagline3"] = "From spring through fall, the pleasant weather is ideal for camping near Chicago. Winters are cold and often snowy, but don’t let that keep you away. Pull into an RV park or rent a cabin to enjoy ice fishing, snowshoeing, and Nordic skiing."
    }

    if (location === "Los Angeles") {
        locationHash["address"] = "Los Angeles, California"
        locationHash["tagline1"] = "Get all sides of the sunny Southern California experience within a hour of the City of Angels."
        locationHash["tagline2"] = "Los Angeles might have a reputation as one of the densest of big cities, but there's still plenty of camping adventure to be found in its environs. Whether you want to swim in the Pacific or hike in the Southern California mountains, L.A. makes a good staging point.";
        locationHash["tagline3"] = "Santa Monica State Beach is the quintessential SoCal beach. This sandy playland runs for 3.5 miles next to the ocean. Take a ride on the pier's famous Ferris wheel or rollercoaster. For a more sedate pier experience, cast a fishing line or check out its interactive aquarium."
    }

    if (location === "Denver") {
        locationHash["address"] = "Denver, Colorado";
        locationHash["tagline1"] = "Camping near Denver? Try biking the foothills, hiking the Rockies, and riding horses in canyons."
        locationHash["tagline2"] = "For outdoor adventurers, Denver offers the perfect blend of city comforts and wilderness access. When the mountains are calling, head west—within an hour, you can escape the city. A little further, and the silence of the Rockies takes over completely. From RV parks to backcountry tent sites, this part of Colorado is overflowing with great campsites.";
        locationHash["tagline3"] = "Located east of a major mountain range, Denver has a mild, dry and sunny climate with more annual hours of sun than San Diego. Denver is the only city ever to refuse the chance to host the Olympics after winning the privilege."
    }

    return locationHash;
}

export default getTaglines;