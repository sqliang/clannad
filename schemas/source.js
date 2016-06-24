import {Schema} from 'mongoose';
import Tools from './../services/tools';

const SourceSchema = new Schema({
  collection: {
    type: Schema.Types.ObjectId,
    ref: 'Collection',
    required: true
  },
  data: Object
});

Tools.dealSchema(SourceSchema);

export default mongoose.model('Source', SourceSchema);
