import GUI from 'lil-gui'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { gsap } from 'gsap'
import { createchristmastree } from './christmastree.js'
// 









/**
 * Base
 */
// Debug
const gui = new GUI({
    width: 400
})

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

//loading screen plane 
const overlayGeometry = new THREE.PlaneGeometry(2,2,1,1)
const overlaymaterial = new THREE.ShaderMaterial({
    transparent: true,
    uniforms:{
      uAlpha: {value:1}
    },
    vertexShader:`
    void main()
    {
       gl_Position =  vec4(position, 1.0);
    }
    `,
    fragmentShader:`
    uniform float uAlpha;
    void main()
    {
      gl_FragColor = vec4(0.0,0.0,0.0,uAlpha);
    }
    `
})
const overlay = new THREE.Mesh(overlayGeometry,overlaymaterial)
scene.add(overlay)

/**
 * Loaders
 */
const loadingbar = document.querySelector('.loading-bar')
//loading manager
const loadingmanager = new THREE.LoadingManager(
    ()=>{
        window.setTimeout(()=>{
            gsap.to(overlaymaterial.uniforms.uAlpha,{duration:3,value:0})
            loadingbar.classList.add('ended')
            loadingbar.style.transform = ''
        }, 500)

        window.setTimeout(()=>{
            sceneready = true
        },4000)
          
    },
    (itemUrl,itemloaded,itemtotal)=>{

        const progressratio = itemloaded/itemtotal
        loadingbar.style.transform = `scaleX(${progressratio})`

    },
)
// Texture loader
const textureLoader = new THREE.TextureLoader(loadingmanager)

// Draco loader
const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath('draco/')

// GLTF loader
const gltfLoader = new GLTFLoader(loadingmanager)
gltfLoader.setDRACOLoader(dracoLoader)

//texture
const bakedtexture = textureLoader.load('baked-1.jpg')
bakedtexture.flipY = false
bakedtexture.colorSpace = THREE.SRGBColorSpace
const bakedmaterial = new THREE.MeshBasicMaterial({map:bakedtexture})
// bakedtexture.flipY = false
// bakedtexture.colorSpace = THREE.SRGBColorSpace

//sceneready
let sceneready = false

//bakedchair
const bakedchairtexture = textureLoader.load('bakedchairlast.jpg')
// console.log(bakedchairtexture)
bakedchairtexture.flipY = false
bakedchairtexture.colorSpace = THREE.SRGBColorSpace

const bakedchairmaterial = new THREE.MeshBasicMaterial({map:bakedchairtexture})

//bakedwalltexture
const bakedwalltexture = textureLoader.load('bakedwall.jpg')
bakedwalltexture.flipY = false
bakedwalltexture.colorSpace = THREE.SRGBColorSpace

const bakedwallmaterial = new THREE.MeshBasicMaterial({map:bakedwalltexture})
bakedwallmaterial.side = THREE.DoubleSide

//bakedtable texture

const bakedtabletexture = textureLoader.load('bakedtablefinal.jpg')
bakedtabletexture.flipY = false
bakedtabletexture.colorSpace = THREE.SRGBColorSpace

const bakedtablematerial = new THREE.MeshBasicMaterial({map:bakedtabletexture})
bakedtablematerial.side = THREE.DoubleSide

//bakedkeyboard texture

const bakedkeyboardtexture = textureLoader.load('keyboard.jpg')
bakedkeyboardtexture.flipY = false
bakedkeyboardtexture.colorSpace = THREE.SRGBColorSpace

const bakedkeyboardmaterial = new THREE.MeshBasicMaterial({map:bakedkeyboardtexture})
bakedkeyboardmaterial.side = THREE.DoubleSide

//baked monitor texture

const bakedmonitortexture = textureLoader.load('monitor.jpg')
bakedmonitortexture.flipY = false
bakedmonitortexture.colorSpace = THREE.SRGBColorSpace

const bakedmonitormaterial = new THREE.MeshBasicMaterial({map:bakedmonitortexture})
bakedmonitormaterial.side = THREE.DoubleSide

//baked clock  texture
const bakedclocktexture = textureLoader.load('clockbaked.jpg')
bakedclocktexture.flipY = false
bakedclocktexture.colorSpace = THREE.SRGBColorSpace

