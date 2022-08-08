
/**
 * 
 * @param {{ id: number, name: string, alias: string, price: number, description:string, size: string, shortDescription: string, quantity: number, deleted:boolean,categories:string,relatedProducts:string, feature: boolean, image: string }} shoe 
 * @returns 
 */
 function getShoeTemplate(shoe)
 {
     return `
     <li class="inline-flex flex-col justify-between bg-[#F8F8F8] w-[334px] h-full">
         <div class="px-[57px] pt-[45px] pb-[30px]">
             <img src="${shoe.image}" alt="${shoe.name}">
         </div>
         <div class="px-6 mb-4 flex-grow">
             <h5 class="s-text-xl">${shoe.name.length > 20 ? shoe.name.slice(0, 20) + '...':shoe.name}</h5>
             <p class="s-text-lg text-[#CBC9C9]">${shoe.shortDescription.length > 20 ? shoe.shortDescription.slice(0, 20) + '...':shoe.shortDescription}</p>
         </div>
         <footer class="flex">
             <a class="btn primary text-black w-1/2 text-center" href="detail.html?id=${shoe.id}">Buy now</a>
             <button class="btn bg-gray-200 font-bold w-1/2">${shoe.price}$</button>
         </footer>
     </li>
 `
 } 
 