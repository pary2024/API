const url = "https://fakestoreapi.com/products?limit=20";
const formCard = document.getElementById('formCard');
const  fetchData =async ()=>{
    const respone = await fetch(url);
    const data = await respone.json();

    // const filterData = data.filter (e => e.title.includes(title));
    // const filterData = data.filter (e => e.category === "men's clothing");

    // console.log(filterData);

    formCard.innerHTML = data.map( e=> `
            <div class="col" data-aos="fade-right">
                <div id="formCard" class="card p-3" style="width: 18rem;">
                    <img src="${e.image}" class="card-img-top" alt="...">
                    <div class="">
                      <h5 class="card-title">${e.title} </h5>
                      <h5 class="card-title">${e.price} </h5>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>` );
    
}
fetchData();

