


let getdata = async ()=>{
    let productBox = document.getElementById('products')
    let result =await fetch('/products/get_products');
    result = await result.json();
    console.log(result)
    result.map(product=>{
        let div = document.createElement('div');
        div.classList.add('product');
        div.classList.add('col-sm-6');
        div.classList.add('col-md-4');
        div.classList.add('col-12');
        div.innerHTML = `
        <div class="shadow-sm p-5" style="min-height:400px;">
        <form class="border p-2 border-5 m-2" action="/products/addimages/${product._id}" method="post" enctype="multipart/form-data">
    <input type="file" name="files" id="" multiple>
    <button type="submit" value="upload class="btn btn-primary">Submit</button>
</form>
        <img src="/products/getImage/${product.image[0]}" width="100" alt="">
        <h1>${product.name}</h1>
        <h2>${product.price}</h2>
        
        <a href='/edit.html?${product._id}' class="btn btn-primary">edit</a>
        <a class="btn btn-danger">delete</a>
        </div>
        `
        productBox.appendChild(div)
    })
}
getdata()