import {
  S3Client,
  GetObjectCommand,
    CreateBucketCommand,
  ListBucketsCommand,
  ListObjectsCommand,
} from "@aws-sdk/client-s3";
import _ from "lodash";

export default class S3 {
  s3Client: S3Client;
  bucketName: string;

  constructor() {
    this.bucketName = 'arrd';
    this.s3Client = new S3Client({
      region: process.env.S3_REGION,
      credentials: {
        accessKeyId: process.env.S3_KEY,
        secretAccessKey: process.env.S3_PRIVATE,
      },
      endpoint: process.env.S3_ENDPOINT,
    });
  }

  async findOrCreateBucket(): Promise<string> {
    const Name = this.bucketName;
    try {
      const { Buckets } = await this.s3Client.send(new ListBucketsCommand({}));
      const bucketIsExist = _.find(Buckets, { Name });
      if (!bucketIsExist) {
       await this.s3Client.send(new CreateBucketCommand({ Bucket: Name}));
      }

    } catch (e) {
      throw new Error(e);
    }
    return Name;
  }

  async get(Key: string) {
    try {
      const Bucket= await this.findOrCreateBucket();
       await this.s3Client.send(
        new GetObjectCommand({
          Bucket,
          Key,
        })
      );
      return `${process.env.S3_PUBLIC_ENDPOINT}/${Key}`;
    } catch (e) {
      return undefined;
    }
  }

  async fetchAll(Prefix:string){
    try {
      const Bucket= await this.findOrCreateBucket();
      const {Contents} =  await this.s3Client.send(
        new ListObjectsCommand({
          Bucket,
          Prefix
        })
      );

      return _.chain(Contents).filter(o=>o.Size !== 0).map(it=>it.Key).value()
    } catch (e) {
      return undefined;
    }
  }
}
