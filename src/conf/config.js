const conf = {
    apikey: import.meta.env.VITE_API_KEY,
}

console.log("API Key in config:", conf.apikey);

export default conf;