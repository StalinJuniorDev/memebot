const Discord = require("discord.js")
const client = new Discord.Client()

client.on("message", message => {
    if(message.channel.id == "994976690675646504"){
        if(message.attachments.size > 0){
            message.react("🔼")
            message.react("🔽")
            if(message.author.id === "670667760577019909"){
                message.react("🔥")
            }
        }else{
            message.delete()
        }
    }
})

client.on("ready", () => {
    console.log("bot is ready!!!")
})

client.login(process.env.TOKEN)