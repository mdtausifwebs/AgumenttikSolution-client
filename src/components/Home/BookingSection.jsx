import React, { useState } from "react";
import booking from "../../styles/Homepage/bookingsection.module.css";
import { FaLocationArrow } from "react-icons/fa"
import { AiOutlinePlus } from "react-icons/ai"
const BookingSection = () => {
  const [fromto, setfromto] = useState();
  const [trip, settrip] = useState();
  const [passenger, setpassenger] = useState();
  const [date, setdate] = useState();
  console.log("date", date);
  console.log("passenger", passenger);
  console.log("trip", trip);
  console.log("fromto", fromto);
  return (
    <div className={booking.bookingheadsec}>
      <div className={booking.bookingBox}>
        <h4 style={{ marginLeft: "230px" }} >Where are you flying?</h4>
        <div className={booking.bookinginputsec}>
          <div className={booking.height}>
            <span className={booking.margins}>From-To</span>
            <select name="from" onChange={(e) => setfromto(e.target.value)} className={booking.selecttag}>
              <option value="Lahore Karachi">Lahore Karachi</option>
              <option value="Lahore Karachi">Lahore Karachi</option>
            </select>
          </div>
          <div >
            <span className={booking.margins}> Trip</span>
            <select name="trip" id="" onChange={(e) => settrip(e.target.value)} className={booking.selecttag2}>
              <option value="return">One Way</option>
              <option value="both">Return</option>
            </select>
          </div>
          <div className={booking.height}>
            <span className={booking.margins2}>Depart-Return</span>
            <input type="date" onChange={(e) => setdate} className={booking.selecttag3} />
          </div>
          <div className={booking.height}>
            <span className={booking.margins2}>Passenger - Class</span>
            <select name="" id="" onChange={(e) => setpassenger(e.target.value)} className={booking.selecttag3}>
              <option value="1">1 Class</option>
              <option value="2">2 Class </option>
            </select>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className={booking.bookingbuttonsec}>
          <button>
            <span><AiOutlinePlus /></span>
            <span>Add Promo Code</span>
          </button>
          <button>
            <span><FaLocationArrow /></span>
            <span>Show Flights</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default BookingSection;
