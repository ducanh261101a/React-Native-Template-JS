import AsyncStorage from '@react-native-async-storage/async-storage';

const setData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    return Promise.reject(e);
  }
};

const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    }
    return null;
  } catch (e) {
    return Promise.reject(e);
  }
};

const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    return Promise.reject(e);
  }
};

export { setData, getData, removeData };
