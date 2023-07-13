import api from "./index";

export async function getPostings(page) {
  const res = await api.get(`/posts?_limit=5&_page=${page}`);
  return res.data;
}
export async function getPosting(id) {
  const res = await api.get(`/posts?id=${id}`);
  return res.data;
}
export async function modifyPosting(id, data) {
  const res = await api.patch(`/posts/${id}`, data);
  return res.data;
}
export async function deletePosting(id) {
  const res = await api.delete(`/posts/${id}`);
  return res.data;
}
export async function post(data) {
  const res = await api.post(`/posts`, data);
  return res.data;
}
