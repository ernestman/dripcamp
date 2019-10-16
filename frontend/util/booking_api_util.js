
export const createBooking = (booking) => {
    return $.ajax({
        method: "POST",
        url: "/api/bookings",
        data: {booking}
    })
}

export const singleBooking = (id) => {
    return $.ajax({
        method: "GET",
        url: `/api/bookings/${id}`
    })
}

export const deleteBooking = (id) => {
    // debugger
    return $.ajax({
        method: "DELETE",
        url: `/api/bookings/${id}`
    })
}
