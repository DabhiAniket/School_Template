import React from "react";
import event1 from "../assets/event1.jpg";
import event2 from "../assets/event2.jpg";
import event3 from "../assets/event3.jpg";

const Event = () => {
  const events = [
    {
      id: 1,
      image: event1,
      title: "Science In The New Era",
      time: "8:00 AM - 5:00 PM",
      location: "London, UK",
      description:
        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.",
    },
    {
      id: 2,
      image: event2,
      title: "Student Exchange Program Information Sessions",
      time: "8:00 AM - 5:00 PM",
      location: "London, UK",
      description:
        "Business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds.",
    },
    {
      id: 3,
      image: event3,
      title: "Chicago Architecture Foundation River Cruise",
      time: "8:00 AM - 5:00 PM",
      location: "London, UK",
      description:
        "But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures.",
    },
  ];

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center px-6 md:px-12 lg:px-24 py-12 mb-8">
        <div className="space-y-6">
          <h3 className="text-4xl font-bold">
            Our <span className="text-amber-400">Event</span>
          </h3>
          <p className="text-xl text-gray-400">
            Upcoming Education Events to feed your brain
          </p>
        </div>
        <button className="px-6 py-3 text-lg font-semibold shadow-md hover:scale-110 transition-all">
          View All
        </button>
      </div>

      {/* Events List */}
      <div className="px-6 md:px-12 lg:px-24 mb-16 space-y-34 ">
        {events.map((event) => (
          <div
            key={event.id}
            className="flex items-center justify-between gap-20"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-60 h-auto shadow-xl object-cover"
            />

            <div className="flex-1 space-y-4">
              <h4 className="text-2xl font-semibold font-serif text-gray-800">
                {event.title}
              </h4>

              <div className="flex items-center gap-6 text-gray-500 text-sm uppercase">
                <div className="flex items-center gap-2">
                  <span>🕒</span>
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📍</span>
                  <span>{event.location}</span>
                </div>
              </div>

              <p className="text-gray-500 text-lg leading-relaxed">
                {event.description}
              </p>
            </div>

            <div className="flex items-center border-l-2 border-gray-300 pl-6">
              <button className="text-lg font-semibold hover:text-black transition">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Event;
