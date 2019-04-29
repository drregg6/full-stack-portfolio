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

// @route  POST api/users/edit/:username
// @desc   Update a User
// @access PUBLIC
router.post('/edit', (req, res) => {
    // will recieve a req.body, an obj with a single portion of the user in it
    let username = req.body.username;
    const { updatedBody } = req.body.updatedBody;
    const { key } = req.body.updatedBody;

    User.findOneAndUpdate({username: username}, {key: updatedBody})
        .then(user => {
            res.json(user);
        });

    // User.findOne({username: req.params.username})
    //     .then(user => {
    //         let updatedUser = req.body;
    //         let key = updatedUser.key;

    //         user.update({username: req.params.username}, {key: updatedUser})
    //             .then(user => {
    //                 res.json(user);
    //             })
    //             .catch(err => {
    //                 console.log('something went wrong')
    //         })
    // });
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