

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.nextNode) {
                current = current.nextNode;
            }
            current.nextNode = newNode;
        }
    }

    prepend(value) {
        const newNode = new Node(value, this.head);
        this.head = newNode;
    }

    size() {
        let count = 0;
        let current = this.head;

        while (current) {
            count++;
            current = current.nextNode;
        }

        return count;
    }

    head() {
        return this.head;
    }

    tail() {
        let current = this.head;

        while (current && current.nextNode) {
            current = current.nextNode;
        }

        return current;
    }

    at(index) {
        let count = 0;
        let current = this.head;

        while (current) {
            if (count === index) {
                return current;
            }
            count++;
            current = current.nextNode;
        }

        return null;
    }

    pop() {
        if (!this.head) {
            return null;
        }

        if (!this.head.nextNode) {
            const poppedNode = this.head;
            this.head = null;
            return poppedNode;
        }

        let current = this.head;
        let previous = null;

        while (current.nextNode) {
            previous = current;
            current = current.nextNode;
        }

        previous.nextNode = null;
        return current;
    }

    contains(value) {
        let current = this.head;

        while (current) {
            if (current.value === value) {
                return true;
            }
            current = current.nextNode;
        }

        return false;
    }

    find(value) {
        let index = 0;
        let current = this.head;

        while (current) {
            if (current.value === value) {
                return index;
            }
            index++;
            current = current.nextNode;
        }

        return null;
    }

    toString() {
        let result = '';
        let current = this.head;

        while (current) {
            result += `(${current.value}) -> `;
            current = current.nextNode;
        }

        result += 'null';
        return result;
    }

    insertAt(value, index) {
        if (index === 0) {
            this.prepend(value);
            return;
        }

        const newNode = new Node(value);
        let count = 0;
        let current = this.head;
        let previous = null;

        while (current && count < index) {
            previous = current;
            current = current.nextNode;
            count++;
        }

        if (count === index) {
            previous.nextNode = newNode;
            newNode.nextNode = current;
        } else {
            console.error("Index out of bounds");
        }
    }

    removeAt(index) {
        if (index === 0) {
            this.head = this.head.nextNode;
            return;
        }

        let count = 0;
        let current = this.head;
        let previous = null;

        while (current && count < index) {
            previous = current;
            current = current.nextNode;
            count++;
        }

        if (count === index && current) {
            previous.nextNode = current.nextNode;
        } else {
            console.error("Index out of bounds");
        }
    }
}

// Example usage
const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.prepend(0);
linkedList.insertAt(1.5, 2);
linkedList.removeAt(3);

console.log(linkedList.toString());
// Output: (0) -> (1) -> (1.5) -> (2) -> null
