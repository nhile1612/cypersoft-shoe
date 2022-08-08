function loadShoes()
{
    fetch('https://shop.cyberlearn.vn/api/Product').then(response => response.json()).then(({content}) =>
    {
        const shoeTemplates = content.map(shoe => getShoeTemplate(shoe));
        document.getElementById('shoes').innerHTML = shoeTemplates.join('');
    })
}

loadShoes()
