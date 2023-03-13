import express from 'express' 

const router = express.Router();

router.post("/", async(req, res) => {
    //Read variables sent via post from our sdk
    const { sessionId, serviceCode, phoneNumber, text } = req.body

    console.log("##################", req.body);
    let response = "";

    switch (text) {
        case "":
            response = ` CON Buy Airtime
            1.Sh10
            2.Sh20
            3.Sh30
            `;
            break
        case "1":
            response = `CON Confirm you want to buy Sh10
            1.Yes
            2.No`
            break
        case "2":
            response = `CON Confirm you want to buy Sh20
            1.Yes
            2.No`
            break
        case "3":
            response = `CON Confirm you want to buy Sh30
            1.Yes
            2.No`
            break
        case "1*1":
            response = `END You have successfully purchased Sh10 airtime`
            break
        case "1*2":
            response = `END You have successfully cancelled purchase of Sh10 airtime`
            break
        case "2*1":
            response = `END You have successfully purchased Sh20 airtime`
            break
        default:
            response= `END request not found`
            break
    }  
    
    // Print the response onto the page so that our SDK can read it
  res.set("Content-Type: text/plain");
  res.send(response);
  // DONE!!!
})

export default router;
