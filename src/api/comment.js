import api from "./index";

export const getComments = async (id) => {
  const res = await api.get(`/comments?postId=${id}`);
  return res.data;
};

export const comment = async (data) => {
  const res = await api.post(`/comments`, data);
  return res.data;
};
