
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

// export const updateBooking = (booking) => {
//     return $.ajax({
//         method: "PATCH",
//         url: `/api/bookings/${booking.id}`,
//         data: {booking}
//     })
// }

export const deleteBooking = (id) => {
    // debugger
    return $.ajax({
        method: "DELETE",
        url: `/api/bookings/${id}`
    })
}
