import { StorageAdapter } from '@faslh/storage';
import { Bucket, Storage } from '@google-cloud/storage';

export class GoogleCloudStorageAdapter implements StorageAdapter {
  private _storage: Storage;
  private _bucket: Bucket;

  constructor({
    bucket,
    serviceAccount,
  }: {
    serviceAccount: string;
    bucket: string;
  }) {
    this._storage = new Storage({ keyFile: serviceAccount });
    this._bucket = this._storage.bucket(bucket);
  }

  list() {
    return this._bucket.getFiles();
  }

  create() {
    return this._bucket.create({});
  }

  delete(options: { fileName: string }) {
    return this._bucket.file(options.fileName).delete({});
  }

  exists(options: { fileName: string }) {
    return this._bucket.file(options.fileName).exists({});
  }
}
