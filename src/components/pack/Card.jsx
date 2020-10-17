import React from "react";

const Card = ({ el }) => {
  //LAUNCHING VARIABLE
  let success1 = el.launch_success === true ? "true" : "false";

  //LANDING VARIABLE
  let success = el.rocket.first_stage.cores[0].land_success === true ? "true" : "false";

  return (
    <div className="max-w-sm m-2 flex-1 rounded shadow-lg bg-white overflow-hidden">
      <div>
        {/* RENDER IMAGE FROM PROPS  */}
        <div className="w-full p-4">
          <img
            className="bg-gray-200 w-full"
            src={el.links.mission_patch_small}
            alt="Raw details of Mission"
          />
        </div>
        {/* RENDER DATA FROM PROPS */}
        <div className="px-6 py-4 text-left ">
          <div className="font-bold mb-2 text-indigo-700 ">
            {el.mission_name} #{el.flight_number}
          </div>
          <ul>
            <li className="py-1">
              <strong>Mission Ids: </strong>
              <ul className="list-disc list-inside text-indigo-700">
                {el.mission_id.map((person, index) => (
                  <li key={index}>{person}</li>
                ))}
              </ul>
            </li>
            <li className="py-1">
              <p className="text-indigo-700">
                <strong className="text-black">Launch Year:</strong>{" "}
                {el.launch_year}
                {/* {console.log("YEAR",el.launch_year)} */}
              </p>
            </li>
            <li className="py-1">
              <p className="text-indigo-700">
                <strong className="text-black">Successful Launch:</strong>{" "}
                {success1}
                {/* {console.log("LAUNCH",el.launch_success.toString())} */}
              </p>
            </li>
            <li className="py-1">
              <p className="text-indigo-700">
                <strong className="text-black">Successful Landing:</strong>{" "}
                {success}
                {/* {console.log("LANDIN",success)} */}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
