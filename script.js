const url = 'https://twof2-iphone.onrender.com/iphones';

async function getMobile() {
    const promise = await fetch(url);
    const response = await promise.json();
    console.log(response.slice(0, 8));

    const cont = document.querySelector('.card');
    response.slice(0, 8).forEach((phone, index) => {
        const item = document.createElement('div');
        item.classList.add('card1');
        
       
        const images = [
            'image/Iphone 14 pro 1.png',   
            'image/Iphone 14 pro 1-2.png',
            'image/Iphone 14 pro 1-3.png',
            'image/Iphone 14 pro 1-4.png', 
            'image/Iphone 14 pro 1-5.png', 
            'image/Iphone 14 pro 1-6.png', 
            'image/Iphone 14 pro 1-7.png', 
            'image/Iphone 14 pro 1-8.png',
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


    const card = document.querySelector(".dis");
    response.slice(8,12).forEach((phone, index) => {
        const item2 = document.createElement('div');
        item2.classList.add('mikrodis');
        
       
        const images = [
            'image/Iphone 14 pro 1-9.png',   
            'image/Iphone 14 pro 1-2.png',
            'image/Iphone 14 pro 1-3.png',
            'image/Iphone 14 pro 1-10.png', 
        ];

      
        const mobileImg = images[index % images.length];

        item2.innerHTML = `
            <img class="like" src="image/Like.png" alt="">
            <img style = "margin-top:30px" src="${mobileImg}" alt="Phone Image">
            <p style = "margin-top:13px">${phone.model}</p>
            <p>${phone.description}</p>
            <h2 style = "margin-top:5px;font-weight:500">${phone.price}</h2>
            <button class="btn" style="background-color: black; border: none; border-radius: 5px; color: white; margin-top: 10px; font-size: 15px;">Buy Now</button>
        `;

        card.appendChild(item2);
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
    };
};

getMobile();



