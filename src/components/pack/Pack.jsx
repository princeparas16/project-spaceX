import React, { useState, useEffect } from "react";
import Card from "./Card";

function Pack(props) {
  const [info, setInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [year, setYear] = useState("");
  const [launch, setLaunch] = useState("");
  const [land, setLand] = useState("");

  // FETCHING DATA FROM PROVIDED API
  useEffect(() => {
    const fetchDATA = async () => {
      const data = await fetch(
        `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${launch}&land_success=${land}&launch_year=${year}`
      )
        .then((res) => res.json())
        .catch((err) => console.log(err));
      setInfo(data);
      setIsLoading(false);
    };
    fetchDATA();
  }, [year, launch, land]);

  return (
    <div className="block mb-4 sm:flex md:flex lg:flex ">
      {/* FILTER */}
      <div className="sm:w-100 md:w-1/5 lg:w-1/5 bg-gray text-center ">
        <div className="block bg-white px-2 mt-2 md:mx-2 pb-12 rounded-lg">
          <div>
            <h1 className="text-2xl text-left font-bold">Filters</h1>
          </div>
          <div>
            <h1 className="text-xl text-center font mt-0 mx-8 border-b-2 border-gray-500 border-opacity-50">
              Launch Year
            </h1>
            <div className="grid grid-cols-2 gap-4 mt-3">
              <button
                type="button"
                onClick={() => setYear("2006")}
                className="text-center bg-green-200 focus:outline-none active:bg-green-400 hover:bg-green-400 font-bold mx-4 md:mx-1 lg:mx-4 px-1 py-1 rounded"
              >
                2006
              </button>
              <button
                type="button"
                onClick={() => setYear("2007")}
                className="bg-green-200 focus:outline-none active:bg-green-400 hover:bg-green-400 font-bold mx-4 md:mx-1 lg:mx-4 px-1 py-1 rounded"
              >
                2007
              </button>
              <button
                type="button"
                onClick={() => setYear("2008")}
                className="bg-green-200 focus:outline-none active:bg-green-400 hover:bg-green-400 font-bold mx-4 md:mx-1 lg:mx-4 px-1 py-1 rounded"
              >
                2008
              </button>
              <button
                type="button"
                onClick={() => setYear("2009")}
                className="bg-green-200 focus:outline-none active:bg-green-400 hover:bg-green-400 font-bold mx-4 md:mx-1 lg:mx-4 px-1 py-1 rounded"
              >
                2009
              </button>
              <button
                type="button"
                onClick={() => setYear("2010")}
                className="bg-green-200 focus:outline-none active:bg-green-400 hover:bg-green-400 font-bold mx-4 md:mx-1 lg:mx-4 px-1 py-1 rounded"
              >
                2010
              </button>
              <button
                type="button"
                onClick={() => setYear("2011")}
                className="bg-green-200 focus:outline-none active:bg-green-400 hover:bg-green-400 font-bold mx-4 md:mx-1 lg:mx-4 px-1 py-1 rounded"
              >
                2011
              </button>
              <button
                type="button"
                onClick={() => setYear("2012")}
                className="bg-green-200 focus:outline-none active:bg-green-400 hover:bg-green-400 font-bold mx-4 md:mx-1 lg:mx-4 px-1 py-1 rounded"
              >
                2012
              </button>
              <button
                type="button"
                onClick={() => setYear("2013")}
                className="bg-green-200 focus:outline-none active:bg-green-400 hover:bg-green-400 font-bold mx-4 md:mx-1 lg:mx-4 px-1 py-1 rounded"
              >
                2013
              </button>
              <button
                type="button"
                onClick={() => setYear("2014")}
                className="bg-green-200 focus:outline-none active:bg-green-400 hover:bg-green-400 font-bold mx-4 md:mx-1 lg:mx-4 px-1 py-1 rounded"
              >
                2014
              </button>
              <button
                type="button"
                onClick={() => setYear("2015")}
                className="bg-green-200 focus:outline-none active:bg-green-400 hover:bg-green-400 font-bold mx-4 md:mx-1 lg:mx-4 px-1 py-1 rounded"
              >
                2015
              </button>
              <button
                type="button"
                onClick={() => setYear("2016")}
                className="bg-green-200 focus:outline-none active:bg-green-400 hover:bg-green-400 font-bold mx-4 md:mx-1 lg:mx-4 px-1 py-1 rounded"
              >
                2016
              </button>
              <button
                type="button"
                onClick={() => setYear("2017")}
                className="bg-green-200 focus:outline-none active:bg-green-400 hover:bg-green-400 font-bold mx-4 md:mx-1 lg:mx-4 px-1 py-1 rounded"
              >
                2017
              </button>
              <button
                type="button"
                onClick={() => setYear("2018")}
                className="bg-green-200 focus:outline-none active:bg-green-400 hover:bg-green-400 font-bold mx-4 md:mx-1 lg:mx-4 px-1 py-1 rounded"
              >
                2018
              </button>
              <button
                type="button"
                onClick={() => setYear("2019")}
                className="bg-green-200 focus:outline-none active:bg-green-400 hover:bg-green-400 font-bold mx-4 md:mx-1 lg:mx-4 px-1 py-1 rounded"
              >
                2019
              </button>
              <button
                type="button"
                onClick={() => setYear("2020")}
                className="bg-green-200 focus:outline-none active:bg-green-400 hover:bg-green-400 font-bold mx-4 md:mx-1 lg:mx-4 px-1 py-1 rounded"
              >
                2020
              </button>
            </div>
          </div>
          <div>
            <h1 className="text-xl text-center font mt-6 mx-8 md:mx-2 border-b-2 border-gray-500 border-opacity-50">
              Successful Launch
            </h1>
            <div className="grid grid-cols-2 gap-4 mt-3">
              <button
                type="button"
                onClick={() => setLaunch("true")}
                className="bg-green-200 focus:outline-none active:bg-green-400 hover:bg-green-400 font-bold mx-4 md:mx-1 lg:mx-4 px-1 py-1 rounded"
              >
                True
              </button>
              <button
                type="button"
                onClick={() => setLaunch("false")}
                className="bg-green-200 focus:outline-none active:bg-green-400 hover:bg-green-400 font-bold mx-4 md:mx-1 lg:mx-4 px-1 py-1 rounded"
              >
                False
              </button>
            </div>
          </div>
          <div>
            <h1 className="text-xl text-center font mt-6 mx-8 md:mx-2 border-b-2 border-gray-500 border-opacity-50">
              Successful Landing
            </h1>
            <div className="grid grid-cols-2 gap-4 mt-3">
              <button
                type="button"
                onClick={() => setLand("true")}
                className="bg-green-200 focus:outline-none active:bg-green-400 hover:bg-green-400 font-bold mx-4 md:mx-1 lg:mx-4 px-1 py-1 rounded"
              >
                True
              </button>
              <button
                type="button"
                onClick={() => setLand("false")}
                className="bg-green-200 focus:outline-none active:bg-green-400 hover:bg-green-400 font-bold mx-4 md:mx-1 lg:mx-4 px-1 py-1 rounded"
              >
                False
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* CARD  */}
      {isLoading ? (
        <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>
      ) : (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:w-100 md:w-4/5 lg:w-4/5 p-2 pr-0 text-center m-2 rounded-lg mt-0 pt-0">
          {info.length === 0 ? (
            <h1 className="text-6xl text-center mx-auto mt-32">
              No Record Found
            </h1>
          ) : (
            info.map((el) => <Card key={el.flight_number} el={el} />)
          )}
        </div>
      )}
    </div>
  );
}

export default Pack;
