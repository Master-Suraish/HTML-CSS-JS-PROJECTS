const Images = document.querySelectorAll("img");
let ImgPreview = document.querySelector(".Img-Preview");

for (let Image of Images) {
  Image.addEventListener("click", () => {
    if (Image.alt === "Nature-1") {
      ImgPreview.innerHTML = "<img src='Images/Nature-1.jpg'/>";
    } else if (Image.alt === "Nature-2") {
      ImgPreview.innerHTML = "<img src='Images/Nature-2.jpg'/>";
    } else if (Image.alt === "Nature-3") {
      ImgPreview.innerHTML = "<img src='Images/Nature-3.jpeg'/>";
    } else if (Image.alt === "Nature-4") {
      ImgPreview.innerHTML = "<img src='Images/Nature-4.jpg'/>";
    } else if (Image.alt === "Nature-5") {
      ImgPreview.innerHTML = "<img src='Images/Nature-5.jpg'/>";
    } else if (Image.alt === "Nature-6") {
      ImgPreview.innerHTML = "<img src='Images/Nature-6.jpg'/>";
    } else if (Image.alt === "Nature-7") {
      ImgPreview.innerHTML = "<img src='Images/Nature-7.jpg'/>";
    } else if (Image.alt === "Nature-8") {
      ImgPreview.innerHTML = "<img src='Images/Nature-8.jpg'/>";
    } else if (Image.alt === "Nature-9") {
      ImgPreview.innerHTML = "<img src='Images/Nature-9.jpg'/>";
    } else if (Image.alt === "Nature-10") {
      ImgPreview.innerHTML = "<img src='Images/Nature-10.jpg'/>";
    } else if (Image.alt === "Nature-11") {
      ImgPreview.innerHTML = "<img src='Images/Nature-11.jpg'/>";
    } else if (Image.alt === "Nature-12") {
      ImgPreview.innerHTML = "<img src='Images/Nature-12.jpg'/>";
    }
  });
}
