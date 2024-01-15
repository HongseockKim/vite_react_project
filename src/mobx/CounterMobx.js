import {action, computed, flow, makeObservable, observable} from "mobx";

class CounterMobx {
    value

    constructor(value) {
        makeObservable(this, {
            value: observable,
            double: computed,
            increment: action,
            fetch: flow
        });
        this.value = value
    }

    get double() {
        return this.value * 2
    }

    increment() {
        this.value++
    }

    *fetch() {
        const response = yield fetch("/api/value")
        this.value = response.json()
    }
}

export const counterMobx = new CounterMobx(0);