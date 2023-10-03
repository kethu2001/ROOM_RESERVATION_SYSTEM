import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import Error from '../components/Error';
import moment from 'moment';
import StripeCheckout from 'react-stripe-checkout';
import Swal from 'sweetalert2';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
  duration: 1000
});

function Bookingscreen({ match }) {
  let params = useParams();

  const [loading, setloading] = useState(true)
  const [error, seterror] = useState()
  const [room, setroom] = useState()

  const roomid = params.roomid
  const fromdate = moment(params.fromdate, 'DD-MM-YYYY')
  const todate = moment(params.todate, 'DD-MM-YYYY')

  const totaldays = moment.duration(todate.diff(fromdate)).asDays()

  const [totalamount, settotalamount] = useState()

  const user = JSON.parse(localStorage.getItem('currentUser'));

  useEffect(() => {

    const fetchData = async () => {

      if(!localStorage.getItem('currentUser')){
        window.location.reload='/login'
      }

      try {
        setloading(true);
        const data = (await axios.post("/api/rooms/getroombyid", { roomid: params.roomid })).data
        setroom(data.room)
        settotalamount(totaldays * data.room.rentperday);
        setloading(false);

      } catch (error) {

        seterror(true)
        setloading(false);
      }

    };
    fetchData();
  }, [totaldays]);


  // async function bookRoom() {
  //   const bookingsDetails = {
  //     room,
  //     userid: user._id,
  //     fromdate,
  //     todate,
  //     totalamount,
  //     totaldays,
  //   }

  //   try {
  //     const result = await axios.post("/api/bookings/bookroom", bookingsDetails)
  //   } catch (error) {

  //   }
  // }

  async function onToken(token) {
    console.log(token)
    const bookingsDetails = {
      room,
      userid: user._id,
      fromdate,
      todate,
      totalamount,
      totaldays,
      token
    }

    try {
      setloading(true);
      const result = await axios.post("/api/bookings/bookroom", bookingsDetails)
      setloading(false);
      Swal.fire('Congratulations', 'Your Room Booked Successfully', 'success').then(result=>{
        window.location.href= '/bookings'
      })
    } catch (error) {
      setloading(false)
      Swal.fire('Oops', 'Something went wrong', 'error')
    }
  }

  return (
    <div className='m-5' data-aos='flip-left'>
      {loading ? (<Loader />) : room ? (<div>
        <div className="row justify-content-center mt-5 bs">

          <div className="col-md-6">
            <h1>{room.name}</h1>
            <img src={room.imageurls[0]} className='bigimg' alt="" />
          </div>

          <div className="col-md-6">
            <div style={{ textAlign: 'right' }}>
              <h1>Booking Details</h1>
              <hr />

              <b>
                {/* <p>Name : {user.name}</p> */}
                <p>Name : {JSON.parse(localStorage.getItem('currentUser')).name}</p>
                <p>From Date : {params.fromdate}</p>
                <p>To Date : {params.todate}</p>
                <p>Max Count : {room.maxcount}</p>
              </b>
            </div>

            <div style={{ textAlign: 'right' }}>
              <b>
                <h1>Amount</h1>
                <hr />
                <p>Total days : {totaldays}</p>
                <p>Rent per day : {room.rentperday}</p>
                <p>Total Amount : {totalamount}</p>
              </b>
            </div>

            <div style={{ float: 'right' }}>
              {/* <button className='btn btn-primary' onClick={bookRoom}>Pay Now</button> */}

              <StripeCheckout
                amount={totalamount * 100}
                token={onToken}
                currency='USD'
                //currency= 'INR'
                stripeKey="pk_test_51MTzU3C0FCDpoLb0hiJdntq5p1nH66yFOlWxxWKLAqdKDTkwG90LfY6kjL5PvSxzu5NmuOZ02ijzujRRSUT5MqMd00LTAuWrMV"
              >
                <button className='btn btn-primary' >Pay Now</button>
              </StripeCheckout>
            </div>
          </div>

        </div>
      </div>) : error && (<Error />)}
    </div>
  )

}

export default Bookingscreen