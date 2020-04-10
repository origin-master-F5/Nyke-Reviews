const faker = require('faker');

const randomRange = (max, min) => {
    return Math.ceil(Math.random() * (max - min) + min);
};
const randomNum = (num) => {
    return Math.round(Math.random() * num);
};

function* generateProducts(limit, batch) {
    let nikeId = 100;
    let products = []
    for (let i = 0; i < batch; i++) {
        let shoe = {};
        shoe.productName = 'Nike Air Zoom Pegasus FlyEase FlyKnit';
        shoe.productId = nikeId;
        nikeId++;
        shoe.price = Math.round(Math.random() * (250 - 150) + 150);
        shoe.discountPrice = Math.round(Math.random() * (149 - 100) + 100);
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
        shoe.productImage = productImageArray[randomNum(productImageArray.length)];;
        products.push(shoe)
        if (products.length >= limit) {
            yield products
            products = []
        }
    }
}

function* generateReviews(limit, batch, totalReviews) {
    let reviews = [];
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
    ];
    let months = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
    ]
    for (let i = 0; i < batch * totalReviews; i++) {

        let review = {};
        review.header = faker.lorem.sentence();
        review.comment = faker.lorem.paragraph();
        review.star = randomRange(5, 1);
        review.size = randomNum(2);
        review.comfort = randomNum(2);
        review.durability = randomNum(2);
        let dateUnformatted = faker.date.past(1, '2020-04-01');
        review.dateWritten = `${months[randomRange(1,12)]} ${randomRange(1,28)}, ${randomRange(2018, 2019)}`;
        review.username = faker.internet.userName();
        review.location = `${faker.address.city()}, ${faker.address.stateAbbr()}, ${faker.address.countryCode()}`;
        review.avgRunDistance = distanceArray[randomNum(distanceArray.length)];
        review.terrain = terrainArray[randomNum(terrainArray.length)];
        review.flagged = 0;
        review.upvotes = randomNum(10);
        review.downvotes = randomNum(2);
        review.verified = Math.random() >= 0.8;
        if (Math.random() >= 0.9) {
            review.image = reviewImageArray[randomNum(reviewImageArray.length)];
        }
        // review.productId = randomRange(100, batch)
        review.productId = randomNum(batch)
        reviews.push(review)
        if (reviews.length >= limit) {
            yield reviews
            reviews = []
        }
    }
}

module.exports = {
    generateProducts: generateProducts,
    generateReviews: generateReviews,
};