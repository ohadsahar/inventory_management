export const URL = {
  products: '/product',
};

interface Params {
  id?: number;
}

export const apiUrl = ({ id }: Params = {}) => ({
  products: {
    getAll: '/product',
    create: '/product',
    update: `/product/${id}`,
    delete: `/product/${id}`,
    search: '/product',
  },
});
