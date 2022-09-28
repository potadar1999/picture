
arr=["https://img.fruugo.com/product/0/70/99799700_max.jpg","https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-movie-poster-template-design-0f5fff6262fdefb855e3a9a3f0fdd361_screen.jpg?ts=1636996054","https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c618cd88432989.5dd5e72e505d1.jpg","https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/432f0863032853.5aa38dbc0c369.jpg","https://cdn.shopify.com/s/files/1/0969/9128/products/1917_-_Sam_Mendes_-_Hollywood_War_Film_Classic_English_Movie_Poster_0db59507-4f26-4215-8786-4dec4580468c.jpg?v=1582781080","https://img.fruugo.com/product/0/70/99799700_max.jpg"]

var i=0;
var id;

function start(){
    var image=document.getElementById("slideshow")
    image.innerHTML=null
    var picture=arr[i]
    let img2=document.createElement("img")
    img2.src=picture

    image.append(img2)
    i++;

    id=setInterval(function(){
        if(i==arr.length){
        i=0
        }
        let container=document.getElementById("slideshow")
        container.innerHTML=null
        var picture=arr[i]
        let img=document.createElement("img")
        img.src=picture
        img.setAttribute("id","photo")
        
    
        container.append(img)
        i++;
    },2000)
 

}


function pause(){
    clearInterval(id)
}

pictures=[
    {
        url:"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-movie-poster-template-design-0f5fff6262fdefb855e3a9a3f0fdd361_screen.jpg?ts=1636996054",
        name:"Freedom",
        date:"21/10/23",
        rating:5
    },
    {
        url:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c618cd88432989.5dd5e72e505d1.jpg",
        name:"Seven",
        date:"22/10/23",
        rating:3
    },
    {
        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyLdnQflpj3tcHAP6PTNpqLdLp0CA4j-HryzzuwcAibTKCvMefWjYxQIUU9z3PBo6yJ2Y&usqp=CAU",
        name:"Rakshaksudu",
        date:"23/10/23",
        rating:4
    },
    {
        url:"https://images.news18.com/ibnlive/uploads/2022/01/pjimage-5.jpg",
        name:"RRR",
        date:"24/10/23",
        rating:3
    },
      {
        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyxQFfAam5VlxC2cDzMmRuGcT7XYhcCVjI3mSmrDrUxzORYONUQqLU7PfA-3C4cmtVrdI&usqp=CAU",
        name:"Jai Bhim",
        date:"25/10/23",
        rating:5
    },
    {
        url:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/432f0863032853.5aa38dbc0c369.jpg",
        name:"Breathe",
        date:"26/10/23",
        rating:4
    },
    {
        url:"https://i.pinimg.com/originals/bc/d5/c9/bcd5c9519581acc60bd60a429ab0c88f.jpg",
        name:"Hill",
        date:"27/10/23",
        rating:2
    },
    {
        url:"https://cdn.shopify.com/s/files/1/0969/9128/products/1917_-_Sam_Mendes_-_Hollywood_War_Film_Classic_English_Movie_Poster_0db59507-4f26-4215-8786-4dec4580468c.jpg?v=1582781080",
        name:"1973",
        date:"28/10/23",
        rating:4
    },
    {
        url:"https://img.fruugo.com/product/0/70/99799700_max.jpg",
        name:"Jocker",
        date:"30/10/23",
        rating:2
    },

]

function SortFun(){
    var select=document.getElementById("select").value;

    if(select=="lh"){
        pictures.sort(function(a,b){
            if(a.rating>b.rating){
                return 1
            }
            if(a.rating<b.rating){
                return -1
            } 
            return 0 
        })
        funPic(pictures)
    }
    if(select=="hl"){
        pictures.sort(function(a,b){
            if(a.rating>b.rating){
                return -1
            }
            if(a. rating<b.rating){
                return 1
            } 
            return 0 
        })
        funPic(pictures)
    }
}
funPic(pictures)


function funPic(pictures){
    pictures.forEach(function(el){
        let div=document.createElement("div")
        let img=document.createElement("img")
        img.src=el.url
        img.setAttribute("class","avatar")
        let name=document.createElement("h1")
        name.innerText=el.name
        let date=document.createElement("h3")
        date.innerText=el.date
        date.setAttribute("class","date")
        let rating=document.createElement("h3")
       rating.innerText="Rating - " +el.rating

        div.append(img,name,date,rating)
        document.getElementById("movies").append(div)
    })
}

funPic(pictures)




