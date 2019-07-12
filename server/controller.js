

module.exports = {
    getHouses: async (req, res) => {
        const houses = await req.app.get('db').get_all_houses()
        return res.sendStatus(200).send( houses )
    },

    addHouse: async (req, res) => {
        const { name, address, city, state, zipcode } = req.body
        req.app.get('db').new_house([name, address, city, state, zipcode])
        return res.sendStatus(200)
    }
}