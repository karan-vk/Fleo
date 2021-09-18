const Joi = require('joi');

const companyCreate = Joi.object({
    CompanyName: Joi.string().alphanum().min(3).max(50).required(),
    TargetSales: Joi.number().min(0).required(),
    TotalSales: Joi.number().min(0).required(),
    progress: Joi.number().min(0).max(100).required(),
})

const companyNodeAdd = Joi.object({
    children: Joi.array().items(Joi.object({
        CompanyName: Joi.string().alphanum().min(3).max(50).required(),
        TargetSales: Joi.number().min(0).required(),
        TotalSales: Joi.number().min(0).required(),
        progress: Joi.number().min(0).max(100).required(),
    })),
})

const idCheck = Joi.string().alphanum().min(3).max(50).required()
const companyUpdate = Joi.object({
    CompanyName: Joi.string().alphanum().min(3).max(50),
    TargetSales: Joi.number().min(0),
    TotalSales: Joi.number().min(0),
    progress: Joi.number().min(0).max(100),

})

module.exports = {
    companyCreate,
    companyNodeAdd,
    idCheck,
    companyUpdate
}