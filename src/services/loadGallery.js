export const loadGallery = async () => {
    try{
        const url = "http://localhost:8080/draw/all"
        const a = await fetch(url)
        const b = await a.json()
        console.log(b);
    } catch(err){
        console.error(err)
    }
}