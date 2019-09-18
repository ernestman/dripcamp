

export const deleteBooking = (id) => {
    return $.ajax({
        method: "DELETE",
        url: `api/bookings/${id}`
    })
}


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

// export const allBookings = () => {
//     return $.ajax({
//         method: "GET",
//         url: "/api/bookings"
//     })
// }

// export const editBooking = (id) => {
//     return $.ajax({
//         method: "GET",
//         url: `/api/bookings/${id}`
//     })
// }

// export const updateBooking = (id) => {
//     return $.ajax({
//         method: "PATCH",
//         url: `api/bookings/${id}`
//     })
// }
