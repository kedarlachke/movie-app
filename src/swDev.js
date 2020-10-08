export default function swDev(){
    let swurl=`/sw.js`
    console.log(swurl)
    navigator.serviceWorker.register(swurl).then((response)=>{
        console.warn("response ->"+response)
    })
}