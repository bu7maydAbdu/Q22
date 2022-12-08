const express =  require("express")
const axios = require("axios")


const token = process.env.token
const baseUrl = process.env.baseUrl
const url = `${baseUrl}/standings`
const teamsUrl = `${baseUrl}/teams`

module.exports = {
    getMain : async (req, res) => {

        try{

           const teamsData = await axios.get(teamsUrl,{
                headers: {
                    "X-Auth-Token" : token
                }
            })

            console.log(teamsData.data.teams)
         
         await axios.get(url,{
                headers: {
                    "X-Auth-Token" : token
                }
            })
            res.render("index.ejs",{teams : teamsData.data.teams})
        }catch(err){
            console.log(err)
        }
      }
}



