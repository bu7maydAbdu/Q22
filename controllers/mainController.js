const express =  require("express")
const axios = require("axios")


const token = process.env.token
const baseUrl = process.env.baseUrl
const url = `${baseUrl}/standings`
const teamsUrl = `${baseUrl}/teams`
const matchesUrl = `${baseUrl}/matches`

module.exports = {
    getMain : async (req, res) => {

        try{

           const teamsData = await axios.get(teamsUrl,{
                headers: {
                    "X-Auth-Token" : token
                }
            })

            // console.log(teamsData.data.season)

         const matchesData =   await axios.get(matchesUrl,{
                headers: {
                    "X-Auth-Token" : token
                }
            })

           const currentMatchesSearch = await matchesData.data.matches.filter(item => item.matchday === teamsData.data.season.currentMatchday)

           console.log(currentMatchesSearch[0])

             
        // console.log(matchesData.data.matches)
         
         await axios.get(url,{
                headers: {
                    "X-Auth-Token" : token
                }
            })
            res.render("index.ejs",{teams : teamsData.data , matches : currentMatchesSearch})
        }catch(err){
            console.log(err)
        }
      }
}



