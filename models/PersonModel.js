export default {
    /**
     * This function adds one to its input.
     * @param {number} input any number
     * @returns {number} that number, plus one.
     */
    search: async (body) => {
        const pageNo = body.page
        const skip = (pageNo - 1) * global.paginationLimit
        const limit = global.paginationLimit
        const data = await Person.find({
            status: { $in: ["enabled", "disabled"] }
        })
            .skip(skip)
            .limit(limit)
            .exec()
        const count = await Person.countDocuments({
            status: { $in: ["enabled", "disabled"] }
        }).exec()
        const maxPage = Math.ceil(count / limit)
        return { data, count, maxPage }
    },
    getOne: async (id) => {
        return await Person.findOne({
            _id: id,
            status: { $in: ["enabled", "disabled"] }
        }).exec()
    },
    saveData: async (data) => {
        let obj = new Person(data)
        await obj.save()
        return obj
    },
    updateData: async (id, data) => {
        let obj = await Person.findOneAndUpdate({ _id: id }, data, {
            new: true
        })
        return obj
    },
    deleteData: async (id) => {
        let obj = await Person.findOneAndUpdate(
            { _id: id },
            { status: "archived" },
            {
                new: true
            }
        )
        return obj
    }
}
