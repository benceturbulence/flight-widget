const tableBody = document.getElementById("table_body")

let flights =[
    {
        time: "1995.07.24 PERU",
        destination: "",
        flight: "",
        gate: "",
        remarks: ""
    },
    
    {
        time: "2022.07.24 BUDAPEST",
        destination: "",
        flight: "    ",
        gate: "    ",
        remarks: "    "
    },

    {
        time: "Feliz",
        destination: "cumpleanios",
        flight: "AMOR",
        gate: "!",
        remarks: "" 
    },


    {
        time: "2022.07.23",
        destination: "Buenos Aires",
        flight: "    ",
        gate: "I",
        remarks: "LOVE"
    },

    {
        time: "2022.07.25",
        destination: "Budapest",
        flight: "    ",
        gate: "YOU",
        remarks: "BABE"
    },

]
function populateTable(){
    for (const flight of flights){
        const tableRow = document.createElement('tr')

        for (const flightDetail in flight){
            const tableCell = document.createElement('td')
            const word = Array.from(flight[flightDetail])
            
            for (const [index, letter] of word.entries()){
                const letterElement = document.createElement('div')

                setTimeout(()=>{
                    letterElement.classList.add('flip')
                    letterElement.textContent = letter
                    tableCell.append(letterElement)

                },100*index)
            }
            tableRow.append(tableCell)
        }
        tableBody.append(tableRow)
    }
}

populateTable()

const imageArray = [
    'assets/bero_img (1).jpeg',
    'assets/bero_img (2).jpeg',
    'assets/bero_img (3).jpeg',
    'assets/bero_img (4).jpeg',
    'assets/bero_img (5).jpeg',
    'assets/bero_img (6).jpeg',
    'assets/bero_img (7).jpeg',
    'assets/bero_img (8).jpeg',
    'assets/bero_img (9).jpeg',
    'assets/bero_img (10).jpeg',
    'assets/bero_img (11).jpeg',
    'assets/bero_img (12).jpeg',
    'assets/bero_img (13).jpeg',
    'assets/bero_img (14).jpeg',
    'assets/bero_img (15).jpeg',
    'assets/bero_img (16).jpeg',
    'assets/bero_img (17).jpeg',
    'assets/bero_img (18).jpeg',
    'assets/bero_img (19).jpeg',
    'assets/bero_img (20).jpeg',
    'assets/bero_img (21).jpeg',
    'assets/bero_img (22).jpeg',
    'assets/bero_img (23).jpeg',
    'assets/bero_img (24).jpeg',
    'assets/bero_img (25).jpeg',
    'assets/bero_img (26).jpeg',
    'assets/bero_img (27).jpeg',
    'assets/bero_img (28).jpeg',
    'assets/bero_img (29).jpeg',
    'assets/bero_img (30).jpeg',
    'assets/bero_img (31).jpeg',
    'assets/bero_img (32).jpeg',
    'assets/bero_img (33).jpeg',
    'assets/bero_img (34).jpeg',
    'assets/bero_img (35).jpeg',
    'assets/bero_img (36).jpeg',
    'assets/bero_img (37).jpeg',
    'assets/bero_img (38).jpeg',
    'assets/bero_img (39).jpeg',
    'assets/bero_img (40).jpeg',
    'assets/bero_img (41).jpeg',
    'assets/bero_img (42).jpeg',
    'assets/bero_img (43).jpeg',
    'assets/bero_img (44).jpeg',
    'assets/bero_img (45).jpeg',
    'assets/bero_img (46).jpeg',
    'assets/bero_img (47).jpeg',
    'assets/bero_img (48).jpeg',
    'assets/bero_img (49).jpeg',
    'assets/bero_img (50).jpeg',
    'assets/bero_img (51).jpeg',
    'assets/bero_img (52).jpeg',
    'assets/bero_img (53).jpeg',
    'assets/bero_img (54).jpeg',
    'assets/bero_img (55).jpeg',
    'assets/bero_img (56).jpeg',
    'assets/bero_img (57).jpeg',
    'assets/bero_img (58).jpeg',
    'assets/bero_img (59).jpeg',
    'assets/bero_img (60).jpeg',
    'assets/bero_img (61).jpeg',
    'assets/bero_img (62).jpeg',
    'assets/bero_img (63).jpeg',
    'assets/bero_img (64).jpeg',
    'assets/bero_img (65).jpeg',
    'assets/bero_img (66).jpeg',
    'assets/bero_img (67).jpeg',
    'assets/bero_img (68).jpeg',    
]


const messages = [
    "Ek het jou lief","Te dua","Ana behibek أحبك","Yes kez sirumem Ես քեզ սիրում եմ","আমিতোমায়ভালোবাসি","Ya tabe kahayu Я люблю цябе","Obicham te Обичам те","Cambodian - Soro lahn nhee ah","Catalan - T’estimo","Tsi ge yu i","Ne mohotatse","我爱你","U kamakutu nu","Ti tengu cara (to female)","Kisakihitin","Mi aime jou","Volim te","Miluji tě","Jeg Elsker Dig","Ik hou van jou","I love you","Mi amas vin","Ma armastan sind","Afgreki’","Eg elski teg","Doset daram","Mahal kita","Mina rakastan sinua","Je t’aime","Ik hald fan dy","Mikvarhar მიყვარხარ","Ich liebe dich","S’agapo Σ 'αγαπώ","હુંતમનેપ્રેમ","Palangga ko ikaw","Aloha Au Ia`oe","אני אוהב אותך","Guina higugma ko ikaw","मैंतुमसेप्यारकरताहूँ","Kuv hlub koj","Nu’ umi unangwa’ta","Szeretlek","Ég elska þig","Palangga ko ikaw","Saya cinta padamu","Negligevapse","Taim i’ ngra leat","Ti amo","私はあなたを愛して","ನಾನುನಿನ್ನಪ್ರೀತಿಸುತ್ತೇನೆ","Kaluguran daka","Nakupenda","Tu magel moga cho","당신을사랑","ຂ້ອຍຮັກເຈົ້າ","Te amo","Es tevi miilu","Bahibak","Tave myliu","Ech hun dech gaer","Te Sakam Те сакам","Aku cinta padamu","Njan Ninne Premikunnu","Inhobbok","Me tula prem karto","Kanbhik","Ana moajaba bik","Ni mits neki","Ayor anosh’ni","Jeg elsker deg"]

function createHTML(image_src){
    return `
        <div class="mySlides fade">
            <img src="${image_src}" class = "sliderImage" style="width:100%">
        </div>`
}

function imageHTML(){

    let htmlBlock =""
    for (const img of imageArray){
        htmlBlock += createHTML(img)
    }

    console.log(htmlBlock)
    document.querySelector('.slideshow_container').innerHTML = htmlBlock
}

imageHTML()


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}