const bakedclockmaterial = new THREE.MeshBasicMaterial({map:bakedclocktexture})
bakedclockmaterial.side = THREE.DoubleSide

//baked mousepad texture
const bakedmousepadtexture = textureLoader.load('mousepad.jpg')
bakedmousepadtexture.flipY = false
bakedmousepadtexture.colorSpace = THREE.SRGBColorSpace

const bakedmousepadmaterial = new THREE.MeshBasicMaterial({map:bakedmousepadtexture})
bakedmousepadmaterial.side = THREE.DoubleSide

//baked mouse texture

const bakedmousetexture = textureLoader.load('mouse.jpg')
bakedmousetexture.flipY = false
bakedmousetexture.colorSpace = THREE.SRGBColorSpace

const bakedmousematerial = new THREE.MeshBasicMaterial({map:bakedmousetexture})
bakedmousematerial.side = THREE.DoubleSide

//baked bed texture

const bakedbedtexture = textureLoader.load('BED.jpg')
bakedbedtexture.flipY = false
bakedbedtexture.colorSpace = THREE.SRGBColorSpace

const bakedbedmaterial = new THREE.MeshBasicMaterial({map:bakedbedtexture})
bakedbedmaterial.side = THREE.DoubleSide

//baked bookshelves texture
const bakedbookshelvestexture = textureLoader.load('bookshelves.jpg')
bakedbookshelvestexture.flipY = false
bakedbookshelvestexture.colorSpace = THREE.SRGBColorSpace

const bakedbookshelvesmaterial = new THREE.MeshBasicMaterial({map:bakedbookshelvestexture})
bakedbookshelvesmaterial.side = THREE.DoubleSide

//bakedroadmodel texture
//clipping plane for this model
//to add some code here later :)

const bakedroadmodeltexture = textureLoader.load('roadmodel.jpg')
bakedroadmodeltexture.flipY = false
bakedroadmodeltexture.colorSpace = THREE.SRGBColorSpace

const bakedroadmodelmaterial= new THREE.MeshBasicMaterial({map:bakedroadmodeltexture})
bakedroadmodelmaterial.side = THREE.DoubleSide

//baked forest model

const bakedforestmodeltexture = textureLoader.load('forest.jpg')
bakedforestmodeltexture.flipY = false
bakedforestmodeltexture.colorSpace = THREE.SRGBColorSpace
const bakedforestmodelmaterial= new THREE.MeshBasicMaterial({map:bakedforestmodeltexture})
bakedforestmodelmaterial.side = THREE.DoubleSide

//baked books model
const bakedbookssecondtexture = textureLoader.load('booksecond.jpg')
bakedbookssecondtexture.flipY = false
bakedbookssecondtexture.colorSpace = THREE.SRGBColorSpace
const bakedbookssecondmaterial= new THREE.MeshBasicMaterial({map:bakedbookssecondtexture})
bakedbookssecondmaterial.side = THREE.DoubleSide

//baked firstshelves books
const bakedbookstexture = textureLoader.load('books.jpg')
bakedbookstexture.flipY = false
bakedbookstexture.colorSpace = THREE.SRGBColorSpace
const bakedbooksmaterial= new THREE.MeshBasicMaterial({map:bakedbookstexture})
bakedbooksmaterial.side = THREE.DoubleSide

//baked skills shelves
const bakedskillstexture = textureLoader.load('skills.jpg')
bakedskillstexture.flipY = false
bakedskillstexture.colorSpace = THREE.SRGBColorSpace
const bakedskillsmaterial= new THREE.MeshBasicMaterial({map:bakedskillstexture})
bakedskillsmaterial.side = THREE.DoubleSide

//material


