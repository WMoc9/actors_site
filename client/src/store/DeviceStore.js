import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: "Холодильник" },
      {
        id: 2,
        name: "Смартфоны",
      },
    ];
    this._brands = [
      { id: 1, name: "samsung" },
      { id: 2, name: "apple" },
    ];
    this._devices = [
      {
        id: 1,
        name: "Iphone 12",
        price: 25000,
        rating: 5,
        img: "https://www.ixbt.com/img/n1/news/2020/10/6/350b65ba5ec345d5a37605326f517716_large.jpg",
      },
      {
        id: 2,
        name: "Iphone 10",
        price: 25000,
        rating: 5,
        img: "https://www.ixbt.com/img/n1/news/2020/10/6/350b65ba5ec345d5a37605326f517716_large.jpg",
      },
      {
        id: 3,
        name: "Iphone 11",
        price: 25000,
        rating: 5,
        img: "https://www.ixbt.com/img/n1/news/2020/10/6/350b65ba5ec345d5a37605326f517716_large.jpg",
      },
      {
        id: 4,
        name: "Iphone 13",
        price: 25000,
        rating: 5,
        img: "https://www.ixbt.com/img/n1/news/2020/10/6/350b65ba5ec345d5a37605326f517716_large.jpg",
      },
    ];
    makeAutoObservable(this);
  }
  setTypes(types) {
    this._types = types;
  }

  setBrands(brands) {
    this._brands = brands;
  }

  setDevices(devices) {
    this._devices = devices;
  }

  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get devices() {
    return this.devices;
  }
}
