import { API } from './api';
import { apiUrl } from '@/config/url';
import { ProductProps } from 'models';

export class ProductService {
  static async getProducts() {
    const { data } = (await API.get(apiUrl().products.getAll)).data;
    return data;
  }

  static async createProduct(product: ProductProps) {
    const { data } = (await API.post(apiUrl().products.create, product)).data;
    return data;
  }

  static async updateProduct(product: ProductProps) {
    const { data } = (await API.put(apiUrl({ id: product.id }).products.update, product)).data;
    return data;
  }

  static async deleteProduct(product: ProductProps) {
    const { data } = (await API.delete(apiUrl({ id: product.id }).products.delete)).data;
    return data;
  }

  static async searchProducts(value: string) {
    const { data } = await (
      await API.get(apiUrl().products.search, { params: { name: value } })
    ).data;
    return data;
  }
}
