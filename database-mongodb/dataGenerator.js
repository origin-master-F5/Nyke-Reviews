const faker = require('faker');
const moment = require('moment');


////////////////////////
/// Helper Functions ///
////////////////////////
const start = process.hrtime.bigint();
const randomRange = (max, min) => {
    return Math.ceil(Math.random() * (max - min) + min);
};
const randomNum = (num) => {
    return Math.round(Math.random() * num);
};
const getBenchmark = (start, end, operation, batchNum) => {
    const bigNum = Number(end - start);
    const ms = bigNum / 1000000;
    const secs = (ms / 1000).toFixed(2);
    const mins = (secs / 60).toFixed(3);
    return `${operation} times: ${ms} (ms) / ${secs} (secs) / ${mins} (mins) for ${batchNum} products`;
};
////////////////////////////////////////////////////////
/// Generator function for both Products and Reviews ///
////////////////////////////////////////////////////////
function* generateData(chunks, upperLimit) {
    const total = chunks * upperLimit;
    let nikeId = 100;
    let products = [];
    let productCount = 0;
    while (productCount < total) {
        let shoe = {};
        shoe.productName = `Nike ${faker.commerce.productName()}`;
        shoe.productId = nikeId;
        nikeId++;
        shoe.reviews = [];
        shoe.discountPrice = Math.round(Math.random() * (149 - 100) + 100);
        shoe.price = Math.round(Math.random() * (250 - 150) + 150);
        let productImageArray = [
            "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/12178bf0-1f2a-4033-8c41-1672081669f2/react-hyperset-womens-volleyball-shoe-Hp4LWJ.jpg",
            "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/12178bf0-1f2a-4033-8c41-1672081669f2/react-hyperset-womens-volleyball-shoe-Hp4LWJ.jpg",
            "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/12178bf0-1f2a-4033-8c41-1672081669f2/react-hyperset-womens-volleyball-shoe-Hp4LWJ.jpg",
            "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/12178bf0-1f2a-4033-8c41-1672081669f2/react-hyperset-womens-volleyball-shoe-Hp4LWJ.jpg",
            "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/12178bf0-1f2a-4033-8c41-1672081669f2/react-hyperset-womens-volleyball-shoe-Hp4LWJ.jpg",
            "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/b6b37945-49c4-4f82-95e8-561147a8a6ac/react-element-55-se-womens-shoe-L5WpdL.jpg",
            "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/b6b37945-49c4-4f82-95e8-561147a8a6ac/react-element-55-se-womens-shoe-L5WpdL.jpg",
            "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/b6b37945-49c4-4f82-95e8-561147a8a6ac/react-element-55-se-womens-shoe-L5WpdL.jpg",
            "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/b6b37945-49c4-4f82-95e8-561147a8a6ac/react-element-55-se-womens-shoe-L5WpdL.jpg",
            "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/b6b37945-49c4-4f82-95e8-561147a8a6ac/react-element-55-se-womens-shoe-L5WpdL.jpg"
        ]
        shoe.productImage = productImageArray[randomNum(productImageArray.length - 1)];
        reviewCount = 0;
        while (reviewCount < randomNum(10)) {
            let review = {};
            let distanceArray = ['3 miles or fewer', '3 - 10 miles', 'More than 10 miles'];
            let terrainArray = ['Treadmill / Indoors', 'Road', 'Track'];
            let reviewImageArray = [
                'https://wac.edgecastcdn.net/001A39/prod/media/78GDJmj4zEDYwwHsite/B61E1B739A161975A92AB28D7D2B08A9.app1_1579613533843_PZ320.jpeg',
                'https://wac.edgecastcdn.net/001A39/prod/media/78GDJmj4zEDYwwHsite/315E0813E58EBBE72DF341004E24D952.app1_1583775393818_PZ320.jpeg',
                'https://wac.edgecastcdn.net/001A39/prod/media/78GDJmj4zEDYwwHsite/23C5CCC0349927EA9C4FE8077A77D7F0.app1_1574197116929_PZ320.jpeg',
                'https://wac.edgecastcdn.net/001A39/prod/media/78GDJmj4zEDYwwHsite/185FE1BC82FD4A16D691FE0F7B002BA9.app1_1571797784094_PZ320.jpeg',
                'https://wac.edgecastcdn.net/001A39/prod/media/78GDJmj4zEDYwwHsite/7CF33235BEB9D0121B480441AC61DBEB.app1_1574204929128_PZ320.jpeg',
                'https://wac.edgecastcdn.net/001A39/prod/media/78GDJmj4zEDYwwHsite/D9E4399A1F889304DC17A04FBCFD05DB.app1_1552241016796_PZ320.jpeg',
                'https://wac.edgecastcdn.net/001A39/prod/media/78GDJmj4zEDYwwHsite/422D4488C25EA6FE6A2589A54361D842.app1_1524634291409-1_PZ320.jpeg'
            ]
            review.header = faker.company.bs();
            review.comment = faker.lorem.paragraph();
            review.star = randomRange(5, 1);
            review.size = randomNum(2);
            review.comfort = randomNum(2);
            review.durability = randomNum(2);
            let dateUnformatted = faker.date.past(1, '2020-04-01');
            review.dateWritten = moment(dateUnformatted).format('LL');
            review.username = faker.internet.userName();
            review.location = `${faker.address.city()}, ${faker.address.stateAbbr()}, ${faker.address.countryCode()}`;
            review.avgRunDistance = distanceArray[randomNum(distanceArray.length - 1)];
            review.terrain = terrainArray[randomNum(terrainArray.length - 1)];
            review.flagged = 0;
            review.upvotes = randomNum(10);
            review.downvotes = randomNum(2);
            review.verified = Math.random() >= 0.8;
            if (Math.random() >= 0.9) {
                review.image = reviewImageArray[randomNum(reviewImageArray.length - 1)];
            }
            shoe.reviews.push(review);
            reviewCount++;
        }

        products.push(shoe);
        if (products.length === upperLimit) {
            yield products;
            products = [];
        }
        productCount++;
    }
}

module.exports = {
    generateData: generateData,
    getBenchmark: getBenchmark
};