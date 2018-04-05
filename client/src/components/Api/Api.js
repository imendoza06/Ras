import axios from "axios";

const getAllStudiosInfo = () => axios.get("/api/studiosinfo");

const getAllStudios = () => axios.get("/api/studios");

const getAllBookingsInfo = () => axios.get("/api/bookingsinfo");

const getAllReviewsInfo = () => axios.get("/api/reviewsinfo");

const getSingleStudioInfo = id => axios.get(`/api/studios/${id}`);

const getSingleUser = username => axios.get(`/users/${username}`);

const getLogout = () => axios.get("/auth/logout");

export default {
  getAllStudiosInfo,
  getAllStudios,
  getAllBookingsInfo,
  getAllReviewsInfo,
  getSingleStudioInfo,
  getSingleUser,
  getLogout
};
