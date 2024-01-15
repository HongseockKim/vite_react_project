import {action, makeObservable, observable} from "mobx";

class CommonMobx {
    isOpen

    constructor(value) {
        makeObservable(this, {
            isOpen: observable,
            handleMenuOpen: action
        });
        this.isOpen = value
        this.handleMenuOpen = this.handleMenuOpen.bind(this);
    }

    handleMenuOpen() {
        return this.isOpen = !this.isOpen
    }

}

export const CommonMobxRequest = new CommonMobx(false);