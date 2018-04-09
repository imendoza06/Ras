import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AddBusiness.css'
import Logowhite from "../../Images/LogoWhite.png";
import Checkmark from "../../Images/checkmark.gif";
import Api from "../../Api/Api";
import axios from "axios";

class AddingBusiness extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addedstudio: false,
      studio_Name: "Slic Studios",
      about: "Experience Slic",
      studio_Address: "21-07 Borden Avenue, 5th Floor",
      city: "New York",
      state: "New York",
      zipcode: 10019,
      description: "SLIC is a full service Film and Photography Studios located in the heart of trendy LIC, minutes away from Manhattan, 1 block away from the midtown tunnel and the 7 and G train. With 4 customizable studios with cyclorama walls up to 1,800sf, ample windows for natural lighting with blackout capabilities and access to the Rooftop we offer unique shooting & filming opportunities.",
      hours: "9:00 AM to 6:00 PM Monday to Friday",
      price: 60,
      phone: "212-799-5433",
      amenities: "Wifi",
      rules: "No Smoking",
      category: "Photography",
      rooms: "",
      image: "http://slicstudios.com/wp-content/uploads/2016/12/studio3-3.jpg",
      isLogin: false,
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [],
      sunday: [],
      times: ["12AM - 1AM", "1AM - 2AM", "2AM - 3AM", "3AM - 4AM", "4AM - 5AM", "5AM - 6AM", "6AM - 7AM",
        "7AM - 8AM", "8AM - 9AM", "9AM - 10AM", "10AM - 11AM", "11AM - 12PM", "12PM - 1PM", "1PM - 2PM", "2PM - 3PM",
        "3PM - 4PM", "4PM - 5PM", "5PM - 6PM", "6PM - 7PM", "7PM - 8PM", "8PM - 9PM", "9PM - 10PM", "10PM - 11PM", "11PM - 12AM"],
      M1: false, M2: false, M3: false, M4: false, M5: false, M6: false, M7: false, M8: false, M9: false, M10: false, M11: false, M12: false,
      MP1: false, MP2: false, MP3: false, MP4: false, MP5: false, MP6: false, MP7: false, MP8: false, MP9: false, MP10: false, MP11: false, MP12: false,
      T1: false, T2: false, T3: false, T4: false, T5: false, T6: false, T7: false, T8: false, T9: false, T10: false, T11: false, T12: false,
      TP1: false, TP2: false, TP3: false, TP4: false, TP5: false, TP6: false, TP7: false, TP8: false, TP9: false, TP10: false, TP11: false, TP12: false,
      W1: false, W2: false, W3: false, W4: false, W5: false, W6: false, W7: false, W8: false, W9: false, W10: false, W11: false, W12: false,
      WP1: false, WP2: false, WP3: false, WP4: false, WP5: false, WP6: false, WP7: false, WP8: false, WP9: false, WP10: false, WP11: false, WP12: false,
      TH1: false, TH2: false, TH3: false, TH4: false, TH5: false, TH6: false, TH7: false, TH8: false, TH9: false, TH10: false, TH11: false, TH12: false,
      THP1: false, THP2: false, THP3: false, THP4: false, THP5: false, THP6: false, THP7: false, THP8: false, THP9: false, THP10: false, THP11: false, THP12: false,
      F1: false, F2: false, F3: false, F4: false, F5: false, F6: false, F7: false, F8: false, F9: false, F10: false, F11: false, F12: false,
      FP1: false, FP2: false, FP3: false, FP4: false, FP5: false, FP6: false, FP7: false, FP8: false, FP9: false, FP10: false, FP11: false, FP12: false,
      S1: false, S2: false, S3: false, S4: false, S5: false, S6: false, S7: false, S8: false, S9: false, S10: false, S11: false, S12: false,
      SP1: false, SP2: false, SP3: false, SP4: false, SP5: false, SP6: false, SP7: false, SP8: false, SP9: false, SP10: false, SP11: false, SP12: false,
      SU1: false, SU2: false, SU3: false, SU4: false, SU5: false, SU6: false, SU7: false, SU8: false, SU9: false, SU10: false, SU11: false, SU12: false,
      SUP1: false, SUP2: false, SUP3: false, SUP4: false, SUP5: false, SUP6: false, SUP7: false, SUP8: false, SUP9: false, SUP10: false, SUP11: false, SUP12: false,
    };
  }

  handleCheckboxChange = e => {
    const { times } = this.state;
    console.log(e.target.checked)
    console.log(this.state.monday)
    console.log(this.state.tuesday)
    console.log(this.state.wednesday)
    console.log(this.state.thursday)
    console.log(this.state.friday)
    console.log(this.state.saturday)
    console.log(this.state.sunday)

    if (e.target.checked === false) {
      if (e.target.name.includes("M")) {
        if (e.target.name.includes("1") && !e.target.name.includes("P")) {
          for (var i = this.state.monday.length - 1; i >= 0; i--) {
            if (this.state.monday[i] === times[0]) {
              this.state.monday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("2") && !e.target.name.includes("P")) {
          for (var i = this.state.monday.length - 1; i >= 0; i--) {
            if (this.state.monday[i] === times[1]) {
              this.state.monday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("3") && !e.target.name.includes("P")) {
          for (var i = this.state.monday.length - 1; i >= 0; i--) {
            if (this.state.monday[i] === times[2]) {
              this.state.monday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("4") && !e.target.name.includes("P")) {
          for (var i = this.state.monday.length - 1; i >= 0; i--) {
            if (this.state.monday[i] === times[3]) {
              this.state.monday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("5") && !e.target.name.includes("P")) {
          for (var i = this.state.monday.length - 1; i >= 0; i--) {
            if (this.state.monday[i] === times[4]) {
              this.state.monday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("6") && !e.target.name.includes("P")) {
          for (var i = this.state.monday.length - 1; i >= 0; i--) {
            if (this.state.monday[i] === times[5]) {
              this.state.monday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("7") && !e.target.name.includes("P")) {
          for (var i = this.state.monday.length - 1; i >= 0; i--) {
            if (this.state.monday[i] === times[6]) {
              this.state.monday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("8") && !e.target.name.includes("P")) {
          for (var i = this.state.monday.length - 1; i >= 0; i--) {
            if (this.state.monday[i] === times[7]) {
              this.state.monday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("9") && !e.target.name.includes("P")) {
          for (var i = this.state.monday.length - 1; i >= 0; i--) {
            if (this.state.monday[i] === times[8]) {
              this.state.monday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("10") && !e.target.name.includes("P")) {
          for (var i = this.state.monday.length - 1; i >= 0; i--) {
            if (this.state.monday[i] === times[9]) {
              this.state.monday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("11") && !e.target.name.includes("P")) {
          for (var i = this.state.monday.length - 1; i >= 0; i--) {
            if (this.state.monday[i] === times[10]) {
              this.state.monday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("12") && !e.target.name.includes("P")) {
          for (var i = this.state.monday.length - 1; i >= 0; i--) {
            if (this.state.monday[i] === times[11]) {
              this.state.monday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P1")) {
          for (var i = this.state.monday.length - 1; i >= 0; i--) {
            if (this.state.monday[i] === times[12]) {
              this.state.monday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P2")) {
          for (var i = this.state.monday.length - 1; i >= 0; i--) {
            if (this.state.monday[i] === times[13]) {
              this.state.monday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P3")) {
          for (var i = this.state.monday.length - 1; i >= 0; i--) {
            if (this.state.monday[i] === times[14]) {
              this.state.monday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P4")) {
          for (var i = this.state.monday.length - 1; i >= 0; i--) {
            if (this.state.monday[i] === times[15]) {
              this.state.monday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P5")) {
          for (var i = this.state.monday.length - 1; i >= 0; i--) {
            if (this.state.monday[i] === times[16]) {
              this.state.monday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P6")) {
          for (var i = this.state.monday.length - 1; i >= 0; i--) {
            if (this.state.monday[i] === times[17]) {
              this.state.monday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P7")) {
          for (var i = this.state.monday.length - 1; i >= 0; i--) {
            if (this.state.monday[i] === times[18]) {
              this.state.monday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P8")) {
          for (var i = this.state.monday.length - 1; i >= 0; i--) {
            if (this.state.monday[i] === times[19]) {
              this.state.monday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P9")) {
          for (var i = this.state.monday.length - 1; i >= 0; i--) {
            if (this.state.monday[i] === times[20]) {
              this.state.monday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P10")) {
          for (var i = this.state.monday.length - 1; i >= 0; i--) {
            if (this.state.monday[i] === times[21]) {
              this.state.monday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P11")) {
          for (var i = this.state.monday.length - 1; i >= 0; i--) {
            if (this.state.monday[i] === times[22]) {
              this.state.monday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P12")) {
          for (var i = this.state.monday.length - 1; i >= 0; i--) {
            if (this.state.monday[i] === times[23]) {
              this.state.monday.splice(i, 1);
            }
          }
        }
      }
      if (e.target.name.includes("T") && !e.target.name.includes("TH")) {
        if (e.target.name.includes("1") && !e.target.name.includes("P")) {
          for (var i = this.state.tuesday.length - 1; i >= 0; i--) {
            if (this.state.tuesday[i] === times[0]) {
              this.state.tuesday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("2") && !e.target.name.includes("P")) {
          for (var i = this.state.tuesday.length - 1; i >= 0; i--) {
            if (this.state.tuesday[i] === times[1]) {
              this.state.tuesday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("3") && !e.target.name.includes("P")) {
          for (var i = this.state.tuesday.length - 1; i >= 0; i--) {
            if (this.state.tuesday[i] === times[2]) {
              this.state.tuesday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("4") && !e.target.name.includes("P")) {
          for (var i = this.state.tuesday.length - 1; i >= 0; i--) {
            if (this.state.tuesday[i] === times[3]) {
              this.state.tuesday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("5") && !e.target.name.includes("P")) {
          for (var i = this.state.tuesday.length - 1; i >= 0; i--) {
            if (this.state.tuesday[i] === times[4]) {
              this.state.tuesday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("6") && !e.target.name.includes("P")) {
          for (var i = this.state.tuesday.length - 1; i >= 0; i--) {
            if (this.state.tuesday[i] === times[5]) {
              this.state.tuesday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("7") && !e.target.name.includes("P")) {
          for (var i = this.state.tuesday.length - 1; i >= 0; i--) {
            if (this.state.tuesday[i] === times[6]) {
              this.state.tuesday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("8") && !e.target.name.includes("P")) {
          for (var i = this.state.tuesday.length - 1; i >= 0; i--) {
            if (this.state.tuesday[i] === times[7]) {
              this.state.tuesday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("9") && !e.target.name.includes("P")) {
          for (var i = this.state.tuesday.length - 1; i >= 0; i--) {
            if (this.state.tuesday[i] === times[8]) {
              this.state.tuesday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("10") && !e.target.name.includes("P")) {
          for (var i = this.state.tuesday.length - 1; i >= 0; i--) {
            if (this.state.tuesday[i] === times[9]) {
              this.state.tuesday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("11") && !e.target.name.includes("P")) {
          for (var i = this.state.tuesday.length - 1; i >= 0; i--) {
            if (this.state.tuesday[i] === times[10]) {
              this.state.tuesday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("12") && !e.target.name.includes("P")) {
          for (var i = this.state.tuesday.length - 1; i >= 0; i--) {
            if (this.state.tuesday[i] === times[11]) {
              this.state.tuesday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P1")) {
          for (var i = this.state.tuesday.length - 1; i >= 0; i--) {
            if (this.state.tuesday[i] === times[12]) {
              this.state.tuesday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P2")) {
          for (var i = this.state.tuesday.length - 1; i >= 0; i--) {
            if (this.state.tuesday[i] === times[13]) {
              this.state.tuesday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P3")) {
          for (var i = this.state.tuesday.length - 1; i >= 0; i--) {
            if (this.state.tuesday[i] === times[14]) {
              this.state.tuesday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P4")) {
          for (var i = this.state.tuesday.length - 1; i >= 0; i--) {
            if (this.state.tuesday[i] === times[15]) {
              this.state.tuesday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P5")) {
          for (var i = this.state.tuesday.length - 1; i >= 0; i--) {
            if (this.state.tuesday[i] === times[16]) {
              this.state.tuesday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P6")) {
          for (var i = this.state.tuesday.length - 1; i >= 0; i--) {
            if (this.state.tuesday[i] === times[17]) {
              this.state.tuesday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P7")) {
          for (var i = this.state.tuesday.length - 1; i >= 0; i--) {
            if (this.state.tuesday[i] === times[18]) {
              this.state.tuesday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P8")) {
          for (var i = this.state.tuesday.length - 1; i >= 0; i--) {
            if (this.state.tuesday[i] === times[19]) {
              this.state.tuesday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P9")) {
          for (var i = this.state.tuesday.length - 1; i >= 0; i--) {
            if (this.state.tuesday[i] === times[20]) {
              this.state.tuesday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P10")) {
          for (var i = this.state.tuesday.length - 1; i >= 0; i--) {
            if (this.state.tuesday[i] === times[21]) {
              this.state.tuesday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P11")) {
          for (var i = this.state.tuesday.length - 1; i >= 0; i--) {
            if (this.state.tuesday[i] === times[22]) {
              this.state.tuesday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P12")) {
          for (var i = this.state.tuesday.length - 1; i >= 0; i--) {
            if (this.state.tuesday[i] === times[23]) {
              this.state.tuesday.splice(i, 1);
            }
          }
        }
      }

      if (e.target.name.includes("W")) {
        if (e.target.name.includes("1") && !e.target.name.includes("P")) {
          for (var i = this.state.wednesday.length - 1; i >= 0; i--) {
            if (this.state.wednesday[i] === times[0]) {
              this.state.wednesday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("2") && !e.target.name.includes("P")) {
          for (var i = this.state.wednesday.length - 1; i >= 0; i--) {
            if (this.state.wednesday[i] === times[1]) {
              this.state.wednesday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("3") && !e.target.name.includes("P")) {
          for (var i = this.state.wednesday.length - 1; i >= 0; i--) {
            if (this.state.wednesday[i] === times[2]) {
              this.state.wednesday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("4") && !e.target.name.includes("P")) {
          for (var i = this.state.wednesday.length - 1; i >= 0; i--) {
            if (this.state.wednesday[i] === times[3]) {
              this.state.wednesday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("5") && !e.target.name.includes("P")) {
          for (var i = this.state.wednesday.length - 1; i >= 0; i--) {
            if (this.state.wednesday[i] === times[4]) {
              this.state.wednesday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("6") && !e.target.name.includes("P")) {
          for (var i = this.state.wednesday.length - 1; i >= 0; i--) {
            if (this.state.wednesday[i] === times[5]) {
              this.state.wednesday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("7") && !e.target.name.includes("P")) {
          for (var i = this.state.wednesday.length - 1; i >= 0; i--) {
            if (this.state.wednesday[i] === times[6]) {
              this.state.wednesday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("8") && !e.target.name.includes("P")) {
          for (var i = this.state.wednesday.length - 1; i >= 0; i--) {
            if (this.state.wednesday[i] === times[7]) {
              this.state.wednesday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("9") && !e.target.name.includes("P")) {
          for (var i = this.state.wednesday.length - 1; i >= 0; i--) {
            if (this.state.wednesday[i] === times[8]) {
              this.state.wednesday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("10") && !e.target.name.includes("P")) {
          for (var i = this.state.wednesday.length - 1; i >= 0; i--) {
            if (this.state.wednesday[i] === times[9]) {
              this.state.wednesday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("11") && !e.target.name.includes("P")) {
          for (var i = this.state.wednesday.length - 1; i >= 0; i--) {
            if (this.state.wednesday[i] === times[10]) {
              this.state.wednesday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("12") && !e.target.name.includes("P")) {
          for (var i = this.state.wednesday.length - 1; i >= 0; i--) {
            if (this.state.wednesday[i] === times[11]) {
              this.state.wednesday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P1")) {
          for (var i = this.state.wednesday.length - 1; i >= 0; i--) {
            if (this.state.wednesday[i] === times[12]) {
              this.state.wednesday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P2")) {
          for (var i = this.state.wednesday.length - 1; i >= 0; i--) {
            if (this.state.wednesday[i] === times[13]) {
              this.state.wednesday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P3")) {
          for (var i = this.state.wednesday.length - 1; i >= 0; i--) {
            if (this.state.wednesday[i] === times[14]) {
              this.state.wednesday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P4")) {
          for (var i = this.state.wednesday.length - 1; i >= 0; i--) {
            if (this.state.wednesday[i] === times[15]) {
              this.state.wednesday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P5")) {
          for (var i = this.state.wednesday.length - 1; i >= 0; i--) {
            if (this.state.wednesday[i] === times[16]) {
              this.state.wednesday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P6")) {
          for (var i = this.state.wednesday.length - 1; i >= 0; i--) {
            if (this.state.wednesday[i] === times[17]) {
              this.state.wednesday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P7")) {
          for (var i = this.state.wednesday.length - 1; i >= 0; i--) {
            if (this.state.wednesday[i] === times[18]) {
              this.state.wednesday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P8")) {
          for (var i = this.state.wednesday.length - 1; i >= 0; i--) {
            if (this.state.wednesday[i] === times[19]) {
              this.state.wednesday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P9")) {
          for (var i = this.state.wednesday.length - 1; i >= 0; i--) {
            if (this.state.wednesday[i] === times[20]) {
              this.state.wednesday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P10")) {
          for (var i = this.state.wednesday.length - 1; i >= 0; i--) {
            if (this.state.wednesday[i] === times[21]) {
              this.state.wednesday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P11")) {
          for (var i = this.state.wednesday.length - 1; i >= 0; i--) {
            if (this.state.wednesday[i] === times[22]) {
              this.state.wednesday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P12")) {
          for (var i = this.state.wednesday.length - 1; i >= 0; i--) {
            if (this.state.wednesday[i] === times[23]) {
              this.state.wednesday.splice(i, 1);
            }
          }
        }
      }

      if (e.target.name.includes("TH")) {
        if (e.target.name.includes("1") && !e.target.name.includes("P")) {
          for (var i = this.state.thursday.length - 1; i >= 0; i--) {
            if (this.state.thursday[i] === times[0]) {
              this.state.thursday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("2") && !e.target.name.includes("P")) {
          for (var i = this.state.thursday.length - 1; i >= 0; i--) {
            if (this.state.thursday[i] === times[1]) {
              this.state.thursday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("3") && !e.target.name.includes("P")) {
          for (var i = this.state.thursday.length - 1; i >= 0; i--) {
            if (this.state.thursday[i] === times[2]) {
              this.state.thursday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("4") && !e.target.name.includes("P")) {
          for (var i = this.state.thursday.length - 1; i >= 0; i--) {
            if (this.state.thursday[i] === times[3]) {
              this.state.thursday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("5") && !e.target.name.includes("P")) {
          for (var i = this.state.thursday.length - 1; i >= 0; i--) {
            if (this.state.thursday[i] === times[4]) {
              this.state.thursday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("6") && !e.target.name.includes("P")) {
          for (var i = this.state.thursday.length - 1; i >= 0; i--) {
            if (this.state.thursday[i] === times[5]) {
              this.state.thursday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("7") && !e.target.name.includes("P")) {
          for (var i = this.state.thursday.length - 1; i >= 0; i--) {
            if (this.state.thursday[i] === times[6]) {
              this.state.thursday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("8") && !e.target.name.includes("P")) {
          for (var i = this.state.thursday.length - 1; i >= 0; i--) {
            if (this.state.thursday[i] === times[7]) {
              this.state.thursday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("9") && !e.target.name.includes("P")) {
          for (var i = this.state.thursday.length - 1; i >= 0; i--) {
            if (this.state.thursday[i] === times[8]) {
              this.state.thursday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("10") && !e.target.name.includes("P")) {
          for (var i = this.state.thursday.length - 1; i >= 0; i--) {
            if (this.state.thursday[i] === times[9]) {
              this.state.thursday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("11") && !e.target.name.includes("P")) {
          for (var i = this.state.thursday.length - 1; i >= 0; i--) {
            if (this.state.thursday[i] === times[10]) {
              this.state.thursday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("12") && !e.target.name.includes("P")) {
          for (var i = this.state.thursday.length - 1; i >= 0; i--) {
            if (this.state.thursday[i] === times[11]) {
              this.state.thursday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P1")) {
          for (var i = this.state.thursday.length - 1; i >= 0; i--) {
            if (this.state.thursday[i] === times[12]) {
              this.state.thursday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P2")) {
          for (var i = this.state.thursday.length - 1; i >= 0; i--) {
            if (this.state.thursday[i] === times[13]) {
              this.state.thursday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P3")) {
          for (var i = this.state.thursday.length - 1; i >= 0; i--) {
            if (this.state.thursday[i] === times[14]) {
              this.state.thursday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P4")) {
          for (var i = this.state.thursday.length - 1; i >= 0; i--) {
            if (this.state.thursday[i] === times[15]) {
              this.state.thursday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P5")) {
          for (var i = this.state.thursday.length - 1; i >= 0; i--) {
            if (this.state.thursday[i] === times[16]) {
              this.state.thursday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P6")) {
          for (var i = this.state.thursday.length - 1; i >= 0; i--) {
            if (this.state.thursday[i] === times[17]) {
              this.state.thursday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P7")) {
          for (var i = this.state.thursday.length - 1; i >= 0; i--) {
            if (this.state.thursday[i] === times[18]) {
              this.state.thursday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P8")) {
          for (var i = this.state.thursday.length - 1; i >= 0; i--) {
            if (this.state.thursday[i] === times[19]) {
              this.state.thursday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P9")) {
          for (var i = this.state.thursday.length - 1; i >= 0; i--) {
            if (this.state.thursday[i] === times[20]) {
              this.state.thursday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P10")) {
          for (var i = this.state.thursday.length - 1; i >= 0; i--) {
            if (this.state.thursday[i] === times[21]) {
              this.state.thursday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P11")) {
          for (var i = this.state.thursday.length - 1; i >= 0; i--) {
            if (this.state.thursday[i] === times[22]) {
              this.state.thursday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P12")) {
          for (var i = this.state.thursday.length - 1; i >= 0; i--) {
            if (this.state.thursday[i] === times[23]) {
              this.state.thursday.splice(i, 1);
            }
          }
        }
      }
      if (e.target.name.includes("F")) {
        if (e.target.name.includes("1") && !e.target.name.includes("P")) {
          for (var i = this.state.friday.length - 1; i >= 0; i--) {
            if (this.state.friday[i] === times[0]) {
              this.state.friday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("2") && !e.target.name.includes("P")) {
          for (var i = this.state.friday.length - 1; i >= 0; i--) {
            if (this.state.friday[i] === times[1]) {
              this.state.friday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("3") && !e.target.name.includes("P")) {
          for (var i = this.state.friday.length - 1; i >= 0; i--) {
            if (this.state.friday[i] === times[2]) {
              this.state.friday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("4") && !e.target.name.includes("P")) {
          for (var i = this.state.friday.length - 1; i >= 0; i--) {
            if (this.state.friday[i] === times[3]) {
              this.state.friday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("5") && !e.target.name.includes("P")) {
          for (var i = this.state.friday.length - 1; i >= 0; i--) {
            if (this.state.friday[i] === times[4]) {
              this.state.friday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("6") && !e.target.name.includes("P")) {
          for (var i = this.state.friday.length - 1; i >= 0; i--) {
            if (this.state.friday[i] === times[5]) {
              this.state.friday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("7") && !e.target.name.includes("P")) {
          for (var i = this.state.friday.length - 1; i >= 0; i--) {
            if (this.state.friday[i] === times[6]) {
              this.state.friday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("8") && !e.target.name.includes("P")) {
          for (var i = this.state.friday.length - 1; i >= 0; i--) {
            if (this.state.friday[i] === times[7]) {
              this.state.friday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("9") && !e.target.name.includes("P")) {
          for (var i = this.state.friday.length - 1; i >= 0; i--) {
            if (this.state.friday[i] === times[8]) {
              this.state.friday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("10") && !e.target.name.includes("P")) {
          for (var i = this.state.friday.length - 1; i >= 0; i--) {
            if (this.state.friday[i] === times[9]) {
              this.state.friday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("11") && !e.target.name.includes("P")) {
          for (var i = this.state.friday.length - 1; i >= 0; i--) {
            if (this.state.friday[i] === times[10]) {
              this.state.friday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("12") && !e.target.name.includes("P")) {
          for (var i = this.state.friday.length - 1; i >= 0; i--) {
            if (this.state.friday[i] === times[11]) {
              this.state.friday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P1")) {
          for (var i = this.state.friday.length - 1; i >= 0; i--) {
            if (this.state.friday[i] === times[12]) {
              this.state.friday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P2")) {
          for (var i = this.state.friday.length - 1; i >= 0; i--) {
            if (this.state.friday[i] === times[13]) {
              this.state.friday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P3")) {
          for (var i = this.state.friday.length - 1; i >= 0; i--) {
            if (this.state.friday[i] === times[14]) {
              this.state.friday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P4")) {
          for (var i = this.state.friday.length - 1; i >= 0; i--) {
            if (this.state.friday[i] === times[15]) {
              this.state.friday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P5")) {
          for (var i = this.state.friday.length - 1; i >= 0; i--) {
            if (this.state.friday[i] === times[16]) {
              this.state.friday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P6")) {
          for (var i = this.state.friday.length - 1; i >= 0; i--) {
            if (this.state.friday[i] === times[17]) {
              this.state.friday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P7")) {
          for (var i = this.state.friday.length - 1; i >= 0; i--) {
            if (this.state.friday[i] === times[18]) {
              this.state.friday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P8")) {
          for (var i = this.state.friday.length - 1; i >= 0; i--) {
            if (this.state.friday[i] === times[19]) {
              this.state.friday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P9")) {
          for (var i = this.state.friday.length - 1; i >= 0; i--) {
            if (this.state.friday[i] === times[20]) {
              this.state.friday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P10")) {
          for (var i = this.state.friday.length - 1; i >= 0; i--) {
            if (this.state.friday[i] === times[21]) {
              this.state.friday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P11")) {
          for (var i = this.state.friday.length - 1; i >= 0; i--) {
            if (this.state.friday[i] === times[22]) {
              this.state.friday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P12")) {
          for (var i = this.state.friday.length - 1; i >= 0; i--) {
            if (this.state.friday[i] === times[23]) {
              this.state.friday.splice(i, 1);
            }
          }
        }
      }

      if (e.target.name.includes("S") && !e.target.name.includes("SU")) {
        if (e.target.name.includes("1") && !e.target.name.includes("P")) {
          for (var i = this.state.saturday.length - 1; i >= 0; i--) {
            if (this.state.saturday[i] === times[0]) {
              this.state.saturday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("2") && !e.target.name.includes("P")) {
          for (var i = this.state.saturday.length - 1; i >= 0; i--) {
            if (this.state.saturday[i] === times[1]) {
              this.state.saturday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("3") && !e.target.name.includes("P")) {
          for (var i = this.state.saturday.length - 1; i >= 0; i--) {
            if (this.state.saturday[i] === times[2]) {
              this.state.saturday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("4") && !e.target.name.includes("P")) {
          for (var i = this.state.saturday.length - 1; i >= 0; i--) {
            if (this.state.saturday[i] === times[3]) {
              this.state.saturday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("5") && !e.target.name.includes("P")) {
          for (var i = this.state.saturday.length - 1; i >= 0; i--) {
            if (this.state.saturday[i] === times[4]) {
              this.state.saturday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("6") && !e.target.name.includes("P")) {
          for (var i = this.state.saturday.length - 1; i >= 0; i--) {
            if (this.state.saturday[i] === times[5]) {
              this.state.saturday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("7") && !e.target.name.includes("P")) {
          for (var i = this.state.saturday.length - 1; i >= 0; i--) {
            if (this.state.saturday[i] === times[6]) {
              this.state.saturday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("8") && !e.target.name.includes("P")) {
          for (var i = this.state.saturday.length - 1; i >= 0; i--) {
            if (this.state.saturday[i] === times[7]) {
              this.state.saturday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("9") && !e.target.name.includes("P")) {
          for (var i = this.state.saturday.length - 1; i >= 0; i--) {
            if (this.state.saturday[i] === times[8]) {
              this.state.saturday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("10") && !e.target.name.includes("P")) {
          for (var i = this.state.saturday.length - 1; i >= 0; i--) {
            if (this.state.saturday[i] === times[9]) {
              this.state.saturday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("11") && !e.target.name.includes("P")) {
          for (var i = this.state.saturday.length - 1; i >= 0; i--) {
            if (this.state.saturday[i] === times[10]) {
              this.state.saturday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("12") && !e.target.name.includes("P")) {
          for (var i = this.state.saturday.length - 1; i >= 0; i--) {
            if (this.state.saturday[i] === times[11]) {
              this.state.saturday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P1")) {
          for (var i = this.state.saturday.length - 1; i >= 0; i--) {
            if (this.state.saturday[i] === times[12]) {
              this.state.saturday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P2")) {
          for (var i = this.state.saturday.length - 1; i >= 0; i--) {
            if (this.state.saturday[i] === times[13]) {
              this.state.saturday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P3")) {
          for (var i = this.state.saturday.length - 1; i >= 0; i--) {
            if (this.state.saturday[i] === times[14]) {
              this.state.saturday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P4")) {
          for (var i = this.state.saturday.length - 1; i >= 0; i--) {
            if (this.state.saturday[i] === times[15]) {
              this.state.saturday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P5")) {
          for (var i = this.state.saturday.length - 1; i >= 0; i--) {
            if (this.state.saturday[i] === times[16]) {
              this.state.saturday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P6")) {
          for (var i = this.state.saturday.length - 1; i >= 0; i--) {
            if (this.state.saturday[i] === times[17]) {
              this.state.saturday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P7")) {
          for (var i = this.state.saturday.length - 1; i >= 0; i--) {
            if (this.state.saturday[i] === times[18]) {
              this.state.saturday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P8")) {
          for (var i = this.state.saturday.length - 1; i >= 0; i--) {
            if (this.state.saturday[i] === times[19]) {
              this.state.saturday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P9")) {
          for (var i = this.state.saturday.length - 1; i >= 0; i--) {
            if (this.state.saturday[i] === times[20]) {
              this.state.saturday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P10")) {
          for (var i = this.state.saturday.length - 1; i >= 0; i--) {
            if (this.state.saturday[i] === times[21]) {
              this.state.saturday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P11")) {
          for (var i = this.state.saturday.length - 1; i >= 0; i--) {
            if (this.state.saturday[i] === times[22]) {
              this.state.saturday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P12")) {
          for (var i = this.state.saturday.length - 1; i >= 0; i--) {
            if (this.state.saturday[i] === times[23]) {
              this.state.saturday.splice(i, 1);
            }
          }
        }
      }
      if (e.target.name.includes("SU")) {
        if (e.target.name.includes("1") && !e.target.name.includes("P")) {
          for (var i = this.state.sunday.length - 1; i >= 0; i--) {
            if (this.state.sunday[i] === times[0]) {
              this.state.sunday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("2") && !e.target.name.includes("P")) {
          for (var i = this.state.sunday.length - 1; i >= 0; i--) {
            if (this.state.sunday[i] === times[1]) {
              this.state.sunday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("3") && !e.target.name.includes("P")) {
          for (var i = this.state.sunday.length - 1; i >= 0; i--) {
            if (this.state.sunday[i] === times[2]) {
              this.state.sunday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("4") && !e.target.name.includes("P")) {
          for (var i = this.state.sunday.length - 1; i >= 0; i--) {
            if (this.state.sunday[i] === times[3]) {
              this.state.sunday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("5") && !e.target.name.includes("P")) {
          for (var i = this.state.sunday.length - 1; i >= 0; i--) {
            if (this.state.sunday[i] === times[4]) {
              this.state.sunday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("6") && !e.target.name.includes("P")) {
          for (var i = this.state.sunday.length - 1; i >= 0; i--) {
            if (this.state.sunday[i] === times[5]) {
              this.state.sunday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("7") && !e.target.name.includes("P")) {
          for (var i = this.state.sunday.length - 1; i >= 0; i--) {
            if (this.state.sunday[i] === times[6]) {
              this.state.sunday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("8") && !e.target.name.includes("P")) {
          for (var i = this.state.sunday.length - 1; i >= 0; i--) {
            if (this.state.sunday[i] === times[7]) {
              this.state.sunday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("9") && !e.target.name.includes("P")) {
          for (var i = this.state.sunday.length - 1; i >= 0; i--) {
            if (this.state.sunday[i] === times[8]) {
              this.state.sunday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("10") && !e.target.name.includes("P")) {
          for (var i = this.state.sunday.length - 1; i >= 0; i--) {
            if (this.state.sunday[i] === times[9]) {
              this.state.sunday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("11") && !e.target.name.includes("P")) {
          for (var i = this.state.sunday.length - 1; i >= 0; i--) {
            if (this.state.sunday[i] === times[10]) {
              this.state.sunday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("12") && !e.target.name.includes("P")) {
          for (var i = this.state.sunday.length - 1; i >= 0; i--) {
            if (this.state.sunday[i] === times[11]) {
              this.state.sunday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P1")) {
          for (var i = this.state.sunday.length - 1; i >= 0; i--) {
            if (this.state.sunday[i] === times[12]) {
              this.state.sunday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P2")) {
          for (var i = this.state.sunday.length - 1; i >= 0; i--) {
            if (this.state.sunday[i] === times[13]) {
              this.state.sunday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P3")) {
          for (var i = this.state.sunday.length - 1; i >= 0; i--) {
            if (this.state.sunday[i] === times[14]) {
              this.state.sunday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P4")) {
          for (var i = this.state.sunday.length - 1; i >= 0; i--) {
            if (this.state.sunday[i] === times[15]) {
              this.state.sunday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P5")) {
          for (var i = this.state.sunday.length - 1; i >= 0; i--) {
            if (this.state.sunday[i] === times[16]) {
              this.state.sunday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P6")) {
          for (var i = this.state.sunday.length - 1; i >= 0; i--) {
            if (this.state.sunday[i] === times[17]) {
              this.state.sunday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P7")) {
          for (var i = this.state.sunday.length - 1; i >= 0; i--) {
            if (this.state.sunday[i] === times[18]) {
              this.state.sunday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P8")) {
          for (var i = this.state.sunday.length - 1; i >= 0; i--) {
            if (this.state.sunday[i] === times[19]) {
              this.state.sunday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P9")) {
          for (var i = this.state.sunday.length - 1; i >= 0; i--) {
            if (this.state.sunday[i] === times[20]) {
              this.state.sunday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P10")) {
          for (var i = this.state.sunday.length - 1; i >= 0; i--) {
            if (this.state.sunday[i] === times[21]) {
              this.state.sunday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P11")) {
          for (var i = this.state.sunday.length - 1; i >= 0; i--) {
            if (this.state.sunday[i] === times[22]) {
              this.state.sunday.splice(i, 1);
            }
          }
        }
        if (e.target.name.includes("P12")) {
          for (var i = this.state.sunday.length - 1; i >= 0; i--) {
            if (this.state.sunday[i] === times[23]) {
              this.state.sunday.splice(i, 1);
            }
          }
        }
      }
    }
    if (e.target.checked === true) {
      if (e.target.name.includes("M")) {
        if (e.target.name.includes("1") && !e.target.name.includes("P")) {
          this.state.monday.push(times[0])
        }
        if (e.target.name.includes("2") && !e.target.name.includes("P")) {
          this.state.monday.push(times[1])
        }
        if (e.target.name.includes("3") && !e.target.name.includes("P")) {
          this.state.monday.push(times[2])
        }
        if (e.target.name.includes("4") && !e.target.name.includes("P")) {
          this.state.monday.push(times[3])
        }
        if (e.target.name.includes("5") && !e.target.name.includes("P")) {
          this.state.monday.push(times[4])
        }
        if (e.target.name.includes("6") && !e.target.name.includes("P")) {
          this.state.monday.push(times[5])
        }
        if (e.target.name.includes("7") && !e.target.name.includes("P")) {
          this.state.monday.push(times[6])
        }
        if (e.target.name.includes("8") && !e.target.name.includes("P")) {
          this.state.monday.push(times[7])
        }
        if (e.target.name.includes("9") && !e.target.name.includes("P")) {
          this.state.monday.push(times[8])
        }
        if (e.target.name.includes("10") && !e.target.name.includes("P")) {
          this.state.monday.push(times[9])
        }
        if (e.target.name.includes("11") && !e.target.name.includes("P")) {
          this.state.monday.push(times[10])
        }
        if (e.target.name.includes("12") && !e.target.name.includes("P")) {
          this.state.monday.push(times[11])
        }
        if (e.target.name.includes("P1")) {
          this.state.monday.push(times[12])
        }
        if (e.target.name.includes("P2")) {
          this.state.monday.push(times[13])
        }
        if (e.target.name.includes("P3")) {
          this.state.monday.push(times[14])
        }
        if (e.target.name.includes("P4")) {
          this.state.monday.push(times[15])
        }
        if (e.target.name.includes("P5")) {
          this.state.monday.push(times[16])
        }
        if (e.target.name.includes("P6")) {
          this.state.monday.push(times[17])
        }
        if (e.target.name.includes("P7")) {
          this.state.monday.push(times[18])
        }
        if (e.target.name.includes("P8")) {
          this.state.monday.push(times[19])
        }
        if (e.target.name.includes("P9")) {
          this.state.monday.push(times[20])
        }
        if (e.target.name.includes("P10")) {
          this.state.monday.push(times[21])
        }
        if (e.target.name.includes("P11")) {
          this.state.monday.push(times[22])
        }
        if (e.target.name.includes("P12")) {
          this.state.monday.push(times[23])
        }
      }
      else if (e.target.name.includes("T") && !e.target.name.includes("TH")) {
        if (e.target.name.includes("1") && !e.target.name.includes("P")) {
          this.state.tuesday.push(times[0])
        }
        if (e.target.name.includes("2") && !e.target.name.includes("P")) {
          this.state.tuesday.push(times[1])
        }
        if (e.target.name.includes("3") && !e.target.name.includes("P")) {
          this.state.tuesday.push(times[2])
        }
        if (e.target.name.includes("4") && !e.target.name.includes("P")) {
          this.state.tuesday.push(times[3])
        }
        if (e.target.name.includes("5") && !e.target.name.includes("P")) {
          this.state.tuesday.push(times[4])
        }
        if (e.target.name.includes("6") && !e.target.name.includes("P")) {
          this.state.tuesday.push(times[5])
        }
        if (e.target.name.includes("7") && !e.target.name.includes("P")) {
          this.state.tuesday.push(times[6])
        }
        if (e.target.name.includes("8") && !e.target.name.includes("P")) {
          this.state.tuesday.push(times[7])
        }
        if (e.target.name.includes("9") && !e.target.name.includes("P")) {
          this.state.tuesday.push(times[8])
        }
        if (e.target.name.includes("10") && !e.target.name.includes("P")) {
          this.state.tuesday.push(times[9])
        }
        if (e.target.name.includes("11") && !e.target.name.includes("P")) {
          this.state.tuesday.push(times[10])
        }
        if (e.target.name.includes("12") && !e.target.name.includes("P")) {
          this.state.tuesday.push(times[11])
        }
        if (e.target.name.includes("P1")) {
          this.state.tuesday.push(times[12])
        }
        if (e.target.name.includes("P2")) {
          this.state.tuesday.push(times[13])
        }
        if (e.target.name.includes("P3")) {
          this.state.tuesday.push(times[14])
        }
        if (e.target.name.includes("P4")) {
          this.state.tuesday.push(times[15])
        }
        if (e.target.name.includes("P5")) {
          this.state.tuesday.push(times[16])
        }
        if (e.target.name.includes("P6")) {
          this.state.tuesday.push(times[17])
        }
        if (e.target.name.includes("P7")) {
          this.state.tuesday.push(times[18])
        }
        if (e.target.name.includes("P8")) {
          this.state.tuesday.push(times[19])
        }
        if (e.target.name.includes("P9")) {
          this.state.tuesday.push(times[20])
        }
        if (e.target.name.includes("P10")) {
          this.state.tuesday.push(times[21])
        }
        if (e.target.name.includes("P11")) {
          this.state.tuesday.push(times[22])
        }
        if (e.target.name.includes("P12")) {
          this.state.tuesday.push(times[23])
        }
      }
      else if (e.target.name.includes("W")) {
        if (e.target.name.includes("1") && !e.target.name.includes("P")) {
          this.state.wednesday.push(times[0])
        }
        if (e.target.name.includes("2") && !e.target.name.includes("P")) {
          this.state.wednesday.push(times[1])
        }
        if (e.target.name.includes("3") && !e.target.name.includes("P")) {
          this.state.wednesday.push(times[2])
        }
        if (e.target.name.includes("4") && !e.target.name.includes("P")) {
          this.state.wednesday.push(times[3])
        }
        if (e.target.name.includes("5") && !e.target.name.includes("P")) {
          this.state.wednesday.push(times[4])
        }
        if (e.target.name.includes("6") && !e.target.name.includes("P")) {
          this.state.wednesday.push(times[5])
        }
        if (e.target.name.includes("7") && !e.target.name.includes("P")) {
          this.state.wednesday.push(times[6])
        }
        if (e.target.name.includes("8") && !e.target.name.includes("P")) {
          this.state.wednesday.push(times[7])
        }
        if (e.target.name.includes("9") && !e.target.name.includes("P")) {
          this.state.wednesday.push(times[8])
        }
        if (e.target.name.includes("10") && !e.target.name.includes("P")) {
          this.state.wednesday.push(times[9])
        }
        if (e.target.name.includes("11") && !e.target.name.includes("P")) {
          this.state.wednesday.push(times[10])
        }
        if (e.target.name.includes("12") && !e.target.name.includes("P")) {
          this.state.wednesday.push(times[11])
        }
        if (e.target.name.includes("P1")) {
          this.state.wednesday.push(times[12])
        }
        if (e.target.name.includes("P2")) {
          this.state.wednesday.push(times[13])
        }
        if (e.target.name.includes("P3")) {
          this.state.wednesday.push(times[14])
        }
        if (e.target.name.includes("P4")) {
          this.state.wednesday.push(times[15])
        }
        if (e.target.name.includes("P5")) {
          this.state.wednesday.push(times[16])
        }
        if (e.target.name.includes("P6")) {
          this.state.wednesday.push(times[17])
        }
        if (e.target.name.includes("P7")) {
          this.state.wednesday.push(times[18])
        }
        if (e.target.name.includes("P8")) {
          this.state.wednesday.push(times[19])
        }
        if (e.target.name.includes("P9")) {
          this.state.wednesday.push(times[20])
        }
        if (e.target.name.includes("P10")) {
          this.state.wednesday.push(times[21])
        }
        if (e.target.name.includes("P11")) {
          this.state.wednesday.push(times[22])
        }
        if (e.target.name.includes("P12")) {
          this.state.wednesday.push(times[23])
        }
      }

      else if (e.target.name.includes("TH")) {
        if (e.target.name.includes("1") && !e.target.name.includes("P")) {
          this.state.thursday.push(times[0])
        }
        if (e.target.name.includes("2") && !e.target.name.includes("P")) {
          this.state.thursday.push(times[1])
        }
        if (e.target.name.includes("3") && !e.target.name.includes("P")) {
          this.state.thursday.push(times[2])
        }
        if (e.target.name.includes("4") && !e.target.name.includes("P")) {
          this.state.thursday.push(times[3])
        }
        if (e.target.name.includes("5") && !e.target.name.includes("P")) {
          this.state.thursday.push(times[4])
        }
        if (e.target.name.includes("6") && !e.target.name.includes("P")) {
          this.state.thursday.push(times[5])
        }
        if (e.target.name.includes("7") && !e.target.name.includes("P")) {
          this.state.thursday.push(times[6])
        }
        if (e.target.name.includes("8") && !e.target.name.includes("P")) {
          this.state.thursday.push(times[7])
        }
        if (e.target.name.includes("9") && !e.target.name.includes("P")) {
          this.state.thursday.push(times[8])
        }
        if (e.target.name.includes("10") && !e.target.name.includes("P")) {
          this.state.thursday.push(times[9])
        }
        if (e.target.name.includes("11") && !e.target.name.includes("P")) {
          this.state.thursday.push(times[10])
        }
        if (e.target.name.includes("12") && !e.target.name.includes("P")) {
          this.state.thursday.push(times[11])
        }
        if (e.target.name.includes("P1")) {
          this.state.thursday.push(times[12])
        }
        if (e.target.name.includes("P2")) {
          this.state.thursday.push(times[13])
        }
        if (e.target.name.includes("P3")) {
          this.state.thursday.push(times[14])
        }
        if (e.target.name.includes("P4")) {
          this.state.thursday.push(times[15])
        }
        if (e.target.name.includes("P5")) {
          this.state.thursday.push(times[16])
        }
        if (e.target.name.includes("P6")) {
          this.state.thursday.push(times[17])
        }
        if (e.target.name.includes("P7")) {
          this.state.thursday.push(times[18])
        }
        if (e.target.name.includes("P8")) {
          this.state.thursday.push(times[19])
        }
        if (e.target.name.includes("P9")) {
          this.state.thursday.push(times[20])
        }
        if (e.target.name.includes("P10")) {
          this.state.thursday.push(times[21])
        }
        if (e.target.name.includes("P11")) {
          this.state.thursday.push(times[22])
        }
        if (e.target.name.includes("P12")) {
          this.state.thursday.push(times[23])
        }
      }
      else if (e.target.name.includes("F")) {
        if (e.target.name.includes("1") && !e.target.name.includes("P")) {
          this.state.friday.push(times[0])
        }
        if (e.target.name.includes("2") && !e.target.name.includes("P")) {
          this.state.friday.push(times[1])
        }
        if (e.target.name.includes("3") && !e.target.name.includes("P")) {
          this.state.friday.push(times[2])
        }
        if (e.target.name.includes("4") && !e.target.name.includes("P")) {
          this.state.friday.push(times[3])
        }
        if (e.target.name.includes("5") && !e.target.name.includes("P")) {
          this.state.friday.push(times[4])
        }
        if (e.target.name.includes("6") && !e.target.name.includes("P")) {
          this.state.friday.push(times[5])
        }
        if (e.target.name.includes("7") && !e.target.name.includes("P")) {
          this.state.friday.push(times[6])
        }
        if (e.target.name.includes("8") && !e.target.name.includes("P")) {
          this.state.friday.push(times[7])
        }
        if (e.target.name.includes("9") && !e.target.name.includes("P")) {
          this.state.friday.push(times[8])
        }
        if (e.target.name.includes("10") && !e.target.name.includes("P")) {
          this.state.friday.push(times[9])
        }
        if (e.target.name.includes("11") && !e.target.name.includes("P")) {
          this.state.friday.push(times[10])
        }
        if (e.target.name.includes("12") && !e.target.name.includes("P")) {
          this.state.friday.push(times[11])
        }
        if (e.target.name.includes("P1")) {
          this.state.friday.push(times[12])
        }
        if (e.target.name.includes("P2")) {
          this.state.friday.push(times[13])
        }
        if (e.target.name.includes("P3")) {
          this.state.friday.push(times[14])
        }
        if (e.target.name.includes("P4")) {
          this.state.friday.push(times[15])
        }
        if (e.target.name.includes("P5")) {
          this.state.friday.push(times[16])
        }
        if (e.target.name.includes("P6")) {
          this.state.friday.push(times[17])
        }
        if (e.target.name.includes("P7")) {
          this.state.friday.push(times[18])
        }
        if (e.target.name.includes("P8")) {
          this.state.friday.push(times[19])
        }
        if (e.target.name.includes("P9")) {
          this.state.friday.push(times[20])
        }
        if (e.target.name.includes("P10")) {
          this.state.friday.push(times[21])
        }
        if (e.target.name.includes("P11")) {
          this.state.friday.push(times[22])
        }
        if (e.target.name.includes("P12")) {
          this.state.friday.push(times[23])
        }
      }
      else if (e.target.name.includes("S") && !e.target.name.includes("SU")) {
        if (e.target.name.includes("1") && !e.target.name.includes("P")) {
          this.state.saturday.push(times[0])
        }
        if (e.target.name.includes("2") && !e.target.name.includes("P")) {
          this.state.saturday.push(times[1])
        }
        if (e.target.name.includes("3") && !e.target.name.includes("P")) {
          this.state.saturday.push(times[2])
        }
        if (e.target.name.includes("4") && !e.target.name.includes("P")) {
          this.state.saturday.push(times[3])
        }
        if (e.target.name.includes("5") && !e.target.name.includes("P")) {
          this.state.saturday.push(times[4])
        }
        if (e.target.name.includes("6") && !e.target.name.includes("P")) {
          this.state.saturday.push(times[5])
        }
        if (e.target.name.includes("7") && !e.target.name.includes("P")) {
          this.state.saturday.push(times[6])
        }
        if (e.target.name.includes("8") && !e.target.name.includes("P")) {
          this.state.saturday.push(times[7])
        }
        if (e.target.name.includes("9") && !e.target.name.includes("P")) {
          this.state.saturday.push(times[8])
        }
        if (e.target.name.includes("10") && !e.target.name.includes("P")) {
          this.state.saturday.push(times[9])
        }
        if (e.target.name.includes("11") && !e.target.name.includes("P")) {
          this.state.saturday.push(times[10])
        }
        if (e.target.name.includes("12") && !e.target.name.includes("P")) {
          this.state.saturday.push(times[11])
        }
        if (e.target.name.includes("P1")) {
          this.state.saturday.push(times[12])
        }
        if (e.target.name.includes("P2")) {
          this.state.saturday.push(times[13])
        }
        if (e.target.name.includes("P3")) {
          this.state.saturday.push(times[14])
        }
        if (e.target.name.includes("P4")) {
          this.state.saturday.push(times[15])
        }
        if (e.target.name.includes("P5")) {
          this.state.saturday.push(times[16])
        }
        if (e.target.name.includes("P6")) {
          this.state.saturday.push(times[17])
        }
        if (e.target.name.includes("P7")) {
          this.state.saturday.push(times[18])
        }
        if (e.target.name.includes("P8")) {
          this.state.saturday.push(times[19])
        }
        if (e.target.name.includes("P9")) {
          this.state.saturday.push(times[20])
        }
        if (e.target.name.includes("P10")) {
          this.state.saturday.push(times[21])
        }
        if (e.target.name.includes("P11")) {
          this.state.saturday.push(times[22])
        }
        if (e.target.name.includes("P12")) {
          this.state.saturday.push(times[23])
        }
      }
      else if (e.target.name.includes("SU")) {
        if (e.target.name.includes("1") && !e.target.name.includes("P")) {
          this.state.sunday.push(times[0])
        }
        if (e.target.name.includes("2") && !e.target.name.includes("P")) {
          this.state.sunday.push(times[1])
        }
        if (e.target.name.includes("3") && !e.target.name.includes("P")) {
          this.state.sunday.push(times[2])
        }
        if (e.target.name.includes("4") && !e.target.name.includes("P")) {
          this.state.sunday.push(times[3])
        }
        if (e.target.name.includes("5") && !e.target.name.includes("P")) {
          this.state.sunday.push(times[4])
        }
        if (e.target.name.includes("6") && !e.target.name.includes("P")) {
          this.state.sunday.push(times[5])
        }
        if (e.target.name.includes("7") && !e.target.name.includes("P")) {
          this.state.sunday.push(times[6])
        }
        if (e.target.name.includes("8") && !e.target.name.includes("P")) {
          this.state.sunday.push(times[7])
        }
        if (e.target.name.includes("9") && !e.target.name.includes("P")) {
          this.state.sunday.push(times[8])
        }
        if (e.target.name.includes("10") && !e.target.name.includes("P")) {
          this.state.sunday.push(times[9])
        }
        if (e.target.name.includes("11") && !e.target.name.includes("P")) {
          this.state.sunday.push(times[10])
        }
        if (e.target.name.includes("12") && !e.target.name.includes("P")) {
          this.state.sunday.push(times[11])
        }
        if (e.target.name.includes("P1")) {
          this.state.sunday.push(times[12])
        }
        if (e.target.name.includes("P2")) {
          this.state.sunday.push(times[13])
        }
        if (e.target.name.includes("P3")) {
          this.state.sunday.push(times[14])
        }
        if (e.target.name.includes("P4")) {
          this.state.sunday.push(times[15])
        }
        if (e.target.name.includes("P5")) {
          this.state.sunday.push(times[16])
        }
        if (e.target.name.includes("P6")) {
          this.state.sunday.push(times[17])
        }
        if (e.target.name.includes("P7")) {
          this.state.sunday.push(times[18])
        }
        if (e.target.name.includes("P8")) {
          this.state.sunday.push(times[19])
        }
        if (e.target.name.includes("P9")) {
          this.state.sunday.push(times[20])
        }
        if (e.target.name.includes("P10")) {
          this.state.sunday.push(times[21])
        }
        if (e.target.name.includes("P11")) {
          this.state.sunday.push(times[22])
        }
        if (e.target.name.includes("P12")) {
          this.state.sunday.push(times[23])
        }
      }
    }
    // Using es6 computed property name
    this.setState({
      [e.target.name]: e.target.checked
    });
  };

  handleName = e => {
    this.setState({
      studio_Name: e.target.value
    });
  };

  handleAbout = e => {
    this.setState({
      about: e.target.value
    });
  };

  handleAddress = e => {
    this.setState({
      studio_Address: e.target.value
    });
  };

  handleCity = e => {
    this.setState({
      city: e.target.value
    });
  };

  handleZipcode = e => {
    this.setState({
      zipcode: e.target.value
    });
  };

  handleDescription = e => {
    this.setState({
      description: e.target.value
    });
  };

  handleAmenities = e => {
    this.setState({
      amenities: e.target.value
    });
  };

  handleRules = e => {
    this.setState({
      rules: e.target.value
    });
  };

  handlePrice = e => {
    this.setState({
      price: e.target.value
    });
  };

  handlePhone = e => {
    this.setState({
      phone: e.target.value
    });
  };

  handleHours = e => {
    this.setState({
      hours: e.target.value
    });
  };

  handleRooms = e => {
    this.setState({
      rooms: e.target.value
    });
  };

  handleImage = e => {
    this.setState({
      image: e.target.value
    });
  };


  handleCategory = e => {
    this.setState({
      category: e.target.value
    });
  };

  handleState = e => {
    this.setState({
      state: e.target.value
    });
  };

  handleLogout = () => {
    Api.getLogout();
    console.log("You have logout!");
  };

  submitForm = e => {
    e.preventDefault();
    this.postRequestStudio();
    this.setState({
      addedstudio: true
    })
  };

  submitReForm = e => {
    e.preventDefault();
    this.setState({
      addedstudio: false
    })
  };

  postRequestStudio = () => {
    const { studio_Name, studio_Address, about, description, city, state, zipcode, price, hours, phone, amenities, rules, image } = this.state;
    console.log(this.props.userloggedid, studio_Name, studio_Address, about, description, city, state, zipcode, price, hours, phone, amenities, rules, image)
    axios
      .post("/api/newstudio", {
        userID: this.props.userloggedid,
        organization_name: studio_Name,
        about: about,
        description_summary: description,
        address_line_1: studio_Address,
        city: city,
        state: state,
        zip_code: zipcode,
        website: 'None',
        price: price,
        phone: phone,
        amenities: amenities,
        rules: rules,
        hour: hours,
        room_count: 2,
        image_url: image,
        disciplines: '{"None"}',
        uses_list: '{"1"}',
        capacity: 99
      })
      .then(res => {
        this.setState({
          studio_Name: "",
          about: "",
          description: "",
          studio_Address: "",
          city: "",
          state: "",
          zipcode: "",
          phone: "",
          category: "",
          price: "",
          amenities: "",
          rules: "",
          hours: "",
          image: "",
          message: "Booked a Room!"
        });
      })
      .catch(err => {
        this.setState({
          studio_Name: "",
          about: "",
          description: "",
          studio_Address: "",
          city: "",
          state: "",
          zipcode: "",
          phone: "",
          category: "",
          price: "",
          amenities: "",
          rules: "",
          hours: "",
          image: "",
          message: "Error Booking a Room!"
        });
      });
  }
  render() {
    const {
      studio_Name,
      studio_Address,
      about,
      rules,
      hours,
      amenities,
      phone,
      price,
      city,
      state,
      zipcode,
      description,
      category,
      isLogin,
      times,
      image
    } = this.state;

    const time1 = ["M1", "T1", "W1", "TH1", "F1", "S1", "SU1"]
    const time2 = ["M2", "T2", "W2", "TH2", "F2", "S2", "SU2"]
    const time3 = ["M3", "T3", "W3", "TH3", "F3", "S3", "SU3"]
    const time4 = ["M4", "T4", "W4", "TH4", "F4", "S4", "SU4"]
    const time5 = ["M5", "T5", "W5", "TH5", "F5", "S5", "SU5"]
    const time6 = ["M6", "T6", "W6", "TH6", "F6", "S6", "SU6"]
    const time7 = ["M7", "T7", "W7", "TH7", "F7", "S7", "SU7"]
    const time8 = ["M8", "T8", "W8", "TH8", "F8", "S8", "SU8"]
    const time9 = ["M9", "T9", "W9", "TH9", "F9", "S9", "SU9"]
    const time10 = ["M10", "T10", "W10", "TH10", "F10", "S10", "SU10"]
    const time11 = ["M11", "T11", "W11", "TH11", "F11", "S11", "SU11"]
    const time12 = ["M12", "T12", "W12", "TH12", "F12", "S12", "SU12"]
    const timep1 = ["MP1", "TP1", "WP1", "THP1", "FP1", "SP1", "SUP1"]
    const timep2 = ["MP2", "TP2", "WP2", "THP2", "FP2", "SP2", "SUP2"]
    const timep3 = ["MP3", "TP3", "WP3", "THP3", "FP3", "SP3", "SUP3"]
    const timep4 = ["MP4", "TP4", "WP4", "THP4", "FP4", "SP4", "SUP4"]
    const timep5 = ["MP5", "TP5", "WP5", "THP5", "FP5", "SP5", "SUP5"]
    const timep6 = ["MP6", "TP6", "WP6", "THP6", "FP6", "SP6", "SUP6"]
    const timep7 = ["MP7", "TP7", "WP7", "THP7", "FP7", "SP7", "SUP7"]
    const timep8 = ["MP8", "TP8", "WP8", "THP8", "FP8", "SP8", "SUP8"]
    const timep9 = ["MP9", "TP9", "WP9", "THP9", "FP9", "SP9", "SUP9"]
    const timep10 = ["MP10", "TP10", "WP10", "THP10", "FP10", "SP10", "SUP10"]
    const timep11 = ["MP11", "TP11", "WP11", "THP11", "FP11", "SP11", "SUP11"]
    const timep12 = ["MP12", "TP12", "WP12", "THP12", "FP12", "SP12", "SUP12"]

    return <div id="addbacker">
      <div id="topbar">
        <div id="barlogo">
          <Link to={`/`}>
            <img src={Logowhite} alt="logo" />
          </Link>
        </div>
        <Link to={`/login`}>
          <a class="hoverturn" onClick={this.handleLogout}>
            <span data-title="Log Out">Log Out</span>
          </a>
        </Link>
        <Link to={`/hostprofile/account`}>
          <a class="hoverturn">
            <span data-title="My Account">My Account</span>
          </a>
        </Link>
      </div>
      <div className="addcontent">
        <h1>Add Your Studio</h1>
        {this.state.addedstudio ? <div id="successadd">
          <h3> You Have Successfully Added Your Studio To RAS!</h3>
          <img src= {Checkmark}/>
          <button type="submit" onClick={this.submitReForm}>
            Add Another Studio
            </button>
        </div> :
          <div>
            <p>Scroll Down To Complete All Fields</p>
            <br />
            <form>
              <div id="addform">
                <input id="name" name="" type="text" placeholder="Studio Name" value={studio_Name} onChange={this.handleName} />
                <br />
                <input name="" type=" text" placeholder="Five Words To Summarize Studio" value={about} onChange={this.handleAbout} />
                <br />
                <textarea name="" type="text" placeholder="Describe Your Business" value={description} onChange={this.handleDescription} />
                <br />
                <input name="" type=" text" placeholder="Studio Address" value={studio_Address} onChange={this.handleAddress} />
                <br />
                <input name="" type="text" placeholder="City" value={city} onChange={this.handleCity} />
                <br />
                <input name="" type="text" placeholder="State" value={state} onChange={this.handleState} />
                <br />
                <input name="" type="number" placeholder="Zip Code" value={zipcode} onChange={this.handleZipcode} />
                <br />
                <input name="" type="text" placeholder="Studio Phone Number" value={phone} onChange={this.handlePhone} />
                <br />
                <input name="" type="text" placeholder="Operation Hours" value={hours} onChange={this.handleHours} />
                <br />
                <input name="" type="text" placeholder="Price Per Hour" value={price} onChange={this.handlePrice} />
                <br />
                <input name="" type="text" placeholder="Amenities" value={amenities} onChange={this.handleAmenities} />
                <br />
                <input name="" type="text" placeholder="Rules" value={rules} onChange={this.handleRules} />
                <br />
                <input name="" type="text" placeholder="Url Of Studio Image" value={image} onChange={this.handleImage} />
                <br />
                <input name="" type="text" placeholder="Category ex: Music, Art" value={category} onChange={this.handleCategory} />
                <br />
                <input name="" type="text" placeholder="Rooms" onChange={this.handleRooms} />
                <br />
                <p>Add Room Availabilty Below</p>
                <table>
                  <tr>
                    <td></td>
                    <td>Monday</td>
                    <td>Tuesday</td>
                    <td>Wednesday</td>
                    <td>Thursday</td>
                    <td>Friday</td>
                    <td>Saturday</td>
                    <td>Sunday</td>
                  </tr>
                  <tr>
                    {times[0]}
                    {
                      time1.map(time => (
                        <td><input
                          name={time}
                          type="checkbox"
                          checked={this.state.time}
                          onChange={this.handleCheckboxChange}
                        /> </td>

                      ))
                    }
                  </tr>
                  <tr>
                    {times[1]}
                    {
                      time2.map(time => (
                        <td><input
                          name={time}
                          type="checkbox"
                          checked={this.state.time}
                          onChange={this.handleCheckboxChange}
                        /> </td>

                      ))
                    }
                  </tr>
                  <tr>
                    {times[2]}
                    {
                      time3.map(time => (
                        <td><input
                          name={time}
                          type="checkbox"
                          checked={this.state.time}
                          onChange={this.handleCheckboxChange}
                        /> </td>

                      ))
                    }
                  </tr>
                  <tr>
                    {times[3]}
                    {
                      time4.map(time => (
                        <td><input
                          name={time}
                          type="checkbox"
                          checked={this.state.time}
                          onChange={this.handleCheckboxChange}
                        /> </td>

                      ))
                    }
                  </tr>
                  <tr>
                    {times[4]}
                    {
                      time5.map(time => (
                        <td><input
                          name={time}
                          type="checkbox"
                          checked={this.state.time}
                          onChange={this.handleCheckboxChange}
                        /> </td>

                      ))
                    }
                  </tr>
                  <tr>
                    {times[5]}
                    {
                      time6.map(time => (
                        <td><input
                          name={time}
                          type="checkbox"
                          checked={this.state.time}
                          onChange={this.handleCheckboxChange}
                        /> </td>

                      ))
                    }
                  </tr>
                  <tr>
                    {times[6]}
                    {
                      time7.map(time => (
                        <td><input
                          name={time}
                          type="checkbox"
                          checked={this.state.time}
                          onChange={this.handleCheckboxChange}
                        /> </td>

                      ))
                    }
                  </tr>
                  <tr>
                    {times[7]}
                    {
                      time8.map(time => (
                        <td><input
                          name={time}
                          type="checkbox"
                          checked={this.state.time}
                          onChange={this.handleCheckboxChange}
                        /> </td>

                      ))
                    }
                  </tr>
                  <tr>
                    {times[8]}
                    {
                      time9.map(time => (
                        <td><input
                          name={time}
                          type="checkbox"
                          checked={this.state.time}
                          onChange={this.handleCheckboxChange}
                        /> </td>

                      ))
                    }
                  </tr>
                  <tr>
                    {times[9]}
                    {
                      time10.map(time => (
                        <td><input
                          name={time}
                          type="checkbox"
                          checked={this.state.time}
                          onChange={this.handleCheckboxChange}
                        /> </td>

                      ))
                    }
                  </tr>
                  <tr>
                    {times[10]}
                    {
                      time11.map(time => (
                        <td><input
                          name={time}
                          type="checkbox"
                          checked={this.state.time}
                          onChange={this.handleCheckboxChange}
                        /> </td>

                      ))
                    }
                  </tr>
                  <tr>
                    {times[11]}
                    {
                      time12.map(time => (
                        <td><input
                          name={time}
                          type="checkbox"
                          checked={this.state.time}
                          onChange={this.handleCheckboxChange}
                        /> </td>

                      ))
                    }
                  </tr>
                  <tr>
                    {times[12]}
                    {
                      timep1.map(time => (
                        <td><input
                          name={time}
                          type="checkbox"
                          checked={this.state.time}
                          onChange={this.handleCheckboxChange}
                        /> </td>

                      ))
                    }
                  </tr>
                  <tr>
                    {times[13]}
                    {
                      timep2.map(time => (
                        <td><input
                          name={time}
                          type="checkbox"
                          checked={this.state.time}
                          onChange={this.handleCheckboxChange}
                        /> </td>

                      ))
                    }
                  </tr>
                  <tr>
                    {times[14]}
                    {
                      timep3.map(time => (
                        <td><input
                          name={time}
                          type="checkbox"
                          checked={this.state.time}
                          onChange={this.handleCheckboxChange}
                        /> </td>

                      ))
                    }
                  </tr>
                  <tr>
                    {times[15]}
                    {
                      timep4.map(time => (
                        <td><input
                          name={time}
                          type="checkbox"
                          checked={this.state.time}
                          onChange={this.handleCheckboxChange}
                        /> </td>

                      ))
                    }
                  </tr>
                  <tr>
                    {times[16]}
                    {
                      timep5.map(time => (
                        <td><input
                          name={time}
                          type="checkbox"
                          checked={this.state.time}
                          onChange={this.handleCheckboxChange}
                        /> </td>

                      ))
                    }
                  </tr>
                  <tr>
                    {times[17]}
                    {
                      timep6.map(time => (
                        <td><input
                          name={time}
                          type="checkbox"
                          checked={this.state.time}
                          onChange={this.handleCheckboxChange}
                        /> </td>

                      ))
                    }
                  </tr>
                  <tr>
                    {times[18]}
                    {
                      timep7.map(time => (
                        <td><input
                          name={time}
                          type="checkbox"
                          checked={this.state.time}
                          onChange={this.handleCheckboxChange}
                        /> </td>

                      ))
                    }
                  </tr>
                  <tr>
                    {times[19]}
                    {
                      timep8.map(time => (
                        <td><input
                          name={time}
                          type="checkbox"
                          checked={this.state.time}
                          onChange={this.handleCheckboxChange}
                        /> </td>

                      ))
                    }
                  </tr>
                  <tr>
                    {times[20]}
                    {
                      timep9.map(time => (
                        <td><input
                          name={time}
                          type="checkbox"
                          checked={this.state.time}
                          onChange={this.handleCheckboxChange}
                        /> </td>

                      ))
                    }
                  </tr>
                  <tr>
                    {times[21]}
                    {
                      timep10.map(time => (
                        <td><input
                          name={time}
                          type="checkbox"
                          checked={this.state.time}
                          onChange={this.handleCheckboxChange}
                        /> </td>

                      ))
                    }
                  </tr>
                  <tr>
                    {times[22]}
                    {
                      timep11.map(time => (
                        <td><input
                          name={time}
                          type="checkbox"
                          checked={this.state.time}
                          onChange={this.handleCheckboxChange}
                        /> </td>

                      ))
                    }
                  </tr>
                  <tr>
                    {times[23]}
                    {
                      timep12.map(time => (
                        <td><input
                          name={time}
                          type="checkbox"
                          checked={this.state.time}
                          onChange={this.handleCheckboxChange}
                        /> </td>

                      ))
                    }
                  </tr>
                </table>
              </div>
              <button type="submit" onClick={this.submitForm}>
                Add Studio
            </button>
            </form>
          </div>
        }
      </div>
      <div id="footer">
        <Link to={`/contact`}>
          <a class="hoverturn">
            <span data-title="Contact">Contact</span>
          </a>
        </Link>
        <Link to={`/about`}>
          <a class="hoverturn">
            <span data-title="About Us">About Us</span>
          </a>
        </Link>
        <p>RAS @ 2018</p>
      </div>
    </div>
  }
}
export default AddingBusiness;