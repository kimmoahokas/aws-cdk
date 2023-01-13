import { App, Duration, RemovalPolicy, Stack } from '@aws-cdk/core';
import { Bucket, StorageClass, TransitionTime } from '../lib';

const app = new App();

const stack = new Stack(app, 'aws-cdk-s3');

// Test a lifecycle rule with an expiration DATE
new Bucket(stack, 'MyBucket', {
  lifecycleRules: [
    {
      expirationDate: new Date('2019-10-01'),
    },
    {
      expirationDate: new Date('2019-10-01'),
      objectSizeLessThan: 600,
      objectSizeGreaterThan: 500,
    },
  ],
  removalPolicy: RemovalPolicy.DESTROY,
});

new Bucket(stack, 'AnotherBucket', {
  lifecycleRules: [{
    transitions: [{
      storageClass: StorageClass.GLACIER,
      transitionTime: TransitionTime.after(Duration.days(30)),
    }],
  }],
  removalPolicy: RemovalPolicy.DESTROY,
});

app.synth();
