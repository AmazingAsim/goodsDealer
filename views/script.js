


let getdata = async ()=>{
    let productBox = document.getElementById('products')
    let result =await fetch('/products/get_products');
    result = await result.json();
    console.log(result)
    result.map(product=>{
        let div = document.createElement('div');
        div.classList.add('product');
        div.innerHTML = `
        
        <form action="/products/addimages/${product._id}" method="post" enctype="multipart/form-data">
    <input type="file" name="files" id="" multiple>
    <button type="submit" value="upload class="btn btn-primary">Submit</button>
</form>
        <img src="/products/getImage/${product.image[0]}" width="100" alt="">
        <h1>${product.name}</h1>
        <h2>${product.price}</h2>
        `
        productBox.appendChild(div)
    })
}
getdata()