

    let postData= async()=>{
        let body= {
            name: document.getElementById("prod").value,
            image: document.getElementById("image").value,
            seller_name: document.getElementById("company").value,
            sell_address: document.getElementById("address").value,
            pincode: document.getElementById("pincode").value,
            state: document.getElementById("state").value,
            phone_num: JSON.parse(localStorage.getItem("mobile")),
            city:document.getElementById("city").value


        }
        let response = await fetch(`https://mock-server-jwji.onrender.com/Users`,{
            method: "POST",
            body: JSON.stringify(body),
            headers: {"Content-Type": "application/json"}
        })
        
    }
    document.getElementById("submit3").addEventListener("click",postData);