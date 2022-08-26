const imageArray = [
	"https://www.joydeb.xyz/assets/partials/images/random_photo-serve/1.jpg",
	"https://www.joydeb.xyz/assets/partials/images/random_photo-serve/2.jpg",
	"https://www.joydeb.xyz/assets/partials/images/random_photo-serve/3.jpg",
	"https://www.joydeb.xyz/assets/partials/images/random_photo-serve/4.jpg",
	"https://www.joydeb.xyz/assets/partials/images/random_photo-serve/5.jpg",
	"https://www.joydeb.xyz/assets/partials/images/random_photo-serve/6.jpg",
	"https://www.joydeb.xyz/assets/partials/images/random_photo-serve/7.jpg",
	"https://www.joydeb.xyz/assets/partials/images/random_photo-serve/8.jpg",
	"https://www.joydeb.xyz/assets/partials/images/random_photo-serve/9.jpg",
	"https://www.joydeb.xyz/assets/partials/images/random_photo-serve/10.jpg",
	"https://www.joydeb.xyz/assets/partials/images/random_photo-serve/11.jpg",
	"https://www.joydeb.xyz/assets/partials/images/random_photo-serve/12.jpg",
	"https://www.joydeb.xyz/assets/partials/images/random_photo-serve/13.jpg",
	"https://www.joydeb.xyz/assets/partials/images/random_photo-serve/14.jpg",
	"https://www.joydeb.xyz/assets/partials/images/random_photo-serve/15.jpg",
	"https://www.joydeb.xyz/assets/partials/images/random_photo-serve/16.jpg",
	"https://www.joydeb.xyz/assets/partials/images/random_photo-serve/17.jpg",
	"https://www.joydeb.xyz/assets/partials/images/random_photo-serve/18.jpg",
	"https://www.joydeb.xyz/assets/partials/images/random_photo-serve/19.jpg",
	"https://www.joydeb.xyz/assets/partials/images/random_photo-serve/20.jpg",
	"https://www.joydeb.xyz/assets/partials/images/random_photo-serve/21.jpg",
	
];

const image = document.querySelector("#alternate");
//const button = document.querySelector("#change");

window.onload = () => generateRandomPicture(imageArray);

//button.addEventListener("click", () => generateRandomPicture(imageArray));

function generateRandomPicture(array){
	let randomNum = Math.floor(Math.random() * array.length); 
	image.setAttribute("src", array[randomNum]);
}
