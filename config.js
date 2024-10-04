const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "50935274853";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "50935274853";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_09_10_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAzNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxODAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI1LFxuICAgICAgICAzMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDM0LFxuICAgICAgICA2NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDkwLFxuICAgICAgICAxMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMSxcbiAgICAgICAgMTgzLFxuICAgICAgICA0MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTQxLFxuICAgICAgICA1MSxcbiAgICAgICAgNzksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTIzLFxuICAgICAgICA3NixcbiAgICAgICAgMjcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjksXG4gICAgICAgIDkzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzcsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTA1LFxuICAgICAgICA1NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTk4LFxuICAgICAgICA1NCxcbiAgICAgICAgMjksXG4gICAgICAgIDk1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDExNixcbiAgICAgICAgMjM2LFxuICAgICAgICAxODAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODQsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODMsXG4gICAgICAgIDk3LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTI4LFxuICAgICAgICA2MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTgyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxODgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0LFxuICAgICAgICAyMixcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOCxcbiAgICAgICAgMjA0LFxuICAgICAgICA3NixcbiAgICAgICAgMTU2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICA3NyxcbiAgICAgICAgMCxcbiAgICAgICAgODcsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDYxLFxuICAgICAgICAxNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDgxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDQ4LFxuICAgICAgICA3NixcbiAgICAgICAgMjI3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyNixcbiAgICAgICAgNzYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MixcbiAgICAgICAgMTIzLFxuICAgICAgICA0MCxcbiAgICAgICAgMjM0LFxuICAgICAgICA0MixcbiAgICAgICAgMTc4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNDksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTgzLFxuICAgICAgICA5MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODcsXG4gICAgICAgIDEsXG4gICAgICAgIDYwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTc2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDM2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgODlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDc5LFxuICAgICAgICAxOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDk4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDU4LFxuICAgICAgICAzNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTU1LFxuICAgICAgICA0NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwNixcbiAgICAgICAgNTAsXG4gICAgICAgIDAsXG4gICAgICAgIDksXG4gICAgICAgIDQsXG4gICAgICAgIDIsXG4gICAgICAgIDU0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgODcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTIwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDU1LFxuICAgICAgICAxMyxcbiAgICAgICAgMjM4LFxuICAgICAgICA0NixcbiAgICAgICAgMTg2LFxuICAgICAgICA4LFxuICAgICAgICAxMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDk5LFxuICAgICAgICA3NixcbiAgICAgICAgODEsXG4gICAgICAgIDEzMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSW1va253Uk1KcDJFeUptRnpEaGpMeWs4Z3dZQlkzZ2pyc0xoNE9nZTMvaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWVpPSGJHajhSX3lNVjVYSUhGMmhId1wiLFxuICBcInBob25lSWRcIjogXCI2MTU0M2VjMy04NzBiLTQzMTEtYTZhZC00OTBlOTNmNWRmNjhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUsXG4gICAgICA1OSxcbiAgICAgIDIwNixcbiAgICAgIDYxLFxuICAgICAgMjUxLFxuICAgICAgMTQzLFxuICAgICAgMSxcbiAgICAgIDQyLFxuICAgICAgMTgzLFxuICAgICAgMTMzLFxuICAgICAgMTY0LFxuICAgICAgMTU4LFxuICAgICAgMTY5LFxuICAgICAgMTM3LFxuICAgICAgMTIxLFxuICAgICAgMTAwLFxuICAgICAgMTE2LFxuICAgICAgNDAsXG4gICAgICAxMjEsXG4gICAgICA2MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0MyxcbiAgICAgIDczLFxuICAgICAgMTU4LFxuICAgICAgMTgzLFxuICAgICAgNTcsXG4gICAgICA0NCxcbiAgICAgIDE5MixcbiAgICAgIDQ2LFxuICAgICAgOTAsXG4gICAgICAxNTIsXG4gICAgICAxMzIsXG4gICAgICA3MSxcbiAgICAgIDE5MSxcbiAgICAgIDk4LFxuICAgICAgNzksXG4gICAgICAxMjAsXG4gICAgICAxNCxcbiAgICAgIDE1NCxcbiAgICAgIDIyOSxcbiAgICAgIDEwOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI5NktZWDFaWlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNTA5MzUyNzQ4NTM6MTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIyODE1MzY5NjAxMjM0OjE5QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkJvdFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tXV3h5QVF1Y1grdHdZWUJpQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwid0VpTERNOERCY3FjQmROZUVhQmVrTW1POWEraUMvem42TDRKeVBhOGVSND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJmVCtySFBpQVNmSlpUWkJJbTJuT3ZldlpRMitwdGd1TjNhK0ZVTGJVOHZ6QkU2T1IvcWlLSkRFNHNCWEFGVjJjOXM4VnhmTGhzdzVjdVlYbGhPVDhCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJqcm1QK1plK2EzRVlqRUNoTHZyNDU3L2FSa21oSG16TVdMaTRQUEdCcjgrQ21tNzhvZ2dVcHN3UEpqWjI1YXVIVmhGVG9URzJuWXdFNHNXK0VLT0ppZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI1MDkzNTI3NDg1MzoxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMzBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyODAyOTM3NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQURnSVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRGdJLmpzb24iOiAie1wia2V5RGF0YVwiOlwiOXNlUVNPSm4xQnBhYTNsd0JZeWlibjRTQzRCbDVLbkQ5SUFONm42UUt5Zz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2ODI3NDk4MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyNjY4NjczMTk4N1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
