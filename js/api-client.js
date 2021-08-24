async function getData () {
try {   const response = await fetch("http://localhost:3000", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }}) 
        return response.json()
    }

catch {
    console.log("error")
    }
} 

async function getDataId (id) {
try {   const response = await fetch(`http://localhost:3000/${id}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }}) 
        return response.json()
    }
    
catch {
        console.log("error")
    }
} 

async function postData (object) {
try {    const data = {object}
    const response = await fetch("http://localhost:3000", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        return response.json()
    }
catch {
    console.log("error")
}
}

async function putData (object, id) {
try {  const data = {object}
    const response = await fetch(`http://localhost:3000/${id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        return response.json()
    }
catch {
    console.log("error")
}
}

async function deleteData (id) {
try {    const response = await fetch(`http://localhost:3000/${id}`,{
        method: "DELETE"
})}
catch {
    console.log("error")
}
}
