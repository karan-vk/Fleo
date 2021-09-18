const db = require("../lib/db")
const CreateCompany = async (req) => {
    const company = await db.node.create({
        data: {
            CompanyName: req.body.CompanyName,
            TotalSales: req.body.TotalSales,
            progress: req.body.progress,
            TargetSales: req.body.TargetSales,

        }
    }).catch(err => {
        console.log(err)
    });
    return company;
}

const CreateCompanyChild = async (req) => {
    const { id } = req.params;
    const transformed = await req.body.children.forEach(async element => {
        await db.node.create({
            data: {
                Node: {
                    connect: { id: id },
                },
                ...element

            }
        })
    });
    await db.node.update({
        where: {
            id: id
        }, data: {
            isParent: true,
        }
    })
    return 200
}

const DeleteCompany = async (req) => {
    const { id } = req.params;
    await db.node.delete({
        where: {
            id: id
        }
    })
    return 200
}

const GetCompany = async (req) => {
    const { id } = req.params;
    const company = await db.node.findUnique({
        where: {
            id: id
        },
        include: {
            children: true
        }, rejectOnNotFound: false
    })

    return company
}


const UpdateCompany = async (req, res) => {
    const { id } = req.params;
    await db.node.update({
        where: {
            id: id
        },
        data: {
            ...req.body
        }
    })
    return 200
}


module.exports = {
    CreateCompany,
    CreateCompanyChild,
    DeleteCompany,
    GetCompany,
    UpdateCompany
}