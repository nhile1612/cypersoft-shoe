function loadShoe()
{
    const url = window.location.href;
    const id = url.split('?')[1].split('=')[1];
    fetch(`https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`).then(response => response.json()).then(({ content }) =>
    {
        document.getElementById('shoe').innerHTML = getDetailTemplate(content);
        loadRelatedProducts(content.relatedProducts)
    })
}

loadShoe()

/**
 * 
 * @param {{ id: number, name: string, alias: string, price: number, description:string, size: string, shortDescription: string, quantity: number, deleted:boolean,categories:string,relatedProducts:string, feature: boolean, image: string }} shoe 
 * @returns 
 */
function getDetailTemplate(shoe) {
    const sizesTemplate = shoe.size.map(size => `<li class="py-2.5 px-3 bg-gray-300">${size}</li>`).join('');

    return `
    <div class="w-[335px] h-[355px] py-[90px] px-[57px] flex justify-center items-center bg-gray-100">
        <img src="${shoe.image}" alt="">
    </div>

    <div class="flex flex-col gap-4">
        <h2 class="text-[30px] leading-[36px]">${shoe.name}</h2>
        <p>${shoe.description}
        </p>

        <span class="text-[#1ED90E] s-text-lg font-medium">Available size </span>

        <ul class="flex gap-5">
            ${sizesTemplate}
        </ul>

        <strong class="text-red-600 text-3xl">${shoe.price}$</strong>

        <div class="flex">
            <button class="px-3 py-1 bg-blue-500 text-white">+</button>
            <input type="text" class="border-0 text-lg w-10 text-center" value="1">
            <button class="px-3 py-1 bg-blue-500 text-white">-</button>
        </div>

        <button class="py-4 bg-gradient text-white w-40 s-text-lg font-bold">Add to cart</button>
    </div>
`
}

function loadRelatedProducts(products)
{
        const shoeTemplates = products.map(shoe => getShoeTemplate(shoe));
        document.getElementById('relatedProducts').innerHTML = shoeTemplates.join('');
}
