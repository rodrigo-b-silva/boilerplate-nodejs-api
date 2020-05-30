const User = require('../models/user');

exports.getById = async (id) => {
    return await User.findById(id);
}