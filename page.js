const url = 'https://twof2-iphone.onrender.com/iphones';

async function getMobile() {
    const promise = await fetch(url);
    const response = await promise.json();
    console.log(response.slice(0, 8));

    const cont = document.querySelector('.card');
    response.slice(12).forEach((phone, index) => {
        const item = document.createElement('div');
        item.classList.add('card1');
        
       
        const images = [
            'image/Iphone 14 pro 1-11.png',   
            'image/Iphone 14 pro 1-12.png',
            'image/Iphone 14 pro 1-12.png',
            'image/Iphone 14 pro 1-13.png', 
            'image/Iphone 14 pro 1-11.png', 
            'image/Iphone 14 pro 1-14.png', 
            'image/Iphone 14 pro 1-15.png', 
            'image/Iphone 14 pro 1-14.png',
            'image/Iphone 14 pro 1-13.png',
        ];

      
        const mobileImg = images[index % images.length];

        item.innerHTML = `
            <img class="like" src="image/Like.png" alt="">
            <img style = "margin-top:30px" src="${mobileImg}" alt="Phone Image">
            <p style = "margin-top:13px">${phone.model}</p>
            <p>${phone.description}</p>
            <h2 style = "margin-top:5px;font-weight:500">${phone.price}</h2>
            <button class="btn" style="background-color: black; border: none; border-radius: 5px; color: white; margin-top: 10px; font-size: 15px;">Buy Now</button>
        `;

        cont.appendChild(item);
    });
    const btn = document.querySelectorAll(".like");
    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", e => {
            e.preventDefault();
            if(btn[i].src.includes("image/Like.png")){
                btn[i].src = "Like.png";
            }
            else{
                btn[i].src = "image/Like.png";
            }
        });
    }
    
}
getMobile();

const dontShow=document.querySelector('.colus');
document.getElementById('btn').addEventListener('click',function(){
    dontShow.classList.toggle('active');
    document.getElementById('btn').classList.toggle('smth');
});

