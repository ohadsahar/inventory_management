import { API } from './api';
import { ProductProps } from 'models/product.model';

export class ProductService {
  static async getProducts() {
    const { data } = (await API.get('/product')).data;
    return data;
  }

  static async createProduct(product: ProductProps) {
    const { data } = (await API.post('/product', product)).data;
    return data;
  }

  static async updateProduct(product: ProductProps) {
    const { data } = (await API.put(`/product/${product.id}`, product)).data;
    return data;
  }

  static async deleteProduct(product: ProductProps) {
    const { data } = (await API.delete(`/product/${product.id}`)).data;
    return data;
  }

  static async searchProducts(value: string) {
    const { data } = await (await API.get('/product', { params: { name: value } })).data;
    return data;
  }
}
