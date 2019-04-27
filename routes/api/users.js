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

// @route  GET api/users/edit/:username
// @desc   Get a form to update a user
// @access PUBLIC
router.get('/edit/:username', (req, res) => {
    res.render('/edit_user');
});

// @route  POST api/users/edit/:username
// @desc   Update a User
// @access PUBLIC
router.post('/edit/:username', (req, res) => {
    let updatedUser = req.body;
    User.update({username: req.params.username}, updatedUser)
        .then(user => {
            res.json(user);
        })
        .catch(err => {
            console.log('something went wrong');
        });

    User.findOne({username: req.params.username})
        .then(user => {
            let updatedUser = req.body;

            user.update()
        })
    // User.findOne({username: req.params.username})
    //     .then(user => {
    //         res.send(user);
    //     });
    // User.update({username: req.params.username}, user)
    //     .then(user => {
    //         user.update()
    //     })
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