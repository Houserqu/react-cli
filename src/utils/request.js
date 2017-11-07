import 'whatwg-fetch';
import { hashHistory } from 'react-router';
import { API_DOMAIN } from './config';

/**
 * 状态码错误名称
 * @param {int} statusCode
 */
const checkCode = (statusCode, message) => {
  if (statusCode === 200) {
    return { code: statusCode, message: '' };
  }
  // 返回码判断
  switch (statusCode) {
    case 300: return { code: statusCode, message };
    case 301: return { code: statusCode, message };
    case 500: return { code: statusCode, message };
    default: return { code: statusCode, message };
  }
}

/**
 * fetch.get请求封装
 */
export function get(url, params = '') {
  if (params) {
    const paramsArray = [];
    // encodeURIComponent
    Object.keys(params).forEach(key => paramsArray.push(`${key}=${params[key]}`));
    if (url.search(/\?/) === -1) {
      url += `?${paramsArray.join('&')}`;
    } else {
      url += `&${paramsArray.join('&')}`;
    }
  }

  return new Promise(((resolve, reject) => {
    fetch(url, {
      method: 'get',
    }).then((response) => {
      response.json();
    }).then((responseData) => {
      const checkCodeResult = checkCode(responseData.statusCode);
      if (checkCodeResult.code === 200) {
        resolve(responseData);
      }
    }).catch((err) => {
      reject(err);
    });
  }));
}

/**
 * fetch.post请求封装
 */
export function post(url, params = '') {
  let  paramsurl = '';

  // json 序列化
  if (params) {
    const paramsArray = [];
    // encodeURIComponent
    Object.keys(params).forEach(key => paramsArray.push(`${key}=${params[key]}`));

    paramsurl += paramsArray.join('&');
  }

  return new Promise(((resolve, reject) => {
    fetch(url, {
      method: 'post',
      body: paramsurl,
      mode: 'cors',
      credentials: 'include',
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
    }).then((response) => {
      return response.json();
    }).then((responseData) => {
      const checkCodeResult = checkCode(responseData.statusCode, responseData.message);
      if (checkCodeResult.code === 200) {
        resolve(responseData);
      } else {
        reject(checkCodeResult.message);
      }
    }).catch((err) => {
      reject(err);
    });
  }));
}
