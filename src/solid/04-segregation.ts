
interface Bird {
    eat(): void;
}

interface FlyingBird {
    fly(): void;
}

interface WalkingBird {
    walk(): void;
}

interface SwimmingBird {
    swim(): void;
}

class Tucan implements Bird, FlyingBird, WalkingBird {
    fly(): void { }

    eat(): void { }

    walk(): void { }
}

class Hummingbird implements Bird, FlyingBird {
    fly(): void { }

    eat(): void { }
}

class Ostrich implements Bird, WalkingBird {
    eat(): void { }

    walk(): void { }
}

class Penguin implements Bird, WalkingBird, SwimmingBird {
    eat(): void { }

    walk(): void { }

    swim(): void { }
}