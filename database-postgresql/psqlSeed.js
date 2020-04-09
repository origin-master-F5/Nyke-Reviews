const pool = require('./index')
const fs = require('fs')
const csv = require('fast-csv')

let ex = {
    productName: "test shoe 1",
    productId: 2,
    price: 200,
    discountPrice: 150,
    productImage: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/12178bf0-1f2a-4033-8c41-1672081669f2/react-hyperset-womens-volleyball-shoe-Hp4LWJ.jpg"
}

let exArr = [
    ex,
    {
        productName: "test shoe 2",
        productId: 5,
        price: 250,
        discountPrice: 150,
        productImage: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/12178bf0-1f2a-4033-8c41-1672081669f2/react-hyperset-womens-volleyball-shoe-Hp4LWJ.jpg"
    },
    {
        productName: "test shoe 3",
        productId: 5,
        price: 250,
        discountPrice: 150,
        productImage: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/12178bf0-1f2a-4033-8c41-1672081669f2/react-hyperset-womens-volleyball-shoe-Hp4LWJ.jpg"
    }
]

let writeProductStream = fs.createWriteStream('database-postgresql/productData.csv');
let writeReviewStream = fs.createWriteStream('database-postgresql/reviewData.csv');
const seedProducts = async(arr) => {


    arr.forEach((obj, index) => {
        let newLine = Object.values(obj);

        writeProductStream.write(newLine.join(',') + '\n', () => {
            // a line was written to stream
            console.log('line was written')
        })
    })

    writeProductStream.end()
    writeProductStream.on('finish', () => {
            console.log('finish write stream, moving along')
        }).on('error', (err) => {
            console.log(err)
        })
        // await pool.query("INSERT INTO products (productName, productId, price, discountPrice, productImage) VALUES ($1)", [...Object.keys(ex)], (err, result) => {
        //     err ? console.error(err) : console.log('success!', result)
        // })


}

seedProducts(exArr)