//model
let roommodel = null;
gltfLoader.load('room.glb',(gltf)=>{
    roommodel = gltf.scene;
    // console.log(gltf)
   gltf.scene.traverse(child=>{
    // child.material = bakedwallmaterial
    // console.log(child)

   })
   roommodel.rotation.y = 4.7;
   roommodel.position.y= -0.27;
   roommodel.position.z=0.45;
   roommodel.position.x=0.58;

 gui.add(roommodel.position,'z').min(-5).max(5).step(0.01)
 gui.add(roommodel.position,'y').min(-5).max(5).step(0.01)
 gui.add(roommodel.position,'x').min(-5).max(5).step(0.01)


//  pointgui.add(points[3].position,'x', -10, 10).step(0.01).name('X Axis');
// pointgui.add(points[3].position,'y', -10, 10).step(0.01).name('Y Axis');
// pointgui.add(points[3].position,'z', -10, 10).step(0.01).name('Z Axis');

// gui.close()




   //groups
 const wallGroup = gltf.scene.children.find(children=>children.name === 'wall')
 const chairGroup = gltf.scene.children.find(child => child.name === 'chair');
 const tableGroup = gltf.scene.children.find(child=>child.name === 'desk');
 const keyboardGroup = gltf.scene.children.find(child=>child.name ==='keyboard')
 const monitorGroup = gltf.scene.children.find(child=>child.name ==='monitor')
 const clockGroup =gltf.scene.children.find(child=>child.name ==='CLOCK')
 const mousepadGroup =gltf.scene.children.find(child=>child.name ==='mousepad')
 const mouseGroup =gltf.scene.children.find(child=>child.name ==='mouse')
 const bedGroup = gltf.scene.children.find(child=>child.name ==='bedframe')
 const bookshelvesGroup = gltf.scene.children.find(child=>child.name ==='bookshelves')
 const roadmodelGroup = gltf.scene.children.find(child=>child.name ==='road')
 const forestmodelGroup = gltf.scene.children.find(child=>child.name ==='water')
 const booksecondGroup = gltf.scene.children.find(child=>child.name ==='Cube004')
 const booksGroup = gltf.scene.children.find(child=>child.name ==='Cube041')
 const skillsGroup = gltf.scene.children.find(child=>child.name=== 'skill')

//in here we need to travers the entire group because the actual mesh is inside the group and we can not use the find function here


 if (wallGroup) {
    // Traverse the wall group to find meshes
    wallGroup.traverse((child) => {
        if (child.isMesh) {
            child.material = bakedwallmaterial;
        }
    });
}
if (chairGroup) {
    // Traverse the chair group to find meshes
    chairGroup.traverse((child) => {
        if (child.isMesh) {
            child.material = bakedchairmaterial;
        }
    });
}
if(tableGroup){
    tableGroup.traverse(child=>{
        child.material = bakedtablematerial
    })
}
if(keyboardGroup){
    keyboardGroup.traverse(child=>{
        child.material = bakedkeyboardmaterial
    })
}
if(monitorGroup){
    monitorGroup.traverse(child=>{
        child.material = bakedmonitormaterial
})}
if(clockGroup){
    clockGroup.traverse(child=>{
        child.material = bakedclockmaterial
})}
if(mousepadGroup){
    mousepadGroup.traverse(child=>{
        child.material = bakedmousepadmaterial
})}
if(mouseGroup){
    mouseGroup.traverse(child=>{
        child.material = bakedmousematerial
})}
if(bedGroup){
    bedGroup.traverse(child=>{
        child.material = bakedbedmaterial
})}
if(bookshelvesGroup){
    bookshelvesGroup.traverse(child=>{
        child.material = bakedbookshelvesmaterial
})}
if(roadmodelGroup){
    roadmodelGroup.traverse(child=>{
        child.material = bakedroadmodelmaterial
    })}
if(forestmodelGroup){
    forestmodelGroup.traverse(child=>{
            child.material = bakedforestmodelmaterial
})}
if(booksecondGroup){
    booksecondGroup.traverse(child=>{
        child.material = bakedbookssecondmaterial
})}
if(booksGroup){
    booksGroup.traverse(child=>{
        child.material = bakedbooksmaterial
})}
if(skillsGroup){
    skillsGroup.traverse(child=>{
        child.material = bakedskillsmaterial
})}


// //matrerial
// chairmesh.material = bakedchairmaterial
    // console.log(gltf)
   scene.add(roommodel)
})
 //points
