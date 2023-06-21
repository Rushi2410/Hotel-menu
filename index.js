async function nonveg() {
    await fetch("http://localhost:3000/Non-veg")
      .then(function (response) { 
        return response.json();
      })
      .then(function (data) {
        console.log("async fetch", data);
        let a=document.getElementById('non-veg')
        a.addEventListener('click',()=>{
          let remove=document.getElementById('main');
          remove.style.display='flex'
            let datas=data
            let menu=document.getElementById('main');
            datas.map((item)=>{
               let div=document.createElement('div')
               div.classList.add('submain')
               menu.appendChild(div)
              
               let image=document.createElement('img')
               image.classList.add('gal')
               image.src=item.url;
               div.appendChild(image)
                  
               let h1=document.createElement('h1')
               h1.innerHTML=item.Name
               div.appendChild(h1)

               let h3=document.createElement('h3')
               h3.innerHTML='$ '+item.Price
               div.appendChild(h3)

                })
        })
      })
  }
  nonveg();
async function veg() {
    await fetch("http://localhost:8000/veg")
      .then(function (response) { 
        return response.json();
      })
      .then(function (data) {
        console.log("async fetch", data);
        let a=document.getElementById('veg')
        a.addEventListener('click',()=>{
          let remove=document.getElementById('main');
          remove.style.display='none'
            let datas=data
            let menu=document.getElementById('main1');
            

            datas.map((item)=>{
               let div=document.createElement('div')
               div.classList.add('submain')
               menu.appendChild(div)
              
               let image=document.createElement('img')
               image.classList.add('gal')
               image.src=item.url;
               div.appendChild(image)
                  
               let h1=document.createElement('h1')
               h1.innerHTML=item.Name
               div.appendChild(h1)

               let h3=document.createElement('h3')
               h3.innerHTML='$ '+item.Price
               div.appendChild(h3)

                })
        })
      })
  }
  veg();
