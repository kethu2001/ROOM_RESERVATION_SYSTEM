const mongoose = require("mongoose");

const BookingSchema = mongoose.Schema({
    room: {
        type: String,
        required: true
    },
    roomid: {
        type: String,
        required: true
    },
    userid: {
        type: String,
        required: true
    },
    fromdate: {
        type: String,
        required: true
    },
    todate: {
        type: String,
        required: true
    },
    totalamount: {
        type: String,
        required: true
    },
    totaldays: {
        type: String,
        required: true
    },
    transactionid: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: 'booked'
    }
}, {
    timestamps: true,
})

const bookingmodel = mongoose.model('bookings' , BookingSchema);

module.exports = bookingmodel