const raycaster = new THREE.Raycaster()
 const points =[
    {
        position: new THREE.Vector3(1.55, 0.3, -0.6),
        element: document.querySelector('.point-0')
    },
    {
        position: new THREE.Vector3(-0.5337, 1.1611, -0.6641),
        element: document.querySelector('.point-1'),

      
    },
    {
        position: new THREE.Vector3(-0.66, 0.98, 0.38),
        element: document.querySelector('.point-2'),

      
    },
    {
        position: new THREE.Vector3(-0.79, 1.55, 1.29),
        element: document.querySelector('.point-3'),

      
    },
 ]

createchristmastree(scene,gui);

//  //christmas tree model
//  //x mas tree
// const ambietnlight = new THREE.AmbientLight(0xffffff, 1.5)
// scene.add(ambietnlight)
// //material
// const bakedgroundtexture = textureLoader.load('./ground.jpg')
// bakedgroundtexture.flipY = false
// bakedgroundtexture.colorSpace = THREE.SRGBColorSpace
// const bakedgroundmaterial= new THREE.MeshBasicMaterial({map:bakedgroundtexture})
// bakedgroundmaterial.side = THREE.DoubleSide

// const bakedteeetexture = textureLoader.load('./tree.jpg')
// bakedteeetexture.flipY = false
// bakedteeetexture.colorSpace = THREE.SRGBColorSpace
// const bakedteeematerial= new THREE.MeshBasicMaterial({map:bakedteeetexture})
// bakedteeematerial.side = THREE.DoubleSide

// const bakedtreelasttexture = textureLoader.load('./treelast.jpg')
// bakedtreelasttexture.flipY = false
// bakedtreelasttexture.colorSpace = THREE.SRGBColorSpace
// const bakedtreelastmaterial= new THREE.MeshBasicMaterial({map:bakedtreelasttexture})
// bakedtreelastmaterial.side = THREE.DoubleSide

// const bakedtreeroottexture = textureLoader.load('./treeroot.jpg')
// bakedtreeroottexture.flipY = false
// bakedtreeroottexture.colorSpace = THREE.SRGBColorSpace
// const bakedtreerootmaterial= new THREE.MeshBasicMaterial({map:bakedtreeroottexture})
// bakedtreerootmaterial.side = THREE.DoubleSide

// const bakedtreefourtexture = textureLoader.load('./treefour.jpg')
// bakedtreefourtexture.flipY = false
// bakedtreefourtexture.colorSpace = THREE.SRGBColorSpace
// const bakedtreefourmaterial= new THREE.MeshBasicMaterial({map:bakedtreefourtexture})
// bakedtreefourmaterial.side = THREE.DoubleSide

// const bakedtreethreetexture = textureLoader.load('./treethree.jpg')
// bakedtreethreetexture.flipY = false
// bakedtreethreetexture.colorSpace = THREE.SRGBColorSpace
// const bakedtreethreematerial= new THREE.MeshBasicMaterial({map:bakedtreethreetexture})
// bakedtreethreematerial.side = THREE.DoubleSide

// const bakedtreetwotexture = textureLoader.load('./treetwo.jpg')
// bakedtreetwotexture.flipY = false
// bakedtreetwotexture.colorSpace = THREE.SRGBColorSpace
// const bakedtreetwomaterial= new THREE.MeshBasicMaterial({map:bakedtreetwotexture})
// bakedtreetwomaterial.side = THREE.DoubleSide

// const bakedtreefirsttexture = textureLoader.load('./treefirst.jpg')
// bakedtreefirsttexture.flipY = false
// bakedtreefirsttexture.colorSpace = THREE.SRGBColorSpace
// const bakedtreefirstmaterial= new THREE.MeshBasicMaterial({map:bakedtreefirsttexture})
// bakedtreefirstmaterial.side = THREE.DoubleSide

// const bakedstartexture = textureLoader.load('./star.jpg')
// bakedstartexture.flipY = false
// bakedstartexture.colorSpace = THREE.SRGBColorSpace
// const bakedstarmaterial= new THREE.MeshBasicMaterial({map:bakedstartexture})
// bakedstarmaterial.side = THREE.DoubleSide

// const bakedsnowtexture = textureLoader.load('./snow.jpg')
// bakedsnowtexture.flipY = false
// bakedsnowtexture.colorSpace = THREE.SRGBColorSpace
// const bakedsnowematerial = new THREE.MeshBasicMaterial({map:bakedsnowtexture})
// bakedsnowematerial.side = THREE.DoubleSide

