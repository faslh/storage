export interface StorageAdapter {
  list(): any;
  exists(options: { fileName: string }): any;
  delete(options: { fileName: string }): any;
  create(): any;
}

export class FileManager implements StorageAdapter {
  private _adapter: StorageAdapter;
  constructor({ adapter }: { adapter: StorageAdapter }) {
    this._adapter = adapter;
  }
  exists(options: { fileName: string }) {
    throw new Error('Method not implemented.');
  }
  delete(options: { fileName: string }) {
    throw new Error('Method not implemented.');
  }
  create() {
    throw new Error('Method not implemented.');
  }

  list() {
    return this._adapter.list();
  }
}
