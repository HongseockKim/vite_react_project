import {makeObservable, observable} from "mobx";

class MenuMobx {
    isOpen

    constructor(value) {
        makeObservable(this, {
            isOpen: observable,
        });
        this.isOpen = value
    }

    get double() {
        return this.isOpen = !this.isOpen
    }

}

export const MenuMobxRequest = new MenuMobx(false);