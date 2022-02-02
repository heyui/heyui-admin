import axios from 'axios';

const getToken = () => {
  return axios.get('https://www.heyui.top/api/uptoken');
};

export const upload = async file => {
  const tokenResp = await getToken();
  const formData = new FormData();
  // formData.append('key', file.name);
  formData.append('fname', file.name);
  formData.append('token', tokenResp.data.uptoken);
  formData.append('file', file);
  const resp = await axios.post('//upload-z2.qiniup.com', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
  return `//www.heyui.top/qiniu/img/${resp.data.key}`;
};
