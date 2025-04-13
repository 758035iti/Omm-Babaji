import React from "react";
import { booking } from "@/utils/booking_process";

const BookingProcess = () => {
  return (
    <div className="max-w-6xl mx-auto px-5 md:px-12 py-10">
      {/* Heading Section */}
      <div className="text-center mb-10">
        <p className="text-3xl font-bold text-orange-600">
          How We Conduct Online Puja
        </p>
        <p className="text-lg md:text-base text-gray-700 mt-2">
          Performing an online puja is a ritual performed with utmost devotion
          at OnlineTemple. What happens after you book an online puja with us?
          The steps below explain the process. If you have any questions,
          contact us at support@onlinetemple.com.
        </p>
      </div>

      {/* Booking Steps Section */}
      <div className="space-y-16">
        {booking.map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } items-center gap-8`}
          >
            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={item.img.src}
                alt={String(item.title)}
                className="w-80 md:w-full max-w-sm h-auto object-contain "
              />
            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl lg:text-2xl font-semibold text-orange-600">
                {item.title}
              </h3>
              <p className="text-lg lg:text-sm mt-2 text-gray-700">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingProcess;
