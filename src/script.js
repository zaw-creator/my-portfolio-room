import GUI from 'lil-gui'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'


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

/**
 * Loaders
 */
// Texture loader
const textureLoader = new THREE.TextureLoader()

// Draco loader
const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath('draco/')

// GLTF loader
const gltfLoader = new GLTFLoader()
gltfLoader.setDRACOLoader(dracoLoader)

//texture
const bakedtexture = textureLoader.load('baked-1.jpg')
bakedtexture.flipY = false
bakedtexture.colorSpace = THREE.SRGBColorSpace
const bakedmaterial = new THREE.MeshBasicMaterial({map:bakedtexture})
// bakedtexture.flipY = false
// bakedtexture.colorSpace = THREE.SRGBColorSpace

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

//material


//model

gltfLoader.load('room.glb',(gltf)=>{
    console.log(gltf)
   gltf.scene.traverse(child=>{
    // child.material = bakedwallmaterial
    console.log(child)

   })

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

// //matrerial
// chairmesh.material = bakedchairmaterial
    // console.log(gltf)
   scene.add(gltf.scene)
})

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

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()