import GUI from 'lil-gui'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { gsap } from 'gsap'


export function createchristmastree(scene,gui){
    // const gui = new GUI()

    const textureLoader = new THREE.TextureLoader()

    const ambietnlight = new THREE.AmbientLight(0xffffff, 1.5)
    scene.add(ambietnlight)
    //material
    const bakedgroundtexture = textureLoader.load('./ground.jpg')
    bakedgroundtexture.flipY = false
    bakedgroundtexture.colorSpace = THREE.SRGBColorSpace
    const bakedgroundmaterial= new THREE.MeshBasicMaterial({map:bakedgroundtexture})
    bakedgroundmaterial.side = THREE.DoubleSide
    
    const bakedteeetexture = textureLoader.load('./tree.jpg')
    bakedteeetexture.flipY = false
    bakedteeetexture.colorSpace = THREE.SRGBColorSpace
    const bakedteeematerial= new THREE.MeshBasicMaterial({map:bakedteeetexture})
    bakedteeematerial.side = THREE.DoubleSide
    
    const bakedtreelasttexture = textureLoader.load('./treelast.jpg')
    bakedtreelasttexture.flipY = false
    bakedtreelasttexture.colorSpace = THREE.SRGBColorSpace
    const bakedtreelastmaterial= new THREE.MeshBasicMaterial({map:bakedtreelasttexture})
    bakedtreelastmaterial.side = THREE.DoubleSide
    
    const bakedtreeroottexture = textureLoader.load('./treeroot.jpg')
    bakedtreeroottexture.flipY = false
    bakedtreeroottexture.colorSpace = THREE.SRGBColorSpace
    const bakedtreerootmaterial= new THREE.MeshBasicMaterial({map:bakedtreeroottexture})
    bakedtreerootmaterial.side = THREE.DoubleSide
    
    const bakedtreefourtexture = textureLoader.load('./treefour.jpg')
    bakedtreefourtexture.flipY = false
    bakedtreefourtexture.colorSpace = THREE.SRGBColorSpace
    const bakedtreefourmaterial= new THREE.MeshBasicMaterial({map:bakedtreefourtexture})
    bakedtreefourmaterial.side = THREE.DoubleSide
    
    const bakedtreethreetexture = textureLoader.load('./treethree.jpg')
    bakedtreethreetexture.flipY = false
    bakedtreethreetexture.colorSpace = THREE.SRGBColorSpace
    const bakedtreethreematerial= new THREE.MeshBasicMaterial({map:bakedtreethreetexture})
    bakedtreethreematerial.side = THREE.DoubleSide
    
    const bakedtreetwotexture = textureLoader.load('./treetwo.jpg')
    bakedtreetwotexture.flipY = false
    bakedtreetwotexture.colorSpace = THREE.SRGBColorSpace
    const bakedtreetwomaterial= new THREE.MeshBasicMaterial({map:bakedtreetwotexture})
    bakedtreetwomaterial.side = THREE.DoubleSide
    
    const bakedtreefirsttexture = textureLoader.load('./treefirst.jpg')
    bakedtreefirsttexture.flipY = false
    bakedtreefirsttexture.colorSpace = THREE.SRGBColorSpace
    const bakedtreefirstmaterial= new THREE.MeshBasicMaterial({map:bakedtreefirsttexture})
    bakedtreefirstmaterial.side = THREE.DoubleSide
    
    const bakedstartexture = textureLoader.load('./star.jpg')
    bakedstartexture.flipY = false
    bakedstartexture.colorSpace = THREE.SRGBColorSpace
    const bakedstarmaterial= new THREE.MeshBasicMaterial({map:bakedstartexture})
    bakedstarmaterial.side = THREE.DoubleSide
    
    const bakedsnowtexture = textureLoader.load('./snow.jpg')
    bakedsnowtexture.flipY = false
    bakedsnowtexture.colorSpace = THREE.SRGBColorSpace
    const bakedsnowematerial = new THREE.MeshBasicMaterial({map:bakedsnowtexture})
    bakedsnowematerial.side = THREE.DoubleSide
    
    const gltfLoader = new GLTFLoader()
    //model
    let treemodel = null;
    
    gltfLoader.load('./xmastree.glb',(gltf)=>{
    
    
    gltf.scene.scale.set(0.03,0.03,0.03)
        gltf.scene.position.set(-0.53,0.39,1.02)
    // gui.add(gltf.scene.position,'x', -10, 10).step(0.01).name('X Axis');
    // gui.add(gltf.scene.position,'y', -10, 10).step(0.01).name('y Axis');
    // gui.add(gltf.scene.position,'z', -10, 10).step(0.01).name('z Axis');
    // gui.add(gltf.scene.rotation,'y', -2.5, 2.5).step(0.01).name('y rotate');
    
    // gui.close();
    
       treemodel = gltf.scene;
       console.log(gltf)
           // Iterate through the model's children to find meshes
           treemodel.traverse((child) => {
              if(child.isMesh){
                child.material.wireframe = true
              }
        });
        const wireframeFolder = gui.addFolder('Wireframe');
        let wireframeEnabled = true;  // Initial state is enabled
    
        wireframeFolder.add({ wireframe: wireframeEnabled }, 'wireframe').onChange((value) => {
            treemodel.traverse((child) => {
                if (child.isMesh) {
                    child.material.wireframe = value; // Toggle wireframe on/off
                }
            });
        }).name('Toggle Wireframe for x-mas tree');
        wireframeFolder.close();
        gui.close();
    
    const ground  = gltf.scene.children.find(children=>children.name === 'ground')
    const tree  = gltf.scene.children.find(children=>children.name === 'Cylinder001')
    const treelast  = gltf.scene.children.find(children=>children.name === 'Cylinder006')
    const treeroot  = gltf.scene.children.find(children=>children.name === 'Cylinder')
    const treefour  = gltf.scene.children.find(children=>children.name === 'Cylinder002')
    const treethree  = gltf.scene.children.find(children=>children.name === 'Cylinder003')
    const treetwo  = gltf.scene.children.find(children=>children.name === 'Cylinder004')
    const treefirst  = gltf.scene.children.find(children=>children.name === 'Cylinder005')
    const star  = gltf.scene.children.find(children=>children.name === 'Circle005')
    const snow =gltf.scene.children.find(children=>children.name === 'ice-floor')
    // const blueballs =gltf.scene.children.find(children=>children.name === 'Roundcube064')
    // const goldballs =gltf.scene.children.find(children=>children.name === 'Roundcube089')
    // const snow  = gltf.scene.children.find(children=>children.name === 'ice-floor')
    
    if(ground ){
        ground.traverse(child=>{
            child.material = bakedgroundmaterial
    })}
    // if(snow ){
    //     snow.traverse(child=>{
    //         child.material = snowmaterial
    // })}
    if(tree){
        tree.traverse(child=>{
            child.material = bakedteeematerial
    })}
    if(treelast){
        treelast.traverse(child=>{
            child.material = bakedtreelastmaterial
    })}
    if(treeroot){
        treeroot.traverse(child=>{
            child.material = bakedtreerootmaterial
    })}
    if(treefour){
        treefour.traverse(child=>{
            child.material = bakedtreefourmaterial
    })}
    if(treethree){
        treethree.traverse(child=>{
            child.material = bakedtreethreematerial
    })}
    if(treetwo){
        treetwo.traverse(child=>{
            child.material = bakedtreetwomaterial
    })}
    if(treefirst){
        treefirst.traverse(child=>{
            child.material = bakedtreefirstmaterial
    })}
    if(star){
        star.traverse(child=>{
            child.material = bakedstarmaterial
    })}
    if(snow){
        snow.traverse(child=>{
            child.material = bakedsnowematerial
    })}
    // if(blueballs){
    //     blueballs.traverse(child=>{
    //         child.material = blueballmaterial
    // })}
    // if(goldballs){
    //     goldballs.traverse(child=>{
    //         child.material = goldballmaterial
    // })}
       scene.add(treemodel)
       
    })
}