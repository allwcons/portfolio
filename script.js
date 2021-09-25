let projects = document.querySelector(".projects")

function handleChangeView(elt) {
  let childrens = Array.from(elt.parentElement.children)
  childrens.forEach(child => {
    child.classList.remove("active")
  })
  elt.classList.add("active")
  projects.classList.remove("list")
  projects.classList.remove("block")
  projects.classList.add(elt.dataset.role)
}



function findPresentTheme(){
  return getComputedStyle(document.body).getPropertyValue("--theme-bg") == " #F3F6FD" ? "light" : "dark"
}
console.log(findPresentTheme())
function handleThemeChange() {
  let color = getComputedStyle(document.body).getPropertyValue("--theme-bg")
  if (color == ' #F3F6FD') {
    document.body.classList.add("dark")
    document.body.classList.remove("light")
  } else if(color == ' #3E4557'){
    document.body.classList.remove("dark")
    document.body.classList.add("light")
    
  }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
let projectsList = [
  {
    link_view:"https://acsspage.evod.repl.co/",
    title:"Acss",
    description:"css engine to easily use calculation,css variable and if else on event",
    languages:"Html,Css,Js"
  },
  {
    link_code:"https://github.com/allwcons/math-interpeter",
    title:"allwcons Math interpeter",
    description:"support all kind of basic operator and some more",
    languages:"Python"
  },
  	{
		link_code:"https://github.com/EV-OD/3d",
		title:"3d cube component",
		description:"custom html tag for 3d cube with different properties",
		languages:"html,css,js"
	},
	{
		link_view:"https://editor.p5js.org/Rabin/full/xL0KjYsQX",
		title:"Bouncing ball",
		description:"Bouncing ball with collision with wall and wind force in click effect",
		languages:"html,css,js,p5.js"
	},
	{
		link_code:"https://github.com/pythons65/Binary-tree",
		title:"Binary tree",
		description:"representation of binary tree in canvas",
		languages:"html,css,js,p5.js"
	},
	{
		link_code:"https://github.com/allwcons/consoleGUI2",
		title:"Console Gui",
		description:"GUI based command line interface",
		languages:"python,wcons"
	},
	{
		link_view:"https://reflection-of-light.programmatoraca.repl.co/",
		title:"Convex lens simulation",
		description:"simulation of convex lens by passing ray of light",
		languages:"html,css,js,p5.js"
	},
	{
		link_view:"https://pythons65.github.io/css-tester",
		title:"css css-tester",
		description:"write your html and css code and see result at instant",
		languages:"html,css,js"
	},
	{
		link_code:"https://github.com/pythons65/ide2.0c",
		title:"ide with html syntax highlight",
		description:"ide with syntax highlight features",
		languages:"html,css,js"
	},
	{
		link_view:"https://editor.p5js.org/Rabin/full/UqrbllOXs",
		title:"snake game",
		description:"snake game with highscore features",
		languages:"html,css,js,p5.js"		
	},
	{
		link_view:"https://editor.p5js.org/EV-OD/full/cyLAsrLyC",
		title:"Perceptron",
		description:"line learns to classify the points",
		languages:"html,css,js,p5.js"		
	},
	{
		link_view:"https://editor.p5js.org/EV-OD/full/V2W8V59tY",
		title:"Prism algorithm",
		description:"algorithm to find the best path,visually",
		languages:"html,css,js,p5.js"		
	},
	{
		link_code:"https://github.com/EV-OD/qr-code-scanner",
		title:"Qr code scanner",
		description:"scans qr code",
		languages:"html,css,js"		
	},
	{
		link_code:"https://github.com/pythons65/sketch",
		title:"Sketchjs library",
		description:"p5.js experience in DOM element",
		languages:"html,css,js"		
	},
	{
		link_code:"https://github.com/EV-OD/SPA",
		title:"Single Page application",
		description:"SPA without any library or framework",
		languages:"html,css,js,nodejs"		
	},
	{
		link_code:"https://editor.p5js.org/EV-OD/collections/ZXT3CT5mY",
		title:"collision detection algorithms",
		description:"collections of algorithms to detect the collision",
		languages:"html,css,js,p5.js"		
	},
	{
		link_code:"https://editor.p5js.org/EV-OD/collections/WN3YqCZ1j",
		title:"binary tree algorithms",
		description:"collections of binary tree algorithms",
		languages:"html,css,js,p5.js"		
	},
	{
		link_code:"https://editor.p5js.org/EV-OD/collections/bdwpGOo-b",
		title:"sorting algorithms",
		description:"collections of sorting algorithms visually",
		languages:"html,css,js,p5.js"		
	}
  ]
let count = 1
function getProjectTemplate(obj) {
  if (obj.link_code){
    obj.link =  obj.link_code
    obj.svg = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.854 4.146a.5.5 0 010 .708L1.707 8l3.147 3.146a.5.5 0 01-.708.708l-3.5-3.5a.5.5 0 010-.708l3.5-3.5a.5.5 0 01.708 0zm6.292 0a.5.5 0 000 .708L14.293 8l-3.147 3.146a.5.5 0 00.708.708l3.5-3.5a.5.5 0 000-.708l-3.5-3.5a.5.5 0 00-.708 0zm-.999-3.124a.5.5 0 01.33.625l-4 13a.5.5 0 01-.955-.294l4-13a.5.5 0 01.625-.33z" clip-rule="evenodd"></path></svg>`
  }else if(obj.link_view){
    obj.link = obj.link_view
    obj.svg = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M9.5 9.5H2.5V2.5H6V1.5H2.5C2.23478 1.5 1.98043 1.60536 1.79289 1.79289C1.60536 1.98043 1.5 2.23478 1.5 2.5V9.5C1.5 9.76522 1.60536 10.0196 1.79289 10.2071C1.98043 10.3946 2.23478 10.5 2.5 10.5H9.5C10.05 10.5 10.5 10.05 10.5 9.5V6H9.5V9.5ZM7 1.5V2.5H8.795L3.88 7.415L4.585 8.12L9.5 3.205V5H10.5V1.5H7Z" fill="#464646"/>
              </svg>`
  }
  return`<div class="project c${++count % 5}">
                <div class="detail flex-col">
          <h2><a href="${obj.link}"  target="_blank">${capitalizeFirstLetter(obj.title)} 
            ${obj.svg}</a></h2>
          <span>${obj.description}</span>
          <div class="language">
            ${obj.languages}
          </div>
        </div>
      </div>`
}
let count_project = 1
let number_project = document.querySelectorAll(".item .number")[1]
function addProject(obj){
  projects.innerHTML = projects.innerHTML + getProjectTemplate(obj)
  count_project++;
}

window.onload = ()=>{
  projectsList.forEach(project=>{
    addProject(project)
    number_project.innerHTML = count_project
  })
  let theme = findPresentTheme()
  if (theme == "dark"){
  matchMedia("(prefers-color-scheme: light)").onchange = (e) =>{
    handleThemeChange()
  }
  }else{
      matchMedia("(prefers-color-scheme: dark)").onchange = (e) =>{
    handleThemeChange()
  }
  }
}


