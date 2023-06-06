import { useContext, useState } from "react";

import { StoreContext,ACTION_TYPES } from "@/store/store-context";
function userTrackLocation() {
    const [locationErrorMsg, setLocationErrorMsg] = useState("");
   // const [latLong, setLatLong] = useState("");
    const [isFindingLocation,setIsFindingLocation]=useState(false);

    const { dispatch } = useContext(StoreContext);
   
  const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // setLatLong(`${latitude},${longitude}`);
    dispatch({
      type: ACTION_TYPES.SET_LAT_LONG,
      payload: { latLong: `${latitude},${longitude}` },
    });
    setLocationErrorMsg("");
    setIsFindingLocation(false);
  };

    function error() {
        setIsFindingLocation(false);
        setLocationErrorMsg("Unable to retrieve your location");
    };
    function handleTrackLocation() {
        setIsFindingLocation(true);

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error);
        }
        else {
            setIsFindingLocation(false);
            setLocationErrorMsg("Geolocation is not supported by your browser");
        }
    }
    return {
        handleTrackLocation, 
       // latLong, 
        locationErrorMsg,
        isFindingLocation
    };
};







export default userTrackLocation;