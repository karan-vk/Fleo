# Fleo Hackathon

## Backend for the Fleo Hackathon

### Create
To create a parent company

Example:
```
POST /company
{
    "CompanyName": "Company1",
    "TotalSales": 75000,
    "TargetSales":44545,
    "progress": "30"
}

```

### Create Child Company
To create child companies to a parent company

Example:
```
POST /company/:id 
{
    "children":[
        {
            "CompanyName": "Company2",
            "TotalSales": 75000,
            "TargetSales":44545,
            "progress": "30"
        },
        {
            "CompanyName": "Company3",
            "TotalSales": 75000,
            "TargetSales":44545,
            "progress": "30"
        }
        
]
}
```
### Update Induvidual Company
To update an induvidual company can be both parent and child

Example:
```
PUT /company/:id 
{
    "CompanyName": "Company2",
    "TotalSales": 75000,
    "TargetSales":44545,
    "progress": "30"
        
}
```

### Delete Parent/Child Company
To delete a parent/child company if it is a parent all the children will be deleted as well

Example:
```
DELETE /company/:id 
```

### Get Parent/Child Company
To get child or parent company . If it is a parent it will return all the children

Example:
```
GET /company/:id 
```


By Karan

My portfolio [link](https://karanv.ml) I'm currently building it so lot of the details are not updated 
