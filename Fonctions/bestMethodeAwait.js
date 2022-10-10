// à ne pas faire 
const user1 = await getUser();
const products1 = await getProducts();

// à faire 

const [user, products] = await.promise.all([getUser(), getProducts()]);