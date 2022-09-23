export const URL = {
  POLICIES: '/policies',
  CREATE_POLICY: '/policy/create',
  TARGETS: '/targets',
  CREATE_TARGET: '/target/create',
  UNAUTHORIZED: '/404',
  INTRODUCTION: '/introduction',
  SERVICE_INFORMATION: '/info',
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
