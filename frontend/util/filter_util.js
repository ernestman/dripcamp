const filterUtil = (campgrounds, filters) => {
    let filteredCampgrounds = campgrounds;

    if (filters["petFriendly"] === true) {
        filteredCampgrounds = filteredCampgrounds.filter( camp => {
            if (camp.pets === true) return camp;
        })
    }

    if (filters["tentCamps"] === true) {
        filteredCampgrounds = filteredCampgrounds.filter( camp => {
            if (camp.cabin === false) return camp;
        })
    }

    if (filters["cabinCamps"] === true) {
        filteredCampgrounds = filteredCampgrounds.filter( camp => {
            if (camp.cabin === true) return camp;
        })
    }

    if (filters["hasCampfires"] === true) {
        filteredCampgrounds = filteredCampgrounds.filter(camp => {
            if (camp.campfires === true) return camp;
        })
    }

    if (filters["hasShowers"] === true) {
        filteredCampgrounds = filteredCampgrounds.filter(camp => {
            if (camp.showers === true) return camp;
        })
    }

    if (filters["hasWater"] === true) {
        filteredCampgrounds = filteredCampgrounds.filter(camp => {
            if (camp.potable_water === true) return camp;
        })
    }

    return filteredCampgrounds;
}

export default filterUtil;