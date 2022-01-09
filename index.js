// Create the playable character
const pc = newPlayableCharacter(100, 110)

// Create a non-playable character
const npc = newNonPlayableCharacter(50, 300)

// have the NPC start walking east immediately

var arrayController = [
    {Dircection: "N",MiliSeconds: 1400}
    ,
    {Dircection: "E",MiliSeconds: 1200}
    ,
    {Dircection: "S",MiliSeconds: 300}
    ,
    {Dircection: "E",MiliSeconds: 1500}
    ,
    {Dircection: "S",MiliSeconds: 1500}
    ,
    {Dircection: "W",MiliSeconds: 2700}
    ,
    {Dircection: "N",MiliSeconds: 400}
];

moveNPC(arrayController)

// Create the inventory
const inventory = newInventory()
move(inventory).to(0, 0)

// Create everything else
move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)


async function moveNPC(arrayController){
    
    for(let i = 0;i<arrayController.length;i++)
    {
        let controller = arrayController[i];
        switch(controller.Dircection)
        {
            case "N":{
                await npc.walkNorth(controller.MiliSeconds)
                console.log(controller.Dircection+":"+controller.MiliSeconds)
                break
            }
            case "E":{
                await npc.walkEast(controller.MiliSeconds)
                console.log(controller.Dircection+":"+controller.MiliSeconds)
                break
            }
            case "W":{
                await npc.walkWest(controller.MiliSeconds)
                console.log(controller.Dircection+":"+controller.MiliSeconds)
                break
            }
            case "S":{
                await npc.walkSouth(controller.MiliSeconds)
                console.log(controller.Dircection+":"+controller.MiliSeconds)
                break
            }
        }     

    }
    
}
