const Sportsmen = require('../model/sportsmen')

const getSportsmen = async (req, res) => {
    try {
        const sportsmen = await Sportsmen.find().exec();
        res.send({
            success: true,
            data: sportsmen,
        });
    } catch (err) {
        console.log(err);
        res.send({
            success: false,
        });
    }
};

const addSportsmen = async (req, res) => {
    try {
        const { first_name,
            last_name,
            father_name,
            birth,
            birth_address,
            death,
            height,
            weight,
            club,
            coach,
            bio } = req.body;

        if (first_name === '' || last_name === '') {
            return res.status(400).json({ error: 'Add required values' });
        }

        // Validate if catalog exists in our database
        // const existingCatalog = await Sportsmen.findOne({ name });
        // if (existingCatalog) {
        //     return res.status(400).json({ error: 'Catalog already exists' });
        // }

        // Create catalog in our database
        const sportsman = await Sportsmen.create({
            first_name,
            last_name,
            father_name,
            birth,
            birth_address,
            death,
            height,
            weight,
            club,
            coach,
            bio
        });

        // Return new catalog
        return res.status(201).json(sportsman);
    } catch (err) {
        console.log(err);
        return res.status(400).json({ error: err.message });
    }
};

module.exports = {
    getSportsmen,
    addSportsmen,
};
