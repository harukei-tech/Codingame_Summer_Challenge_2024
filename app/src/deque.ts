class Node<T> {
    public value: T;
    public prev: Node<T> | null;
    public next: Node<T> | null;

    constructor(value: T) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

export class Deque<T> {
    private head: Node<T> | null = null;
    private tail: Node<T> | null = null;
    private length = 0;

    public append(value: T): void {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail!.next = node;
            this.tail = node;
        }
        this.length++;
    }

    public appendleft(value: T): void {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head!.prev = node;
            this.head = node;
        }
        this.length++;
    }

    public pop(): T | null {
        if (!this.tail) {
            return null;
        }
        const node = this.tail;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = node.prev;
            this.tail!.next = null;
            node.prev = null;
        }
        this.length--;
        return node.value;
    }

    public popleft(): T | null {
        if (!this.head) {
            return null;
        }
        const node = this.head;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = node.next;
            this.head!.prev = null;
            node.next = null;
        }
        this.length--;
        return node.value;
    }

    public getLength(): number {
        return this.length;
    }

    public toArray(): T[] {
        const result: T[] = [];
        let current = this.head;
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        return result;
    }
}