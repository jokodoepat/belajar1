const User = require("../models/user")
const moment = require('moment-timezone')
const indo    = moment.tz(Date.now(), "Asia/Jakarta");
const baru = indo.format()

const create = async (req) => {
    let { name, email, phone } = req.body
    phone = parseInt(phone)
    var insert_data = {
        name,
        email,
        phone,
        created_at:baru,
        updated_at:baru
    }

    let data = new User(insert_data)

    try {
        console.log(indo.toDate())
        await data.save()

        return data
    } catch(err) {
        throw err
    }
}

const getAll = async () => {
    try {
        let query = await User.find({ deleted_at: null}).exec()
        let data = query.map((v, i) => {
            return {
                name: v.name,
                email: v.email,
                phone: v.phone
            }
        })

        return data
    } catch(err) {
        throw err
    }
}

const getDetail = async (id) => {
    try {
        let query = await User.findOne({
            _id: id
        }).exec()

        return query
    } catch(err) {
        throw err
    }
}

const update = async (id, updated_data) => {
    let { name, email, phone, fresh } = updated_data
    let opts = {
        new: fresh === "true" ? true : false
    }
    let data = {
        name,
        email,
        phone
    }

    try {
        let query = await User.findOneAndUpdate({
            _id: id
        }, data, opts).exec()

        return query
    } catch(err) {
        throw err
    }
}

const destroy = async (id) => {

    let deleted = {
        deleted_at: Date.now()
    }
    try {
        let query = await User.findOneAndUpdate({
            _id: id
        }, deleted).exec()

        return query
    } catch(err) {
        throw err
    }
}

// const destroy = async (id) => {
//     try {
//         let query = await User.findOneAndDelete({
//             _id: id
//         }).exec()

//         return query
//     } catch(err) {
//         throw err
//     }
// }

module.exports = {
    create,
    getAll,
    getDetail,
    update,
    destroy
}