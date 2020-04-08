const pool = require('./index')

const ex = {
  productName: "test shoes from Nike",
  productId: 2,
  price: 200,
  discountPrice: 150,
  productImage: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/12178bf0-1f2a-4033-8c41-1672081669f2/react-hyperset-womens-volleyball-shoe-Hp4LWJ.jpg"
}
const seed = async() => {
  await pool.query("INSERT INTO products (productName, productId, price, discountPrice, productImage) VALUES ($1)", [ex], (err, result) => {
    err ? console.error(err) : console.log('success!', result)
  })

}