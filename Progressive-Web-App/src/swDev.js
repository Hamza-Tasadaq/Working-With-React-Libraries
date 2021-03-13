export default function swDev() {
    let swUrl = `${process.env.PUBLIC_URL}/sw.js`
    if ('serviceWorker' in navigator && 'register' in navigator.serviceWorker) {
        navigator.serviceWorker.register(swUrl)
            .then((res) => {
                // console.log("response-->>", res)
            })
            .catch((err) => {
                // console.log("error-->>", err)
            })
    }
}