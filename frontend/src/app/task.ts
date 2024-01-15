class Task {

    //Readonly properties
    private _id: number;
    private _name: string;
    private _status: string;

    // Constructor
    constructor(id?: number, name?: string, status?: string) {
        this._id = id !== undefined ? id : 0;
        this._name = name !== undefined ? name : "";
        this._status = status !== undefined ? status : "";
    }

    // Id setter
    setId(newId: number): void {
        this._id = newId;
    }

    // Id getter
    getId(): number {
        return this._id;
    }

    // name setter
    setName(newName: string): void {
        this._name = newName;
    }

    // name getter
    getName(): string {
        return this._name;
    }

    //status setter
    setStatus(newStatus: string): void {
        this._status = newStatus;
    }

    //status getter
    getStatus(): string {
        return this._status;
    }
}