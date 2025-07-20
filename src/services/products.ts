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
  const allProducts: any[] = [];
  let page = 1;
  const perPage = 100; 
  const maxTotal = 2000;

  while (true) {
    const url = `${BASE_URL}?category=${categoryId}&per_page=${perPage}&page=${page}`;

    const request_data = {
      url,
      method: "GET",
    };

    const authHeader = oauth.toHeader(oauth.authorize(request_data));

    try {
      const response = await axios.get(url, {
        headers: {
          ...authHeader,
        },
      });

      const products = response.data;

      if (products.length === 0) break;

      allProducts.push(...products);

      if (products.length < perPage || allProducts.length >= maxTotal) {
        break;
      }

      page++;
    } catch (error) {
      console.error("Error fetching products:", error);
      break;
    }
  }

  return allProducts.slice(0, maxTotal); 
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


export const fetchProductsBySku = async (sku: string) => {
  const url = `${BASE_URL}?sku=${encodeURIComponent(sku)}`;

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
