class HashTable {
  constructor(size = 7) {
    this.dataMap = new Array(size);
  }

  _hash(key) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
    }

    return hash;
  }

  set(key, value) {
    const obj = { key, value };
    const index = this._hash(key);

    if (!this.dataMap[index]) {
      this.dataMap[index] = [];
    }

    this.dataMap[index].push(obj);
  }

  get(key) {
    const index = this._hash(key);

    if (this.dataMap[index]) {
      for (let i = 0; i < this.dataMap[index].length; i++) {
        if (this.dataMap[index][i].key === key) {
          return this.dataMap[index][i];
        }
      }
    }

    return null;
  }

  keys() {
    const result = [];

    for (let i = 0; i < this.dataMap.length; i++) {
      if (this.dataMap[i]) {
        for (let j = 0; j < this.dataMap[i].length; j++) {
          result.push(this.dataMap[i][j].key);
        }
      }
    }

    return result;
  }
}

const ht = new HashTable();
ht.set("bolts", 1400);
ht.set("washers", 50);
ht.set("lumber", 70);

console.log(ht.keys());
