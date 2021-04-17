export class Stage {
  #next = this;
  getNext() {
    return this.#next;
  }
  setNext(stage) {
    this.#next = stage;
  }
  onComplete() {
    alert("complete");
  }
  update(deltaTime) {}
}
