import { Experience } from "Experience";

import { CustomMesh } from "@app/interfaces";

import { Environment } from "./Environment";
import { InnerSphere } from "./InnerSphere";
import { OuterSphere } from "./OuterSphere";

export class World {
  private readonly experience = Experience.getInstance();
  private readonly resourceManager = this.experience.resourceManager;
  private readonly meshes: CustomMesh[] = [];

  constructor() {
    if (this.resourceManager.ready) {
      this.initializeWorld();
    } else {
      this.resourceManager.once("ready", this.initializeWorld.bind(this));
    }
  }

  initializeWorld() {
    new Environment();
    const meshes = [new InnerSphere(), new OuterSphere()];
    this.meshes.push(...meshes);
  }

  update() {
    // Update all objects in the world
    this.meshes.forEach((mesh) => mesh.update());
  }
}
