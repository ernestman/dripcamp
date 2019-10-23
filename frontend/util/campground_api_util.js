

export const allCampgrounds = (filters) => {
    return $.ajax({
        method: "GET",
        url: "/api/campgrounds",
        data: filters
    })
}

export const campground = (id) => {
    return $.ajax({
        method: "GET",
        url: `/api/campgrounds/${id}`
    })
};