//Imports axios instance being obtained from http-common.js
import http from "../http-common";

class FrameDataService {
  getAll() {
    return http.get("/frames");
  }

  get(id) {
    return http.get(`/frames/${id}`);
  }

  create(data) {
    return http.post("/frames/create", data);
  }

  update(id, data) {
    return http.put(`/frames/${id}`, data);
  }

  delete(id) {
    return http.delete(`/frames/${id}`);
  }

  deleteAll() {
    return http.delete(`/frames`);
  }

  findByTitle(title) {
    return http.get(`/frames?title=${title}`);
  }
}

export default new FrameDataService();