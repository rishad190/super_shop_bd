import requests from "./httpService";

class CatagoriesService {
  getProduct = () => {
    return requests.get("/products/categories");
  };

  getProductByID = (id) => {
    return requests.get(`/products/category/${id}`);
  };

  addProduct = (body) => {
    return requests.post(`/products`, body);
  };

  updateProduct = (id, body) => {
    return requests.patch(`/products/${id}`, body);
  };

  deleteProductByID = (id) => {
    return requests.delete(`/products/${id}`);
  };
}
export default new CatagoriesService();
