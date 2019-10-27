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

    return filteredCampgrounds;
}

export default filterUtil;