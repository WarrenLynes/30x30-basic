module.exports = {
  name: 'mdv1',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/mdv1',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
