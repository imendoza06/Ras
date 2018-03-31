import React from "react";
import { render } from "react-dom";
import places from "./places";

const distance = (loc1, loc2) => {
  return Math.sqrt(
    Math.pow(loc2.lng - loc1.lng, 2) + Math.pow(loc2.lat - loc1.lat, 2)
    //Returning (the sqrt) of the (lng to the power of 2) plus (the lat to the pow of 2) btwn loc2 - loc1
  );
};
/*
  Sorts places by distance from a given location
  The Math.pow() method returns the value of x to the power of y (xy)
*/
const sortPlacesByDistance = location => {
  return places.sort(
    (place1, place2) =>
      distance(place1.location, location) - distance(place2.location, location)
  );
};

class MapContainer extends React.Component {
  state = {
    message: "",
    searchInput: "",
    searchLocation: null,
    sortedPlaces: null,
    searchAddress: null
  };

  searchInputChange = e => {
    this.setState({
      searchInput: e.target.value
    });
  };

  submitSearch = () => {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${
      this.state.searchInput
    }&key=AIzaSyAVXkGZkcfklOfknHuvt2-dOaAxKWccm0w
      `)
      .then(res => res.json())
      .then(data => {
        console.log(data);

        if (data.status === "OK") {
          const place = data.results[0];
          const location = place.geometry.location;

          this.setState({
            searchInput: "",
            searchAddress: place.formatted_address,
            searchLocation: location,
            sortedPlaces: sortPlacesByDistance(location)
          });
        } else {
          this.setState({
            message: "could not find a location"
          });
        }
      });
  };

  render() {
    const { searchLocation, sortedPlaces, searchAddress } = this.state;

    return (
      <div>
        <input
          value={this.state.searchInput}
          onChange={this.searchInputChange}
        />
        <button onClick={this.submitSearch}> submit</button>
        <div>
          {searchLocation ? (
            <div>
              {" "}
              {searchAddress && <div> Address: {searchAddress} </div>}
              lattittude: {searchLocation.lat}, longitude: {searchLocation.lng}
            </div>
          ) : (
            <div> Enter an address </div>
          )}
        </div>
        {sortedPlaces ? (
          <div>
            {" "}
            places by distance:
            <ol>{sortedPlaces.map(place => <li>{place.name}</li>)}</ol>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default MapContainer;
