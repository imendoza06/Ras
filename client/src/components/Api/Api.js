import axios from "axios";

const getAllStudiosInfo = () => axios.get("/api/studiosinfo");

const getAllBookingsInfo = () => axios.get("/api/bookingsinfo");

const getAllReviewsInfo = () => axios.get("/api/reviewsinfo");

const getSingleStudioInfo = id => axios.get(`/api/studios/${id}`);

export default {
  getAllStudiosInfo,
  getAllBookingsInfo,
  getAllReviewsInfo,
  getSingleStudioInfo
};
