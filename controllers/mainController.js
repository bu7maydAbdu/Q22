const express =  require("express")
const axios = require("axios")


const token = process.env.token
const baseUrl = process.env.baseUrl
const standingsUrl = `${baseUrl}/standings`
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
                     
            console.log(matchesData.data.matches[0])
            // console.log(teamsData.data.teams[0])

           const currentMatchesSearch = await matchesData.data.matches.filter(item => item.matchday === teamsData.data.season.currentMatchday)

        //    console.log(currentMatchesSearch[currentMatchesSearch.length - 1])

             
        // console.log(matchesData.data.matches)
         
         await axios.get(standingsUrl,{
                headers: {
                    "X-Auth-Token" : token
                }
            })
            res.render("index.ejs",{teams : teamsData.data , matches : currentMatchesSearch})
        }catch(err){
            console.log(err)
        }
      },

      getAllTeams : async (req, res) => {

        try{

            const teamsData = await axios.get(teamsUrl,{
                 headers: {
                     "X-Auth-Token" : token
                 }
             })
 
             console.log(teamsData.data.teams[0])
 
          
     
             res.render("allTeams.ejs", {teamsCards :  teamsData.data.teams})
         }catch(err){
             console.log(err)
         }

      },

      getAllGroups : async (req, res)  => {

        try {


            
            

            const standings = await axios.get(standingsUrl,{
                headers: {
                    "X-Auth-Token" : token
                }
            })
                
            console.log(standings.data.standings[0])

            res.render("groups.ejs" , {tables : standings.data.standings})

            

        }catch(err){


            console.log(err)
        }




      },


      getAllMatches : async (req, res) => {


        try{
            const teamsData = await axios.get(teamsUrl,{
                headers: {
                    "X-Auth-Token" : token
                }
            })



            
         const matchesData =   await axios.get(matchesUrl,{
            headers: {
                "X-Auth-Token" : token
            }
        })
                 
        console.log(matchesData.data)
        // console.log(teamsData.data.teams[0])
      const sortedMatches = await matchesData.data.matches.sort((a,b)  => b.matchday - a.matchday)
      console.log(sortedMatches[0])
        
        await matchesData.data.matches.filter(item => item.matchday === teamsData.data.season.currentMatchday)

    //    const currentMatchesSearch = await matchesData.data.matches.filter(item => item.matchday === teamsData.data.season.currentMatchday)

            res.render("allMatches.ejs", { matches : sortedMatches})

        }catch(err){
            console.log(err)
        }
      }
}



