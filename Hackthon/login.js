

document.getElementById("logbutton").addEventListener("click", () => {
    
    var upas = document.getElementById("password").value;
    var uid = document.getElementById("userid").value;
    const log = {
        data: [
            {
                userid: "abc@gmail.com",
                password: "abcd",
            },
            {
                userid: "pqr@gmail.com",
                password: "pqrs",
            },
            {
                userid: "mno@gmail.com",
                password: "mnop",
            },
            {
                userid: "xyz@gmail.com",
                password: "xyz1",
            },
        ]
    }
    
    if (uid == "" || upas == "") {
        alert("Section Empty");

    }
    else {
        let count = 0;
        for (let key of log.data) {
            if (key.userid == uid && key.password == upas) {
                // alert("Access Granted");
                window.location.href = "http://127.0.0.1:5500/Web%20Dev/Hackthon/home_without_login.html";
                count = 1;
            }
        }
        if (count == 0) {
            alert("Access denied");
        }
    }
})