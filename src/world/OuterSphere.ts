import * as THREE from "three";

import { CustomMesh } from "@app/interfaces";

export class OuterSphere extends CustomMesh {
  setGeometry() {
    this.geometry = new THREE.IcosahedronGeometry(3, 2);
  }

  setMaterial() {
    this.material = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      wireframe: true,
      wireframeLinewidth: 10,
    });
  }

  update() {
    this.rotation.x -= 0.003;
    this.rotation.y -= 0.003;
    this.rotation.z -= 0.003;
  }
}
