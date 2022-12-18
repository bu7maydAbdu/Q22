const express =  require("express")
const axios = require("axios")


const token = process.env.token
const baseUrl = process.env.baseUrl
const url = `${baseUrl}/standings`
const scorersUrl = `${baseUrl}/scorers`



module.exports = {

getTopScorers : async (req, res) => {

    try{

        const topScorersData = await axios.get(scorersUrl,{
            headers: {
                "X-Auth-Token" : token
            }
        })
    
        console.log(topScorersData.data)


        res.render("playersStats.ejs" , {playersStats : topScorersData.data.scorers})

    }catch(err){


        console.log(err)
    }

  


}




}