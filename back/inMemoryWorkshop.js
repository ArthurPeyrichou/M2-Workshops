let inMemoryWorkshop = []


function getWorkshopList() {
    return new Promise((resolve, ) => {
        resolve(inMemoryWorkshop)
    })
}

function getWorkshopByName(name) {
    return new Promise((resolve, reject) => {
        if (!name) {
            reject(new Error("name parameter is required"))
        }
        resolve(inMemoryWorkshop.find(workshop => workshop.name === workshop))
    })
}

function getWorkshopById(id) {
    return new Promise((resolve, reject) => {
        if (!id) {
            reject(new Error("id parameter is required"))
        }
        resolve(inMemoryWorkshop.find(workshop => parseInt(workshop.id) === parseInt(id)))
    })
}

function addWorkshop(name, description) {
    return new Promise((resolve, reject) => {
        if (!name) {
            reject(new Error("Workshop name required"))
        }
        if (!description) {
            reject(new Error("Workshop description required"))
        }
        const id = inMemoryWorkshop.length
        inMemoryWorkshop.push({
            id,
            name,
            description
        })
        resolve()
    })
}

function removeWorkshopByName(name) {
    return new Promise((resolve, reject) => {
        if (!name) {
            reject(new Error("name parameter is required"))
        }
        for(let i = 0; i < inMemoryWorkshop.length; ++i){ 
           if ( inMemoryWorkshop[i].name === name) {
             inMemoryWorkshop.splice(i, 1); 
           }
        }
        resolve()
    })
}

function removeWorkshopById(id) {
    return new Promise((resolve, reject) => {
        if (!id) {
            reject(new Error("id parameter is required"))
        }
        for(let i = 0; i < inMemoryWorkshop.length; ++i){ 
            if ( parseInt(inMemoryWorkshop[i].id) === parseInt(id) ) {
                inMemoryWorkshop.splice(i, 1); 
            }
        }
        resolve()
    })
}

function updateWorkshop(name) {
    return new Promise((resolve, reject) => {
        if (!name) {
            reject(new Error("name parameter is required"))
        }
        resolve()
    })
}

function updateWorkshopById(id, name, description) {
    return new Promise((resolve, reject) => {
        if (!id) {
            reject(new Error("id parameter is required"))
        }
        if (!name) {
            reject(new Error("name parameter is required"))
        }
        if (!description) {
            reject(new Error("description parameter is required"))
        }
        for(let i = 0; i < inMemoryWorkshop.length; ++i){ 
            if ( parseInt(inMemoryWorkshop[i].id) === parseInt(id) ) {
                if (inMemoryWorkshop[i].name == name && inMemoryWorkshop[i].description == description) {
                    reject(new Error("no difference noticed"))
                }
                inMemoryWorkshop[i].name = name;
                inMemoryWorkshop[i].description = description;
            }
        }
        resolve()
    })
}

module.exports = {
    getWorkshopList,
    getWorkshopByName,
    getWorkshopById,
    addWorkshop,
    removeWorkshopByName,
    removeWorkshopById,
    updateWorkshop,
    updateWorkshopById
}