import axios from "axios";
import OAuth from "oauth-1.0a";
import CryptoJS from "crypto-js";

const consumerKey = import.meta.env.VITE_WC_KEY!;
const consumerSecret = import.meta.env.VITE_WC_SECRET!;
const BASE_URL = "https://cms.bulm.it/wp-json/wc/v3/products";

const oauth = new OAuth({
  consumer: { key: consumerKey, secret: consumerSecret },
  signature_method: "HMAC-SHA1",
  hash_function(base_string, key) {
    return CryptoJS.HmacSHA1(base_string, key).toString(CryptoJS.enc.Base64);
  },
});

export const fetchProductsByCategoryId = async (categoryId: number) => {
  const url = `${BASE_URL}?category=${categoryId}`;

  const request_data = {
    url,
    method: "GET",
  };

  const authHeader = oauth.toHeader(oauth.authorize(request_data));

  const response = await axios.get(url, {
    headers: {
      ...authHeader,
    },
  });

  return response.data;
};

export const fetchProductsBySearchQuery = async (query: string) => {
    const url = `${BASE_URL}?search=${encodeURIComponent(query)}`;
  
    const request_data = {
      url,
      method: "GET",
    };
  
    const authHeader = oauth.toHeader(oauth.authorize(request_data));
  
    const response = await axios.get(url, {
      headers: {
        ...authHeader,
      },
    });
  
    return response.data;
  };
  