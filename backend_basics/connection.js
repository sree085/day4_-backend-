const mongoose=require('mongoose')

mongoose.connect('mongodb+srv://sreedevsv085:sree2004@cluster0.wl3i0sp.mongodb.net/internDb1?retryWrites=true&w=majority&appName=Cluster0').then((res)=>{
    console.log('DB is Connected');
}).catch((error)=>{
    console.log('Error in Connection')
})

