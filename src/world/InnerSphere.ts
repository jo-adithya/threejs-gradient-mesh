import * as THREE from "three";

import { CustomMesh } from "@app/interfaces";

export class InnerSphere extends CustomMesh {
  setGeometry(): void {
    this.geometry = new THREE.IcosahedronGeometry(2, 1);
  }

  setMaterial(): void {
    this.material = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      flatShading: true,
    });
  }

  update() {
    this.rotation.x += 0.002;
    this.rotation.y += 0.002;
    this.rotation.z += 0.002;
  }
}
