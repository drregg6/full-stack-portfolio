const express = require('express');
const router = express.Router();
const User = require('../../models/User');

// @route  GET api/users
// @desc   Get all Users
// @access PUBLIC
router.get('/', (req, res) => {
    User.find()
        .then(users => {
            return res.json(users);
        })
        .catch(err => console.log(err));
});

// @route  POST api/users
// @desc   Post a User
// @access PUBLIC
router.post('/', (req, res) => {
    const { name, apps, information, contact, location } = req.body;
    const newUser = new User({
        name,
        apps,
        information,
        contact,
        location
    });
    newUser.save()
        .then(user => {
            return res.json(user);
        })
        .catch(err => console.log(err));
});

// @route  DELETE api/users/:id
// @desc   Delete a User
// @access PUBLIC
router.delete('/:id', (req, res) => {
    User.findById(req.params.id)
        .then(user => user.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;