export const apiUrl =
  process.env.NODE_ENV === "production"
    ? "https://adrien-facerecognition.herokuapp.com"
    : "http://localhost:5000";
