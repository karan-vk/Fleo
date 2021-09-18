const express = require('express');
const { PrismaClient } = require('@prisma/client')

const db = new PrismaClient()
const app = express();
app.use()

app.post('/company', async (req, res) => {
    const company = await db.node.create({
        data: {
            CompanyName: req.body.CompanyName,
            Country: req.body.Country,
            TotalSales: req.body.TotalSales,
            progress: req.body.progress,

        }
    });
    res.status(201).json(company);
});
app.put("/company/:id", async (req, res) => {
    const { id } = req.params;
    await db.node.update({
        where: {
            id: id
        },
        data: {
            isParent: true,
            children: {
                createMany: {
                    data: [
                        {
                            ...req.body
                        }
                    ]
                }
            }
        }
    })
    res.sendStatus(201)
})

app.get("company/:id", async (req, res) => {
    const { id } = req.params;
    const company = await db.node.findUnique({
        where: {
            id: id
        },
        include: {
            children: true
        }
    })
})
app.delete("company/:id", async (req, res) => {
    const { id } = req.params;
    await db.node.delete({
        where: {
            id: id
        }
    })
})



module.exports = app;
