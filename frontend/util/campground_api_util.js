

export const allCampgrounds = () => {
    return $.ajax({
        method: "GET",
        url: "/api/campgrounds"
    })
}

export const campground = (id) => {
    return $.ajax({
        method: "GET",
        url: `/api/campgrounds/${id}`
    })
};