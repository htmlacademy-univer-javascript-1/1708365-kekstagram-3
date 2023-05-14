import './data.js';
import './render.js';
import './util.js';

import './form.js';
import './form-validation.js';
import './scaling.js';
import './effect.js';
import {createPosts} from './data.js';
import {renderThumbnails} from './render.js';

renderThumbnails(createPosts(25));
