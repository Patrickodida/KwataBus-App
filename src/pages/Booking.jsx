import React, { useEffect, useState } from "react";
import BusService from "../components/BusService";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import { userData } from "../UserHelper";
import { useNavigate } from "react-router-dom";

function Booking() {
  const user = userData();
  const navigate = useNavigate();

  if (!user.jwt) {
    navigate("/login");
  }
  const [input, setInput] = useState({
    from: "",
    to: "",
  });
  const [error, setError] = useState({
    from: "",
    to: "",
  });
  const [filters, setFilters] = useState({
    busCategory: [],
    departureTime: [],
  });
  const [route, setRoute] = useState([]);
  const [filteredRoute, setFilteredRoute] = useState([]);

  function fetchData() {
    fetch("https://big-chicken-57890d4fdf.strapiapp.com/api/bus-routes")
      .then((response) => response.json())
      .then((dataObject) => {
        let routeData = dataObject.data;
        setRoute(routeData);
        setFilteredRoute(routeData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  function validateFrom(from) {
    if (from.length < 4) {
      setError({ ...error, from: "Invalid input" });
      return false;
    }
    setError({ ...error, from: "" });
    return true;
  }

  function validateTo(to) {
    if (to.length < 4) {
      setError({ ...error, to: "Invalid input" });
      return false;
    }
    setError({ ...error, to: "" });
    return true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateFrom(input.from) && validateTo(input.to)) {
      let filtered = route;

      if (input.from) {
        filtered = filtered.filter((item) =>
          item.attributes.DepartureTown.toLowerCase().includes(
            input.from.toLowerCase()
          )
        );
      }

      if (input.to) {
        filtered = filtered.filter((item) =>
          item.attributes.ArrivalTown.toLowerCase().includes(
            input.to.toLowerCase()
          )
        );
      }

      setFilteredRoute(filtered);
    }
  };

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => {
      const updatedFilter = prevFilters[filterType].includes(value)
        ? prevFilters[filterType].filter((item) => item !== value)
        : [...prevFilters[filterType], value];

      return { ...prevFilters, [filterType]: updatedFilter };
    });
  };

  useEffect(() => {
    let filtered = route;

    if (filters.busCategory.length > 0) {
      filtered = filtered.filter((item) =>
        filters.busCategory.includes(item.attributes.BusCompany)
      );
    }

    if (filters.departureTime.length > 0) {
      filtered = filtered.filter((item) => {
        const departureTime = item.attributes.DepartureTime.split(":");
        const formattedTime = `${departureTime[0]}:00 ${
          departureTime[0] >= 12 ? "PM" : "AM"
        }`;
        return filters.departureTime.includes(formattedTime);
      });
    }

    setFilteredRoute(filtered);
  }, [filters, route]);
  return (
    <div>
      <Navbar />
      <Banner title={"kampala To Arua"} />
      <div className="mt-2 mb-2 w-[80%] m-auto">
        <section className="BookingArea-section">
          <div className="">
            <form
              onSubmit={handleSubmit}
              className=" form-center bg-white rounded-lg"
            >
              <div className="form-row flex flex-col md:flex-row gap-5 items-center justify-center w-full ">
                <div className="from flex">
                  <label className="text-[#061f77] font-bold" id="firstLabel">
                    From
                  </label>
                  <input
                    type="text"
                    id="from"
                    value={input.from}
                    placeholder="Kampala"
                    className="mb-[24px] text-[#061f77] rounded w-[100%] p-[0.325em] border border-gray-300 text-[#061f77] focus:outline-none "
                    onChange={(e) => {
                      setInput({ ...input, from: e.target.value });
                      validateFrom(e.target.value);
                    }}
                  />
                </div>
                {error.from && (
                  <p className="text-center text-red-500">{error.from}</p>
                )}
                <div className="to flex">
                  <label className="text-[#061f77] font-bold">To</label>
                  <input
                    type="text"
                    id="to"
                    value={input.to}
                    placeholder="Arua"
                    className="mb-[24px] text-[#061f77] rounded w-[100%] p-[0.325em] border border-gray-300 text-[#061f77] focus:outline-none"
                    onChange={(e) => {
                      setInput({ ...input, to: e.target.value });
                      validateTo(e.target.value);
                    }}
                  />
                </div>
                {error.to && (
                  <p className="text-center text-red-500">{error.to}</p>
                )}
                <div className="date flex">
                  <label className="text-[#061f77] font-bold">Date</label>
                  <input
                    type="date"
                    className="mb-[24px] text-[#061f77] rounded w-[100%] p-[0.325em] border border-gray-300 text-[#061f77] focus:outline-none"
                  />
                </div>
                <div className="ticket flex">
                  <button
                    type="submit"
                    className="ml-4 mb-[24px] bg-[#061f77] rounded-lg text-white py-2 px-10 text-center"
                    style={{ whiteSpace: "nowrap", width: "100%" }}
                  >
                    Find Ticket
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
        <div className="md:flex md:justify-center items-start flex-col md:flex-row ">
          <section className="bg-slate-100 text-[#061f77] rounded-lg p-4 md:mr-10 md:mb-20 mt-60 mb-10 text-center w-20% md:mt-0">
            <div className="flex mb-8 justify-center">
              <div className="font-bold">
                <h1>FILTER</h1>
              </div>
              <div className="pl-8 font-bold">
                <h2
                  className="cursor-pointer"
                  onClick={() =>
                    setFilters({ busCategory: [], departureTime: [] })
                  }
                >
                  Reset All
                </h2>
              </div>
            </div>
            <div>
              <h2 className="mb-4 font-bold">Bus Category</h2>
              <div>
                <div>
                  <input
                    className="mb-4"
                    type={"checkbox"}
                    onChange={(e) =>
                      handleFilterChange("busCategory", "Nile Star")
                    }
                  />
                  <label>Nile Star</label>
                </div>
                <div>
                  <input
                    className="mb-4"
                    type={"checkbox"}
                    onChange={(e) =>
                      handleFilterChange("busCategory", "Global")
                    }
                  />
                  <label>Global</label>
                </div>
              </div>
            </div>
            <div>
              <h2 className="mb-4 mt-8 font-bold">Departure Time</h2>
              <div>
                <div className="mb-2">
                  <input
                    type={"checkbox"}
                    onChange={(e) =>
                      handleFilterChange("departureTime", "08:00 AM")
                    }
                  />
                  <label>08:00 AM</label>
                </div>
                <div className="mb-2">
                  <input
                    type={"checkbox"}
                    onChange={(e) =>
                      handleFilterChange("departureTime", "09:00 AM")
                    }
                  />
                  <label>09:00 AM</label>
                </div>
              </div>
            </div>
          </section>
          <div>
            {filteredRoute !== null ? (
              filteredRoute.map((row) => {
                return (
                  <BusService
                    className=""
                    key={row.id}
                    busCompany={row.attributes.BusCompany}
                    departureTown={row.attributes.DepartureTown}
                    arrivalTown={row.attributes.ArrivalTown}
                    departureTime={row.attributes.DepartureTime}
                    fare={row.attributes.Fare}
                  />
                );
              })
            ) : (
              <p>No Buses available ...</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Booking;
