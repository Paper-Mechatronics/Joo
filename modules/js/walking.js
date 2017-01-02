// module indicator
walkingModule = true;
var openCloseMod = false;
var rectBase = 600
var c = 400
var originalWidth1
var originalWidth2

/////////////////////////GEAR SIZES//////////////////////////////////////////////
function smallGear(){
  // delete ui sprite body
  deleteConstraint(compositeArray[0].bodies[0], compositeArray[1].bodies[0])
  // reset angle to 0
  Body.setAngle(compositeArray[1].bodies[0], 0)
  // set new radius
  radius = 48;
  // store new radius value
  compositeArray[1].radius = radius
  // change number of steps for drawing gear
  steps = (0.25 * radius)*2;
  toothWidthDegree = 4;
  toothWidth = (toothWidthDegree/conversionFactor);
  // draw and add new body
  changeBodyCircle(1);
  // set position of new body
  Body.setPosition(compositeArray[0].bodies[0], {x:compositeArray[0].constraints[0].pointA.x, y:compositeArray[0].constraints[0].pointA.y})
  Body.setPosition(compositeArray[1].bodies[0], {x:(window.innerWidth)*(0.75*0.5), y:compositeArray[1].constraints[0].pointA.y})
  // create new linkage constraint
  createConstraint2(compositeArray[1].bodies[0], compositeArray[0].bodies[0])
}
// see smallGear()
function mediumGear(){
  deleteConstraint(compositeArray[0].bodies[0], compositeArray[1].bodies[0])
  Body.setAngle(compositeArray[1].bodies[0], 0)
  radius = 64;
  compositeArray[1].radius = radius
  steps = (0.25 * radius)*2;
  toothWidthDegree = 3;
  toothWidth = (toothWidthDegree/conversionFactor);
  changeBodyCircle(1);
  Body.setPosition(compositeArray[0].bodies[0], {x:compositeArray[0].constraints[0].pointA.x, y:compositeArray[0].constraints[0].pointA.y})
  Body.setPosition(compositeArray[1].bodies[0], {x:(window.innerWidth)*(0.75*0.5), y:compositeArray[1].constraints[0].pointA.y})
  createConstraint2(compositeArray[1].bodies[0], compositeArray[0].bodies[0])
}
// see smallGear()
function largeGear(){
  deleteConstraint(compositeArray[0].bodies[0], compositeArray[1].bodies[0])
  Body.setAngle(compositeArray[1].bodies[0], 0)
  radius = 80;
  compositeArray[1].radius = radius;
  steps = (0.25 * radius)*2;
  toothWidthDegree = 2;
  toothWidth = (toothWidthDegree/conversionFactor);
  changeBodyCircle(1);
  Body.setPosition(compositeArray[0].bodies[0], {x:compositeArray[0].constraints[0].pointA.x, y:compositeArray[0].constraints[0].pointA.y})
  Body.setPosition(compositeArray[1].bodies[0], {x:(window.innerWidth)*(0.75*0.5), y:compositeArray[1].constraints[0].pointA.y})
  createConstraint2(compositeArray[1].bodies[0], compositeArray[0].bodies[0])
}
////////////////////////////////////////////////////////////////////////////////

///////////////// Animation /////////////////////////////////////


// called every frame after physics is applied
// same as above
Events.on(engine, 'afterUpdate', function(event) {
})

////////////////////// RUN /////////////////////////////

// run the engine
radius = 48
addTriComposite((window.innerWidth)*(0.75*0.35) ,(window.innerHeight)*(0.4), 100, 100)
compositeArray[0].shape = "triTL"
addGearComposite((window.innerWidth)*(0.75*0.5) ,(window.innerHeight)*(0.5))
changeBodyCircle(1)
addTriComposite((window.innerWidth)*(0.75*0.35) ,(window.innerHeight)*(0.6), 100, -100)
compositeArray[2].shape = "triBL"
compositeArray[2].constraints[0].stiffness = 0.01
addTriComposite((window.innerWidth)*(0.75*0.65) ,(window.innerHeight)*(0.4), -100, 100)
compositeArray[3].shape = "triTR"
addTriComposite((window.innerWidth)*(0.75*0.65) ,(window.innerHeight)*(0.6), -100, -100)
compositeArray[4].shape = "triBR"
compositeArray[4].constraints[0].stiffness = 0.01
compositeArray[1].isMotor = true;
createTriConstraintFakeCorners(compositeArray[1].bodies[0], compositeArray[0].bodies[0])
createTriConstraintFakeCorners(compositeArray[1].bodies[0], compositeArray[2].bodies[0])
createTriConstraintFakeCorners(compositeArray[1].bodies[0], compositeArray[3].bodies[0])
createTriConstraintFakeCorners(compositeArray[1].bodies[0], compositeArray[4].bodies[0])
jointComposites[jointComposites.length - 3].constraints[0].stiffness = 1
jointComposites[jointComposites.length - 3].constraints[0].length = 175
jointComposites[jointComposites.length - 1].constraints[0].stiffness = 1
jointComposites[jointComposites.length - 1].constraints[0].length = 175
createTriConstraintEdges(compositeArray[0].bodies[0], compositeArray[2].bodies[0])
createTriConstraintEdges(compositeArray[3].bodies[0], compositeArray[4].bodies[0])
jointComposites[jointComposites.length - 1].constraints[0].stiffness = 1
jointComposites[jointComposites.length - 2].constraints[0].stiffness = 1
jointComposites[jointComposites.length - 3].constraints[0].stiffness = 1
Engine.run(engine);
Render.run(render);

