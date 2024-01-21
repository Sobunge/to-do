export class Message {
    public message: string;
    public status: string;

    constructor(m?: string, s?: string) {
        if (m && s) {
            this.message = m;
            this.status = s;
        } else {
            this.message = '';
            this.status = '';
        }
    }
}