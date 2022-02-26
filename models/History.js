import mongoose from 'mongoose';

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
global.models = global.models || {};

global.models.History =
  global.models.History ||
  mongoose.model('History', {
    id: { type: Number, required: true },
    title: { type: String, required: true },
    date: { type: Date, default: Date.now },
  });

export default global.models.History;
