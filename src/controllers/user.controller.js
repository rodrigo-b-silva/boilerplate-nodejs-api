const Repository = require('../repositories/user.repository');

exports.getById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await Repository.getById(id);

        res.status(200).json(user);
    } catch(err) {
        console.log(err);
    }
}