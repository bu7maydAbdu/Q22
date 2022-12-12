const express =  require("express")
const axios = require("axios")


const token = process.env.token
const baseUrl = process.env.baseUrl
const url = `${baseUrl}/standings`
const teamsUrl = `${baseUrl}/teams`


module.exports = {

getTeam : async (req , res) => {


    try{


        const teamsData = await axios.get(teamsUrl,{
            headers: {
                "X-Auth-Token" : token
            }
        })
           
        console.log(req.params)
        const  certainTeam = teamsData.data.teams.filter(e => e.id === Number(req.params.id))
        const  attackers = certainTeam[0].squad.filter(e => e.position === "Offence")
        const  midfielders = certainTeam[0].squad.filter(e => e.position === "Midfield")
        const  defenders = certainTeam[0].squad.filter(e => e.position === "Defence")
        const  goalkeepers = certainTeam[0].squad.filter(e => e.position === "Goalkeeper")





        console.log(certainTeam)


        console.log(attackers)


        // const currentMatchesSearch = await matchesData.data.matches.filter(item => item.matchday === teamsData.data.season.currentMatchday)



       res.render("team.ejs" , {team : certainTeam , attackers : attackers , midfielders : midfielders , defenders : defenders , goalkeepers : goalkeepers } )
    }catch(err){


console.log(err)

    }


} 






}