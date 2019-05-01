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

// @route  GET api/users/:username
// @desc   Get specified user
// @access PUBLIC
router.get('/:username', (req, res) => {
    User.findOne({username: req.params.username})
        .then(user => {
            return user !== null ? res.json(user) : (
                User.findOne({username: 'daveregg'})
                    .then(user => res.json(user))
            );
        })
        .catch(err => console.log(err));
})

// @route  POST api/users
// @desc   Register a User
// @access PUBLIC
router.post('/', (req, res) => {
    const { username, general, apps, information, contact, location } = req.body;
    const newUser = new User({
        username,
        general,
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

// @route  POST api/users/:username/edit/
// @desc   Update a User
// @access PUBLIC
router.post('/edit', (req, res) => {
    // receives the entire user obj with updated information
    const query = {username: req.body.username};

    User.findOneAndUpdate(query, req.body)
    .then(user => {
        res.json(user);
    })
    .catch(err => {
        console.log(`there's been an err: ${err}`);
        return res.status(500).json({success: false});
    });
});

// @route  DELETE api/users/:username
// @desc   Delete a User
// @access PUBLIC
router.delete('/:username', (req, res) => {
    User.findOne({username: req.params.username})
        .then(user => user.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;