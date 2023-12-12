import * as THREE from "three";
import { Experience } from "Experience";

export class Environment {
  private readonly experience = Experience.getInstance();
  private readonly debug = this.experience.debug;
  private whiteLight!: THREE.DirectionalLight;
  private yellowLight!: THREE.DirectionalLight;
  private redLight!: THREE.DirectionalLight;
  private ambientLight!: THREE.AmbientLight;

  constructor() {
    this.setAmbientLight();
    this.setLights();
    this.debugSetup();
  }

  setLights() {
    // White Light
    this.whiteLight = new THREE.DirectionalLight(0xffffff, 3);
    this.whiteLight.position.set(5, 5, -5);
    
    // Yellow Light
    this.yellowLight = new THREE.DirectionalLight(0xFFD8BD, 3.4);
    
    // Red Light
    this.redLight = new THREE.DirectionalLight(0xFF81A9, 3.8);
    this.yellowLight.position.set(5, -2, 2);
    this.redLight.position.set(-2.1, 5, 3.6);

    this.experience.add(this.whiteLight);
    this.experience.add(this.yellowLight);
    this.experience.add(this.redLight);
  }

  setAmbientLight() {
    this.ambientLight = new THREE.AmbientLight(0xffffff, 0);
    this.experience.add(this.ambientLight);
  }

  debugSetup() {
    if (!this.debug.active) return;

    const debugFolder = this.debug.gui?.addFolder("Environment");
    const whiteLightFolder = debugFolder?.addFolder("White Light");
    const yellowLightFolder = debugFolder?.addFolder("Yellow Light");
    const redLightFolder = debugFolder?.addFolder("Red Light");

    // White Light
    whiteLightFolder?.add(this.whiteLight, "intensity", 0, 10, 0.1).name("White Light Intensity");
    whiteLightFolder?.add(this.whiteLight.position, "x", -5, 5, 0.1).name("White Light posX");
    whiteLightFolder?.add(this.whiteLight.position, "y", -5, 5, 0.1).name("White Light posY");
    whiteLightFolder?.add(this.whiteLight.position, "z", -5, 5, 0.1).name("White Light posZ");

    // Yellow Light
    yellowLightFolder?.add(this.yellowLight, "intensity", 0, 10, 0.1).name("Yellow Light Intensity");
    yellowLightFolder?.add(this.yellowLight.position, "x", -5, 5, 0.1).name("Yellow Light posX");
    yellowLightFolder?.add(this.yellowLight.position, "y", -5, 5, 0.1).name("Yellow Light posY");
    yellowLightFolder?.add(this.yellowLight.position, "z", -5, 5, 0.1).name("Yellow Light posZ");

    // Red Light
    redLightFolder?.add(this.redLight, "intensity", 0, 10, 0.1).name("Red Light Intensity");
    redLightFolder?.add(this.redLight.position, "x", -5, 5, 0.1).name("Red Light posX");
    redLightFolder?.add(this.redLight.position, "y", -5, 5, 0.1).name("Red Light posY");
    redLightFolder?.add(this.redLight.position, "z", -5, 5, 0.1).name("Red Light posZ");
  }
}
