import requests from "./httpService";

class ProductService {
  getProduct = () => {
    return requests.get("/products");
  };

  getProductByID = (id) => {
    return requests.get(`/products/${id}`);
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
export default new ProductService();
