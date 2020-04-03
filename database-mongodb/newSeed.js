const Product = require('./index').Product;
const mongoose = require('mongoose');
const db = require('./index.js').db;
const colors = require('colors');
const relativeReviewData = require('./seedData');
const faker = require('faker');
const moment = require('moment');
const upperLimit = 100;

const generateShoeData = (generations) => {
  let generatedData = [];
  let nikeID = 100;

  for (let i = 0; i < generations; i++) {
    let shoeObj = {};
    shoeObj.name = 'Nike Air Zoom Pegasus FlyEase FlyKnit';
    shoeObj.discountPrice = Math.round(Math.random() * (149 - 100) + 100);
    shoeObj.price = Math.round(Math.random() * (250 - 150) + 150);
    shoeObj.nikeID = nikeID;
    shoeObj.image = 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/39530e3c-2330-48b9-a7a6-72eb0e8c35ae/air-zoom-pegasus-36-flyease-mens-running-shoe-1Fb6sV.jpg';
    nikeID++;
    generatedData.push(shoeObj);
  }
  return generatedData;
};

const productData = generateShoeData(upperLimit);
console.log(productData.length)
db.close()