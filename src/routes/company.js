const { Router } = require("express");
const { CreateCompany, CreateCompanyChild, DeleteCompany, GetCompany, UpdateCompany } = require("../service/company");
const { companyCreate, companyNodeAdd, idCheck, companyUpdate } = require("../utils/validation");


const company = Router();

company.post('/', async (req, res) => {
    try {
        const validate = await companyCreate.validateAsync(req.body);
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
    const resp = await CreateCompany(req)

    return res.status(201).json(resp);
})

company.put("/:id", async (req, res) => {
    try {
        const validate = await companyNodeAdd.validateAsync(req.body);
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
    const resp = await CreateCompanyChild(req)
    if (resp == 200) {
        return res.sendStatus(202)
    }
})
company.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const validate = await idCheck.validateAsync(id);
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
    const resp = await DeleteCompany(req)
    if (resp == 200) {
        return res.sendStatus(202)
    }
})

company.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const validate = await idCheck.validateAsync(id);
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
    const resp = await GetCompany(req)
    return res.status(200).json(resp);

})

company.put("/update/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const validate = await idCheck.validateAsync(id);
        const validateUpdate = await companyUpdate.validateAsync(req.body);
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
    const resp = await UpdateCompany(req)
    if (resp == 200) {
        return res.sendStatus(202)
    }
})


module.exports = company;