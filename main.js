let url = "https://fakestoreapi.com/products"


async function productS(){
    let res = await fetch(url)
    let data = await res.json();
    console.log(data);

    data.forEach(e => {
        let namE = document.createElement("h4")
        let img = document.createElement("img")
        let price = document.createElement("p")
        let divImage = document.createElement("div")

        namE.innerText = e.title 
        img.src = e.image;
        price.innerText = e.price 
        console.log(img)
        console.log(price)
        console.log(namE)


        divImage.append(namE);
        divImage.append(img);
        divImage.append(price);

        document.querySelector(".all").append(divImage)





    })
}
productS()