// //model
// let treemodel = null;

// gltfLoader.load('./xmastree.glb',(gltf)=>{


// gltf.scene.scale.set(0.03,0.03,0.03)
//     gltf.scene.position.set(-0.53,0.39,1.02)
// gui.add(gltf.scene.position,'x', -10, 10).step(0.01).name('X Axis');
// gui.add(gltf.scene.position,'y', -10, 10).step(0.01).name('y Axis');
// gui.add(gltf.scene.position,'z', -10, 10).step(0.01).name('z Axis');
// gui.add(gltf.scene.rotation,'y', -2.5, 2.5).step(0.01).name('y rotate');

// gui.close();

//    treemodel = gltf.scene;
//    console.log(gltf)
//        // Iterate through the model's children to find meshes
//        treemodel.traverse((child) => {
//           if(child.isMesh){
//             child.material.wireframe = true
//           }
//     });
//     const wireframeFolder = gui.addFolder('Wireframe');
//     let wireframeEnabled = true;  // Initial state is enabled

//     wireframeFolder.add({ wireframe: wireframeEnabled }, 'wireframe').onChange((value) => {
//         treemodel.traverse((child) => {
//             if (child.isMesh) {
//                 child.material.wireframe = value; // Toggle wireframe on/off
//             }
//         });
//     }).name('Toggle Wireframe');

// const ground  = gltf.scene.children.find(children=>children.name === 'ground')
// const tree  = gltf.scene.children.find(children=>children.name === 'Cylinder001')
// const treelast  = gltf.scene.children.find(children=>children.name === 'Cylinder006')
// const treeroot  = gltf.scene.children.find(children=>children.name === 'Cylinder')
// const treefour  = gltf.scene.children.find(children=>children.name === 'Cylinder002')
// const treethree  = gltf.scene.children.find(children=>children.name === 'Cylinder003')
// const treetwo  = gltf.scene.children.find(children=>children.name === 'Cylinder004')
// const treefirst  = gltf.scene.children.find(children=>children.name === 'Cylinder005')
// const star  = gltf.scene.children.find(children=>children.name === 'Circle005')
// const snow =gltf.scene.children.find(children=>children.name === 'ice-floor')
// // const blueballs =gltf.scene.children.find(children=>children.name === 'Roundcube064')
// // const goldballs =gltf.scene.children.find(children=>children.name === 'Roundcube089')
// // const snow  = gltf.scene.children.find(children=>children.name === 'ice-floor')

// if(ground ){
//     ground.traverse(child=>{
//         child.material = bakedgroundmaterial
// })}
// // if(snow ){
// //     snow.traverse(child=>{
// //         child.material = snowmaterial
// // })}
// if(tree){
//     tree.traverse(child=>{
//         child.material = bakedteeematerial
// })}
// if(treelast){
//     treelast.traverse(child=>{
//         child.material = bakedtreelastmaterial
// })}
// if(treeroot){
//     treeroot.traverse(child=>{
//         child.material = bakedtreerootmaterial
// })}
// if(treefour){
//     treefour.traverse(child=>{
//         child.material = bakedtreefourmaterial
// })}
// if(treethree){
//     treethree.traverse(child=>{
//         child.material = bakedtreethreematerial
// })}
// if(treetwo){
//     treetwo.traverse(child=>{
//         child.material = bakedtreetwomaterial
// })}
// if(treefirst){
//     treefirst.traverse(child=>{
//         child.material = bakedtreefirstmaterial
// })}
// if(star){
//     star.traverse(child=>{
//         child.material = bakedstarmaterial
// })}
// if(snow){
//     snow.traverse(child=>{
//         child.material = bakedsnowematerial
// })}
// // if(blueballs){
// //     blueballs.traverse(child=>{
// //         child.material = blueballmaterial
// // })}
// // if(goldballs){
// //     goldballs.traverse(child=>{
// //         child.material = goldballmaterial
// // })}
//    scene.add(treemodel)
   
// })

//snowflakes
const snowflaketexture = textureLoader.load('./snowflake.png')

const parameteers={xOffset: 5, // Offset in the X axis
    yOffset: 5, // Offset in the Y axis
    zOffset: 5 }
