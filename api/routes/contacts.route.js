const express = require('express');
const app = express();
const contactsRoutes = express.Router();

let Contact = require('../models/Contact');

contactsRoutes.route('/add').post(function (req, res) {
  let contact = new Contact(req.body);
  contact.save()
    .then(contact => {
      res.status(200).json({'contact': 'Contact added successfully'});
    })
    .catch(err => {
      res.status(400).send("Unable to save to database");
    });
});

contactsRoutes.route('/').get(function (req, res) {
  Contact.find(function (err, contacts) {
    if (err) {
      console.log(err);
    } else {
      res.json(contacts);
    }
  });
});

contactsRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Contact.findById(id, function (err, contact) {
    res.json(contact);
  });
});

contactsRoutes.route('/update/:id').post(function (req, res) {
  let updated = {
    name: req.body.name,
    email: req.body.email,
    phone_number: req.body.phone_number
  };
  Contact.findOneAndUpdate({_id: req.params.id}, updated, {upsert:true}, function(err, contact) {
    if (err) res.json(500, { error: err });
    else res.json("Succesfully updated contact");
  });
});

contactsRoutes.route('/delete/:id').get(function (req, res) {
  Contact.findByIdAndRemove({_id: req.params.id}, function (err, contact) {
    if (err) res.json(err);
    else res.json('Successfully deleted');
  });
});

module.exports = contactsRoutes;
