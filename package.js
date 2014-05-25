Package.describe({
  summary: "An HTML5 audio recording package"
});

Package.on_use(function (api, where) {
  api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');

  api.add_files(['main.js', 'audiodisplay.js', 'recorderjs/recorder.js', 'recorderjs/recorderWorker.js'], 'client');

  if (api.export) 
    api.export('Errors');
});