parameteers.count = 100
parameteers.size =0.3
parameteers.spread = 3
const snowflakes = [];

const generatesnow = (xOffset, yOffset, zOffset) => {
    const snowgeometry = new THREE.BufferGeometry();
    const position = new Float32Array(parameteers.count * 3);

    for (let i = 0; i < parameteers.count; i++) {
        const i3 = i * 3;
        position[i3] = (Math.random() - 0.5) * parameteers.spread + xOffset; // X position
        position[i3 + 1] = Math.random() * 5 + yOffset; // Spawn above ground
        position[i3 + 2] = (Math.random() - 0.5) * parameteers.spread + zOffset; // Z position
    }

    snowgeometry.setAttribute('position', new THREE.BufferAttribute(position, 3));

    // Material
    const snowmaterial = new THREE.PointsMaterial({
        size: parameteers.size,
        sizeAttenuation: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        alphaMap: snowflaketexture,
        transparent: true,
    });

    // Snowflakes (Points)
    const snowpoints = new THREE.Points(snowgeometry, snowmaterial);
    scene.add(snowpoints);
    snowflakes.push(snowpoints);
};

generatesnow(5,5,5);

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 2000)
camera.position.x = 4
camera.position.y = 2
camera.position.z = 4
camera.updateProjectionMatrix();
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.localClippingEnabled = true;


// const snowUpdate = (geometry, deltatime) => {
//     const positions = geometry.attributes.position.array;

//     for (let i = 0; i < positions.length; i += 3) {
//         positions[i + 1] -= 0.001 * deltatime; // Move the Y-coordinate downwards (fall speed)

        
//         if (positions[i + 1] < -2.5) {
//             positions[i + 1] = Math.random() * 5 + 2;
//             positions[i] = (Math.random() - 0.5) * parameteers.spread - parameteers.xOffset; // Random X position
//             positions[i + 2] = (Math.random() - 0.5) * parameteers.spread - parameteers.zOffset; // Random Z position
//         }
//     }

//     geometry.attributes.position.needsUpdate = true; // Inform Three.js to update the positions
// };

/**
 * Animate
 */
const clock = new THREE.Clock()
let time = Date.now()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()
    const currentime = Date.now()
    const deltatime = currentime - time
    time = currentime
    // Update controls
    controls.update()
    if (sceneready){
        for (const point of points){
            const screenposition = point.position.clone()
            screenposition.project(camera)
  
            raycaster.setFromCamera(screenposition, camera)
            const intersect = raycaster.intersectObjects(scene.children, true)
  
          //   console.log(intersect)
  
            if(intersect.length ===0)
            {
              point.element.classList.add('visible')
            }else{
              const intersectiondistance = intersect[0].distance
              const pointdisatance = point.position.distanceTo(camera.position)
  
              if(intersectiondistance < pointdisatance){
                  point.element.classList.remove('visible')
              }else{
                  point.element.classList.add('visible')
              }
            }
  
            const translateX = screenposition.x * sizes.width *0.5
            const translateY = -screenposition.y * sizes.height *0.5
            point.element.style.transform = `translateX(${translateX}px) translateY(${translateY}px)` 
            
      }

    }
    // snowflakes.forEach(snowflake => {
    //     snowUpdate(snowflake.geometry, deltatime);
    // });
    //go throught each points :)
    // for (const point of points){
    //       const screenposition = point.position.clone()
    //       screenposition.project(camera)

    //       raycaster.setFromCamera(screenposition, camera)
    //       const intersect = raycaster.intersectObjects(scene.children, true)

    //     //   console.log(intersect)

    //       if(intersect.length ===0)
    //       {
    //         point.element.classList.add('visible')
    //       }else{
    //         const intersectiondistance = intersect[0].distance
    //         const pointdisatance = point.position.distanceTo(camera.position)

    //         if(intersectiondistance < pointdisatance){
    //             point.element.classList.remove('visible')
    //         }else{
    //             point.element.classList.add('visible')
    //         }
    //       }

    //       const translateX = screenposition.x * sizes.width *0.5
    //       const translateY = -screenposition.y * sizes.height *0.5
    //       point.element.style.transform = `translateX(${translateX}px) translateY(${translateY}px)` 
          
    // }

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()