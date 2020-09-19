import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getUser = (userObj) => {
  console.log(userObj);
  axios
    .get(`${baseUrl}/farmers.json?orderBy="uid"&equalTo="${userObj.uid}"`)
    .then((resp) => {
      if (Object.keys(resp.data).length === 0) {
        console.log(Object.keys(resp.data));
        axios.post(`${baseUrl}/farmers.json`, {
          image: userObj.photoURL,
          uid: userObj.uid,
          displayName: userObj.displayName,
          email: userObj.email,
          lastSignIn: userObj.metadata.lastSignIn,
        });
      } else {
        console.warn('User Exists');
      }
    });
};

export default { getUser };
