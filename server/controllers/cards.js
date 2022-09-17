const express = require('express');
const mongoose = require('mongoose');
const { json } = require('stream/consumers');
const config = require('../config/dev.js')
module.exports = { 
    getCards: async function (req, res, next) { 
        try {
        const db = await mongoose.connect(config.db_conn, {});
        const collection = db.collection('cards');

        const result = await collection.find({}).toArray();

        res.json(result)
        }
        catch (err) {
            console.log(err);
            res.status(400).send('error getting cards')
        }
  
    }
}
