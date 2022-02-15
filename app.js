let warriors = [
    {
      name:"Bob",
      damage:2,
      health:10,
      warrior:true
    },
    {
      name:"Jerry",
      damage:1,
      health:12,
      warrior:true
    },
    {
      name:"Mavis",
      damage:2,
      health:10,
      warrior:true
    },
    {
      name:"Morty",
      damage:4,
      health:10,
      warrior:true
    },
    {
      name:"Shorty",
      damage:10,
      health:3,
      warrior:false
    },
    {
      name:"Porty",
      damage:1,
      health:14,
      warrior:true
    },{
      name:"Perry",
      damage:2,
      health:9,
      warrior:true
    },
    {
      name:"Larry",
      damage:2,
      health:17,
      warrior:false
    }
  ]

for(let i=0; i<warriors.length; i++){
  
  if (warriors[i].health >= 10 && warriors[i].damage >= 2 && warriors[i].warrior){
    
    //make and add info to elements
    let ele = document.createElement("div");
    let name_ele = document.createElement('h1');
    let damage_ele = document.createElement('h2');
    let health_ele = document.createElement('h2');
    name_ele.innerHTML=warriors[i].name;
    damage_ele.innerHTML=warriors[i].damage;
    health_ele.innerHTML=warriors[i].health;
    //change color
    if (warriors[i].name.includes('a')){
      ele.style.color = 'red';
    }    

    //add elements to webpage
    ele.appendChild(name_ele);
    ele.appendChild(damage_ele);
    ele.appendChild(health_ele);
    document.body.appendChild(ele);

  }
  
}

