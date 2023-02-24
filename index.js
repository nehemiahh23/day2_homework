console.log("Hello world!")
//? Does line 1 show up in your console, if it does not
//? check the HTML and make sure the script is linked correctly

//! Create an object that contains five movies. Each of these
//! movies will have a title, and an image url
//* Note: Find images in google and click on "copy image address"
//* in the drop down when doing a two finger click on the image
//* paste this into your image url

const movies = [
    {
        title: "Captain America: The Winter Soldier", 
        image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRjtj6Pi8ihy3fam85Khujh6a9_XMTxJj1g2xAkKFMYIwcZ8Vm2"
    },
    {
        title: "Kill Bill",
        image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRC9sx_lmH9kAq2nwcpn56zT8h12hkvAfGsWgEnP3reJ9hA_w5_"
    },
    {
        title: "The Lion King",
        image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRpGOeTdpPET8OvEtjBBg03Wze_EZKu61WNaK4mxfoVcPZmZEN6"
    },
    {
        title: "Tinker Tailor Soldier Spy",
        image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR4R1hfBTm41xYmhMGuB8JQYNlJC2apETmx9p6-hlZllO6MsZdV"
    },
    {
        title: "A Silent Voice",
        image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQJrlYXvqlm1bAFMMfjhlX970K4B0z2AJv66KKb1Y9gW-4eml2X"
    },
]



//! In the HTML, there is an id associated with a div element
//TODO: Get the element with the id of "body"
////////////////////////////////////////////////////////
const docDiv = document.querySelector("#body")
////////////////////////////////////////////////////////
//TODO: Iterate throgh the object using forEach
////////////////////////////////////////////////////////
movies.forEach(data => {
    
//TODO: Create an "h3" and "img" tag that will contain your
//TODO: movies object's title and image url
//! REMEMBER, you want to create these HTML tags FOR EACH
//! movie inside your object 
////////////////////////////////////////////////////////
    const movieHeader = document.createElement("h3")
    const movieImage = document.createElement("img")

    docDiv.append(movieHeader)
    docDiv.append(movieImage)
////////////////////////////////////////////////////////
//TODO: Modify the inner text of the elements created
//TODO: to match your movies object
////////////////////////////////////////////////////////
    movieHeader.innerText = data.title
    movieImage.src = data.image
////////////////////////////////////////////////////////
//! Bonus
//TODO: create a "click" event that changes the title
//TODO: of the movie when you click the image
////////////////////////////////////////////////////////
    movieImage.addEventListener("click", ()=> {
        movieHeader.innerText = "Look, don't touch"
    })


////////////////////////////////////////////////////////
//* Keep in mind that I purposed kept all of this code 
//* inside the for each iteration so we won't run into 
//* scope problems
})

